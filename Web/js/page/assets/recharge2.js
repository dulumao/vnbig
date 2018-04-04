/*
 *  银行卡管理-充值
 *  日期：2017/9/28.
 *  作者：Math
 * */
;
(function (window, document, space) {
    // 方法名称与页面名称一致
    var initDom = function () {
        return {
            notCard: $('#notCard'),
            hasCard: $('#hasCard'),
            bankSelect: $('#bankSelect'),
            fullName: $('#fullName'),
            cardNumber: $('#cardNumber'),
            bankType: $('#bankType'),
            money: $('#money'),
            remark: $('#remark'),
            password: $('#password'),
            submit: $('#submit'),
            history: $('#history'),
            step01: $('#step01'), // 第一步 输入充值金额
            step02: $('#step02'), // 第二步 确认账户信息
            step03: $('#step03'), // 第三步 告知成功信息
            rechargeNum: $('#rechargeNum'), // 充值金额输入框
            roughlyEqual: $('#roughlyEqual'), // 约等于
            tipText: $('#tipText'), // 错误提示语
            next01: $('#next01'), // 充值时 '下一步' 按钮
            handleBtn: $('#handleBtn'), // 第二步操作按钮区域
            cancel: $('#cancel'), // '取消' 按钮
            affirm: $('#affirm'), // '确认已支付' 按钮
            payee: $('#payee'), // 第二步 收款人
            accountNum: $('#accountNum'), // 第二步 账户
            bankDeposit: $('#bankDeposit'), // 第二步 开户行
            orderNum: $('#orderNum'), // 第二步 订单编号
            rechargeTotal: $('#rechargeTotal'), // 第二步 确认充值金额
            hintSuccess: $('#hintSuccess'), // 成功充值提示语
            dataShow: $('#dataShow'), // 加载更多框
        }
    }
    space.rechargeInit = function () {
        var dom = initDom()

        var vToU // 全局的汇率

        // 获取汇率
        function exchangeRate() {
            util.comAjax({
                url: space.apiUrl + '2002',
                data: {},
            }).done(function (res) {
                if (res.ReturnCode == 1000 && res.Data && res.Data != '') {
                    vToU = res.Data.VNDToUSDExchange
                    historyList() // 加载充值记录
                } else {
                    space.error(res.ReturnMsg)
                }
            }).fail(function () {
                space.error(DH.language.message.refresh)
            })
        }

        exchangeRate()

        dom.rechargeNum.on('input propertychange', function () { // 第一步 输入框输入金额，根据汇率算出越南盾兑换美元数量
            var val = $(this).val().replace(/[^\d]/g, '').replace(/^0+/, ''),
                dealVal = usd2Money(val, vToU) || 0
            $(this).val(val)
            dom.roughlyEqual.html(DH.language.asset.recharge.RNewNeedList[2] + ' ' + dealVal + ' USD')
        })

        // 输入错误提示
        function msgTip(msg) {
            if (!msg) {
                dom.tipText.hide()
                return
            }
            dom.tipText.show().html(msg)
        }

        var orderDesNum // 生成的加密订单号
        dom.next01.on('click', function () { // 输入金额后点击‘下一步’按钮
            var valNum = dom.rechargeNum.val()
            if (!valNum || valNum == 0 || valNum < 1500000) {
                msgTip(DH.language.asset.recharge.RNewNeedList[21] + ' 1500000 VND')
                return
            }
            space.loadingIn('.recharge-step')
            util.comAjax({
                url: space.apiUrl + '2030',
                data: {
                    SubmitCurrency: 'VND',
                    Key: 'VNDToUSDExchange',
                    TableAmount: valNum,
                    MemberId: space.UID,
                },
                target: dom.next01,
            }).done(function (res) {
                space.loadingOut('.recharge-step')
                var data = res.Data
                if (res.ReturnCode == 1000 && res.Data && res.Data != '') {
                    dom.step02.show().siblings('.recharge-step').hide()
                    dom.payee.html(data.Payee)
                    dom.accountNum.html(data.AccountsReceivableAccount)
                    dom.bankDeposit.html(data.OpeningBank)
                    dom.orderNum.html(data.OrderId)
                    dom.rechargeTotal.html(data.RechargeAmount)
                    orderDesNum = data.OrderIdDES
                    dom.history.find('.tbody').scrollLoad('loadData', 1)
                    dom.rechargeNum.val('')
                    dom.tipText.hide()
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        })


        dom.handleBtn.find('a').on('click', function () { // 点击'取消/确认已支付'按钮
            var clickIndex = $(this).data('index') // clickIndex == 4 （取消） /  1（确认）
            space.loadingIn('.recharge-step')
            util.comAjax({
                url: space.apiUrl + '2031',
                data: {
                    Status: clickIndex,
                    OrderId: orderDesNum,
                    MemberId: space.UID,
                },
                target: dom.next01,
            }).done(function (res) {
                space.loadingOut('.recharge-step')
                if (res.ReturnCode == 1000 && res.Data && res.Data != '') {
                    if (clickIndex == 4) {
                        dom.step01.show().siblings('.recharge-step').hide()
                        dialog.toast(DH.language.asset.recharge.RNewNeedList[13])
                        return
                    }
                    dom.step03.show().siblings('.recharge-step').hide()
                    dialog.toast(DH.language.asset.recharge.RNewNeedList[14])
                    dom.hintSuccess.html(res.Data.Hint)
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        })

        function historyHtml(data) { // 充值记录
            var arr = []
            $.each(data, function (i, item) {
                var bg
                if (i % 2 === 0) {
                    bg = 'odd'
                } else {
                    bg = 'even'
                }
                var html = ''
                html += '<tr class=' + bg + '>'
                html += '<td>' + util.dateParse(item.Updatetime, 'yyyy-MM-dd HH:mm:ss') + '</td>'
                html += '<td>' + usd2Money(item.RechargeAmount, 1) + '<br><span class="light">≈' + usd2Money(item.FinanceLastUsd, 1, '$') + '</span></td>'
                html += '<td>' + (item.Status) + '</td>'
                html += '</tr>'
                arr.push(html)
            })
            console.log(arr.join(''))
            return arr.join('')
        }

        // 充值记录
        function  historyList() {
            var pageSizeInit = 20 // 初始化请求每页‘20条数据’
            dom.history.find('.tbody').scrollLoad({
                ajax: function (pageIndex) {
                    return util.comAjax({
                        url: space.apiUrl + '2032',
                        data: {
                            MemberId: space.UID,
                            pageIndex: pageIndex,
                            pageSize: pageSizeInit,
                        },
                    })
                },
                dataFn: historyHtml,
                dataKey: 'RechargeList',
                pageIndex: 1,
                pageSize: pageSizeInit,
            })

        }

        function isHasOrder() {
            space.loadingIn('.recharge-step')
            util.comAjax({
                url: space.apiUrl + '2034',
                data: {
                    MemberId: space.UID,
                },
            }).done(function (res) {
                space.loadingOut('.recharge-step')
                if (res.ReturnCode == 1000) {
                    var data = res.Data
                    if (res.Data.Status == 0 && res.Data != '') {
                        dom.step02.show().siblings('.recharge-step').hide()
                        dom.payee.html(data.Payee)
                        dom.accountNum.html(data.AccountsReceivableAccount)
                        dom.bankDeposit.html(data.OpeningBank)
                        dom.orderNum.html(data.OrderId)
                        dom.rechargeTotal.html(data.RechargeAmount)
                        orderDesNum = data.OrderIdDES
                    } else {
                        dom.step01.show().siblings('.recharge-step').hide()
                    }
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        }

        isHasOrder()

        /*
         * 美元对其它币转换
         * number 初始数字
         * rate 汇率
         * unit 单位
         * */
        function usd2Money(number, rate, unit) {
            number *= 1
            if (!number || !rate) {
                return ''
            }
            unit = unit || ''
            var val = new Big(number).times(rate).toString()
            val = space.floatNum(val, 2) + ''
            var arr = val.split('.')
            val = arr[0].replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
            if (arr[1]) {
                val = val + '.' + arr[1]
            }
            val = unit + val || 0
            return val
        }

        // 加载语言文本
        function setLang() {
            var setText = space.setText
            // var language = DH.langType
            var langs = DH.language.asset.recharge,
                loadLang = DH.language.asset.loadHint

            setText('REcharge', langs.REcharge)
            setText('bankRecharge', langs.bankRecharge)
            setText('bdbank', langs.bdbank)
            setText('REinfo1', langs.REinfo1)
            setText('REinfo2', langs.REinfo2)
            setText('REinfo3', langs.REinfo3)
            setText('REinfo4', langs.REinfo4)
            setText('REinfo5', langs.REinfo5)
            setText('REinfo6', langs.REinfo6)
            setText('REaddbank', langs.REaddbank)
            setText('REhkbank', langs.REhkbank)
            setText('REname', langs.REname)
            setText('REbanknum', langs.REbanknum)
            setText('REfhinfo', langs.REfhinfo)
            setText('REczmoney', langs.REczmoney)
            setText('REmess', langs.REmess)
            setText('REpassword', langs.REpassword)
            setText('REsure', langs.REsure)
            setText('REcontactAgent', langs.REcontactAgent)
            setText('REczrecord', langs.REczrecord)
            setText('contact', langs.contact)
            setText('REnavList', langs.REnavList)
            setText('RNewNeedList', langs.RNewNeedList)
            setText('loadLang', loadLang)
        }

        setLang()
    }
}(window, document, DH))
