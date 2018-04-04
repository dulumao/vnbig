;
(function (window, document, space) {
    // 实名认证
    var initDom = function () {
        return {
            remindrId: $('#remind'), // 提示信息
            authentication0: $('#authentication0'), // 未认证盒子
            authentication1: $('#authentication1'), // 已认证盒子
            authentication2: $('#authentication2'), // 审核未通过盒子
            authentication3: $('#authentication3'), // 审核中证盒子
            realNameInput: $('#realNameInput'), // 真实姓名
            resubmit: $('#resubmit'), // 真实姓名
            numberIdInput: $('#numberIdInput'), // 身份证号
            prompt: $('#prompt'), // 提示信息
            input: $("input[type='password'],input[type='text']"), // 输入框
            determineBtn: $('#determineBtn'), // 确定
            messageName: $('#messageName'), // 已认证真实姓名信息
            messageNumber: $('#messageNumber'), // 已认证身份证号信息
            messageNameing: $('#messageNameing'), // 审核中真实姓名信息
            messageNumbering: $('#messageNumbering'), // 审核中身份证号信息
            messageState: $('#messageState'), // 认证状态
        }
    }
    space.authenticationInit = function ($html) {
        var dom = initDom()
        // 加载语言文本
        var lang = DH.language
        // 设置语言
        setLang()
        // 判断认证进度
        isAuthentication()
        function isAuthentication() {
            util.comAjax({
                url: DH.apiUrl + '750 ',
                json: true,
                type: 'POST',
                data: {
                    memberId: DH.UID,
                },
            }).done(function (res) {
                // console.log(res);
                var data = res.Data
                if (res.ReturnCode === 1000) {
                    getAuthentication(data.RealNameResult)
                } else {
                    DH.error(res.ReturnMsg)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        }
        // 请求认证信息
        function getAuthentication(state) {
            util.comAjax({
                url: DH.apiUrl + '600',
                json: true,
                type: 'POST',
                data: {
                    memberId: DH.UID,
                },
            }).done(function (res) {
                // console.log(res);
                var data = res.Data
                if (res.ReturnCode === 1000) {
                    // console.log(state);
                    var IDNumber = data.IDNumber || ''
                    IDNumber = IDNumber.replace(IDNumber.substr(6, 8), '******')
                    if (state === 1) { // 0. 未认证 1.已认证  2.审核不通过 3 审核中
                        dom.remindrId.addClass('hidden')
                        dom.messageName.html(data.RealName)
                        dom.messageNumber.html(IDNumber)
                        dom.authentication1.removeClass('hidden')
                    } else if (state === 2) {
                        dom.authentication2.removeClass('hidden')
                        dom.resubmit.on('click', function () {
                            dom.remindrId.removeClass('hidden')
                            dom.authentication2.addClass('hidden')
                            dom.authentication0.removeClass('hidden')
                        })
                    } else if (state === 3) {
                        dom.remindrId.addClass('hidden')
                        dom.messageNameing.html(data.RealName)
                        dom.messageNumbering.html(IDNumber)
                        dom.authentication3.removeClass('hidden')
                    } else {
                        dom.remindrId.removeClass('hidden')
                        dom.authentication0.removeClass('hidden')
                    }
                } else {
                    DH.error(res.ReturnMsg)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        }
        // 用户行为处理
        dom.determineBtn.on('click', function () {
            behavior()
        })
        function behavior() {
            var data = {
                RealName: dom.realNameInput.val(),
                IdNumber: dom.numberIdInput.val(),
            }
            if (data.RealName === '') {
                dom.prompt.html(lang.safety.auth.prompt[0])// "请正确填写您的姓名"
            } else if (data.IdNumber !== '') {
                makeAuthentication(data)
            } else {
                dom.prompt.html(lang.safety.auth.prompt[1])// "请正确填写您的身份证号"
            }
        };
        function setTips(_e) {
            dom.prompt.html('')
            // 回车键提交
            var keynum = (_e.keyCode ? _e.keyCode : _e.which)
            if (keynum === '13') {
                dom.determineBtn.click()
            }
        }
        $html.on('keyup', "[type='text']", function (e) {
            setTips(e)
        })
        $html.on('change', "[type='text']", function (e) {
            setTips(e)
        })
        function makeAuthentication(data) {
            data.MemberId = DH.UID
            $("input[type='text']").blur()// 避免频繁提交请求

            util.comAjax({
                url: DH.apiUrl + '610',
                json: true,
                type: 'POST',
                target: '#determineBtn',
                data: data,
            }).done(function (res) {
                // console.log(res);
                if (res.ReturnCode === 1000) {
                    // console.log(res);
                    dom.input.val('')
                    DH.error(lang.safety.auth.prompt[2], function () {
                        // 登录成功之后待处理
                        window.location.reload()
                    })// "认证信息提交成功"
                } else {
                    DH.error(res.ReturnMsg)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        };
        // 设置语言
        function setLang() {
            var setText = space.setText
            setText('title', lang.safety.auth.title)
            setText('tips', lang.safety.auth.tips)
            setText('SAitems', lang.safety.auth.SAitems)
            setText('authSuccess', lang.safety.auth.authSuccess)
            setText('authDefeated', lang.safety.auth.authDefeated)
            setText('authAudit', lang.safety.auth.authAudit)
        }
    }
}(window, document, DH))
