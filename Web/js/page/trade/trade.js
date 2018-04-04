/*
 *  交易中心
 *  日期：2017/9/25.
 *  作者：Math
 * */

;
(function (window, document, space) {
    'use strict'

    var nowPage = $('#trade')
    nowPage.addClass('selected').siblings().removeClass('selected')

    var floatNum = space.floatNum

    function Trade() {
        this.init()
    }

    var pro = Trade.prototype

    // 初始化页面
    pro.init = function () {
        this.unit = '₫' // util.ls.get('moneyUnit') || '$'
        space.coinId = this.coinId = util.getUrlParams('coinId') || util.ss.get('firstId') || 2
        space.coinName = this.coinName = util.getUrlParams('coinName') || util.ss.get('firstName').replace('/BTC', '') || 'BTC'
        this.moneyAll = util.getUrlParams('money') || util.ss.get('money') || 22710 // '15267|100000|348656530'; //btc对(美元|人民币|越南盾)汇率
        this.lang = space.language.trade // 语言包数据
        space.tradeType = this.type = $('#type').val() // 0币币交易 1法币交易
        this.typeData = {
            bb: '0',
            fb: '1',
        }
        if (this.type == this.typeData.bb) {
            $('body').html('')
            return
        }
        this.precis = space.setPrecise(this.coinName) // 交易额精确度
        space.pricePrecis = this.pricePrecis = space.setPrecise(this.coinName, 'price') // 输入价格精确度
        this.numInput = 6 // 输入数量精确度
        this.numShow = 9 // 成交数量精确度
        /* if (this.type == this.typeData.fb) {
         this.pricePrecis = 2
         this.precis = 4
         }*/

        this.hours = 0

        this.moneyType()
        this.initDom()

        // 币种切换
        this.exchangeRate() // 获取汇率
        this.moneyChoose() // 钱币切换
        this.bbName() // 币名称显示
        this.fbName() // 币名称显示
        this.floatInfo()
        this.bbType() // 币币交易币种列表

        this.userFee() // 费率

        // 买入卖出操作
        ;(function (self) {
            return new space.BuyInput(self)
        }(this))

        // 卖单,买单
        this.orderList('init')

        // 交易记录
        this.history('init')
        this.historyTime = +new Date()

        // 委托挂单/历史-初始化
        this.userHistoryInit()
        // 委托挂单/历史-获取数据
        this.entrustList()

        // 交易币种列表数据
        this.coinList('init')

        // 实时刷新数据
        var self = this
        if (window.location.host.indexOf('192.168.1.') === -1 || false) {
            setTimeout(function () {
                setInterval(function () {
                    self.floatInfo()
                    self.entrustList()
                }, 5000)
            }, 1000)
            setTimeout(function () {
                setInterval(function () {
                    self.coinList()
                }, 5000)
            }, 2000)
            setTimeout(function () {
                setInterval(function () {
                    self.refreshHistory()
                    self.orderList()
                }, 5000)
            }, 3000)
        }
    }

    // 初始化dom
    pro.initDom = function () {
        this.dom = {
            coinInfo: $('#coinInfo'),
            infoPrice: $('#infoPrice'),
            infoFloat: $('#infoFloat'),
            infoHigh: $('#infoHigh'),
            infoLowest: $('#infoLowest'),
            moneyChoose: $('#moneyChoose'),

            // k线图
            chart: $('#chart'),
            kTag: $('#kTag'),
            kFilter: $('#kFilter'),
            fullScreen: $('#fullScreen'),

            buyPrice: $('#buyPrice'),
            sellOrder: $('#sellOrder'),
            sellPrice: $('#sellPrice'),
            buyOrder: $('#buyOrder'),
            userSellOrder: $('#userSellOrder'),
            userBuyOrder: $('#userBuyOrder'),

            history: $('#history'),
            userNewly: $('#userNewly'),
            userHistory: $('#userHistory'),

            // 市场
            coinList: $('#coinList'), // 交易市场
            titlesTitle: $('#titlesTitle'), // 交易市场标题

            // 委托记录/历史
            tabHistory: $('#tabHistory'), // 页签容器
            noLogin: $('#noLogin'), // 未登录框
            tbody: $('#tbody'), // 数据显示框
            checkMore: $('#checkMore'), // 查看更多按钮

        }
    }
    // 法币交易-币名称填充
    pro.fbName = function () {
        var self = this
        if (self.type == self.typeData.bb) {
            return
        }
        $('.coin-from').html(space.language.common.unitAbbr)
        $('.coin-to').html(self.coinName)
    }

    // 币币交易-币名称填充
    pro.bbName = function () {
        var self = this
        if (self.type == self.typeData.fb) {
            return
        }
        $('.coin-from').html('BTC')
        $('.coin-to').html(self.coinName)
    }

    // 获取汇率
    pro.exchangeRate = function () {
        var self = this
        util.comAjax({
            url: space.apiUrl + '2002',
            data: {},
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data) {
                self.moneyAll = res.Data.USDToVNDExchange // USDToVND
                self.moneyType()
                self.moneyChange()
            }
        })
    }

    // 钱币切换
    pro.moneyChoose = function () {
        var self = this,
            dom = this.dom
        dom.moneyChoose.show()
        dom.moneyChoose.find('em').html(dom.moneyChoose.find('[data-id="' + self.unit + '"]').html())
        dom.moneyChoose.hover(function () {
            dom.moneyChoose.find('ul').stop().fadeIn()
        }, function () {
            dom.moneyChoose.find('ul').stop().fadeOut()
        })
        dom.moneyChoose.on('click', 'li', function () {
            var $this = $(this)
            dom.moneyChoose.find('em').html($this.html())
            dom.moneyChoose.find('ul').fadeOut(300)
            self.unit = $this.data('id')
            util.ls.set('moneyUnit', self.unit)
            self.moneyType()
            self.moneyChange()
        })
    }

    pro.moneyChange = function () {
        var self = this
        $('.js-btc').each(function () {
            var $this = $(this),
                newLight = self.BTC2Money($this.html())
            $this.siblings('.light').replaceWith(newLight)
        })
    }

    // 获取当前币种
    pro.moneyType = function () {
        if (this.type === this.typeData.fb) {
            this.money = this.moneyAll
            return
        }
        var money = this.moneyAll.split('|')
        if (this.unit === '$') {
            this.money = money[0]
        } else if (this.unit === '¥') {
            this.money = money[1]
        } else if (this.unit === '₫') {
            this.money = money[2]
        }
    }

    // bct对换钱币的价格
    pro.BTC2Money = function (number) {
        number *= 1
        if (!number || !this.money) {
            return ''
        }
        var precis = 2
        var val = new Big(number).times(this.money).toString()
        if (val * 1 < 1) {
            precis = 6
        }
        val = floatNum(val, precis) + ''
        var arr = val.split('.')
        val = arr[0].replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
        if (arr[1]) {
            val = val + '.' + arr[1]
        }
        val = '<span class="light">≈' + this.unit + val + '</span>'
        return val
    }

    // 币币交易币种列表
    pro.bbType = function () {
        if (this.type === this.typeData.fb) {
            return
        }
        var self = this
        self.list = util.ss.get('bbType')
        try {
            self.list = JSON.parse(self.list)
        } catch (e) {
            self.list = ''
        }
        if (self.list) {
            return
        }
        util.comAjax({
            url: space.apiUrl + '380',
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data && res.Data != '') {
                self.list = res.Data
                util.ss.set('bbType', JSON.stringify(self.list))
            }
        })
    }

    // 获取涨跌信息
    pro.floatInfo = function () {
        var self = this
        if (self.type == self.typeData.bb) { // 币币交易不显示
            return
        }
        return // 暂时去掉
        /*
         util.comAjax({
         url: space.apiUrl + '350',
         data: {
         CurrencyId: self.coinId,
         },
         }).done(function (res) {
         if (res.ReturnCode == 1000 && res.Data) {
         var data = res.Data
         dom.infoPrice.html(floatNum(data.LastFloat || '0', self.pricePrecis))
         // 涨幅
         var floatClass = ''
         if (data.PriceIncrease > 0) {
         floatClass = 'rise'
         } else if (data.PriceIncrease < 0) {
         floatClass = 'drop'
         }
         if (data.PriceIncrease != 0) {
         data.PriceIncrease = floatNum(data.PriceIncrease, 2) + '%'
         }
         dom.infoFloat.html(data.PriceIncrease || '0').attr('class', 'data ' + floatClass)
         dom.infoHigh.html(floatNum(data.HighFloat || '0', self.pricePrecis))
         dom.infoLowest.html(floatNum(data.LowFloat || '0', self.pricePrecis))
         }
         })*/
    }


    // 获取手续费数据
    pro.userFee = function () {
        util.comAjax({
            url: space.apiUrl + '1860',
            data: {
                MemberId: space.UID,
            },
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data) {
                if (res.Data.BuyerFee) {
                    res.Data.BuyerFee += '%'
                } else {
                    res.Data.BuyerFee = '0'
                }
                $('.buy-fee').html(res.Data.BuyerFee)

                if (res.Data.SellerFee) {
                    res.Data.SellerFee += '%'
                } else {
                    res.Data.SellerFee = '0'
                }
                $('.sell-fee').html(res.Data.SellerFee)
            }
        })
    }

    // 交易币种列表数据
    pro.coinListHtml = function (obj) {
        var floatClass = '',
            self = this
        if (obj.float > 0) { // 涨
            obj.float = '+' + floatNum(obj.float, 2) + '%'
            floatClass = 'rise'
        } else if (obj.float < 0) { // 跌
            obj.float = floatNum(obj.float, 2) + '%'
            floatClass = 'drop'
        }
        var money = self.BTC2Money(obj.price)
        var html
        var priceHtml = '<span class="price">-</span>'
        if (obj.price) {
            priceHtml = '<span class="price js-btc">' + floatNum(obj.price || '', self.pricePrecis) + '</span><br>\
                        ' + money
        }
        html =
            '<li class="list click line-2">\
                <span class="td td-20">' + obj.name + '</span>\
                <span class="td td-30">\
                    <span class="text">' + priceHtml + '</span>\
                </span>\
                <span class="td td-25">' + floatNum(obj.num, self.numShow) + '</span>\
                <span class="td td-25 ' + floatClass + '">' + obj.float + '</span>\
            </li>'

        return $(html).data('store', obj)
    }

    pro.coinList = function (isInit) {
        var self = this,
            dom = this.dom,
            tbody = dom.coinList.find('.tbody'),
            titlesIcon = dom.titlesTitle.find('.titles-icon').eq(0)
        if (isInit) {
            // 交易市场下拉菜单
            dom.titlesTitle.on('click', function (e) {
                e.stopPropagation()
                if (dom.coinList.hasClass('market-hide')) {
                    dom.coinList.removeClass('market-hide')
                    titlesIcon.removeClass('icon-off').addClass('icon-on')
                } else {
                    dom.coinList.addClass('market-hide')
                    titlesIcon.removeClass('icon-on').addClass('icon-off')
                }
            })
            dom.chart.on('mouseenter', function () {
                dom.coinList.addClass('market-hide')
                titlesIcon.removeClass('icon-on').addClass('icon-off')
            })

            $('body').on('click', function (e) {
                if ($(e.target).parents('#coinList').length === 0) {
                    dom.coinList.addClass('market-hide')
                }
            })

            dom.coinList.on('click', '.tbody li', function () {
                var obj = $(this).data('store'),
                    href
                if (obj.type == self.typeData.bb) {
                    var money = obj.BtcExchangeUsd + '|' + obj.BtcExchangeRmb + '|' + obj.BtcExchangeVnd
                    href = 'tradeBB.html?coinId=' + obj.id + '&coinName=' + obj.CurrencyEnShortName.replace('/BTC', '') + '&money=' + money
                } else {
                    href = 'tradeFB.html?coinId=' + obj.id + '&coinName=' + obj.CurrencyEnShortName
                }
                window.location.href = href
            })
        }
        var RType = '0' // 是否刷新走势图 1刷新 0不刷新
        if (self.type == self.typeData.fb) {
            // 法币交易
            util.comAjax({
                url: space.apiUrl + '1670',
                data: {
                    RType: RType,
                    Sorttype: 12, // 排序类型 11-成交价升序，12-成交价降序 ，21-24H成交额升序，22-24H成交额降序，31-24H成交量升序，32-24H成交量降序，41-日涨跌升序，42-日涨跌降序
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000 && res.Data && res.Data != '') {
                    var html = $(document.createDocumentFragment())
                    res.Data.forEach(function (item) {
                        item.type = self.typeData.fb
                        item.id = item.CurrencyId
                        item.name = item.CurrencyEnShortName
                        item.price = item.LastFloat
                        item.num = item.Volume
                        item.float = item.PriceIncrease
                        html.append(self.coinListHtml(item))
                    })
                    tbody.html(html)
                }
            })
        }
        if (self.type == self.typeData.bb) {
            // 币币交易
            util.comAjax({
                url: space.apiUrl + '670',
                data: {
                    RType: RType,
                    Sorttype: '0',
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000 && res.Data && res.Data != '') {
                    var html = $(document.createDocumentFragment())
                    self.moneyAll = res.Data[0].BtcExchangeUsd + '|' + res.Data[0].BtcExchangeRmb + '|' + res.Data[0].BtcExchangeVnd
                    util.ss.set('money', self.moneyAll)
                    self.moneyType()
                    res.Data.forEach(function (item) {
                        item.type = self.typeData.bb
                        item.id = item.ExchangeId
                        item.name = item.CurrencyEnShortName
                        item.price = item.LastFloat
                        item.num = item.Volume
                        item.float = item.PriceIncrease
                        html.append(self.coinListHtml(item))
                        if (self.type == self.typeData.bb && item.id == self.coinId) {
                            space.currentPrice = item.price
                        }
                    })
                    tbody.html(html)
                }
            })
        }
    }

    // 空数据处理
    pro.emptyHtml = function () {
        var html = '<li class="list line-2 list-empty"><span class="td td-100">' + space.language.common.noData + '</span></li>'
        return html
    }
    pro.orderHtml = function (obj, index, type, text) {
        obj = obj || {}
        var self = this
        var typeClass = 'rise'

        /*
        var bgClass = 'rise-btn'
        var scale = ((obj.per || '0') * 100) + '%'
        var typeText = space.language.common.tradeType[obj.Type]*/
        if (type === 'sell') {
            typeClass = 'drop'
            // bgClass = 'drop-btn'
        }
        var money = self.BTC2Money(obj.Price)
        var total = self.BTC2Money(obj.TotalCount)
        index += 1
        var html =
                '<li class="list click line-2">\
                    <span class="td td-15 ' + typeClass + '">' + text + index + '</span>\
                    <span class="td td-30">\
                        <span class="text">\
                            <span class="price js-btc">' + floatNum(obj.Price || '', self.pricePrecis) + '</span><br>\
                            ' + money + '\
                        </span>\
                    </span>\
                    <span class="td td-20">\
                        <span>' + floatNum(obj.Count || '', self.numShow) + '</span>\
                    </span>\
                    <span class="td td-35">\
                        <span class="text">\
                            <span class="total js-btc">' + floatNum(obj.TotalCount || '', self.precis) + '</span><br>\
                            ' + total + '\
                        </span>\
                    </span>\
                </li>'
        return $(html)
    }

    // 订单数据处理
    pro.orderHandle = function (res) {
        var self = this,
            dom = this.dom
        var saleList = res.Data.SaleList || []
        var buyList = res.Data.BuyList || []
        if (saleList == '' && buyList == '') {
            dom.sellOrder.find('ul').html(self.emptyHtml())
            dom.buyOrder.find('ul').html(self.emptyHtml())
            return
        }

        // 卖单
        var list = saleList.slice(0, 5)
        var sellHtml = $(document.createDocumentFragment())
        list.some(function (item, index) {
            if (!list[index] && index > 8) { // 无数据且有滚动条
                return true
            }
            sellHtml.append(self.orderHtml(list[index], index, 'sell', space.language.trade.order.orderSell[1]))
            return false
        })
        if (saleList == '') {
            sellHtml = self.emptyHtml()
        }
        dom.sellOrder.find('ul').html(sellHtml)


        // 买单
        list = buyList.slice(0, 5)
        var buyHtml = $(document.createDocumentFragment())
        list.some(function (item, index) {
            if (!list[index] && index > 8) { // 无数据且有滚动条
                return true
            }
            buyHtml.append(self.orderHtml(list[index], index, 'buy', space.language.trade.order.orderBuy[1]))
            return false
        })
        if (buyList == '') {
            buyHtml = self.emptyHtml()
        }
        dom.buyOrder.find('ul').html(buyHtml)
        return false
    }

    // 买卖订单-5档挂单
    pro.orderList = function (isInit) {
        var self = this,
            dom = this.dom

        if (self.type == self.typeData.fb) {
            // 法币交易
            util.comAjax({
                url: space.apiUrl + '2009',
                data: {
                    CurrencyId: self.coinId,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000 && res.Data) {
                    self.orderHandle(res)
                }
            })
        } else {
            // 币币交易
            util.comAjax({
                url: space.apiUrl + '360',
                data: {
                    ExchangeTypeID: self.coinId,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000 && res.Data) {
                    self.orderHandle(res)
                }
            })
        }
        if (!isInit) {
            return
        }
        dom.sellOrder.find('.tbody').mCustomScrollbar({
            theme: 'dark',
        })
        dom.buyOrder.find('.tbody').mCustomScrollbar({
            theme: 'dark',
        })

        // 操作挂单数据
        dom.sellOrder.on('click', 'li', function () {
            var price = $(this).find('.price').html()
            if (!price || !space.UID) {
                return
            }
            dom.sellPrice.val(price).trigger('input')
            dom.buyPrice.val(price).trigger('input')
        })
        dom.buyOrder.on('click', 'li', function () {
            var price = $(this).find('.price').html()
            if (!price || !space.UID) {
                return
            }
            dom.sellPrice.val(price).trigger('input')
            dom.buyPrice.val(price).trigger('input')
        })
    }

    // 交易记录模板
    pro.historyHtml = function (obj) {
        var self = this
        /*
        var typeClass = 'rise'
        var typeText = space.language.common.tradeType[obj.Type]
        if (obj.Type == 1) { // 0买入 1卖出
            typeClass = 'drop'
        }*/
        var money = self.BTC2Money(obj.Price)
        // var total = self.BTC2Money(obj.TotalAmt)
        var html =
            '<li class="list line-2">\
                <span class="td td-20">' + util.dateParse(obj.CRTime, 'HH:mm:ss') + '</span>\
                <span class="td td-50">\
                    <span class="text">\
                        <span class="price js-btc">' + floatNum(obj.Price || '', self.pricePrecis) + '</span><br>\
                        ' + money + '\
                    </span>\
                </span>\
                <span class="td td-30">' + floatNum(obj.Count, self.numShow) + '</span>\
            </li>'
        return $(html)
    }

    // 交易记录
    pro.history = function (isInit) {
        var self = this,
            dom = this.dom,
            aUrl,
            data

        if (self.type == self.typeData.fb) {
            // 法币交易
            aUrl = space.apiUrl + '1900'
            data = {
                CurrencyId: self.coinId,
            }
        } else {
            // 币币交易
            aUrl = space.apiUrl + '900'
            data = {
                ExchangeTypeID: self.coinId,
            }
        }
        util.comAjax({
            url: aUrl,
            data: data,
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data) {
                if (res.Data != '') {
                    var html = $(document.createDocumentFragment())
                    res.Data.forEach(function (item) {
                        html.append(self.historyHtml(item))
                    })
                    dom.history.find('ul').html(html)
                    self.historyTime = res.Data[0].CRTime + 1
                } else {
                    dom.history.find('ul').html(self.emptyHtml())
                }
            }
        })
        if (isInit) {
            dom.history.find('.tbody').mCustomScrollbar({
                theme: 'dark',
            })
        }
    }

    // 历史记录数据实时刷新
    pro.refreshHistory = function () {
        var self = this,
            dom = this.dom

        util.comAjax({
            targrt: dom.history,
            url: space.apiUrl + '2036',
            data: {
                CurrencyId: self.coinId,
                StartTime: self.historyTime,
            },
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data) {
                if (res.Data != '') {
                    var html = $(document.createDocumentFragment())
                    res.Data.forEach(function (item) {
                        html.append(self.historyHtml(item))
                    })
                    dom.history.find('ul').prepend(html)
                    dom.history.find('.list-empty').remove()
                    self.historyTime = res.Data[0].CRTime + 1
                }
            }
        })
    }

    // 撤单
    pro.orderCancel = function (id) {
        var self = this

        util.comAjax({
            url: space.apiUrl + '1680',
            data: {
                MemberId: space.UID,
                Id: id,
            },
        }).done(function (res) {
            if (res.ReturnCode == 1000) {
                space.error(space.language.trade.order.remove[2], function () {
                    self.entrustList()
                })
            } else {
                space.error(res.ReturnMsg)
            }
        })
    }

    // 委托挂单和委托历史-初始化
    pro.userHistoryInit = function () {
        var self = this,
            dom = self.dom
        if (!space.UID) {
            dom.noLogin.find('a').attr('href', '/login.html?redir=' + encodeURIComponent(window.location.href))
            dom.noLogin.show()
            return
        }
        self.entrustType = 'order' // 默认委托挂单
        dom.checkMore.attr('href', 'assets.html?modle=entrust&index=' + self.entrustType)
        // tab切换
        dom.tabHistory.on('click', '.tab-item', function () {
            var $this = $(this)
            if ($this.hasClass('current')) {
                return
            }
            var index = $this.index()
            self.entrustType = $this.data('type')
            $this.addClass('current').siblings('.tab-item').removeClass('current')
            dom.userHistory.find('.thead').eq(index).show().siblings('.thead').hide()
            dom.checkMore.attr('href', 'assets.html?modle=entrust&index=' + self.entrustType)
            self.entrustList()
        })

        dom.userHistory.find('.tbody').mCustomScrollbar({
            theme: 'dark',
        })

        // 撤单
        dom.userHistory.on('click', '.remove', function () {
            var id = $(this).data('id')
            dialog.confirmInfo(space.language.trade.order.remove[1], function () {
                self.orderCancel(id)
            })
        })

        // 挂单填充表单数据
        dom.userHistory.on('click', 'li', function (e) {
            if (e.target.tagName.toLocaleLowerCase() === 'a') {
                return
            }
            var price = $(this).find('.price').html()
            if (!price) {
                return
            }
            dom.buyPrice.val(price).trigger('input')
            dom.sellPrice.val(price).trigger('input')
        })
    }

    // 获取委托挂单/历史 数据
    pro.entrustList = function () {
        if (!space.UID) {
            return
        }
        // space.loadingIn('.tbody')
        var self = this,
            dom = this.dom,
            port = '2037', // 委托挂单
            ajaxData = {
                MemberId: space.UID,
                MemberKey: space.UID,
                CurrencyId: space.coinId,
                PageIndex: 1,
                PageSize: 500,
            }
        if (self.entrustType === 'history') {
            port = '1570'
            ajaxData.PageSize = 10
        }
        util.comAjax({
            url: space.apiUrl + port,
            tab: 'entrust',
            data: ajaxData,
        }).done(function (res) {
            // space.loadingOut('.tbody')
            if (res.ReturnCode != 1000 || !res.Data) {
                return
            }
            var data
            if (self.entrustType === 'history') {
                data = res.Data.TradeRecordList.slice(0, 10)
            } else {
                data = res.Data.ResultList
            }
            if (data != '') {
                var html = $(document.createDocumentFragment())
                data.forEach(function (item) {
                    html.append(self.userHistoryHtml(item))
                })
                dom.userHistory.find('ul').html(html)
            } else {
                dom.userHistory.find('ul').html(self.emptyHtml())
            }
        })
    }

    // 委托挂单/历史 模板
    pro.userHistoryHtml = function (obj) {
        var typeClass = 'rise'
        var self = this
        var typeText = space.language.common.tradeType[obj.Type]
        var remove = ''
        if (obj.Type == 1) { // 0买入 1卖出
            typeClass = 'drop'
        }
        if (typeof obj === 'object') {
            remove = '<a href="javascript:;" class="remove" data-id="' + obj.Id + '">' + space.language.trade.order.remove[0] + '</a>'
        }
        var money = self.BTC2Money(obj.EntrustPrice)
        var html
        html =
            '<li class="list click line-2">\
                <span class="td"><span class="newline">' + util.dateParse(obj.CRTime, 'yyyy-MM-dd<br>HH:mm:ss') + '</span></span>\
                <span class="td ' + typeClass + '">' + typeText + '</span>\
                <span class="td">' + obj.CurName + '</span>\
                <span class="td">\
                    <span class="text">\
                        <span class="price js-btc">' + floatNum(obj.EntrustPrice || '', self.pricePrecis) + '</span><br>\
                        ' + money + '\
                    </span>\
                </span>\
                <span class="td">' + floatNum(obj.EntrustQuantity, self.numShow) + '</span>\
                <span class="td">' + floatNum(obj.Volume, self.numShow) + '</span>'

        var tdArr = [20, 10, 10, 30, 15, 15] // td的宽度设置
        if (self.entrustType === 'order') {
            tdArr = [13, 10, 10, 20, 10, 15, 10, 12]
            html +=
                '<span class="td">' + floatNum(obj.NoVolume, self.numShow) + '</span>\
                <span class="td">' + remove + '</span>'
        }
        html += '</li>'
        html = $(html)
        html.find('.td').each(function (index) {
            $(this).addClass('td-' + tdArr[index])
        })
        return html
    }


    $(function () {
        return new Trade()
    })
}(window, document, DH))

