// 忘记密码
;
(function () {
    // 输入框对象
    var ele = {
        $main: $('.inpbox'),
        $fmail: $('#fname'),
        $fCode: $('#fmailCode'),
        $fpass: $('#fpass'),
        $fRpass: $('#fRpass'),
        $fError: $('#fError'),
    }
    // 正则
    var mailtest = DH.regMail // 邮箱正则
    var codetest = /^[0-9]*$/
    // 按钮对象
    var btn = {
        $fcodeBtn: $('#fGetCode'),
        $fsubmitBtn: $('#fsubmitBtn'),
    }
    if (DH.UID) {
        $('#quit').click()
        return
    }
    var ableCode = true
    function init() {
        reset()
        ele.$fmail.change(function () {
            var val = $(this).val()
            if (!mailtest.test(val) && !codetest.test(val)) {
                // ////请输入正确的邮箱或手机
                ele.$fError.text(DH.language.error.PMname)
                ele.$fError.removeClass('visibility')
            }; 
        })
        ele.$fCode.change(function () {
            var val = $(this).val()
            if (!codetest.test(val)) {
                ele.$fError.text(DH.language.error.code)
                ele.$fError.removeClass('visibility')
            };
        })
        ele.$main.on('keyup', '#fmail,#fCode,#fpass,#fRpass', function (e) {
            setTips(this, e)
        })
        btn.$fsubmitBtn.click(function () {
            var mail = $.trim(ele.$fmail.val()),
                code = $.trim(ele.$fCode.val()),
                pass = $.trim(ele.$fpass.val()),
                rePass = $.trim(ele.$fRpass.val())


            // 280 手机找回密码 300邮箱找回密码
            var type = 280
            if (mail == '') {
                ele.$fError.text(DH.language.error.mailboxEmpty)
                ele.$fError.removeClass('visibility')
                return
            }
            if (!mailtest.test(mail) && !codetest.test(mail)) {
                // //请输入正确的邮箱或手机
                ele.$fError.text(DH.language.error.PMname)
                ele.$fError.removeClass('visibility')
                return
            };
            if (code == '') {
                ele.$fError.text(DH.language.error.codeEmpty)
                ele.$fError.removeClass('visibility')
                return
            }
            if (!codetest.test(code)) {
                ele.$fError.text(DH.language.error.code)
                ele.$fError.removeClass('visibility')
                return
            };
            if (pass == '') {
                ele.$fError.text(DH.language.error.newpassEmpty)
                ele.$fError.removeClass('visibility')
                return
            }
            if (rePass == '') {
                ele.$fError.text(DH.language.error.newRepassEmpty)
                ele.$fError.removeClass('visibility')
                return
            }
            if (pass != rePass) {
                ele.$fError.text(DH.language.error.passNo)
                ele.$fError.removeClass('visibility')
                return
            }
            if (mailtest.test(mail)) {
                type = 300
            } else {
                type = 280
            };
            var text = btn.$fsubmitBtn.html()
            btn.$fsubmitBtn.html('<span class="btn-loading"><i></i></span>' + text)
            util.comAjax({
                url: DH.apiUrl + type,
                json: true,
                type: 'POST',
                target: '#fsubmitBtn',
                data: {
                    Phone: mail,
                    IdentifyingCode: code,
                    Pass: pass,
                    RePass: rePass,
                },
            }).done(function (res) {
                btn.$fsubmitBtn.html(text)
                if (res.ReturnCode == 1000) {
                    // 找回密码成功
                    DH.error(DH.language.tip.forget)
                    // 跳登录页面
                    setTimeout(function () {
                        DH.redirLogin()
                    }, 1500)
                } else {
                    ele.$fError.text(res.ReturnMsg)
                    ele.$fError.removeClass('visibility')
                }
            }).fail(function (err) {
                btn.$fsubmitBtn.html(text)
                DH.fail(err)
            })
        })
        btn.$fcodeBtn.click(function () {
            getCode()
        })
    }
    // 重置内容
    function reset() {
        ele.$fmail.val('')
        ele.$fCode.val('')
        ele.$fpass.val('')
        ele.$fRpass.val('')
        ele.$fError.removeClass('hide')
    }
    // 设置输入框提示
    function setTips(_this, _e) {
        ele.$fError.addClass('visibility')
        // 回车键提交
        var keynum = (_e.keyCode ? _e.keyCode : _e.which)
        if (keynum == '13') {
            btn.$fsubmitBtn.click()
        }
    }
    // 获取邮箱验证码
    function getCode() {
        // 发送间隔
        var codeCount = 60
        // 6 邮箱验证  3 短信验证
        if (ableCode) {
            var mail = $.trim(ele.$fmail.val())
            if (mail == '') {
                ele.$fError.text(DH.language.error.mailboxEmpty)
                ele.$fError.removeClass('visibility')
                return
            }
            if (!mailtest.test(mail) && !codetest.test(mail)) {
                // 请输入正确的邮箱或手机
                ele.$fError.text(DH.language.error.PMname)
                ele.$fError.removeClass('visibility')
                return
            };
            // 按钮变为不可点
            ableCode = false
            util.comAjax({
                url: DH.apiUrl + '290',
                json: true,
                type: 'POST',
                target: '#fGetCode',
                data: {
                    Phone: mail,
                    SmsType: 3,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    ele.$fError.addClass('visibility')
                    unclick()
                    btn.$fcodeBtn.text(codeCount)
                    // 设置倒计时
                    var index = setInterval(function () {
                        btn.$fcodeBtn.text(codeCount)
                        codeCount -= 1
                        if (codeCount == 0) {
                            // 倒计时结束
                            clearInterval(index)
                            canclick()
                            btn.$fcodeBtn.text(DH.language.common.getCode)
                            ableCode = true
                        }
                    }, 1000)
                } else {
                    ele.$fError.text(res.ReturnMsg)
                    ele.$fError.removeClass('visibility')
                    ableCode = true
                }
            }).fail(function (err) {
                DH.fail(err)
                ableCode = true
            })
        } else {
            return
        }
    }
    function unclick() {
        btn.$fcodeBtn.css('backgroundColor', '#ccc')
    }
    function canclick() {
        btn.$fcodeBtn.css('backgroundColor', '#006885')
    }
    init()
}())
