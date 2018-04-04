;
(function (window, document, space) {
    var theLang = space.language.assetsDeposit
    // 输入错误提示
    function msgTip(msg) {
        if (!msg) {
            $('#msgTip').hide()
            return
        }
        $('#msgTip').show().html(msg)
    }

    space.depositInit = function () {
        // var dom = initDom()
        var ele = {
            bankList: $('#bankList'),
            allMoney: $('#allMoney'),
            txMoney: $('#txMoney'),
            jypassword: $('#jypassword'),
            history: $('#history'),
            txBtn: $('#txBtn'),
            bankReminding: $('#bankReminding'), // 提现提醒文字
            cashAll: $('#cashAll'), // 提现‘全部提现’按钮
            dataShow: $('#dataShow'), // 加载更多提示框
        }
        var canUse = 0 // 可提现余额
        var USDToVND // USDToVND汇率

        // 获取汇率
        function exchangeRate() {
            util.comAjax({
                url: space.apiUrl + '2002',
                data: {},
            }).done(function (res) {
                if (res.ReturnCode === 1000 && res.Data) {
                    var data = res.Data
                    USDToVND = data.USDToVNDExchange // USDToVND
                    getBankinfo()
                    getRecord()
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        }

        /*
       * 美元对其它币转换
       * number 初始数字
       * rate 汇率
       * unit 单位
       * agree 是否需要拼接≈和标签
       * */
        function USD2Money(number, rate, unit, agree) {
            number *= 1
            if (!number && agree) {
                return ''
            }
            if (!number && !agree) {
                return unit + 0
            }
            var val = new Big(number).times(rate).toString()
            val = space.floatNum(val, 2) + ''
            var arr = val.split('.')
            val = arr[0].replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
            if (arr[1] && unit !== '₫') {
                val = val + '.' + arr[1]
            }
            if (agree) {
                val = '<span class="light">≈' + unit + val + '</span>'
            } else {
                val = unit + val || 0
            }
            return val
        }

        // 提现记录html模板
        function htmlTep(dd, arr) {
            $.each(dd, function (i, item) {
                var bg
                if (i % 2 === 0) {
                    bg = 'odd'
                } else {
                    bg = 'even'
                }

                var html =
                    '<tr class="' + bg + '">\
                        <td>' + space.floatNum(item.SubmitMoney, 2) + '<br>\
                            <p class="exchange">' + USD2Money(item.SubmitMoney, USDToVND, '₫', true) + '</p> </td>\
                        <td>' + space.floatNum(item.FinanceFee, 2) + '<br>\
                            <p class="exchange">' + USD2Money(item.FinanceFee, USDToVND, '₫', true) + '</p> </td>\
                        <td>' + space.floatNum(item.FinanceLastUsd, 2) + '<br>\
                            <p class="exchange">' + USD2Money(item.FinanceLastUsd, USDToVND, '₫', true) + '</p> </td>\
                        <td>' + item.SubmitCardType + '</td>\
                        <td>' + util.dateParse(item.TradeTime, 'yyyy-MM-dd<br>HH:mm:ss') + '</td>\
                        <td>' + (space.language.assetsRecharge.status[item.Status] || '') + '</td>\
                </tr>'
                arr.push(html)
            })
        }

        // 用户信息
        function getBankinfo() {
            util.comAjax({
                url: DH.apiUrl + '2000',
                json: true,
                type: 'POST',
                data: {
                    MemberId: DH.UID,
                },
            }).done(function (res) {
                var data = res.Data
                var stuta = res.ReturnCode
                var messWarn = res.ReturnMsg
                if (stuta == 1000) {
                    canUse = space.floatNum(data.MemberUsd, 2)
                    ele.allMoney.text(canUse)
                    caseInp()
                    var bankList = data.BxBankInfo // 银行卡列表
                    var len = bankList.length
                    if (len === 0) {
                        space.error(theLang.notCard, function () {
                            window.location.replace('assets.html?modle=bankCard')
                        })
                        return
                    }
                    var opHtml = ''
                    for (var i = 0; i < len; i++) {
                        bankList[i].BankCardNumber += ''
                        opHtml += '<option data-value=' + bankList[i].BankCardNumber + '>' + bankList[i].BankCardNumber + '</option>'
                        if (i === 0) {
                            opHtml.replace('<option', '<option selected')
                        }
                    }
                    ele.bankList.append(opHtml)
                } else {
                    DH.error(messWarn)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        }

        // 提现记录
        var pageIndex = 1, // 初始化请求第‘1’页
            pageSizeInit = 20, // 初始化请求每页‘20条数据’
            totalPage = 0 // 总页数
        function getRecord() {
            util.comAjax({
                url: DH.apiUrl + '1934',
                json: true,
                type: 'POST',
                data: {
                    MemberId: DH.UID,
                    pageIndex: pageIndex,
                    pageSize: pageSizeInit,
                },
            }).done(function (res) {
                var data = res.Data.BxMemberCashResponseList
                var stuta = res.ReturnCode

                if (stuta == 1000) {
                    var arr = []
                    totalPage = Math.ceil(res.Data.TotalCount / pageSizeInit)
                    if (pageIndex < totalPage) {
                        ele.dataShow.show().html('<span class="btn-loading"><i></i></span><span class="lang-loadLang" index="0">' + space.language.asset.loadHint[0] + '</span>')
                    }
                    if (pageIndex == totalPage && pageIndex != 1) {
                        ele.dataShow.show().html(space.language.asset.loadHint[1])
                    }
                    if (data.length != 0) {
                        htmlTep(data, arr)
                        ele.history.find('tbody').append(arr.join(''))
                    } else {
                        ele.dataShow.hide()
                        ele.history.find('tbody').html('<tr><td colspan="5"><br/>' + space.language.common.noData + '</td></tr>')
                    }
                } else {
                    ele.dataShow.hide()
                    space.error(res.ReturnMsg)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        }
        // 滚动加载处理
        ele.history.find('.tbody').mCustomScrollbar({ // '充值记录'滚动条设置
            theme: 'dark',
            callbacks: {
                onTotalScroll: function () { // 滚动到底部加载更多
                    pageIndex += 1
                    if (pageIndex > totalPage) {
                        return
                    }
                    getRecord(pageIndex)
                },
            },
        })

        // 提现手续费实时计算
        ele.txMoney.on('input', function () {
            var $this = $(this),
                val = $(this).val().replace(/[^\d.]/g, '')
            val = space.floatNum(val, 2) // 以免出现..bug
            if (val * 1 > canUse * 1) {
                val = canUse
            }

            var chargeMoneyUsd = (val * 0.008).toFixed(2) // 手续费(美元)
            if (chargeMoneyUsd < 0.03 && val * 1 !== 0) {
                chargeMoneyUsd = 0.03
            }
            var chargeMoneyVnd = USD2Money(chargeMoneyUsd, USDToVND, '₫') // 手续费(越南盾)
            if (val === '') {
                var canUsevnd = USD2Money(canUse, USDToVND, '₫'),
                    nullStr = theLang.canUse + USD2Money(canUse, 1, '$') + ' ≈ ' + canUsevnd
                cashRemind(nullStr, 'cash-all-hide', true)
            } else {
                var str = theLang.extraDe + '$' + chargeMoneyUsd + ' ≈ ' + chargeMoneyVnd + theLang.serviceCharge
                cashRemind(str, 'cash-all-hide')
            }
            val = space.floatInput(val, 2)
            $this.val(val)
        })

        // ‘全部提现’点击事件
        ele.cashAll.on('click', function () {
            var val = canUse
            var chargeMoneyUsd = (val * 0.008).toFixed(2) // 手续费(美元)
            if (chargeMoneyUsd < 0.03 && ele.txMoney.val().replace(/[^\d.]/g, '') * 1 !== 0) {
                chargeMoneyUsd = 0.03
            }
            var chargeMoneyVnd = USD2Money(chargeMoneyUsd, USDToVND, '₫') // 手续费(越南盾)
            var str = theLang.extraDe + '$' + chargeMoneyUsd + ' ≈ ' + chargeMoneyVnd + theLang.serviceCharge
            ele.txMoney.val(val)
            ele.txMoney.focus()
            cashRemind(str, 'cash-all-hide')
        })

        // 提现金额提示文字初始化
        function caseInp() {
            if (ele.txMoney.val() === ' ') {
                var canUsevnd = USD2Money(canUse, USDToVND, '₫')
                var str = theLang.canUse + USD2Money(canUse, 1, '$') + ' ≈ ' + canUsevnd
                cashRemind(str, 'cash-all-hide', true)
            }
        }

        // ‘全部提现’按钮的显示和隐藏
        function cashRemind(str, kind, isShow) {
            ele.bankReminding.html(str)
            if (isShow) {
                ele.cashAll.removeClass(kind)
            } else {
                ele.cashAll.addClass(kind)
            }
        }

        // 提现
        ele.txBtn.on('click', function () {
            var bankNum = ele.bankList.find('option:selected').data('value')
            var withdraMone = $.trim(ele.txMoney.val())
            var password = $.trim(ele.jypassword.val())
            if (!withdraMone) {
                msgTip(theLang.apiError[0])
                return
            }
            if (withdraMone < 1) {
                msgTip(theLang.cashMin) // 单笔提现金额不得小于1USD
                return
            }
            if (withdraMone > 1400) {
                msgTip(theLang.cashMax) // 单笔提现金额不得大于1400USD
                return
            }
            if (!password) {
                msgTip(theLang.apiError[1])
                return
            }
            msgTip()
            util.comAjax({
                url: DH.apiUrl + '1931',
                json: true,
                type: 'POST',
                target: ele.txBtn,
                data: {
                    SubmitCardType: bankNum,
                    SubmitMoney: withdraMone,
                    Password: password,
                    MemberId: DH.UID,
                    SubmitCurrency: 'USD', // USD-美元，CNY-人民币，VND-越南盾
                },
            }).done(function (res) {
                var stuta = res.ReturnCode
                var messWarn = res.ReturnMsg || space.language.message.submit
                if (stuta == 1000) {
                    DH.error(theLang.apiOk, function () {
                        window.location.reload()
                    })
                } else {
                    DH.error(messWarn)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        })

        // 加载语言文本
        function setLang() {
            var setText = space.setText
            // var language = DH.langType
            var lang = DH.language
            setText('DEtitle', lang.asset.assetsDeposit.DEtitle)
            setText('DEinfo', lang.asset.assetsDeposit.DEinfo)
            setText('DEaccount', lang.asset.assetsDeposit.DEaccount)
            setText('DEall', lang.asset.assetsDeposit.DEall)
            setText('DEtxmoeny', lang.asset.assetsDeposit.DEtxmoeny)
            setText('DEchangpas', lang.asset.assetsDeposit.DEchangpas)
            setText('DEsuretx', lang.asset.assetsDeposit.DEsuretx)
            setText('DEtxrecord', lang.asset.assetsDeposit.DEtxrecord)
            setText('DEsxf', lang.asset.assetsDeposit.DEsxf)
            setText('DEsuremoeny', lang.asset.assetsDeposit.DEsuremoeny)
            setText('DEbankid', lang.asset.assetsDeposit.DEbankid)
            setText('DEtime', lang.asset.assetsDeposit.DEtime)
            setText('DEstat', lang.asset.assetsDeposit.DEstat)
            setText('loadHint', lang.asset.loadHint[0])
            setText('RNewNeedList', lang.asset.recharge.RNewNeedList)
        }

        function init() {
            exchangeRate() // 获取汇率
            setLang()
        }

        init()
    }
}(window, document, DH))
