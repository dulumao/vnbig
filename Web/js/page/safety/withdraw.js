;
(function (window, document, space) {
    // 修改提现密码

    var initDom = function () {
        return {
            oldPasswordInput: $('#oldPasswordInput'), // 原提现密码
            newPasswordInput: $('#newPasswordInput'), // 新提现密码
            prompt: $('#prompt'), // 提示信息
            cangeSubmit: $('#cangeSubmit'), // 确定
            input: $("input[type='password'],input[type='text']"), // 输入框
            newaginPasswordInput: $('#newaginPasswordInput'), // 重复新密码
        }
    }
    space.withdrawInit = function ($html) {
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
        var isSetPwd = true // 是否设置过提现密码
        // 用户行为处理
        function behavior() {
            var data = {
                OldPass: dom.oldPasswordInput.val(),
                NewPass: dom.newPasswordInput.val(),
                RePass: dom.newaginPasswordInput.val(),
            }
            if (isSetPwd && data.OldPass == '') {
                dom.prompt.html(lang.safety.withdraw.prompt[0])// "请输入原提现密码"
            } else if (data.NewPass == '') {
                dom.prompt.html(lang.safety.withdraw.prompt[1])// "新提现密码不能为空"
            } else if (!space.passComplicacy(data.NewPass)) {
                // 判断密码强度
                dom.prompt.html(lang.safety.common.passComplicacy)// "新密码长度不能小于6位"
            } else if (data.RePass == '') {
                dom.prompt.html(lang.safety.withdraw.prompt[2])// "重复的新密码不能为空"
            } else if (data.NewPass != data.RePass) {
                dom.prompt.html(lang.safety.withdraw.prompt[3])// "两次密码请输入一致"
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
        // 判断有无设置提现密码
        isSetJYpassword()
        function isSetJYpassword() {
            util.comAjax({
                url: DH.apiUrl + '750',
                json: true,
                type: 'POST',
                data: {
                    MemberId: DH.UID,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    if (!res.Data.TiXianPassResult) {
                        isSetPwd = false
                        dom.oldPasswordInput.attr('disabled', true)
                    }
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
                url: DH.apiUrl + '820',
                json: true,
                type: 'POST',
                target: '#cangeSubmit',
                data: data,
            }).done(function (res) {
                // console.log(res);
                if (res.ReturnCode == 1000) {
                    // console.log(res);
                    dom.input.val('')
                    DH.error(lang.safety.withdraw.prompt[4], function () {
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

            setText('title', lang.safety.withdraw.title)
            setText('tips', lang.safety.withdraw.tips)
            setText('STitems', lang.safety.withdraw.STitems)
            setText('Btn', lang.safety.withdraw.Btn)
        }
    }
}(window, document, DH))
