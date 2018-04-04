/*
 *  tradingview 配置文件
 *  日期：2018/1/23.
 *  作者：Math
 * */
;
(function ($, window, space) {
    'use strict'

    var config = {
        url: 'dark.min.css',
        rise: space.riseColor,
        drop: space.dropColor,
        bg: '#181b2a',
        grid: '#1f2943',
        cross: 'rgba(255, 255, 255, .3)',
        border: 'rgba(78, 91, 133, .7)',
        text: '#7078a1',
        areatop: 'rgba(122, 152, 247, .1)',
        areadown: 'rgba(122, 152, 247, .02)',
        showLegend: true,
    }
    var tools = (function () {
        'use strict'

        var tool = {}
        tool.ls = {
            get: function () {
                var time = util.ls.get('time')
                return time ? time.split('|') : []
            },
            set: function (obj) {
                var chartType = obj.chartType || '1'
                util.ls.set('time', obj.resolution + '|' + chartType)
            },
        }

        tool.getClass = function (obj) {
            var chartType = obj.chartType || '1'
            return 'interval-' + obj.resolution + '-' + chartType
        }

        tool.chartTypeDefault = function (t) {
            return t.toString() === '1'
        }

        return tool
    }())

    var timeFrames = [
        {
            text: space.language.trade.kBtn[1],
            resolution: '1',
            timeType: 'min',
            chartType: 3,
            hours: 2,
        },
        {
            text: '1min',
            resolution: '1',
            timeType: 'min',
            hours: 2,
        },
        {
            text: '3min',
            resolution: '3',
            timeType: 'min',
            hours: 6,
        },
        {
            text: '5min',
            resolution: '5',
            timeType: 'min',
            hours: 10,
        },
        {
            text: '15min',
            resolution: '15',
            timeType: 'min',
            hours: 30,
        },
        {
            text: '30min',
            resolution: '30',
            timeType: 'min',
            hours: 60,
        },
        {
            text: '1hour',
            resolution: '60',
            timeType: 'min',
            hours: 120,
        },
        {
            text: '2hour',
            resolution: '120',
            timeType: 'min',
            hours: 240,
        },
        {
            text: '4hour',
            resolution: '240',
            timeType: 'min',
            hours: 480,
        },
        {
            text: '12hour',
            resolution: '720',
            timeType: 'min',
            hours: 1440,
        },
        {
            text: '1day',
            resolution: '1440',
            timeType: 'day',
            hours: 2880,
        },
        {
            text: '1week',
            resolution: '10080',
            timeType: 'week',
            hours: 20160,
        }]
    var intervals = [],
        hours = {},
        timeTypes = {},
        timeType,
        TradingView = window.TradingView
    timeFrames.forEach(function (item, index) {
        if (index > 0) {
            intervals.push(item.resolution)
            hours[item.resolution] = item.hours
            timeTypes[item.resolution] = item.timeType
        }
    })
    space.intervals = intervals
    var timeArr = tools.ls.get('time')
    var chartTime = timeArr[0] || intervals[3]
    var chartType = timeArr[1] * 1 || 1
    space.chartType = chartType
    space.time = timeCount(chartTime)
    space.hours = hours[chartTime]
    timeType = timeTypes[chartTime]
    var timezone = space.getTimezoneName()

    TradingView.onready(function () {
        var widget = new TradingView.widget({
            autosize: true,
            fullscreen: false,
            debug: false,
            symbol: space.coinName,
            interval: chartTime,
            container_id: 'chartContainer',
            // BEWARE: no trailing slash is expected in feed URL
            datafeed: new window.Datafeeds.UDFCompatibleDatafeed(space.apiUrl),
            library_path: 'Web/charting_library/',
            locale: space.langType,
            timezone: timezone,
            // Regression Trend-related functionality is not implemented yet, so it's hidden for a while
            charts_storage_url: '',
            charts_storage_api_version: '1.1',
            client_id: 'tradingview.com',
            user_id: 'tansj526',
            favorites: {
                intervals: intervals,
                chartTypes: ['Area', 'Line'],
            },
            time_frames: timeFrames.slice(1),
            logo: {
                image: 'images/logo.png',
            },
            overrides: {
                volumePaneSize: 'medium',
                'scalesProperties.lineColor': config.text,
                'scalesProperties.textColor': config.text,
                'scalesProperties.fontSize': 12,
                'paneProperties.topMargin': 10,
                'paneProperties.bottomMargin': 5,
                'paneProperties.background': config.bg,
                'paneProperties.vertGridProperties.color': config.grid,
                'paneProperties.horzGridProperties.color': config.grid,
                'paneProperties.crossHairProperties.color': config.cross,
                'paneProperties.legendProperties.showLegend': !!config.showLegend,
                'paneProperties.legendProperties.showStudyArguments': true,
                'paneProperties.legendProperties.showStudyTitles': true,
                'paneProperties.legendProperties.showStudyValues': true,
                'paneProperties.legendProperties.showSeriesTitle': true,
                'paneProperties.legendProperties.showSeriesOHLC': true,
                'mainSeriesProperties.candleStyle.upColor': config.rise,
                'mainSeriesProperties.candleStyle.downColor': config.drop,
                'mainSeriesProperties.candleStyle.drawWick': true,
                'mainSeriesProperties.candleStyle.drawBorder': true,
                'mainSeriesProperties.candleStyle.borderColor': config.border,
                'mainSeriesProperties.candleStyle.borderUpColor': config.rise,
                'mainSeriesProperties.candleStyle.borderDownColor': config.drop,
                'mainSeriesProperties.candleStyle.wickUpColor': config.rise,
                'mainSeriesProperties.candleStyle.wickDownColor': config.drop,
                'mainSeriesProperties.candleStyle.barColorsOnPrevClose': false,
                'mainSeriesProperties.hollowCandleStyle.upColor': config.rise,
                'mainSeriesProperties.hollowCandleStyle.downColor': config.drop,
                'mainSeriesProperties.hollowCandleStyle.drawWick': true,
                'mainSeriesProperties.hollowCandleStyle.drawBorder': true,
                'mainSeriesProperties.hollowCandleStyle.borderColor': config.border,
                'mainSeriesProperties.hollowCandleStyle.borderUpColor': config.rise,
                'mainSeriesProperties.hollowCandleStyle.borderDownColor': config.drop,
                'mainSeriesProperties.hollowCandleStyle.wickColor': config.line,
                'mainSeriesProperties.haStyle.upColor': config.rise,
                'mainSeriesProperties.haStyle.downColor': config.drop,
                'mainSeriesProperties.haStyle.drawWick': true,
                'mainSeriesProperties.haStyle.drawBorder': true,
                'mainSeriesProperties.haStyle.borderColor': config.border,
                'mainSeriesProperties.haStyle.borderUpColor': config.rise,
                'mainSeriesProperties.haStyle.borderDownColor': config.drop,
                'mainSeriesProperties.haStyle.wickColor': config.border,
                'mainSeriesProperties.haStyle.barColorsOnPrevClose': false,
                'mainSeriesProperties.barStyle.upColor': config.rise,
                'mainSeriesProperties.barStyle.downColor': config.drop,
                'mainSeriesProperties.barStyle.barColorsOnPrevClose': false,
                'mainSeriesProperties.barStyle.dontDrawOpen': false,
                'mainSeriesProperties.lineStyle.color': config.border,
                'mainSeriesProperties.lineStyle.linewidth': 1,
                'mainSeriesProperties.lineStyle.priceSource': 'close',
                'mainSeriesProperties.areaStyle.color1': config.areatop,
                'mainSeriesProperties.areaStyle.color2': config.areadown,
                'mainSeriesProperties.areaStyle.linecolor': config.border,
                'mainSeriesProperties.areaStyle.linewidth': 1,
                'mainSeriesProperties.areaStyle.priceSource': 'close',
                'symbolWatermarkProperties.color': 'rgba(0, 0, 0, 0)',
                'mainSeriesProperties.style': chartType,
            },
            toolbar_bg: 'transparent',
            drawings_access: {
                type: 'black',
                tools: [{
                    name: 'Regression Trend',
                }],
            },
            disabled_features: ['compare_symbol', 'display_market_status', 'go_to_date', 'header_chart_type', 'header_compare', 'header_screenshot', 'header_symbol_search', 'header_undo_redo', 'snapshot_trading_drawings', 'symbol_info', 'use_localstorage_for_settings', 'volume_force_overlay', 'main_series_scale_menu', 'caption_buttons_text_if_possible', 'header_saveload_to_the_right', 'context_menus', 'edit_buttons_in_legend', 'timezone_menu', 'timeframes_toolbar', 'chart_property_page_style', 'move_logo_to_main_pane', 'header_resolutions', 'source_selection_markers', 'link_to_tradingview', 'control_bar'], // left_toolbar
            enabled_features: ['dont_show_boolean_study_arguments', 'hide_last_na_study_output', 'same_data_requery', 'side_toolbar_in_fullscreen_mode', 'hide_left_toolbar_by_default'],
            custom_css_url: config.url,
        })
        widget.onChartReady(function () {
            // console.log(widget)
            onChartReady(widget)
        })
    })

    // 切换时间计算对应秒数
    function timeCount(resolution) {
        var arr = (resolution + '').match(/(0\.\d+|\d+)(\w)?/)
        var num = arr[1]
        resolution = arr[2]
        var time = 0
        if (resolution === 'D') {
            time = num
        } else if (resolution === 'M') {
            time = 31 * num
        } else if (resolution === 'W') {
            time = 7 * num
        } else {
            time = num / 1440 // 24 * 60
        }

        return time * 86400 // 24 * 60 * 60 秒
    }

    function onChartReady(widget) {
        var isFullscreen = false
        var $fullScreen = $('#fullScreen'),
            $chartBox = $('#chartBox'),
            $document = $($chartBox.find('iframe')[0].contentDocument)
        $document.on('click', function (e) {
            var ele = e.target
            if (!ele) {
                return
            }
            if (ele.className.toString().indexOf('fullscreen') === -1 || (!util.pc.ie && !util.pc.isEdge)) {
                return
            }
            if (!isFullscreen) {
                $fullScreen.addClass('full-screen-fixed')
                $chartBox.addClass('on')
                isFullscreen = true
            }
            $document.on('keyup.full', function (ev) {
                var code = ev.keyCode || ev.which
                if (code === 27) {
                    $document.off('keyup.full')
                    $fullScreen.removeClass('full-screen-fixed')
                    $chartBox.removeClass('on')
                    isFullscreen = false
                }
            })
            return false
        })

        widget.maStudies = []
        widget.changingTime = false
        widget.selectedClass = tools.getClass({
            resolution: chartTime,
            chartType: chartType,
        })

        // 创建均线图
        var lineColor = ['#ecefff', '#f1d039', '#5cc6ed'];
        [5, 10, 30].forEach(function (item, index) {
            widget.chart().createStudy('Moving Average', false, false, [item], function (obj) {
                return widget.maStudies.push(obj)
            }, {
                'plot.color.0': lineColor[index],
                'plot.transparency.0': 40,
                'plot.plottype.0': 2,
            })
        })


        // 设置图表显示类型
        var setEntityVisibility = function (obj) {
            return widget.maStudies.forEach(function (item) {
                return widget.chart().setEntityVisibility(item, obj)
            })
        }

        setEntityVisibility(tools.chartTypeDefault(chartType))

        // 时间切换调用方法
        var timeChange = function (obj) {
            var cType = obj.chartType || 1
            space.chartType = cType
            var oldType = widget.chart().chartType()
            var datafeed = space.subscribeBars
            if (!widget.changingTime) {
                space.time = timeCount(obj.resolution)
                space.hours = hours[obj.resolution]
                widget.setSymbol(widget.options.symbol, obj.resolution)
                if (oldType !== cType) {
                    widget.applyOverrides({
                        'mainSeriesProperties.style': cType,
                    })
                }
                setEntityVisibility(tools.chartTypeDefault(cType))
                if (space.time !== space.oldTime) {
                    space.timeChange = true
                    widget.chart().executeActionById('timeScaleReset')
                    widget.chart().executeActionById('chartReset')
                    datafeed.onResetCacheNeededCallback()
                    widget.chart().resetData()
                    space.updateBars()
                }

                widget.selectedClass = tools.getClass({
                    resolution: obj.resolution,
                    chartType: cType,
                })
                widget.changingTime = false
            }
        }

        // 创建时间切换按钮
        var timeBtnStatus = true // 防止点击过快
        var timeBtns = timeFrames.map(function (item) {
            var ele = widget.createButton({
                align: 'left',
            })
                .attr('title', item.text).data('label', tools.getClass(item))
                .toggleClass('selected', (tools.getClass(item) === widget.selectedClass))
                .on('click', function () {
                    if ($(this).hasClass('selected')) {
                        return
                    }
                    if (!timeBtnStatus) {
                        return
                    }
                    timeBtnStatus = false
                    setTimeout(function () {
                        timeBtnStatus = true
                    }, 1000)
                    timeChange(item)
                    timeBtns.forEach(function (btn) {
                        return btn.toggleClass('selected', (btn.data('label') === widget.selectedClass))
                    })
                    tools.ls.set(item)
                })
            ele.append('<span>' + item.text + '</span>')
            return ele
        })

        // 隐藏画图工具
        widget.chart().executeActionById('drawingToolbarAction')
    }
}(jQuery, window, DH))
