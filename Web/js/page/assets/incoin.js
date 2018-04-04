/*
 *  资产管理-转入虚拟币
 *  日期：2017/9/28.
 *  作者：Math
 * */
;
(function (window, document, space) {
    'use strict'

    // 方法名称与页面名称一致
    var initDom = function () {
        return {
            coinAddress: $('#coinAddress'),
            coinErcode: $('#coinErcode'),
            history: $('#history'),
            managementRight: $('#managementRight'),
        }
    }
    var lang = space.language.assetsIncoin
    space.incoinInit = function () {
        var dom = initDom()
        var coinId = util.getUrlParams('coinid'),
            coinName = util.getUrlParams('coinName')
        var statusClass = {
            0: '', // 未处理
            1: 'green', // 成功
            2: 'orange', // 失败
        }
        var precis // 币的精确度

        // 虚似币数据
        space.coinList().done(function (data) {
            if (!coinId) {
                data.some(function (item) {
                    if (item.CurrencyEnShortName === 'BTC') {
                        coinId = item.CurrencyId
                        coinName = item.CurrencyEnShortName
                        return true
                    }
                    return false
                })
            }
            coinHistory(coinId)
            space.coinNum(coinId, coinName).done(function (subdata) {
                coinInfo(subdata)
            })
            precis = space.setPrecise(coinName, 'num')
            // 下拉选择
            $('#coinType').divSelect({
                data: data,
                dataId: 'CurrencyId',
                dataText: 'CurrencyEnShortName',
                change: function (id, ele) {
                    dom.managementRight.find('.incoin').css('visibility', 'hidden')
                    space.loadingIn(dom.managementRight[0])

                    coinHistory(id)
                    coinName = ele.find('cite').html()
                    space.coinNum(id, coinName).done(function (subdata) {
                        coinInfo(subdata)
                        setTimeout(function () {
                            space.loadingOut(dom.managementRight[0])
                            dom.managementRight.find('.incoin').css('visibility', 'visible')
                        }, 300)
                    })
                    precis = space.setPrecise(coinName, 'num')
                },
            })
            $('#coinType').find('cite').html(coinName).attr('selectid', coinId)
        })

        // 绑定钱包地址
        function coinInfo(data) {
            dom.coinAddress.html(data.Address)
            dom.coinErcode.attr('src', data.AddressSrc)
        }

        // 转入记录
        function historyHtml(obj) {
            var html =
                '<tr>\
                    <td>' + obj.Id + '</td>\
                    <td>' + space.floatNum(obj.Paid, precis) + '</td>\
                    <td>' + util.dateParse(obj.ToAccountAmt, 'yyyy-MM-dd HH:mm:ss') + '</td>\
                    <td>' + space.floatNum(obj.ConfirmCount, precis) + '</td>\
                    <td>' + util.dateParse(obj.Time, 'yyyy-MM-dd HH:mm:ss') + '</td>\
                    <td class="' + statusClass[obj.state] + '">' + (lang.status[obj.state] || '') + '</td>\
                </tr>'
            return html
        }
        function coinHistory(id) {
            util.comAjax({
                url: space.apiUrl + '520',
                data: {
                    MemberId: space.UID,
                    CurrencyId: id,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    var html = ''
                    if (res.Data && res.Data != '') {
                        res.Data.forEach(function (item) {
                            html += historyHtml(item)
                        })
                    } else {
                        html = '<tr><td colspan="6">' + space.language.common.noData + '</td> </tr>'
                    }
                    dom.history.find('tbody').html(html)
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        }
        function setLang() {
            // 语言接口
            var setText = space.setText
            // var language = space.langType
            var langIncoin = space.language.asset.inCoin

            setText('title', langIncoin.title)
            setText('items', langIncoin.items)
            setText('explain', langIncoin.explain)
            setText('box', langIncoin.box)
        }
        setLang()
    }
}(window, document, DH))
