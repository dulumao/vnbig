;
(function (DH) {
    var dom = {
        $langChoose: $('#langChoose'),
        $langBox: $('#langBox'),
        $nowFlag: $('.now-lang .lang-icon'),
        $customerService: $('#customerService'), // 客服-最大的盒子
        $customerCenter: $('#customerCenter'), // 客服-弹出内容
    }

    // 客服-悬停事件处理
    dom.$customerService.on('mouseover', function () {
        dom.$customerCenter.stop().fadeIn()
    })
    dom.$customerService.on('mouseout', function () {
        dom.$customerCenter.stop().fadeOut()
    })

    dom.$nowFlag.addClass('icon-' + DH.langType)
    dom.$langChoose.hover(function () {
        dom.$langBox.stop().fadeIn()
    }, function () {
        dom.$langBox.stop().fadeOut()
    })
    // 获取列表
    // 设置默认交易中心跳转的路径

    function setDeal(id, name) {
        var href = '/tradeFB.html'
        href += '?coinId=' + id + '&coinName=' + name.replace('/BTC', '') // + '&money=' + money
        $('#trade a').attr('href', href)
    }

    var mark = util.ss.get('mark1')

    function initUrl() {
        var firstId = util.ss.get('firstId'),
            firstName = util.ss.get('firstName'),
            money = util.ss.get('money')
        setDeal(firstId, firstName, money)
    }

    if (mark) {
        initUrl()
        return
    }

    util.comAjax({
        url: DH.apiUrl + '1670',
        json: true,
        type: 'POST',
        data: {
            Sorttype: 12, // 排序类型 11-成交价升序，12-成交价降序 ，21-24H成交额升序，22-24H成交额降序，31-24H成交量升序，32-24H成交量降序，41-日涨跌升序，42-日涨跌降序
            RType: 0,
        },
    }).done(function (res) {
        if (res.ReturnCode == 1000 && res.Data) {
            var money = 22710 // res.Data[0].BtcExchangeUsd + '|' + res.Data[0].BtcExchangeRmb + '|' + res.Data[0].BtcExchangeVnd
            var firstId = res.Data[0].CurrencyId
            var firstName = res.Data[0].CurrencyEnShortName
            util.ss.set('firstId', firstId)
            util.ss.set('firstName', firstName)
            util.ss.set('money', money)
            util.ss.set('mark1', 'yes')
            setDeal(firstId, firstName, money)
        }
    })
}(DH))
