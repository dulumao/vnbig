// 注册逻辑
;
(function () {
    // 输入框对象
    var ele = {
        $selectTel: $('#selectTel'), // 手机注册  选择国家
        $rTel: $('#rTel'), // 手机注册  手机号码
        $rCode: $('#rCode'), // 手机注册  手机验证码
        $rPass: $('#rPass'), // 手机注册  设置密码
        $rRpass: $('#rRpass'), // 手机注册  重复密码
        $rReferrer: $('#rReferrer'), // 手机注册 推荐人
        $rError: $('#rError'), // 手机注册 错误提示
        $mError: $('#mError'), // 邮箱注册  错误提示
        $countryArea: $('#countryArea'), // 邮箱注册  选择国家
        $mailbox: $('#mailbox'), // 邮箱注册  邮箱号码
        $loginpwd: $('#loginpwd'), // 邮箱注册  设置密码
        $copypwd: $('#copypwd'), // 邮箱注册  重复密码
        $mailCode: $('#mailCode'), // 邮箱注册  数字验证码
        $TJman: $('#TJman'), // 邮箱注册  推荐人
    }
    // 按钮对象
    var btn = {
        $rGetCode: $('#rGetCode'), // 手机注册获取验证码
        $getNumCode: $('#getNumCode'), // 获取验证码
        $rRegisterBtn: $('#rRegisterBtn'), // 手机注册提交按钮
        $mrRegisterBtn: $('#mrRegisterBtn'), // 邮箱注册提交按钮
        $rAgree: $('#rAgree'),
    }
    var agree = true
    var quhao = '86'
    var ableCode = true
    var phoneReferrer, // 手机注册 推荐人
        mailboxReferrer, // 邮箱注册推荐人
        sn
    getNumCode()

    // 同意用户协议
    if (DH.UID) {
        $('#quit').click()
        return
    }
    function init() {
        var redir = util.getUrlParams('redir') || '/'
        var $toLogin = $('.to-login')
        $toLogin.attr('href', $toLogin.attr('href') + '?redir=' + encodeURIComponent(redir))
        reset()
        // 输入框输入事件
        ele.$rTel.keyup(function (e) {
            setTips(this, e)
        })
        ele.$rCode.keyup(function (e) {
            setTips(this, e)
        })
        ele.$rPass.keyup(function (e) {
            setTips(this, e)
        })
        ele.$rRpass.keyup(function (e) {
            setTips(this, e)
        })
        // ele.$rReferrer.keyup(function(e){
        //     setTips(this, e)
        // })
        // 注册start
        ele.$mailbox.keyup(function (e) {
            setTips(this, e)
        })
        ele.$loginpwd.keyup(function (e) {
            setTips(this, e)
        })
        ele.$copypwd.keyup(function (e) {
            setTips(this, e)
        })
        ele.$mailCode.keyup(function (e) {
            setTips(this, e)
        })
        // ele.$TJman.keyup(function(e){
        //     setTips(this, e)
        // })

        ele.$mailbox.change(function (e) {
            setTips(this, e)
        })
        ele.$loginpwd.change(function (e) {
            setTips(this, e)
        })
        ele.$copypwd.change(function (e) {
            setTips(this, e)
        })
        ele.$mailCode.change(function (e) {
            setTips(this, e)
        })
        // ele.$TJman.change(function(e){
        //     setTips(this, e)
        // })
        // 注册end
        ele.$rTel.change(function (e) {
            setTips(this, e)
        })
        ele.$rCode.change(function (e) {
            setTips(this, e)
        })
        ele.$rPass.change(function (e) {
            setTips(this, e)
        })
        ele.$rRpass.change(function (e) {
            setTips(this, e)
        })
        // ele.$rReferrer.change(function(e){
        //     setTips(this, e)
        // })
        ele.$selectTel.change(function () {
            quhao = $(this).val()
        })
        btn.$rGetCode.click(function () {
            getCode()
        })
        btn.$rAgree.click(function () { // 同意协议
            var _this = $(this)
            agree = !agree
            _this.toggleClass('tick')
        })


        // 点击重新获取数字验证码
        btn.$getNumCode.on('click', function () {
            getNumCode()
        })
        // 手机注册按钮
        btn.$rRegisterBtn.click(function () {
            var tel = $.trim(ele.$rTel.val()),
                code = $.trim(ele.$rCode.val()),
                pass = $.trim(ele.$rPass.val()),
                rePass = $.trim(ele.$rRpass.val()),
                rReferrer = $.trim(ele.$rReferrer.val()),
                area = ele.$selectTel.val()
            // Referrer = $.trim(ele.$rReferrer.val());
            if (area == '') {
                ele.$rError.text(DH.language.loginRegister.error.echooseArea)
                ele.$rError.removeClass('visibility')
                return
            }
            if (tel == '') {
                ele.$rError.text(DH.language.loginRegister.error.ephoneNull)
                ele.$rError.removeClass('visibility')
                return
            }
            if (code == '') {
                ele.$rError.text(DH.language.loginRegister.error.einputCode)
                ele.$rError.removeClass('visibility')
                return
            }
            if (pass == '') {
                ele.$rError.text(DH.language.loginRegister.error.einputPwd)
                ele.$rError.removeClass('visibility')
                return
            } else if (!DH.loginComplicacy(pass)) {
                ele.$mError.text(DH.language.error.complicacy)
                ele.$mError.removeClass('visibility')
                return
            }
            if (rePass == '') {
                ele.$rError.text(DH.language.loginRegister.error.einputRePwd)
                ele.$rError.removeClass('visibility')
                return
            }
            if (pass != rePass) {
                ele.$rError.text(DH.language.loginRegister.error.epwdDifferent)
                ele.$rError.removeClass('visibility')
                return
            }
            if (!agree) {
                ele.$rError.text(DH.language.common.agree)
                ele.$rError.removeClass('visibility')
                return
            }
            util.comAjax({
                url: DH.apiUrl + '270',
                json: true,
                type: 'POST',
                target: '#rRegisterBtn',
                data: {
                    CountryCode: quhao,
                    Call: tel,
                    IdentifyingCode: code,
                    Pass: pass,
                    RePass: rePass,
                    CommendId: rReferrer,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    // 注册成功跳登录页面
                    DH.error(DH.language.tip.reg, function () {
                        DH.redirLogin()
                    })
                } else {
                    ele.$rError.text(res.ReturnMsg)
                    ele.$rError.removeClass('visibility')
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        })
        // 邮箱注册
        btn.$mrRegisterBtn.click(function () {
            var mail = $.trim(ele.$mailbox.val()), // 邮箱号码
                mailCode = $.trim(ele.$mailCode.val()), // 邮箱数字验证码输入框
                loginp = $.trim(ele.$loginpwd.val()), // 输入密码
                copyp = $.trim(ele.$copypwd.val()), // 重复输入密码
                TJm = $.trim(ele.$TJman.val()),
                codeNum = $.trim(btn.$getNumCode.text())// 记录获取到的验证码
            var mailText = /^[^@]+@[^@]+(\.[^@]+)+$/ // 邮箱正则
            var text
            /* if (!countryArea) {
             ele.$mError.text(DH.language.loginRegister.error.echooseArea)
             ele.$mError.removeClass('visibility')
             return
             }*/
            if (mail == '') {
                ele.$mError.text(DH.language.loginRegister.error.emailNulll)
                ele.$mError.removeClass('visibility')
                return
            }

            if (!mailText.test(mail)) {
                ele.$mError.text(DH.language.loginRegister.error.emailError)
                ele.$mError.removeClass('visibility')
                return
            }

            if (!mailCode) {
                ele.$mError.text(DH.language.loginRegister.error.einputCode)
                ele.$mError.removeClass('visibility')
                return
            }


            if (loginp == '') {
                ele.$mError.text(DH.language.loginRegister.error.einputPwd)
                ele.$mError.removeClass('visibility')
                return
            } else if (!DH.loginComplicacy(loginp)) {
                ele.$mError.text(DH.language.error.complicacy)
                ele.$mError.removeClass('visibility')
                return
            }
            if (copyp == '') {
                ele.$mError.text(DH.language.loginRegister.error.einputRePwd)
                ele.$mError.removeClass('visibility')
                return
            }
            if (loginp != copyp) {
                ele.$mError.text(DH.language.loginRegister.error.epwdDifferent)
                ele.$mError.removeClass('visibility')
                return
            }
            if (!agree) {
                // console.log(DH.language.common.agree)
                ele.$mError.text(DH.language.common.agree)
                ele.$mError.removeClass('visibility')
                return
            }
            text = btn.$mrRegisterBtn.html()
            btn.$mrRegisterBtn.html('<span class="btn-loading"><i></i></span>' + text)
            util.comAjax({
                url: DH.apiUrl + '1390',
                json: true,
                type: 'POST',
                target: '#mrRegisterBtn',
                data: {
                    EmailAddress: mail,
                    PassWord: loginp,
                    RePassWord: copyp,
                    CommendId: TJm,
                    IdentifyingCode: mailCode,
                },
            }).done(function (res) {
                btn.$mrRegisterBtn.html(text)
                if (res.ReturnCode == 1000) {
                    // 注册成功跳登录页面
                    DH.error(DH.language.loginRegister.register.mactivate, function () {
                        DH.redirLogin()
                    })
                } else {
                    ele.$mError.text(res.ReturnMsg)
                    ele.$mError.removeClass('visibility')
                    getNumCode()
                }
            }).fail(function (err) {
                btn.$mrRegisterBtn.html(text)
                DH.fail(err)
            })
        })
        // 注册切换
        // $('.registerTab-nav li').click(function () {
        //     var index = $(this).index();
        //     $('.registerTab-nav li').removeClass('hover');
        //     $('.registerTab-nav li').eq(index).addClass('hover');
        //     $('.registerTab-con .registerTabCon').hide();
        //     $('.registerTab-con .registerTabCon').eq(index).show();
        // })
        // 设置经理人
        phoneReferrer = ele.$rReferrer
        mailboxReferrer = ele.$TJman
        // var inp_Referrer = $('.lang-Referrer');
        sn = util.getUrlParams('sn')
        if (sn) {
            phoneReferrer.val(sn)
            mailboxReferrer.val(sn)
            // $('.tab-mod span').removeClass('tab-cur');
            // $('.tab-mod span:eq(1)').addClass('tab-cur');
            // $('.fm-mod').removeClass('fm-cur');
            // $('.fm-mod:eq(1)').addClass('fm-cur');
            // inp_Referrer.addClass('visibility');
        }
        ;
    }

    // 重置内容
    function reset() {
        ele.$rTel.val('')
        ele.$rCode.val('')
        ele.$rPass.val('')
        ele.$rCode.val('')
        ele.$rRpass.val('')
        ele.$rReferrer.val('')
        ele.$rTel.siblings().removeClass('hide')
        ele.$rCode.siblings().removeClass('hide')
        ele.$rPass.siblings().removeClass('hide')
        ele.$rCode.siblings().removeClass('hide')
        ele.$rRpass.siblings().removeClass('hide')
    };

    // 设置输入框提示
    function setTips(_this, _e) {
        // var value = $(_this).val()
        var keynum
        ele.$rError.addClass('visibility')
        ele.$mError.addClass('visibility')
        // 回车键提交
        keynum = (_e.keyCode ? _e.keyCode : _e.which)
        if (keynum == '13') {
            if ($('.registerTabCon:eq(0)').is(':visible')) {
                btn.$rRegisterBtn.click()
            } else {
                btn.$mrRegisterBtn.click()
            }
        }
    };

    // 获取数字验证码
    function getNumCode() {
        util.comAjax({
            url: DH.apiUrl + '1210',
            json: true,
            type: 'POST',
            data: {},
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data) {
                // 记录验证码 做判断
                btn.$getNumCode.find('img').attr('src', 'data:image/png;base64,' + res.Data)
            } else {
                DH.error()
            }
        }).fail(function (err) {
            DH.fail(err)
        })
    };


    // 获取手机验证码
    function getCode() {
        // 发送间隔
        var codeCount = 60,
            tel
        if (ableCode) {
            tel = $.trim(ele.$rTel.val())
            // console.log(tel);
            if (tel == '') {
                ele.$rError.text(DH.language.error.telEmpty)
                ele.$rError.removeClass('visibility')
                return
            }
            // 按钮变为不可点
            ableCode = false
            util.comAjax({
                url: DH.apiUrl + '290',
                json: true,
                type: 'POST',
                data: {
                    CountryCode: quhao,
                    Phone: tel,
                    SmsType: 1, // 注册时候  此值为‘1’
                },
            }).done(function (res) {
                var index
                if (res.ReturnCode == 1000) {
                    unclick()
                    btn.$rGetCode.text(codeCount + 's')
                    // 设置倒计时
                    index = setInterval(function () {
                        btn.$rGetCode.text(codeCount + 's')
                        codeCount -= 1
                        if (codeCount == 0) {
                            // 倒计时结束
                            clearInterval(index)
                            canclick()
                            btn.$rGetCode.text(DH.language.common.getCode)
                            ableCode = true
                        }
                    }, 1000)
                } else {
                    ele.$rError.text(res.ReturnMsg)
                    ele.$rError.removeClass('visibility')
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
        btn.$rGetCode.css('backgroundColor', '#ccc')
    }

    function canclick() {
        btn.$rGetCode.css('backgroundColor', '#006885')
    }

    init()
}())
