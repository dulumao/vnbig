// 整站的配置文件
;
(function (window, document, space) {
    var local = document.location,
        domain = local.protocol + '//' + local.host

    space.domain = domain
    space.apiUrl = domain + '/yb/' // api请求地址

    space.UID = '' // 用户帐号

    space.links = {
        index: '/', // 首页链接
        path: '/', // 其它页面跳转目录
        parent: '../', // 跳父级
    }
    
    space.lang = {
        zh: {}, // 简体中文
        vi: {}, // 越南文
        ct: {}, // 繁体中文
        en: {}, // 英文
    }

    // 邮箱验证
    space.regMail = /^[^@]+@[^@]+(\.[^@]+)+$/
}(window, document, (window.DH = {})))
