;
(function () {
    var table = $('#section-table'),
        $userInfo = $('#userInfo')
    var fee = []
    function init() {
        var uid = DH.UID
        // 获取费率表
        util.comAjax({
            url: DH.apiUrl + '850',
            type: 'POST',
        }).done(function (res) {
            if (res.ReturnCode == 1000) {
                fee = res.Data
                var str = ''
                for (var i = 0; i < fee.length; i++) {
                    var temp = fee[i],
                        val = 0
                    if (i == 0) {
                        // 如果为第一个则显示小于
                        val = '<' + temp.EndTradingVolume
                    } else {
                        val = '≥' + temp.TradingVolume
                    }
                    str += '<tr class="tr">\
                                <td>' + val + ' BTC</td>\
                                <td>' + temp.SellerFee + '%</td>\
                                <td>' + temp.BuyerFee + '%</td>\
                            </tr>'
                }
                table.append(str)
                getUserInfo()
            } else {
                DH.error(res.ReturnMsg)
            }
        }).fail(function (err) {
            DH.fail(err)
        })
        // 获取用户信息
        function getUserInfo() {
            if (uid) {
                util.comAjax({
                    url: DH.apiUrl + '860',
                    type: 'POST',
                    data: {
                        MemberId: uid,
                    },
                }).done(function (res) {
                    if (res.ReturnCode == 1000) {
                        var data = res.Data
                        // 写入直接数据
                        $('#nowSellFee').text(data.SellerFee)
                        $('#nowBuyFee').text(data.BuyerFee)
                        $('#nowVal').text(DH.floatNum(data.BtcAmount, DH.setPrecise('BTC', 'dealNum')))
                        // 计算下一级数据
                        fee.forEach(function (item, index) {
                            getId(item, index, data)
                        })
                    } else {
                        DH.error(res.ReturnMsg)
                    }
                }).fail(function (err) {
                    DH.fail(err)
                })
            }
        }
        function getId(age, index, data) {
            if (age.Id == data.Id) {
                var nextIndex = index + 1
                if (nextIndex > (fee.length - 1)) {
                    // 最大等级
                    $userInfo.show()
                    $('#lineSub').width('100%')
                    $('#shortP').hide()
                    return
                }
                // 计算还需多少升级
                var nextVal = fee[index].EndTradingVolume
                var short = nextVal - data.BtcAmount
                short = DH.floatNum(short, DH.setPrecise('BTC', 'dealNum'))          
                $('#nowShort').text(short)
                $('#lineSub').width(Math.ceil((data.BtcAmount / nextVal) * 100) + '%')

                // 设置下一级费率
                $('#shortSellFee').text(fee[nextIndex].SellerFee)
                $('#shortBuyFee').text(fee[nextIndex].BuyerFee)
                // 显示内容
                $userInfo.show()
            }
        }  
    }
    init()
}())
