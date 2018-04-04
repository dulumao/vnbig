/*
 *  登录状态判断及获取用户信息
 *  日期：2018/1/30.
 *  作者：Math
 * */
;
(function ($, space, window) {
    'use strcit'

    var ele = { // 首页元素
        $unlog: $('#unlogin'), // 头部未登录框
        $log: $('#login'), // 头部已登录框
        $name: $('#userName'), // 用户名
        $quit: $('#quit'), // 退出按钮
    }
    var indexele = {
        $toLogin: $('#toLogin'), // 登入框
        $isLogin: $('#isLogin'), // 已登入框
        $uName: $('#bannerUserName'), // 用户名
    }
    var uname = '---' // 用户名
    var loginPage = '/login.html'

    function init() {
        // 退出登录
        ele.$quit.click(quit)
        isLogin()
    }

    // 验证是否登录
    function isLogin() {
        var uid = util.cookie.get('memberkey')
        if (uid) {
            if (window.location.pathname.indexOf(loginPage) >= 0) {
                window.location.replace('/')
                return
            }

            // 已登录
            space.UID = uid
            // 显示登录状态的头部
            ele.$log.removeClass('hide')
            ele.$unlog.addClass('hide')
            getUserInfo()
        } else {
            // 未登录
            space.UID = ''
            // 显示未登录状态的头部
            ele.$log.addClass('hide')
            ele.$unlog.removeClass('hide')

            var $loginBtn = $('#login-btn'),
                $registerBtn = $('#register-btn'),
                href = window.location.href.replace(/\??redir=[^&]+/, '')
            $loginBtn.attr('href', loginPage + '?redir=' + encodeURIComponent(href))
            $registerBtn.attr('href', '/register-mail.html?redir=' + encodeURIComponent(href))
            resetUrl($('#property').find('a'))
            resetUrl($('#safety').find('a'))
        }
    }

    // 未登录时重置url
    function resetUrl($ele) {
        var redir = space.domain + $ele.attr('href')
        $ele.attr('href', loginPage + '?redir=' + encodeURIComponent(redir))
    }

    // 获取用户在后台是否是登录状态
    function getUserInfo() {
        if (!space.UID) {
            return
        }
        // 判断在服务器是否登录状态
        util.comAjax({
            url: space.apiUrl + '221',
            json: true,
            type: 'POST',
            two: true,
            data: {
                Member: space.UID,
            },
        }).done(function (res) {
            var data = res.Data
            if (res.ReturnCode == 1000) {
                if (data.IsLogin) {
                    if (!data.MemberID) {
                        data.MemberID = data.Email || space.language.error.nullUser
                    }
                    util.cookie.set('memberkey', data.MemberKey)
                    // 改变全局变量
                    uname = data.MemberID// 用户名
                    // uid = data.ID// 用户id
                    // pro = '￥' + data.property// 用户资产
                    // 头部用户名显示
                    ele.$name.html(uname)
                    loginStatus()
                } else {
                    // 状态未登录
                    space.error(space.language.loginRegister.register.rpLogin, function () {
                        removeUid()
                    })
                    return true
                }
            } else {
                space.error(res.ReturnMsg, function () {
                    removeUid()
                })
            }
        }).fail(function (err) {
            // 防止不停刷新页面导致的ajax失败
            setTimeout(removeUid, 1000)
            space.fail(err)
        })
    }

    // 设置头部状态功能
    function loginStatus() {
        if (space.UID) {
            indexele.$toLogin.addClass('hide')
            indexele.$isLogin.removeClass('hide')
        } else {
            indexele.$toLogin.removeClass('hide')
            indexele.$isLogin.addClass('hide')
        }
        indexele.$uName.text(uname)
        // indexele.$uid.text(uid);
        // indexele.$pro.text(pro);
    }

    // 退出登录功能
    function quit() {
        removeUid()
    }

    // 删除所有登录信息
    function removeUid() {
        // util.cookie.remove('member')
        util.cookie.remove('memberkey')
        // util.cookie.remove('uname')
        space.UID = ''
        ele.$log.addClass('hide')
        ele.$unlog.removeClass('hide')
        uname = '---'
        // uid = '---'
        // pro = '---'
        var loca = window.location,
            pathname = loca.pathname,
            href = loca.href
        if (/^\/(assets|safety)\.html/.test(pathname)) {
            window.location.replace(loginPage + '?redir=' + encodeURIComponent(href))
        } else {
            location.reload()
        }
    }

    init()
}(jQuery, DH, window))
