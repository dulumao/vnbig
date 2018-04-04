;
(function (window, document, space) {
    // 修改登录密码
    var initDom = function () {
        return {
            oldPasswordInput: $('#oldPasswordInput'), // 登录密码
            newPasswordInput: $('#newPasswordInput'), // 新登录密码
            newaginPasswordInput: $('#newaginPasswordInput'), // 再次输入新密码
            input: $("input[type='password'],input[type='text']"), // 输入框
            prompt: $('#prompt'), // 提示信息
            cangeSubmit: $('#cangeSubmit'), // 保存按钮
        }
    }
    space.loginInit = function ($html) {
        var dom = initDom()
        // 修改密码输入框的type
        space.setPassWordInput()
        // 加载语言文本
        var lang = DH.language
        // 设置语言
        setLang()
        // 保存按钮绑定事件
        dom.cangeSubmit.on('click', function () {
            behavior()
        })

        // 用户行为处理
        function behavior() {
            var data = {
                OldPassword: dom.oldPasswordInput.val(),
                NewPassword: dom.newPasswordInput.val(),
                CNewPassword: dom.newaginPasswordInput.val(),
            }
            if (data.OldPassword == '') {
                dom.prompt.html(lang.safety.login.prompt[0])// "请输入原登录密码"
            } else if (data.NewPassword == '') {
                dom.prompt.html(lang.safety.login.prompt[1])// "新登录密码不能为空"
            } else if (!space.loginComplicacy(data.NewPassword)) {
                dom.prompt.html(lang.error.complicacy)// "新登录密码强度弱"                
            } else if (data.CNewPassword == '') {
                dom.prompt.html(lang.safety.login.prompt[2])// "再次输入新密码不能为空"
            } else if (data.NewPassword != data.CNewPassword) {
                dom.prompt.html(lang.safety.login.prompt[3])// "两次密码请输入一致"
            } else {
                changePassword(data)// 请求修改登录密码
            }
        };
        function setTips(_e) {
            dom.prompt.html('')
            // 回车键提交
            var keynum = (_e.keyCode ? _e.keyCode : _e.which)
            if (keynum == '13') {
                dom.cangeSubmit.click()
            }
        }
        $html.on('keyup', "[type='password']", function (e) {
            setTips(e)
        })
        $html.on('change', "[type='password']", function (e) {
            setTips(e)
        })
        // 最后一个输入框添加回车提交请求功能
        // dom.newaginPasswordInput.keyup(function (event) {
        //     if (event.keyCode == 13) {
        //         dom.cangeSubmit.click();
        //     }
        // });

        // 向后台发起修改密码请求
        function changePassword(data) {
            data.MemberId = DH.UID
            $("input[type='password']").blur()// 避免频繁提交请求
            util.comAjax({
                url: DH.apiUrl + '640',
                json: true,
                type: 'POST',
                target: '#cangeSubmit',
                data: data,
            }).done(function (res) {
                // console.log(res);
                if (res.ReturnCode == 1000) {
                    // console.log(res);
                    dom.input.val('')
                    DH.error(lang.safety.login.prompt[4], function () {
                        util.cookie.remove('memberkey')
                        location.replace('login.html')
                    })// "密码修改成功，请重新登录"

                    // 登录成功之后待处理
                } else {
                    DH.error(res.ReturnMsg)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        }
        function setLang() {
            var setText = space.setText

            setText('title', lang.safety.login.title)
            setText('tips', lang.safety.login.tips)
            setText('SLitems', lang.safety.login.SLitems)
            setText('Btn', lang.safety.login.Btn)
            setText('prompt', lang.safety.login.prompt)
        }
    }
}(window, document, DH))
