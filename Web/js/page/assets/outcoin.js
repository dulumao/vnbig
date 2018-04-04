/*
 *  资产管理-转出虚拟币
 *  日期：2017/9/28.
 *  作者：Math
 * */
;
(function (window, document, space) {
    'use strict'

    // 方法名称与页面名称一致
    var initDom = function () {
        return {
            coinNum: $('#coinNum'),
            useNum: $('#useNum'),
            freezeNum: $('#freezeNum'),
            address: $('#address'),
            fee: $('#fee'),
            feeLimit: $('#feeLimit'),
            password: $('#password'),
            code: $('#code'),
            getCode: $('#getCode'),
            feeTip: $('#feeTip'),
            submit: $('#submit'),
            history: $('#history'),
            historyStatus: $('#historyStatus'),
            EmailBox: $('#noEmail'),
            Email: $('#Email'),
            noEmailCode: $('#noEmailCode'),
            noEmailGetCode: $('#noEmailGetCode'),
            errorTips: $('#errorTips'),
            EmailSubmit: $('#EmailSubmit'),
            minNumber: $('#minNumber'), // 最小提币数
            particularlyHint: $('#particularlyHint'), // VNB提示框
        }
    }
    var viewTimer
    var lang = space.language.assetsOutcoin
    var minNum = 0.01

    function countDown(obj, time) {
        if (obj.attr('disabled')) {
            return
        }
        time = time || 60
        var text = obj.html()
        obj.attr('disabled', true).html(time + 'S')
        viewTimer = setInterval(function () {
            time -= 1
            if (time <= 0) {
                clearInterval(viewTimer)
                obj.removeAttr('disabled').html(text)
                return
            }
            obj.html(time + 'S')
        }, 1000)
    }

    // 输入错误提示
    function msgTip(msg) {
        if (!msg) {
            $('#msgTip').hide()
            return
        }
        $('#msgTip').show().html(msg)
    }

    var fee = { // 一次性交易手续的手续费
        BTC: 0.001,
        ETH: 0.01,
        BCH: 0.0001,
        LTC: 0.001,
        ETC: 0.01,
        VEN: 2,
        VNB: 100,
        EOS: 0.5,
        EOSVNB: 0.5,
        DOGE: 20,
    }
    // 最小提币列表
    var minNumList = {
        BTC: 0.01,
        ETH: 0.01,
        BCH: 0.01,
        LTC: 0.1,
        ETC: 0.1,
        VEN: 4,
        VNB: 500,
        EOS: 1.5,
        EOSVNB: 1.5,
        DOGE: 500,
    }
    space.outcoinInit = function () {
        var dom = initDom()
        var coinId = util.getUrlParams('coinid'),
            coinName = util.getUrlParams('coinName'),
            statusClass = {
                0: '', // 未处理
                1: '', // 未确认
                2: '', // 已确认
                3: 'green', // 已处理
                4: 'orange', // 失败

            }

        var precis // 币的精确度
        // 修改密码输入框的type
        space.setPassWordInput()
        // 虚似币数据
        space.coinList().done(function (data) {
            if (!coinId) {
                data.some(function (item) {
                    if (item.CurrencyEnShortName === 'BTC') {
                        coinId = item.CurrencyId
                        coinName = item.CurrencyEnShortName
                        return true
                    }
                    return false
                })
            }
            partHintShow()
            coinHistory()
            setMin()
            setFee()
            precis = space.setPrecise(coinName, 'num')
            space.coinNum(coinId, coinName)
            // 下拉选择
            $('#coinType').divSelect({
                data: data,
                dataId: 'CurrencyId',
                dataText: 'CurrencyEnShortName',
                change: function (id, ele) {
                    dom.useNum.html('')
                    dom.freezeNum.html('')
                    coinId = id
                    coinHistory()
                    dom.historyStatus.divSelect('setValue', lang.status[1], '1')
                    coinName = ele.find('cite').html()
                    partHintShow()
                    space.coinNum(id, coinName)
                    dom.address.val('')
                    dom.coinNum.val('')
                    dom.feeTip.html('0')
                    precis = space.setPrecise(coinName, 'num')
                    setFee()
                    setMin()
                },
            })
            $('#coinType').find('cite').html(coinName).attr('selectid', coinId)
        })

        function partHintShow() { // 判断当前币种为“VNB”时出现提示，否则提示隐藏
            coinName === 'VNB' ? dom.particularlyHint.fadeIn() : dom.particularlyHint.fadeOut()
        }

        // 转出操作
        dom.coinNum.on('input', function () {
            var $this = $(this),
                val = $this.val().replace(/[^\d.]/g, ''),
                max = dom.useNum.html()
            if (val * 1 > max * 1) {
                val = max
            }
            val = space.floatInput(val, precis)
            $this.val(val)
        })
        // 设置手续费
        function setFee() {
            // dom.feeLimit.html(fee[coinName][0] + '~' + fee[coinName][1])
            // dom.fee.val(fee[coinName][0])
            var OutFee = fee[coinName] || 0.5
            OutFee = OutFee + ' ' + coinName

            dom.feeTip.html(OutFee)
        }

        // 设置最小提币数
        function setMin() {
            minNum = minNumList[coinName] || 1.5
            dom.minNumber.html(minNum)
        }

        dom.fee.on('input', function () {
            var $this = $(this),
                val = $this.val().replace(/[^\d.]/g, '')
            val = space.floatInput(val, precis)
            $this.val(val)
        })

        // 获取验证码
        dom.getCode.on('click', function () {
            util.comAjax({
                url: space.apiUrl + '290',
                target: dom.getCode,
                data: {
                    MemberKey: space.UID,
                    SmsType: 5,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    countDown(dom.getCode)
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        })
        dom.submit.on('click', function () {
            var val = dom.coinNum.val()
            // 提币数量不能小于minNum
            if (val < minNum && val != '') {
                val = minNum
                msgTip(lang.minNum)
                return
            }
            var data = {
                MemberId: space.UID,
                CurrencyId: coinId,
                Count: val,
                Address: $.trim(dom.address.val()),
                // MinerFee: dom.fee.val()*1,
                PassWord: $.trim(dom.password.val()),
                Code: $.trim(dom.code.val()),
            }
            if (!data.Count) {
                msgTip(lang.apiError[0])
                return
            }
            if (!data.Address) {
                msgTip(lang.apiError[5])
                return
            }
            /* if (data.MinerFee < fee[coinName][0]) { //最低
             msgTip(lang.apiError[3] + ' '+ fee[coinName][0])
             return
             }
             if (data.MinerFee > fee[coinName][1]) { //最高
             msgTip(lang.apiError[4] + ' ' + fee[coinName][1])
             return
             }*/
            if (!data.PassWord) {
                msgTip(lang.apiError[1])
                return
            }
            if (!data.Code) {
                msgTip(lang.apiError[2])
                return
            }
            msgTip()
            util.comAjax({
                url: space.apiUrl + '530',
                target: dom.submit,
                data: data,
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    space.error(lang.apiOk, function () {
                        window.location.reload()
                    }, 4000)
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        })

        // 转出记录
        function historyHtml(obj) {
            var html =
                '<tr>\
                    <td>' + obj.WithdraId + '</td>\
                    <td>' + util.dateParse(obj.Createtime, 'yyyy-MM-dd HH:mm:ss') + '</td>\
                    <td>' + space.floatNum(obj.WithdraAmt, precis) + '</td>\
                    <td>' + space.floatNum(obj.ToAccountAmt, precis) + '</td>\
                    <td>' + (obj.Remark || '') + '</td>\
                    <td class="' + statusClass[obj.Status] + '">' + (lang.status[obj.Status] || '') + '</td>\
                </tr>'
            return html
        }

        function coinHistory(status) {
            status = status || '1'
            util.comAjax({
                url: space.apiUrl + '540',
                data: {
                    MemberId: space.UID,
                    CurrencyId: coinId,
                    Status: status,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    var html = ''
                    if (res.Data && res.Data != '') {
                        res.Data.forEach(function (item) {
                            html += historyHtml(item)
                        })
                    } else {
                        html = '<tr><td colspan="6">' + space.language.common.noData + '</td> </tr>'
                    }
                    dom.history.find('tbody').html(html)
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        }

        // 转出记录状态过滤
        dom.historyStatus.divSelect({
            change: function (status) {
                coinHistory(status)
            },
        })

        // 绑定邮箱
        // Email: $('#Email'),
        // noEmailCode: $('#noEmailCode'),
        // noEmailGetCode: $('#noEmailGetCode'),
        // errorTips: $('#errorTips'),
        // EmailSubmit: $('#EmailSubmit')
        var mailText = DH.regMail // 邮箱正则
        var emailBindTip = function (msg) {
            if (!msg) {
                dom.errorTips.removeClass('visibility')
                return
            }
            dom.errorTips.addClass('visibility').html(msg)
        }
        if (!space.hasEmail) { // 未绑定邮箱
            dom.EmailBox.fadeIn()
            // 获取验证码
            dom.noEmailGetCode.click(function () {
                var EmailAdd = $.trim(dom.Email.val())
                if (!EmailAdd) {
                    emailBindTip(space.language.asset.outCoin.noEmail)
                    return
                }
                if (!mailText.test(EmailAdd)) {
                    emailBindTip(space.language.error.mailboxInfo)
                    return
                }
                emailBindTip('')
                util.comAjax({
                    url: space.apiUrl + '790',
                    target: dom.noEmailGetCode,
                    data: {
                        MemberId: space.UID,
                        Email: EmailAdd,
                    },
                }).done(function (res) {
                    if (res.ReturnCode == 1000) {
                        space.error(space.language.asset.outCoin.CodeSend)
                        countDown(dom.noEmailGetCode)
                    } else {
                        space.error(res.ReturnMsg)
                    }
                })
            })
            // 提交绑定邮箱
            dom.EmailSubmit.click(function () {
                var EmailAdd = $.trim(dom.Email.val()),
                    code = $.trim(dom.noEmailCode.val())
                if (!EmailAdd) {
                    emailBindTip(space.language.asset.outCoin.noEmail)
                    return
                }
                if (!mailText.test(EmailAdd)) {
                    emailBindTip(space.language.error.mailboxInfo)
                    return
                }
                if (!code) {
                    emailBindTip(space.language.asset.outCoin.noCode)
                    return
                }
                emailBindTip('')
                space.error(space.language.asset.outCoin.EmailBing, function () {
                    dom.EmailBox.fadeOut()
                }, 1000)
                util.comAjax({
                    url: space.apiUrl + '810',
                    target: dom.EmailSubmit,
                    data: {
                        MemberId: space.UID,
                        Email: EmailAdd,
                        VerifyCode: code,
                    },
                }).done(function (res) {
                    if (res.ReturnCode == 1000) {
                        space.error(space.language.asset.outCoin.EmailBing, function () {
                            dom.EmailBox.fadeOut()
                        }, 1000)
                    } else {
                        space.error(res.ReturnMsg)
                    }
                })
            })
        }

        function setLang() {
            // 语言接口
            var setText = space.setText
            // var language = space.langType
            var langOutcoin = space.language.asset.outCoin

            setText('title', langOutcoin.title)
            setText('items', langOutcoin.items)
            setText('form', langOutcoin.form)
            setText('tips', langOutcoin.tips)
            setText('explain', langOutcoin.explain)
            setText('box', langOutcoin.box)
            setText('status', langOutcoin.status)
            setText('noEmailText', langOutcoin.noEmailText)
            setText('minText', langOutcoin.minText)
            setText('partHint', langOutcoin.partHint)
        }

        setLang()
    }
}(window, document, DH))
