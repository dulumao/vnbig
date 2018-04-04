;
(function () {
    // 初始化
    // 当前页高亮
    var navPage = $('.list-tab-box')
    navPage.hide()
    var Atid = util.getUrlParams('newsId')
    var nid = util.getUrlParams('nid')
    var title = $('.title'),
        Content = $('#content'),
        coinTime = $('.coinTime')

    // 加载语言文本
    var wLanguage = DH.language
    function langReload() {
        var newlistInfolang = wLanguage.newlistInfo,
            newlistInfoDomObj = $('.coinarticle')
        for (var i = 0; i < newlistInfolang.length; i++) {
            newlistInfoDomObj.find('.langtxt').eq(i).html(newlistInfolang[i])
        };
    }
    langReload(wLanguage)

    if (nid) {
        $('.details-nav').hide()
        $('#lastarticle').hide()
        util.comAjax({
            url: DH.apiUrl + '190',
            json: true,
            type: 'POST',
            data: {
                id: nid,
            },
        }).done(function (res) {
            var data = res.Data
            var stuta = res.ReturnCode
            // wLanguage.common.ajaxInfo[2]=网络错误！
            var messWarn = res.ReturnMsg || wLanguage.common.ajaxInfo[2]
            if (stuta == 1000) {
                title.html(data.Title)
                Content.html(data.Content)
                coinTime.html(util.dateParse(data.CreateTime, 'yy-MM-dd HH:mm'))
            } else if (stuta == 9000) {
                // wLanguage.common.noData=暂无数据！
                // DH.error(wLanguage.common.noData);
            } else {
                DH.error(messWarn)
            };
        }).fail(function (err) {
            DH.fail(err)
        })
    } else {
        util.comAjax({
            url: DH.apiUrl + '190',
            json: true,
            type: 'POST',
            data: {
                id: Atid,
            },
        }).done(function (res) {
            var data = res.Data
            var stuta = res.ReturnCode
            // wLanguage.common.ajaxInfo[2]=网络错误！
            var messWarn = res.ReturnMsg || wLanguage.common.ajaxInfo[2]
            if (stuta == 1000) {
                title.html(data.Title)
                Content.html(data.Content)
                coinTime.html(util.dateParse(data.CreateTime, 'yy-MM-dd HH:mm'))
            } else if (stuta == 9000) {
                // wLanguage.common.noData=暂无数据！
                // DH.error(wLanguage.common.noData);
            } else {
                DH.error(messWarn)
            };
        }).fail(function (err) {
            DH.fail(err)
        })
    };
}())
