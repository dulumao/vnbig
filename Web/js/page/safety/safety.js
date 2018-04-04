/*
 *  安全中心/安全中心
 *  日期：2018/1/9.
 *  作者：gaohaojie
 * */
;
(function (DH) {
    // 获取url信息
    var state = {
            title: '',
            url: window.location.href.split('?')[0],
        },
        srcurl, // url地址里modle的值
        modle = util.getUrlParams('modle') || 'center', // 获取url参数
        dom = {
            $safety: $('#safety'), // 导航条上当前页面
            $centerList: $('#centerList'), // 左侧选项卡容器
            $centerRight: $('#centerRight'), // 右边内容区域
        }
    // 未登录时，前往登录页面
    if (!DH.UID) {
        window.location.replace('login.html')
        return
    }
    // 头部导航添加选中样式
    dom.$safety.addClass('selected').siblings().removeClass('selected')

    // 选项卡功能
    dom.$centerList.on('click', 'li', function () {
        // 选项卡对应变色处理
        $(this).addClass('selected').siblings().removeClass('selected')
        // 选项卡的srcurl值添拼接到导航栏
        if ($(this).attr('srcurl') !== undefined) {
            srcurl = $(this).attr('srcurl')
            window.history.pushState(state, '', state.url + '?modle=' + srcurl)
            // 执行对应请求
            setRight(srcurl)
        }
    })
    // 不点击时，获取头部model值进行右侧内容请求
    function loadModle() {
        $('li[srcurl="' + modle + '"]').addClass('selected').siblings().removeClass('selected')
        setRight(modle)
    }
    // 更改浏览器历史记录时，渲染对应导航栏的内容
    loadModle()
    $(window).on('popstate', function () {
        loadModle()
    })

    // 右侧内容对应显示
    function setRight(pageName) {
        // loading进入
        DH.loadingIn('.center-right')
        dom.$centerRight.addClass('hidden')
        // 请求500接口获取右侧内容
        DH.getCenterHtml('safety-' + pageName + '.html', dom.$centerRight, pageName + 'Init', function () {
            if (!/(center)/.test(pageName)) {
                dom.$centerRight.removeClass('hidden')
                // loading消失
                DH.loadingOut('.center-right')
            }
        })
    }
}(DH))

