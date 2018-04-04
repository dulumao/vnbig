;
(function (window, document, space) {
    // 修改交易密码

    var initDom = function () {
        return {
            oldPasswordInput: $('#oldPasswordInput'), // 原交易密码
            newPasswordInput: $('#newPasswordInput'), // 新交易密码
            prompt: $('#prompt'), // 提示信息
            cangeSubmit: $('#cangeSubmit'), // 确定
            input: $("input[type='password'],input[type='text']"), // 输入框
            newaginPasswordInput: $('#newaginPasswordInput'), // 重复新密码
        }
    }
    space.transactionInit = function ($html) {
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
        var isSetPwd = true // 是否设置过交易密码
        // 用户行为处理
        function behavior() {
            var data = {
                OldPassword: dom.oldPasswordInput.val(),
                NewPassword: dom.newPasswordInput.val(),
                CNewPassword: dom.newaginPasswordInput.val(),
            }
            if (isSetPwd && data.OldPassword == '') {
                dom.prompt.html(lang.safety.transaction.prompt[0])// "请输入原交易密码"
            } else if (data.NewPassword == '') {
                dom.prompt.html(lang.safety.transaction.prompt[1])// "新交易密码不能为空"
            } else if (!space.passComplicacy(data.NewPassword)) {
                // 判断密码强度
                dom.prompt.html(lang.safety.common.passComplicacy)// "新密码长度不能小于6位"
            } else if (data.CNewPassword == '') {
                dom.prompt.html(lang.safety.transaction.prompt[2])// "重复的新密码不能为空"
            } else if (data.NewPassword != data.CNewPassword) {
                dom.prompt.html(lang.safety.transaction.prompt[3])// "两次密码请输入一致"
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
        // 判断有无设置交易密码
        isSetJYpassword()
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
                    // console.log(res);
                    isSetPwd = false
                    dom.oldPasswordInput.attr('disabled', true)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        };
        // 向后台发起修改密码请求
        function changePassword(data) {
            data.MemberId = DH.UID
            $("input[type='password']").blur()// 避免频繁提交请求
            util.comAjax({
                url: DH.apiUrl + '650',
                json: true,
                type: 'POST',
                target: '#cangeSubmit',
                data: data,
            }).done(function (res) {
                // console.log(res);
                if (res.ReturnCode == 1000) {
                    // console.log(res);
                    dom.input.val('')
                    DH.error(lang.safety.transaction.prompt[4], function () {
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

            setText('title', lang.safety.transaction.title)
            setText('tips', lang.safety.transaction.tips)
            setText('STitems', lang.safety.transaction.STitems)
            setText('Btn', lang.safety.transaction.Btn)
        }
    }
}(window, document, DH))
