// 头部以及主体的登录事件
;
(function () {
    'use strict'

    var codeNums // 获取的验证码
    // uid = '---', // 用户id
    // pro = '---'// 用户资产
    var mailText = DH.regMail // 邮箱正则
    var $codeBox = $('#codeBox'), // 获取验证码按钮
        $loginBtn = $('#lLoginBtn'), // 登录按钮
        loginele = {
            $lUid: $('#lUid'), // 用户名
            $lPass: $('#lPass'), // 密码
            $lCode: $('#lCode'), // 验证码
            $lError: $('#lError'), // 错误提示
            $lRegisterBtn: $('#lRegisterBtn'), // 注册会员
        }

    // 重置密码
    var $restPasswrod = $('#restPasswrod'),
        $restAccount = $('#restAccount'),
        $restCode = $('#restCode'),
        $restGetCode = $('#restGetCode'),
        $restPwd = $('#restPwd'),
        $restConPwd = $('#restConPwd'),
        $restSubmit = $('#restSubmit'),
        restPasswrod

    // 初始化
    function init() {
        resetInput()
        setLang()
        // 获取验证码
        $codeBox.click(function () {
            getCode()
        })
        getCode()

        // 登录操作
        loginFn()

        // 重置登录密码
        resetPassword()
    }

    var redir = util.getUrlParams('redir') || '/'

    if (redir.indexOf(DH.domain) !== 0 && redir !== '/') { // 判断是否为外链
        redir = '/'
    }

    if (/\/(login|register-mail|register-phone)\.html/.test(redir)) {
        redir = '/'
    }

    if (redir && window.location.pathname === '/login.html') {
        var $toForgetPwd = $('.to-forgetPwd')
        $toForgetPwd.attr('href', $toForgetPwd.attr('href') + '?redir=' + encodeURIComponent(redir))

        var $creadAccount = $('.cread-account')
        $creadAccount.attr('href', $creadAccount.attr('href') + '?redir=' + encodeURIComponent(redir))
    }

    // 登录操作
    function loginFn() {
        loginele.$lUid.keyup(function (e) {
            setTips(this, e)
        })
        loginele.$lPass.keyup(function (e) {
            setTips(this, e)
        })
        loginele.$lCode.off('keyup').on('keyup', function (e) {
            setTips(this, e)
        })
        loginele.$lCode.off('input').on('input', function () {
            if (loginele.$lCode.val()) {
                $(this).siblings('.input-tip').hide()
            } else {
                $(this).siblings('.input-tip').show()
            }
        })
        /* loginele.$lUid.change(function (e) {
         setTips(this, e)
         })
         loginele.$lPass.change(function (e) {
         setTips(this, e)
         })
         loginele.$lCode.change(function (e) {
         setTips(this, e)
         })*/


        // 登录
        $loginBtn.click(function () {
            var ajdata,
                text
            var id = $.trim(loginele.$lUid.val()),
                pass = $.trim(loginele.$lPass.val()),
                code = $.trim(loginele.$lCode.val())
            if (id == '') {
                // loginele.$lUid.addClass('inputError')
                loginele.$lError.text(DH.language.error.idEmpty)
                loginele.$lError.removeClass('visibility')
                return
            }
            if (!mailText.test(id)) {
                loginele.$lError.text(DH.language.loginRegister.error.emailError)
                loginele.$lError.removeClass('visibility')
                return
            }
            if (pass == '') {
                // loginele.$lPass.addClass('inputError')
                loginele.$lError.text(DH.language.error.passEmpty)
                loginele.$lError.removeClass('visibility')
                return
            }
            if (code == '') {
                // loginele.$lCode.siblings('.input-tip').show();
                loginele.$lError.text(DH.language.error.codeEmpty)
                loginele.$lError.removeClass('visibility')
                return
            }
            if (code != codeNums) {
                // loginele.$i_code.addClass('inputError')
                loginele.$lError.text(DH.language.error.code)
                loginele.$lError.removeClass('visibility')
                return
            }
            ajdata = {
                MemberId: id,
                Pass: pass,
            }
            text = $loginBtn.html()
            $loginBtn.html('<span class="btn-loading"><i></i></span>' + text)
            util.comAjax({
                url: DH.apiUrl + '220',
                target: $loginBtn,
                data: ajdata,
            }).done(function (res) {
                var data = res.Data
                $loginBtn.html(text)
                if (res.ReturnCode == 1000 && res.Data.MemberID) {
                    // 用户ID写入cookie
                    util.cookie.set('memberkey', data.MemberKey)
                    // util.cookie.set('uname', data.MemberID)
                    // 用户ID写入全局对象
                    DH.UID = data.MemberKey
                    // 已经登入
                    window.location.replace(redir)

                    // init();
                } else if (res.ReturnCode == 3999) { // 密码过于简单
                    DH.error(DH.language.loginRegister.login.resetTip, function () {
                        $restAccount.html(id)
                        restPasswrod.open()
                    }, 3000)
                } else {
                    loginele.$lError.text(res.ReturnMsg || DH.language.error.returnCode)
                    loginele.$lError.removeClass('visibility')
                    getCode()
                }
            }).fail(function (err) {
                $loginBtn.html(text)
                DH.fail(err)
                getCode()
            })
        })
    }

    // 重置输入框
    function resetInput() {
        loginele.$lUid.val('')
        loginele.$lPass.val('')
        loginele.$lCode.val('')
        loginele.$lUid.siblings().removeClass('hide')
        loginele.$lPass.siblings().removeClass('hide')
        loginele.$lCode.siblings('.input-tip').show()
    }

    function setTips(_this, _e) {
        var keynum
        loginele.$lError.addClass('visibility').html('')
        // 回车键提交
        keynum = (_e.keyCode ? _e.keyCode : _e.which)
        if (keynum == '13') {
            $loginBtn.click()
        }
    }


    // 获取验证码
    function getCode() {
        util.comAjax({
            url: DH.apiUrl + '210',
            json: true,
            type: 'POST',
            target: $codeBox,
            data: {},
        }).done(function (res) {
            var data = res.Data
            if (res.ReturnCode == 1000) {
                // 记录验证码 做判断
                codeNums = data
                $codeBox.text(data)
            } else {
                DH.error()
            }
        }).fail(function (err) {
            DH.fail(err)
        })
    }

    function setLang() {
        var setText = DH.setText
        // 语言接口
        var lang = DH.language.loginRegister.login

        setText('rest', lang.resetPwd)
    }


    // 重置密码
    restPasswrod = new dialog.modal($restPasswrod)
    function resetPassword() {
        var restTip,
            viewTimer,
            restLang
        if ($restPasswrod.length === 0) {
            return
        }
        restTip = function (msg) {
            $('#reseTip').css('visibility', 'visible').html(msg)
        }

        // 获取验证码倒计时
        function countDown(obj, time) {
            var text
            if (obj.attr('disabled')) {
                return
            }
            time = time || 60
            text = obj.html()
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

        $restGetCode.on('click', function () {
            util.comAjax({
                url: DH.apiUrl + '291',
                target: $restGetCode,
                data: {
                    Phone: $restAccount.html(),
                    SmsType: 9, // 密码重置
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    countDown($restGetCode)
                } else {
                    DH.error(res.ReturnMsg)
                }
            }).fail(function () {
                DH.fail(DH.language.common.ajaxInfo[2])
            })
        })
        $restConPwd.on('keyup', function (e) {
            var code = e.keyCode || e.which
            if (code === 13) {
                $restSubmit.trigger('click')
            }
        })
        restLang = DH.language.error
        $restSubmit.on('click', function () {
            var data = {
                account: $restAccount.html(),
                code: $.trim($restCode.val()),
                pwd: $.trim($restPwd.val()),
                conPwd: $.trim($restConPwd.val()),
            }
            if (!data.code) {
                restTip(restLang.codeEmpty)
                return
            }
            if (!data.pwd) {
                restTip(restLang.newpassEmpty)
                return
            }
            if (!DH.loginComplicacy(data.pwd)) {
                restTip(DH.language.error.complicacy)
                return
            }
            if (data.pwd !== data.conPwd) {
                restTip(restLang.passNo)
                return
            }
            restTip('&nbsp;')
            util.comAjax({
                url: DH.apiUrl + '919',
                target: $restSubmit,
                data: {
                    EmailAddress: data.account,
                    IdentifyingCode: data.code,
                    PassWord: data.pwd,
                    RePassWord: data.conPwd,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    restPasswrod.close()
                    DH.error(DH.language.loginRegister.login.resetOk, function () {
                        window.location.reload()
                    })
                } else {
                    DH.error(res.ReturnMsg)
                }
            }).fail(function () {
                DH.fail(DH.language.common.ajaxInfo[2])
            })
        })
    }

    init()
}())
