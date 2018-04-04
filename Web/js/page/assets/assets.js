;
(function (space) {
    var state = {
        title: '',
        url: window.location.href.split('?')[0],
    }
    if (!space.UID) { // 未登录
        window.location.replace('login.html')
        return
    }
    // 头部导航添加选中样式
    var nowPage = $('#property')
    nowPage.addClass('selected').siblings().removeClass('selected')
    // iframe选项卡功能
    $('#centerList').on('click', 'li', function () {
        if ($(this).hasClass('selected')) {
            return
        }
        $(this).addClass('selected').siblings().removeClass('selected')
        if ($(this).attr('srcurl') != undefined) {
            var srcurl = $(this).attr('srcurl')
            history.pushState(state, '', state.url + '?modle=' + srcurl)
            setRight(srcurl)
        }
    })
    var $managementRight = $('#managementRight')
    // 加载当前模块
    function loadModle() {
        var modle = util.getUrlParams('modle') || 'manage' // 获取url参数
        $('li[srcurl="' + modle + '"]').addClass('selected').siblings().removeClass('selected')
        setRight(modle)
    }
    loadModle()

    $(window).on('popstate', function () {
        loadModle()
    })

    // 设置右侧页面 保证请求页面页名与面对象名字一致
    function setRight(pageName) {
        space.loadingIn('.center-right')
        $managementRight.addClass('hidden')
        if (/(bankCard)/.test(pageName)) { // 银行卡管理需要实名认证
            space.isReal().done(function (status) {
                if (status) {
                    space.getCenterHtml('assets-' + pageName + '.html', $managementRight, pageName + 'Init', function () {
                        $managementRight.removeClass('hidden')
                        space.loadingOut('.center-right')
                    })
                }
            })
            return
        }
        if (/(deposit|outcoin)/.test(pageName)) { // 提现、转出虚似币 需要实名认证
            space.isReal().done(function (status) {
                if (status && space.hasWithdraw) {
                    space.getCenterHtml('assets-' + pageName + '.html', $managementRight, pageName + 'Init', function () {
                        $managementRight.removeClass('hidden')
                        space.loadingOut('.center-right')
                    })
                } else {
                    space.error(space.language.common.noReals[3], function () {
                        window.location.replace('safety.html?modle=withdraw')
                    })
                }
            })
            return
        }
        space.getCenterHtml('assets-' + pageName + '.html', $managementRight, pageName + 'Init', function () {
            if (!/(manage)/.test(pageName)) {
                $managementRight.removeClass('hidden')
                space.loadingOut('.center-right')
            }
        })
    }
}(DH))
