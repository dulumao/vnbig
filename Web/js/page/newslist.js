;
(function () {
    var navPage = $('#newlist')
    navPage.addClass('on').siblings().removeClass('on')
    var bId = util.getUrlParams('id'),
        type = util.getUrlParams('newsType') || 1
    var pageSize = 5
    var page
    var $pageTurn = $('#pageTurn'),
        $newsList = $('#newsList')
    function getNewsList(pageIndex) {
        if (type) {
            $('.details-nav').hide()
            $('.list-tab-box').hide()
            $('#lastarticle').hide()
        }
        util.comAjax({
            url: DH.apiUrl + '180',
            json: true,
            type: 'POST',
            data: {
                PageSize: pageSize,
                PageIndex: pageIndex,
                CurrencyId: bId,
                CommonType: type,
            },
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data.NewsList != null) {
                var data = res.Data
                var str = ''
                for (var i = 0; i < data.NewsList.length; i++) {
                    var temp = data.NewsList[i]
                    if (bId) {
                        if (i == 0) {
                            str += '<li class="border-none"><a href="newlist-info.html?id=' + bId + '&newsId=' + temp.Id + '" target="_blank">'
                        } else {
                            str += '<li><a href="newlist-info.html?id=' + bId + '&newsId=' + temp.Id + '" target="_blank">'
                        }
                    } else if (i == 0) {
                        str += '<li class="border-none"><a href="newlist-info.html?nid=' + temp.Id + '" target="_blank">'
                    } else {
                        str += '<li><a href="newlist-info.html?nid=' + temp.Id + '" target="_blank">'
                    }
                    str += '<h3>\
                                <span>' + util.dateParse(temp.CreateTime, 'yyyy-MM-dd') + '</span>\
                                <i>' + temp.Title + '</i>\
                            </h3>\
                            <p>' + temp.Content + '</p>\
                        </a></li>'
                }
                $newsList.html('')
                $newsList.append(str)
                if (!page) {
                    page = new window.PageTurn($pageTurn[0], {
                        currentPage: pageIndex, // 当前页码
                        totalPage: data.TotalPage, // 总页码
                        skip: false,
                        callback: function (number) { // 点击后回调事件
                            getNewsList(number)
                        },
                    })
                }
                if (data.TotalPage != page.opts.totalPage) {
                    page.reload(pageIndex, data.TotalPage)
                }
            } else if (res.ReturnCode == 9000) {
                DH.error(DH.language.error.news)
            } else {
                DH.error(DH.language.error.news)
            }
        }).fail(function (err) {
            DH.fail(err)
        })
    }
    getNewsList()
}())
