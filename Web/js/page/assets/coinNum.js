/*
 *  可用虚似币数据-转入-转出
 *  日期：2017/9/28.
 *  作者：Math
 * */
;
(function (window, document, space) {
    'use strict'

    // 获取币种列表
    space.coinList = function () {
        var def = new $.Deferred()
        var list = util.ss.get('assetsCoins')
        try {
            list = JSON.parse(list)
        } catch (e) {
            list = ''
        }
        if (list) {
            def.resolve(list)
        } else {
            util.comAjax({
                url: DH.apiUrl + '1670',
                data: {
                    Sorttype: 12, // 排序类型 11-成交价升序，12-成交价降序 ，21-24H成交额升序，22-24H成交额降序，31-24H成交量升序，32-24H成交量降序，41-日涨跌升序，42-日涨跌降序
                    RType: 0,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000 && res.Data && res.Data != '') {
                    def.resolve(res.Data)
                    util.ss.set('assetsCoins', JSON.stringify(res.Data))
                } else {
                    space.error(res.ReturnMsg)
                }
            }).fail(function () {
                space.error(space.language.common.ajaxInfo[3])
            })
        }
        return def
    }
    // 获取币基本数据-（数量，钱包地址等）
    space.coinNum = function (id, name) {
        $('.coin-name').html(name)
        var def = new $.Deferred()
        util.comAjax({
            url: DH.apiUrl + '510',
            data: {
                MemberId: space.UID,
                CurrencyId: id,
            },
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data && res.Data != '') {
                var data = res.Data[0] || {}
                def.resolve(data)
                var precis = DH.setPrecise($('#coinType').find('cite').html())
                $('#useNum').html(space.floatNum(data.CanUseCount, precis))
                $('#freezeNum').html(space.floatNum(data.FrozenCount, precis))
            } else {
                space.error(res.ReturnMsg)
            }
        }).fail(function () {
            space.error(space.language.common.ajaxInfo[3])
        })
        return def
    }
}(window, document, DH))
