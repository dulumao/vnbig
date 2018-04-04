;
(function () {
    var dom = {
        $sellPop: $('#sellPop'), // 首页弹窗
        $close: $('#close'), // 关闭弹窗按钮
        $countText: $('#countText'),
        // $dayTime: $('#dayTime'), // 倒计时 天
        // $hourTime: $('#hourTime'), // 倒计时 小时
        // $minTime: $('#minTime'), // 倒计时 分钟
        // $secondTime: $('#secondTime'), // 倒计时 秒
        $indexBanner: $('#indexBanner'), // banner容器
        $bannerImg: $('#bannerItem li a'), // banner图片集合
    }

    function init() { // 初始化
        var setText = DH.setText
        var lang = DH.language.deal.introduce
        var indexLang = DH.language.index

        //
        // 设置语言
        setText('introduceTitle', lang.title)
        setText('modelTitle', lang.modelTitle)
        setText('modelText', lang.modelText)
        setText('popPanel', indexLang.popPanel)

        // bannerAutoplay()
        getBanner()
    }

    // 设置当前页面nav
    var nowPage = $('#index')
    nowPage.addClass('selected').siblings().removeClass('selected')

    // banner 轮播效果/图片跟随语言设置
    /*
    function bannerAutoplay() {
        var lang = DH.langType,
            i,
            bannerImg,
            name,
            imgUrl

        dom.$indexBanner.banner({
            width: '100%',
            height: 494,
        })
        var links = {
            zh: '8',
            ct: '8',
            en: '3',
            vi: '4',
        }
        var links2 = {
            zh: '10',
            ct: '10',
            en: '4',
            vi: '5',
        }
        var links3 = {
            zh: '12',
            ct: '2',
            en: '6',
            vi: '7',
        }
        for (i = 0; i < dom.$bannerImg.length; i++) {
            bannerImg = dom.$bannerImg.eq(i)
            name = bannerImg.attr('name')
            if (name === 'fete') {
                bannerImg.attr('href', '/newlist-info.html?nid=' + links[lang])
            }
            if (name === 'invite') {
                bannerImg.attr('href', '/newlist-info.html?nid=' + links2[lang])
            }
            if (name === 'eos') {
                bannerImg.attr('href', '/newlist-info.html?nid=' + links3[lang])
            }
            imgUrl = 'url(web/img/common/banner_' + name + '_' + lang + '.jpg)'
            bannerImg.css('background-image', imgUrl)
        }
    }*/
    
    function getBanner() {
        util.comAjax({
            url: DH.apiUrl + '2035',
            data: {},
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data && res.Data != '') {
                var html = '',
                    href = 'href="javascript:;"'
                res.Data.forEach(function (item) {
                    if (item.LinkUrl) {
                        href = 'href="' + item.LinkUrl + '" target="_blank"'
                    }
                    html += '<li> <a ' + href + ' style="background-image: url(' + item.ImageUrl + ');"></a></li>'
                })
                dom.$indexBanner.find('ul').html(html)
                dom.$indexBanner.banner({
                    width: '100%',
                    height: 494,
                })
            } else {
                dom.$indexBanner.remove()
            }
        })
    }
    
    dom.$close.on('click', function () {
        dom.$sellPop.hide()
    })

    init()
}())

