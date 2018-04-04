;
(function () {
    // 新闻稿
    // var pageSize = Infinity,
    //     pageIndex = 1
    // var page;
    // var $pageTurn = $('#pageTurn'),
    var $newsList = $('#newsList')
    getNews()
    function getNews(/* pageIndex*/) {
        var newsStr = [],
            num = 0
        util.comAjax({
            url: DH.apiUrl + '180',
            json: true,
            type: 'POST',
            data: {
                // PageSize: pageSize,
                // PageIndex: pageIndex,
                CommonType: 1, // 媒体报道
            },
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data) {
                res.Data.NewsList = res.Data.NewsList || []
                num += 1
                var data = res.Data
                for (var i = 0; i < data.NewsList.length; i++) {
                    newsStr.push(data.NewsList[i])
                }
                if (num == 2) {
                    shownewsList(newsStr)
                }
            } else if (res.ReturnCode == 9000) {
                // DH.error(DH.language.error.news)
            } else {
                // DH.error(DH.language.error.news)
            }
        }).fail(function (err) {
            DH.fail(err)
        })
        util.comAjax({
            url: DH.apiUrl + '180',
            json: true,
            type: 'POST',
            data: {
                // PageSize: pageSize,
                // PageIndex: pageIndex,
                CommonType: 2, // 市场动态
            },
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data) {
                res.Data.NewsList = res.Data.NewsList || []
                num += 1
                var data = res.Data
                for (var i = 0; i < data.NewsList.length; i++) {
                    newsStr.push(data.NewsList[i])
                }
                if (num == 2) {
                    shownewsList(newsStr)
                }
            } else if (res.ReturnCode == 9000) {
                // DH.error(DH.language.error.news)
            } else {
                // DH.error(DH.language.error.news)
            }
        }).fail(function (err) {
            DH.fail(err)
        })
    }
    function shownewsList(newsStr) {
        // console.log(newsStr);
        var sevenStr // 创建一个空数组
        bubbleSort(newsStr)
        newsStr.reverse()
        if (newsStr.length > 7) {
            sevenStr = newsStr.slice(0, 6)
        } else {
            sevenStr = newsStr
        }
        var str = ''
        for (var i = 0; i < sevenStr.length; i++) {
            str += '<li class="news-list">\
                <span class="list-time" >' + util.dateParse(sevenStr[i].CreateTime, 'MM/dd/yyyy') + '</span >\
                <div class="link-box">\
                    <a href= "newlist-info.html?nid=' + sevenStr[i].Id + '" target= "_blank" class="list-link" > ' + sevenStr[i].Title + '</a>\
                </div >\
            </li > '
        }
        $newsList.html('')
        $newsList.append(str)
    }
    function bubbleSort(arr) { // 冒泡排序（从小到大）
        var len = arr.length
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j].CreateTime > arr[j + 1].CreateTime) { // 相邻元素两两对比
                    var temp = arr[j + 1] // 元素交换
                    arr[j + 1] = arr[j]
                    arr[j] = temp
                }
            }
        }
        return arr
    }
}())
