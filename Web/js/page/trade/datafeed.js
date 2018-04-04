/*
 This class implements interaction with UDF-compatible datafeed.

 See UDF protocol reference at
 https://github.com/tradingview/charting_library/wiki/UDF
 */
var Datafeeds = {}
;(function (space) {
    'use strict'

    var floatNum = space.floatNum

    Datafeeds.UDFCompatibleDatafeed = function (datafeedURL) {
        this._datafeedURL = datafeedURL
        this._configuration = undefined

        this._symbolSearch = null
        this._symbolsStorage = null
        this._barsPulseUpdater = new Datafeeds.DataPulseUpdater(this, 5000) // 5秒

        this._quotesPulseUpdater = new Datafeeds.QuotesPulseUpdater(this)

        this._enableLogging = false
        this._initializationFinished = false
        this._callbacks = {}

        this._initialize()
    }


    Datafeeds.UDFCompatibleDatafeed.prototype.on = function (event, callback) {
        if (!Object.prototype.hasOwnProperty.call(this._callbacks, event)) {
            this._callbacks[event] = []
        }

        this._callbacks[event].push(callback)
        return this
    }

    Datafeeds.UDFCompatibleDatafeed.prototype._fireEvent = function (event, argument) {
        if (Object.prototype.hasOwnProperty.call(this._callbacks, event)) {
            var callbacksChain = this._callbacks[event]
            for (var i = 0; i < callbacksChain.length; ++i) {
                callbacksChain[i](argument)
            }

            this._callbacks[event] = []
        }
    }

    Datafeeds.UDFCompatibleDatafeed.prototype.onInitialized = function () {
        this._initializationFinished = true
        this._fireEvent('initialized')
    }

    Datafeeds.UDFCompatibleDatafeed.prototype._logMessage = function (message) {
        if (this._enableLogging) {
            var now = new Date()
            console.log(now.toLocaleTimeString() + '.' + now.getMilliseconds() + '> ' + message)
        }
    }


    Datafeeds.UDFCompatibleDatafeed.prototype._initialize = function () {
        var that = this
        that._setupWithConfiguration({
            supports_marks: false,
            supports_timescale_marks: true,
            supports_time: false,
            symbols_types: [1],
            supports_search: true,
            supports_group_request: false,
        })
    }

    Datafeeds.UDFCompatibleDatafeed.prototype.onReady = function (callback) {
        var that = this
        if (this._configuration) {
            setTimeout(function () {
                callback(that._configuration)
            }, 0)
        } else {
            this.on('configuration_ready', function () {
                callback(that._configuration)
            })
        }
    }

    Datafeeds.UDFCompatibleDatafeed.prototype._setupWithConfiguration = function (configurationData) {
        this._configuration = configurationData
        if (!configurationData.exchanges) {
            configurationData.exchanges = []
        }

        // @obsolete; remove in 1.5
        var supportedResolutions = configurationData.supported_resolutions || configurationData.supportedResolutions
        configurationData.supported_resolutions = supportedResolutions

        // @obsolete; remove in 1.5
        var symbolsTypes = configurationData.symbols_types || configurationData.symbolsTypes
        configurationData.symbols_types = symbolsTypes

        if (!configurationData.supports_search && !configurationData.supports_group_request) {
            throw new Error('Unsupported datafeed configuration. Must either support search, or support group request')
        }

        if (!configurationData.supports_search) {
            this._symbolSearch = new Datafeeds.SymbolSearchComponent(this)
        }

        if (configurationData.supports_group_request) {
            // this component will call onInitialized() by itself
            this._symbolsStorage = new Datafeeds.SymbolsStorage(this)
        } else {
            this.onInitialized()
        }

        this._fireEvent('configuration_ready')
        this._logMessage('Initialized with ' + JSON.stringify(configurationData))
    }

    Datafeeds.UDFCompatibleDatafeed.prototype.resolveSymbol = function (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
        var that = this

        if (!this._initializationFinished) {
            this.on('initialized', function () {
                that.resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback)
            })

            return
        }

        var resolveRequestStartTime = Date.now()
        that._logMessage('Resolve requested')

        function onResultReady(data) {
            that._logMessage('Symbol resolved: ' + (Date.now() - resolveRequestStartTime))

            onSymbolResolvedCallback(data)
        }
        var data = {
            name: space.coinName,
            ticker: space.coinName,
            minmov: 1,
            minmov2: 0,
            pricescale: Math.pow(10, space.pricePrecis),
            volume_precision: 0,
            has_intraday: true,
            has_seconds: true,
            has_weekly_and_monthly: false,
            supported_resolutions: space.intervals,
            intraday_multipliers: ['1'],
            session: '24x7',
            timezone: space.getTimezoneName(),
        }
        if (!this._configuration.supports_group_request) {
            onResultReady(data)
        } else if (this._initializationFinished) {
            this._symbolsStorage.resolveSymbol(symbolName, onResultReady, onResolveErrorCallback)
        } else {
            this.on('initialized', function () {
                that._symbolsStorage.resolveSymbol(symbolName, onResultReady, onResolveErrorCallback)
            })
        }
    }
    var noData = false // 是否还有更多数据
    var noDataTimeout // 定时器设置noData
    var chartLast = {} // 最后一根k线
    function kRefresh(onDataCallback) {
        util.comAjax({
            url: space.apiUrl + '2010',
            data: {
                Hours: 0,
                Type: space.tradeType,
                CurrencyId: space.coinId,
                Seconds: space.time,
            },
        }).done(function (res) {
            if (res.ReturnCode != 1000 || !res.Data) {
                onDataCallback([], { noData: true, nextTime: null })
                return
            }
            try {
                var kNew = res.Data.New,
                    kLast = res.Data.Last

                var bars = [],
                    lastTime = chartLast.time

                kNew.KLineTime *= 1000
                kLast.KLineTime *= 1000
                if (space.timeChange) {
                    return
                }
                // 最新k线图
                if ((kNew.KLineTime - lastTime) >= (space.time * 1000)) {
                    var temp = {
                        time: (lastTime + (space.time * 1000)),
                        open: floatNum(kLast.LastPrice, space.pricePrecis) * 1,
                        close: floatNum(kLast.LastPrice, space.pricePrecis) * 1,
                        high: floatNum(kLast.LastPrice, space.pricePrecis) * 1,
                        low: floatNum(kLast.LastPrice, space.pricePrecis) * 1,
                        volume: Math.ceil(kLast.TradingVolumn * 1 || 0),
                    }
                    bars.push(chartLast)
                    bars.push(temp)
                    chartLast = temp
                    onDataCallback(bars, { noData: noData, nextTime: null })
                    return
                }

                // 最后成交价无值时
                if (kNew.LastPrice * 1 <= 0) {
                    onDataCallback(bars, { noData: noData, nextTime: null })
                    return
                }
                chartLast.close = kNew.LastPrice

                // 最小价为0时
                if (kNew.MinPrice * 1 <= 0) {
                    kNew.MinPrice = chartLast.low
                }

                if (kNew.LastPrice * 1 > kNew.MaxPrice * 1) {
                    kNew.MaxPrice = kNew.LastPrice
                }
                if (kNew.LastPrice * 1 < kNew.MinPrice * 1) {
                    kNew.MinPrice = kNew.LastPrice
                }

                // 最小价小于旧值时
                if (kNew.MinPrice * 1 < chartLast.low * 1) {
                    chartLast.low = kNew.MinPrice
                } else {
                    kNew.MinPrice = chartLast.low
                }

                // 最大价大于旧值时
                if ((chartLast.high * 1) < kNew.MaxPrice * 1) {
                    chartLast.high = kNew.MaxPrice
                } else {
                    kNew.MaxPrice = chartLast.high
                }

                // 成交量小于旧值时
                if ((chartLast.volume * 1) < kNew.TradingVolumn * 1) {
                    chartLast.volume = kNew.TradingVolumn
                } else {
                    kNew.TradingVolumn = chartLast.volume
                }
                bars.push({
                    time: lastTime,
                    open: floatNum(kNew.FirstPrice, space.pricePrecis) * 1,
                    close: floatNum(kNew.LastPrice, space.pricePrecis) * 1,
                    high: floatNum(kNew.MaxPrice, space.pricePrecis) * 1,
                    low: floatNum(kNew.MinPrice, space.pricePrecis) * 1,
                    volume: Math.ceil(kNew.TradingVolumn * 1 || 0) * 1,
                })
                onDataCallback(bars, { noData: noData, nextTime: null })
            } catch (e) {
                onDataCallback([], { noData: true, nextTime: null })
            }
        })
    }

    space.timeChange = true // 是否为时间刚切换状态
    var oldTime = +new Date()
    var pageIndex = 0
    var ajaxLoading = false // 请求中
    var nextStatus = true // 标记 k线图是否可以进行请求
    var winLoad = false // 页面加载成功
    var endTime = 0 // k线第一条时间
    space.historyStatus = false // 标记历史数据是否加载过
    $(window).on('load', function () {
        winLoad = true
    })
    Datafeeds.UDFCompatibleDatafeed.prototype.getBars = function (symbolInfo, resolution, rangeStartDate, rangeEndDate, onDataCallback) {
        // console.log(util.dateParse(rangeStartDate*1000, 'yyyy-MM-dd HH:mm:ss'), util.dateParse(rangeEndDate*1000, 'yyyy-MM-dd HH:mm:ss'))
        var isTimeout = (rangeEndDate - rangeStartDate) < space.time * 2 // 是否为定时器
        // console.log((rangeEndDate - rangeStartDate))
        var nowTime = +new Date()
        var noDataTime = 5000

        // 切换时间
        if (space.timeChange) {
            // console.log('changeTime', ajaxLoading)
            noData = false
            pageIndex = 0
            endTime = 0
            nextStatus = true
            ajaxLoading = true
        }
        // 拖动刷新数据
        if (space.time === space.oldTime && !isTimeout && !ajaxLoading && (winLoad || nowTime - oldTime > 2000)) {
            // console.log('update')
            pageIndex += 1
            nextStatus = true
            ajaxLoading = true
        }

        // 无数据时
        if (space.time === space.oldTime && noData) {
            nextStatus = false
            noDataTime = 0
        }
        clearTimeout(noDataTimeout)
        if (space.timeChange || nextStatus) {
            space.timeChange = false
            util.comAjax({
                url: space.apiUrl + '1160',
                tab: 'kLine',
                data: {
                    Hours: space.hours,
                    Type: space.tradeType,
                    CurrencyId: space.coinId,
                    Seconds: space.time,
                    PageIndex: pageIndex,
                    EndTime: endTime,
                },
            }).done(function (res) {
                ajaxLoading = false
                if (res.ReturnCode !== 1000 || !res.Data || res.Data == '') {
                    onDataCallback([], { noData: true, nextTime: null })
                    return
                }

                var data = res.Data
                var bars = []
                data.forEach(function (item) {
                    if (item[1] > 0) {
                        var barValue = {
                            time: item[0] * 1000,
                            open: floatNum(item[1], space.pricePrecis) * 1,
                            close: floatNum(item[2], space.pricePrecis) * 1,
                            high: floatNum(item[3], space.pricePrecis) * 1,
                            low: floatNum(item[4], space.pricePrecis) * 1,
                            volume: Math.ceil(item[5] * 1 || 0),
                        }
                        bars.push(barValue)
                    }
                })
                var barsCount = bars.length
                noData = (barsCount < 120)
                if (space.oldTime !== space.time && pageIndex === 0 && barsCount > 0) {
                    chartLast = bars[barsCount - 1]
                }
                if (barsCount > 0) {
                    endTime = (bars[0].time / 1000)
                }
                space.oldTime = space.time
                onDataCallback(bars, { noData: noData, nextTime: null })
                /*
                if (noData) {
                    noDataTimeout = setTimeout(function () {
                        onDataCallback([], { noData: noData, nextTime: null })
                    }, 100)
                }*/
            }).fail(function () {
                nextStatus = true
                pageIndex -= 1

                ajaxLoading = false
                onDataCallback([], { noData: true, nextTime: null })
            })
        } else {
            noDataTimeout = setTimeout(function () {
                onDataCallback([], { noData: noData, nextTime: null })
            }, noDataTime)
        }

        // 防止请求过快
        if (!nextStatus && (nowTime - oldTime >= 5000) && space.time === space.oldTime) {
            kRefresh(onDataCallback)
        }

        nextStatus = false
        oldTime = nowTime
    }

    space.subscribeBars = {}
    Datafeeds.UDFCompatibleDatafeed.prototype.subscribeBars = function (symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback) {
        space.subscribeBars.symbolInfo = symbolInfo
        symbolInfo.expiration_date = parseInt(+new Date() / 500, 10)
        space.subscribeBars.listenerGUID = listenerGUID
        space.subscribeBars.onRealtimeCallback = onRealtimeCallback
        space.subscribeBars.onResetCacheNeededCallback = onResetCacheNeededCallback
        this._barsPulseUpdater.subscribeDataListener(symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback)
    }

    Datafeeds.UDFCompatibleDatafeed.prototype.unsubscribeBars = function (listenerGUID) {
        this._barsPulseUpdater.unsubscribeDataListener(listenerGUID)
    }

    Datafeeds.UDFCompatibleDatafeed.prototype.calculateHistoryDepth = function (/* period, resolutionBack, intervalBack */) {
    }


    Datafeeds.UDFCompatibleDatafeed.prototype.subscribeQuotes = function (symbols, fastSymbols, onRealtimeCallback, listenerGUID) {
        this._quotesPulseUpdater.subscribeDataListener(symbols, fastSymbols, onRealtimeCallback, listenerGUID)
    }

    Datafeeds.UDFCompatibleDatafeed.prototype.unsubscribeQuotes = function (listenerGUID) {
        this._quotesPulseUpdater.unsubscribeDataListener(listenerGUID)
    }


    /*
     It's a symbol storage component for ExternalDatafeed. This component can
     * interact to UDF-compatible datafeed which supports whole group info requesting
     * do symbol resolving -- return symbol info by its name
     */
    Datafeeds.SymbolsStorage = function (datafeed) {
        this._datafeed = datafeed
        this._exchangesList = []
        this._exchangesWaitingForData = {}
        this._exchangesDataCache = {}

        this._symbolsInfo = {

        }
        this._symbolsList = []

        this._requestFullSymbols()
    }

    Datafeeds.SymbolsStorage.prototype._requestFullSymbols = function () {

    }

    Datafeeds.SymbolsStorage.prototype._onExchangeDataReceived = function (/* exchangeName, data*/) {

    }

    Datafeeds.SymbolsStorage.prototype._onAnyExchangeResponseReceived = function (exchangeName) {
        delete this._exchangesWaitingForData[exchangeName]

        var allDataReady = Object.keys(this._exchangesWaitingForData).length === 0

        if (allDataReady) {
            this._symbolsList.sort()
            this._datafeed._logMessage('All exchanges data ready')
            this._datafeed.onInitialized()
        }
    }

    // BEWARE: this function does not consider symbol's exchange
    Datafeeds.SymbolsStorage.prototype.resolveSymbol = function (symbolName, onSymbolResolvedCallback) {
        var that = this
        setTimeout(function () {
            onSymbolResolvedCallback(that._symbolsInfo[symbolName])
        }, 0)
    }

    /*
     It's a symbol search component for ExternalDatafeed. This component can do symbol search only.
     This component strongly depends on SymbolsDataStorage and cannot work without it. Maybe, it would be
     better to merge it to SymbolsDataStorage.
     */

    Datafeeds.SymbolSearchComponent = function (datafeed) {
        this._datafeed = datafeed
    }

    /*
     This is a pulse updating components for ExternalDatafeed. They emulates realtime updates with periodic requests.
     */

    Datafeeds.DataPulseUpdater = function (datafeed, updateFrequency) {
        this._datafeed = datafeed
        this._subscribers = {}

        this._requestsPending = 0
        var that = this

        space.updateBars = function () {
            for (var listenerGUID in that._subscribers) {
                var subscriptionRecord = that._subscribers[listenerGUID]
                var resolution = subscriptionRecord.resolution

                var datesRangeRight = parseInt((new Date().valueOf()) / 1000, 10)

                // BEWARE: please note we really need 2 bars, not the only last one
                // see the explanation below. `10` is the `large enough` value to work around holidays
                var datesRangeLeft = datesRangeRight - space.time
                that._requestsPending += 1

                ;(function(_subscriptionRecord) { // eslint-disable-line
                    that._datafeed.getBars(_subscriptionRecord.symbolInfo, resolution, datesRangeLeft, datesRangeRight, function (bars) {
                        that._requestsPending -= 1

                        // means the subscription was cancelled while waiting for data
                        if (!Object.prototype.hasOwnProperty.call(that._subscribers, listenerGUID)) {
                            return
                        }


                        if (bars.length === 0) {
                            return
                        }

                        var lastBar = bars[bars.length - 1]
                        if (!isNaN(_subscriptionRecord.lastBarTime) && lastBar.time < _subscriptionRecord.lastBarTime) {
                            return
                        }

                        var subscribers = _subscriptionRecord.listeners

                        var isNewBar = !isNaN(_subscriptionRecord.lastBarTime) && lastBar.time > _subscriptionRecord.lastBarTime

                        if (isNewBar) {
                            if (bars.length < 2) {
                                throw new Error('Not enough bars in history for proper pulse update. Need at least 2.')
                            }

                            var previousBar = bars[bars.length - 2]
                            for (var i = 0; i < subscribers.length; ++i) {
                                subscribers[i](previousBar)
                            }
                        }

                        _subscriptionRecord.lastBarTime = lastBar.time

                        for (var j = 0; j < subscribers.length; ++j) {
                            subscribers[j](lastBar)
                        }
                    },

                        // error
                    function () {
                        that._requestsPending -= 1
                    })
                })(subscriptionRecord)
            }
        }

        var update = function () {
            /*
            if (that._requestsPending > 0) {
                return
            }*/
            space.updateBars()
        }
        setInterval(update, updateFrequency)
    }

    Datafeeds.DataPulseUpdater.prototype.unsubscribeDataListener = function (listenerGUID) {
        this._datafeed._logMessage('Unsubscribing ' + listenerGUID)
        // delete this._subscribers[listenerGUID]
    }

    Datafeeds.DataPulseUpdater.prototype.subscribeDataListener = function (symbolInfo, resolution, newDataCallback, listenerGUID) {
        this._datafeed._logMessage('Subscribing ' + listenerGUID)
        listenerGUID = listenerGUID || 'subscrib'
        if (!Object.prototype.hasOwnProperty.call(this._subscribers, listenerGUID)) {
            this._datafeed._logMessage('_subscribers-true ' + listenerGUID)
            this._subscribers[listenerGUID] = {
                symbolInfo: symbolInfo,
                resolution: resolution,
                lastBarTime: NaN,
                listeners: [],
            }
        }

        this._subscribers[listenerGUID].listeners.push(newDataCallback)
    }

    Datafeeds.QuotesPulseUpdater = function (datafeed) {
        this._datafeed = datafeed
        this._subscribers = {}
        this._updateInterval = 60 * 1000
        this._fastUpdateInterval = 10 * 1000
        this._requestsPending = 0

        // var that = this

        /*
        setInterval(function() {
            that._updateQuotes(function(subscriptionRecord) { return subscriptionRecord.symbols; });
        }, this._updateInterval);

        setInterval(function() {
            that._updateQuotes(function(subscriptionRecord) { return subscriptionRecord.fastSymbols.length > 0 ? subscriptionRecord.fastSymbols : subscriptionRecord.symbols; });
        }, this._fastUpdateInterval);*/
    }

    Datafeeds.QuotesPulseUpdater.prototype.subscribeDataListener = function (symbols, fastSymbols, newDataCallback, listenerGUID) {
        if (!Object.prototype.hasOwnProperty.call(this._subscribers, listenerGUID)) {
            this._subscribers[listenerGUID] = {
                symbols: symbols,
                fastSymbols: fastSymbols,
                listeners: [],
            }
        }

        this._subscribers[listenerGUID].listeners.push(newDataCallback)
    }

    Datafeeds.QuotesPulseUpdater.prototype.unsubscribeDataListener = function (listenerGUID) {
        delete this._subscribers[listenerGUID]
    }

    Datafeeds.QuotesPulseUpdater.prototype._updateQuotes = function (symbolsGetter) {
        if (this._requestsPending > 0) {
            return
        }
        var that = this
        for (var listenerGUID in this._subscribers) {
            this._requestsPending += 1

            var subscriptionRecord = this._subscribers[listenerGUID]
            this._datafeed.getQuotes(symbolsGetter(subscriptionRecord),

                // onDataCallback
                (function(subscribers, guid) { // eslint-disable-line
                    return function (data) {
                        that._requestsPending -= 1

                        // means the subscription was cancelled while waiting for data
                        if (!Object.prototype.hasOwnProperty.call(that._subscribers, guid)) {
                            return
                        }

                        for (var i = 0; i < subscribers.length; ++i) {
                            subscribers[i](data)
                        }
                    }
                }(subscriptionRecord.listeners, listenerGUID)),
                // onErrorCallback
                function () {
                    that._requestsPending -= 1
                })
        }
    }
}(DH))

if (typeof module !== 'undefined' && module && module.exports) {
    module.exports = {
        UDFCompatibleDatafeed: Datafeeds.UDFCompatibleDatafeed,
    }
}
