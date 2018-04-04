/*
 *  买卖操作
 *  日期：2017/9/26.
 *  作者：Math
 * */
var floatNum = DH.floatNum

/*
 * 浮点数乘法
 * num 数值
 * precis 精确到几位小数点
 * min 是否限制最小值 false 最小值为0
 *
 * */
Number.prototype.times = function (num, precis, min) {
    if (!(num * 1) || this.toString() === 'NaN') {
        return 0
    }
    var val = new Big(this).times(num).toString()
    if (val.indexOf('e-') > 0) { // 数值太小出现科学计数法
        val = new Big(val).toFixed(precis + 1).toString()
    }
    val = floatNum(val, precis, min)
    return val
}

/*
 * 浮点数除法
 * num 数值
 * precis 精确到几位小数点
 * min 是否限制最小值 false 最小值为0
 *
 * */
Number.prototype.div = function (num, precis, min) {
    if (!(num * 1) || this.toString() === 'NaN') {
        return 0
    }
    var val = new Big(this).div(num).toString()
    if (val.indexOf('e-') > 0) { // 数值太小出现科学计数法
        val = new Big(val).toFixed(precis + 1).toString()
    }
    val = floatNum(val, precis, min)
    return val
}

;(function (window, document, space) {
    'use strict'

    space.BuyInput = function (opt) {
        for (var i in opt) {
            if (Object.prototype.hasOwnProperty.call(opt, i)) {
                this[i] = opt[i]
            }
        }
        this.init()
    }

    var pro = space.BuyInput.prototype

    // 初始化方法
    pro.init = function () {
        this.initDom()
        // 可用币数据
        this.usable()
        this.priceHandle()
        this.numHandle()
        this.submit()
    }

    // 初始化dom
    pro.initDom = function () {
        this.dom = {
            // 买入
            buyBox: $('#buyBox'),
            buyMax: $('#buyMax'),
            buyPrice: $('#buyPrice'),
            buyNum: $('#buyNum'),
            buyTotal: $('#buyTotal'),
            buyPwd: $('#buyPwd'),
            buyBtn: $('#buyBtn'),

            // 卖出
            sellBox: $('#sellBox'),
            sellMax: $('#sellMax'),
            sellPrice: $('#sellPrice'),
            sellNum: $('#sellNum'),
            sellTotal: $('#sellTotal'),
            sellPwd: $('#sellPwd'),
            sellBtn: $('#sellBtn'),

        }
    }

    // 可用币数据
    pro.usable = function () {
        var self = this,
            dom = this.dom
        self.buyMax = 10e9 // 防止数据溢出
        if (self.type == self.typeData.fb) {
            // 法币交易
            util.comAjax({
                url: space.apiUrl + '1310',
                data: {
                    CurrencyId: self.coinId,
                    MemberKey: space.UID,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000 && res.Data) {
                    var data = res.Data
                    if (space.UID) {
                        self.buyMax = floatNum(data.UsdAmount || 0, self.pricePrecis)
                        self.sellMax = floatNum(data.CoinAmount || 0, self.pricePrecis)
                    }
                    if (data.BuyPrice) { // 最佳买价
                        dom.buyPrice.attr('placeholder', self.lang.input[0] + ' ' + floatNum(data.BuyPrice, self.pricePrecis))
                    }
                    if (data.SellPrice) { // 最佳卖价
                        dom.sellPrice.attr('placeholder', self.lang.input[4] + ' ' + floatNum(data.SellPrice, self.pricePrecis))
                    }
                }
            })
        } else {
            // 币币交易
            util.comAjax({
                url: space.apiUrl + '310',
                data: {
                    ExchangeTypeID: self.coinId,
                    MemberKey: space.UID,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000 && res.Data) {
                    var data = res.Data
                    if (space.UID) {
                        self.buyMax = floatNum(data.FromAmount || 0, self.pricePrecis)
                        self.sellMax = floatNum(data.ToAmount || 0, self.pricePrecis)
                    }
                    if (data.BuyPrice) { // 最佳买价
                        self.buyPrice = data.BuyPrice
                        dom.buyPrice.attr('placeholder', self.lang.input[0] + ' ' + floatNum(data.BuyPrice, self.pricePrecis))
                    }
                    if (data.SellPrice) { // 最佳卖价
                        self.sellPrice = data.SellPrice
                        dom.sellPrice.attr('placeholder', self.lang.input[4] + ' ' + floatNum(data.SellPrice, self.pricePrecis))
                    }
                    // dom.buyMax.html(data.FromAmount || '0')
                    // dom.sellMax.html(data.ToAmount || '0')
                }
            })
        }
    }
    // 价格操作
    pro.priceHandle = function () {
        var self = this,
            dom = this.dom

        // 买入
        var buyLimit = function () {
            var $this = $(this),
                val = $this.val().replace(/[^\d.]/g, '')
            val = space.floatInput(val, self.pricePrecis)
            /* if (val*1 > self.buyMax) { //超过最大数量
                self.buyMax = floatNum(self.buyMax, self.pricePrecis)
                val = self.buyMax
                space.UID && space.error(self.lang.enough)
            }*/
            if (val * 1 > 10e9) { // 防止数据溢出
                val = 10e9
            }
            // self.maxNum('buy', val, self.buyMax)
            self.total('buy', val, dom.buyNum.val())
            $this.val(val)
        }
        dom.buyPrice.on('input', buyLimit)
        // dom.buyPrice.on('propertychange', buyLimit)

        // 卖出
        var sellLimit = function () {
            var $this = $(this),
                val = $this.val().replace(/[^\d.]/g, '')
            val = space.floatInput(val, self.pricePrecis)
            if (val * 1 > 10e9) { // 防止数据溢出
                val = 10e9
            }
            $this.val(val)
            self.maxNum('sell', val, self.sellMax)
            self.total('sell', val, dom.sellNum.val())
        }
        dom.sellPrice.on('input', sellLimit)
        // dom.sellPrice.on('propertychange', sellLimit)
    }

    // 数量操作
    pro.numHandle = function () {
        var self = this,
            dom = this.dom

        // 买入
        var buyLimit = function () {
            var $this = $(this),
                val = $this.val().replace(/[^\d.]/g, ''),
                maxNum = 10e9
            val = space.floatInput(val, self.numInput)
            if (maxNum && val * 1 > maxNum * 1) {
                $this.val(maxNum)
                self.total('buy', dom.buyPrice.val(), maxNum)
                // space.error(self.lang.enough)
                return
            }
            self.total('buy', dom.buyPrice.val(), val)
            $this.val(val)
        }
        dom.buyNum.on('input', buyLimit).data('tip', dom.buyNum.attr('placeholder'))
        // dom.buyNum.on('propertychange', buyLimit)

        // 卖出
        var sellLimit = function () {
            var $this = $(this),
                val = $this.val().replace(/[^\d.]/g, ''),
                maxNum = dom.sellNum.data('num') || 10e9
            val = space.floatInput(val, self.numInput)
            if (maxNum && val * 1 > maxNum * 1) {
                $this.val(maxNum)
                self.total('sell', dom.sellPrice.val(), maxNum)
                // space.error(self.lang.enough)
                return
            }
            self.total('sell', dom.sellPrice.val(), val)
            $this.val(val)
        }
        dom.sellNum.on('input', sellLimit).data('tip', dom.buyNum.attr('placeholder'))
        // dom.sellNum.on('propertychange', sellLimit)
    }

    /*
    * 可买卖数量计算
    * useNum 可用的钱
    * */
    pro.maxNum = function (type, price, useNum) {
        var self = this,
            dom = this.dom,
            placeholder // 最大数量提示

        useNum *= 1
        price *= 1
        if (!space.UID || !useNum || useNum === 10e9) {
            return
        }
        if (type === 'buy') { // 最大可买
            var max = useNum.div(price, self.numInput)
            placeholder = self.lang.input[1] + ' ' + max
            if (!price) {
                placeholder = dom.buyNum.data('tip')
            }
            dom.buyNum.attr('placeholder', placeholder).data('num', max)
        } else { // 最大可卖
            placeholder = self.lang.input[5] + ' ' + useNum
            if (!price) {
                placeholder = dom.sellNum.data('tip')
            }
            dom.sellNum.attr('placeholder', placeholder).data('num', useNum)
        }
    }

    // 交易额计算
    pro.total = function (type, price, num) {
        var self = this,
            dom = this.dom,
            total
        price *= 1
        num *= 1
        if (!price || !num) {
            total = 0
        } else {
            total = price.times(num, self.pricePrecis, true)
        }
        if (type === 'buy') {
            dom.buyTotal.html(total)
        } else {
            dom.sellTotal.html(total)
        }
    }

    // 提交数据检查
    pro.check = function (type) {
        var self = this,
            dom = this.dom,
            data
        if (type === 'buy') {
            data = {
                price: dom.buyPrice.val(),
                num: dom.buyNum.val(),
                pwd: $.trim(dom.buyPwd.val()),
                total: dom.buyTotal.html() * 1,
            }
        } else {
            data = {
                price: dom.sellPrice.val(),
                num: dom.sellNum.val(),
                pwd: $.trim(dom.sellPwd.val()),
                total: dom.sellTotal.html() * 1,
            }
        }
        if (data.price.indexOf('.') >= 0) {
            data.price = data.price.replace(/(\.)?(0)+$/, '')
        }
        if (data.num.indexOf('.') >= 0) {
            data.num = data.num.replace(/(\.)?(0)+$/, '')
        }
        if (!data.price) {
            space.error(this.lang.priEmpty)
            return false
        }
        if (type === 'buy') {
            if (space.currentPrice && data.price * 1 > new Big(space.currentPrice).times(10) * 1) {
                space.error(this.lang.priLimit[0])
                return false
            }
            if (space.currentPrice && data.price * 1 < new Big(space.currentPrice).div(10) * 1) {
                space.error(this.lang.priLimit[1])
                return false
            }
            if (data.num && new Big(data.price).times(data.num) * 1 > self.buyMax) {
                space.error(self.lang.enough)
                return false
            }
        } else {
            if (space.currentPrice && data.price * 1 > new Big(space.currentPrice).times(10) * 1) {
                space.error(this.lang.priLimit[0])
                return false
            }
            if (space.currentPrice && data.price * 1 < new Big(space.currentPrice).div(10) * 1) {
                space.error(this.lang.priLimit[1])
                return false
            }
        }
        if (!data.num) {
            space.error(this.lang.numEmpty)
            return false
        }
        if (data.total <= 0) {
            space.error(this.lang.totalEmpty)
            return false
        }
        if (!data.pwd) {
            space.error(this.lang.passEmpty)
            return false
        }
        return data
    }

    // 交易提交
    pro.submit = function () {
        var self = this,
            dom = this.dom

        dom.buyBtn.on('click', function () {
            if (!space.UID) {
                space.error(space.language.error.nologin)
                return
            }
            var data = self.check('buy'),
                aUrl, // ajax请求接口
                submitData // 提交数据
            if (!data) {
                return
            }
            if (self.type == self.typeData.fb) { // 法币交易-买
                aUrl = space.apiUrl + '1320'
                submitData = {
                    CurrencyId: self.coinId,
                    BuyPrice: data.price,
                    BuyNum: data.num,
                    Password: data.pwd,
                    MemberKey: space.UID,
                }
            } else { // 币币交易-买
                aUrl = space.apiUrl + '320'
                submitData = {
                    ExchangeTypeID: self.coinId,
                    BuyPrice: data.price,
                    BuyNum: data.num,
                    Password: data.pwd,
                    MemberKey: space.UID,
                }
            }
            util.comAjax({
                url: aUrl,
                target: dom.buyBtn[0],
                data: submitData,
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    space.error(self.lang.business, function () {
                        window.location.reload()
                    })
                } else {
                    space.error(res.ReturnMsg || self.lang.businessError)
                }
            }).fail(function () {
                space.error(self.lang.businessError)
            })
        })

        dom.sellBtn.on('click', function () {
            if (!space.UID) {
                space.error(space.language.error.nologin)
                return
            }
            var data = self.check('sell'),
                aUrl, // ajax请求接口
                submitData // 提交数据
            if (!data) {
                return
            }
            if (self.type == self.typeData.fb) { // 法币交易-卖
                aUrl = space.apiUrl + '1330'
                submitData = {
                    CurrencyId: self.coinId,
                    BuyPrice: data.price,
                    BuyNum: data.num,
                    Password: data.pwd,
                    MemberKey: space.UID,
                }
            } else { // 币币交易-卖
                aUrl = space.apiUrl + '330'
                submitData = {
                    ExchangeTypeID: self.coinId,
                    BuyPrice: data.price,
                    BuyNum: data.num,
                    Password: data.pwd,
                    MemberKey: space.UID,
                }
            }
            util.comAjax({
                url: aUrl,
                target: dom.sellBtn[0],
                data: submitData,
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    space.error(self.lang.business, function () {
                        window.location.reload()
                    })
                } else {
                    space.error(res.ReturnMsg || self.lang.businessError)
                }
            }).fail(function () {
                space.error(self.lang.businessError)
            })
        })
    }
}(window, document, DH))
