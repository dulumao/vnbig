;
(function (window, document, space) {
    // 找回交易密码
    var initDom = function () {
        return {
            callNameInput: $('#callNameInput'), // 手机号
            numberIdInput: $('#numberIdInput'), // 验证码
            verificationCode: $('#verificationCode'), // 发送验证码按钮
            input: $("input[type='password'],input[type='text']"), // 输入框
            prompt: $('#prompt'), // 提示信息
            determineBtn: $('#determineBtn'), // 确定
            newpasswordInput: $('#newpasswordInput'), // 新交易密码
            RePasswordInput: $('#RePasswordInput'), // 重复新密码
        }
    }
    var state = {
        title: '',
        url: window.location.href.split('?')[0],
    }
    space.backInit = function ($html) {
        var dom = initDom()
        // 修改密码输入框的type
        space.setPassWordInput()
        // 加载语言文本
        var lang = DH.language
        // 设置语言
        setLang()
        // 判断有无设置交易密码
        isSetJYpassword()
        function getNewPage(pageName) {
            DH.getCenterHtml('safety-' + pageName + '.html', $('#centerRight'), pageName + 'Init')
        }
        function isSetJYpassword() {
            util.comAjax({
                url: DH.apiUrl + '410',
                json: true,
                type: 'POST',
                data: {
                    MemberId: DH.UID,
                },
            }).done(function (res) {
                if (res.ReturnCode != 1000) {
                    // 未设置交易密码时弹窗之后跳设置交易密码页面
                    DH.error(lang.safety.back.prompt[0], function () {
                        history.pushState(state, '', state.url + '?modle=transaction')
                        getNewPage('transaction')
                        $("li[srcurl='transaction']").addClass('selected').siblings().removeClass('selected')
                    })// "请先设置您的交易密码!"
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        };
        // 保存按钮绑定事件
        dom.determineBtn.on('click', function () {
            behavior()
        })
        dom.verificationCode.on('click', function () {
            getCode()
        })


        // 验证码输入框值变化时，提示信息消失
        function setVerification(_e) {
            dom.prompt.html('')
            // 回车键提交
            var keynum = (_e.keyCode ? _e.keyCode : _e.which)
            if (keynum == '13') {
                getCode()
            }
        }
        $html.on('keyup', '#callNameInput', function (e) {
            setVerification(e)
        })
        $html.on('change', '#callNameInput', function (e) {
            setVerification(e)
        })
        $html.on('keyup', '#numberId', function () {
            dom.prompt.html('')
        })
        $html.on('change', '#numberId', function () {
            dom.prompt.html('')
        })
        // 输入框值变化时，提示信息消失
        function setTips(_e) {
            dom.prompt.html('')
            // 回车键提交
            var keynum = (_e.keyCode ? _e.keyCode : _e.which)
            if (keynum == '13') {
                dom.determineBtn.click()
            }
        }
        $html.on('keyup', "[type='password']", function (e) {
            setTips(e)
        })
        $html.on('change', "[type='password']", function (e) {
            setTips(e)
        })
        var ableCode = true// 发送验证码按钮是否可点
        // 获取手机验证码
        function getCode() {
            // 发送间隔
            var codeCount = 60
            if (ableCode) {
                var tel = $.trim(dom.callNameInput.val())
                // console.log(tel);
                if (!tel) {
                    dom.prompt.html(lang.safety.back.prompt[1])// "手机号/邮箱号不能为空！"
                    return
                }
                if (!space.regMail.test(tel)) {
                    dom.prompt.html(lang.error.PMname)
                    return
                }
                // 按钮变为不可点
                ableCode = false
                util.comAjax({
                    url: DH.apiUrl + '290',
                    json: true,
                    type: 'POST',
                    data: {
                        MemberKey: DH.UID,
                        Phone: tel,
                        CountryCode: '',
                        SmsType: 4, // 找回交易密码发码 此值为‘4’
                    },
                }).done(function (res) {
                    dom.callNameInput.blur()
                    if (res.ReturnCode == 1000) {
                        // console.log(res);
                        dom.verificationCode.addClass('click-out')
                        dom.verificationCode.text(codeCount + 's')
                        // 设置倒计时
                        var index = setInterval(function () {
                            dom.verificationCode.text(codeCount + 's')
                            codeCount -= 1
                            if (codeCount == 0) {
                                // 倒计时结束
                                clearInterval(index)
                                dom.verificationCode.removeClass('click-out')
                                dom.verificationCode.text(DH.language.common.getCode)
                                ableCode = true
                            }
                        }, 1000)
                    } else {
                        DH.error(res.ReturnMsg)
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
        // 用户行为处理
        function behavior() {
            var data = {
                Call: $.trim(dom.callNameInput.val()),
                Code: $.trim(dom.numberIdInput.val()),
                Password: $.trim(dom.newpasswordInput.val()),
                RePassword: $.trim(dom.RePasswordInput.val()),
            }
            if (!data.Call) {
                dom.prompt.html(lang.safety.back.prompt[1])// "输入邮箱"
                return
            }
            if (!space.regMail.test(data.Call)) {
                dom.prompt.html(lang.error.PMname)
                return
            }
            if (!data.Code) {
                dom.prompt.html(lang.error.codeEmpty)// "请输入验证码"
                return
            }
            if (!data.Password) {
                dom.prompt.html(lang.safety.back.prompt[2])// "新交易密码不能为空"
                return
            }
            if (!space.passComplicacy(data.Password)) {
                // 判断密码强度
                dom.prompt.html(lang.safety.common.passComplicacy)// "新密码长度不能小于6位"
                return
            }
            if (!data.RePassword) {
                dom.prompt.html(lang.safety.back.prompt[3])// "重复的新密码不能为空"
                return
            }
            if (data.Password != data.RePassword) {
                dom.prompt.html(lang.safety.back.prompt[4])// "两次密码请输入一致"
                return
            }
            backPassword(data)// 请求找回交易密码

        };
        // 向后台发起找回交易密码请求
        function backPassword(data) {
            data.MemberId = DH.UID
            $("input[type='password']").blur()// 避免频繁提交请求
            util.comAjax({
                url: DH.apiUrl + '660',
                json: true,
                type: 'POST',
                target: '#determineBtn',
                data: data,
            }).done(function (res) {
                // console.log(res);
                if (res.ReturnCode == 1000) {
                    // console.log(res);
                    dom.input.val('')
                    DH.error(lang.safety.back.prompt[5], function () {
                        window.location.reload()
                    })// "密码修改成功！"
                } else {
                    DH.error(res.ReturnMsg)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        }
        function setLang() {
            var setText = space.setText
            setText('title', lang.safety.back.title)
            setText('SBitems', lang.safety.back.SBitems)
            setText('Btn', lang.safety.back.Btn)
        }
    }
}(window, document, DH))
