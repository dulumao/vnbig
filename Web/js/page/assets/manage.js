/*
 *  资产管理-资产列表
 *  日期：2017/9/28.
 *  作者：Math
 * */
;
(function (window, document, space) {
    // 方法名称与页面名称一致
    var initDom = function () {
        return {
            coinList: $('#coinList'),
            btnFB: $('#btnFB'), // 法币账户切换按钮
            btnBB: $('#btnBB'), // 数字货币账户切换按钮
            eamSum: $('#eamSum'), // 账户余额
        }
    }

    space.manageInit = function () {
        var dom = initDom()
        var listType = 0, // 列表类型 0 法币 1 数字币
            listApi = [2011, 1400] // 列表端口号[法币， 数字币]
        var lang = DH.language.asset.manage
        // 币列表
        dom.coinList.mCustomScrollbar({
            theme: 'dark',
        })
        function coinListHtml(obj) {
            // 法币、数字币统一对象名称
            var tempObj = {
                ACCOUNT: obj.ACCOUNT || obj.MemberUsd, // 可用余额
                FrozenAmt: obj.FrozenAmt || obj.FreezeUsd, // 提现冻结
                TotalAmt: obj.TotalAmt || obj.SumUsd, // 总计
                currencyEnShortName: obj.currencyEnShortName || obj.Currency, // 币种名称简写
                CurrencyId: obj.CurrencyId || '', // 币种id
                currencyArr: obj.currencyArr + '' || '1', // 防止其为0时赋值错误
                img: obj.IMG || 'Web/img/licon/icon-USD.png', // 图片地址
                WeiTuo: obj.Entrust || '0', // 委托冻结
            }
            var precis = space.setPrecise(tempObj.currencyEnShortName, 'num')
            var handler = ''

            // 显示操作按钮
            if (tempObj.currencyArr == '0' && listType == 1) { // 是否开启提充币功能 0-开启 1-关闭
                // 数字货币列表
                handler = '<span class="get-btn" data-id=' + tempObj.CurrencyId + ' data-name=' + tempObj.currencyEnShortName + '>' +
                    space.language.asset.manage.Mhandle[0] + '</span>\
                        <span class="pay-btn"  data-id=' + tempObj.CurrencyId + ' data-name=' + tempObj.currencyEnShortName + '>' +
                    space.language.asset.manage.Mhandle[1] + '</span>'
            } else if (listType == 0) {
                // 法币列表
                handler = '<span class="recharge-btn">' + space.language.asset.manage.Mhandle[2] + '</span>\
                           <span class="deposit-btn">' + space.language.asset.manage.Mhandle[3] + '</span>'
            }

            var html =
                '<tr>\
                    <td>\
                        <img src="' + tempObj.img + '" alt="" width="36" height="36">\
                        <div class="money">\
                            <p><span class="ft03">' + tempObj.currencyEnShortName + '</span></p>\
                        </div>\
                    </td>\
                    <td>' + space.floatNum(tempObj.ACCOUNT, precis) + '</td>\
                    <td>' + space.floatNum(tempObj.WeiTuo, precis) + '</td>\
                    <td>' + space.floatNum(tempObj.FrozenAmt, precis) + '</td>\
                    <td>' + space.floatNum(tempObj.TotalAmt, precis) + '</td>\
                    <td>' + handler + '</td>\
                </tr>'
            return html
        }

        // 我的余额
        var $myBalance = $('#myBalance')
        util.comAjax({
            url: space.apiUrl + '2013',
            data: {
                MemberId: space.UID,
            },
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data != '') {
                var data = res.Data
                $myBalance.html(space.floatNum(data.AssetSumUsd || '0', 2) + ' ' + data.BxName)
            } else {
                $myBalance.html('0')
            }
        })

        // 币列表数据
        function getListInfo() {
            util.comAjax({
                url: space.apiUrl + listApi[listType],
                data: {
                    MemberId: space.UID,
                },
            }).done(function (res) {
                $('#managementRight').removeClass('hidden')
                space.loadingOut('.center-right')
                space.loadingOut('#coinList')
                if (res.ReturnCode == 1000) {
                    var data = res.Data,
                        html = '',
                        BTCPrecise = space.setPrecise('BTC', 'num'),
                        sumHtml = ''
                    var listArr = data.MemberAssetResponse || data.AssetRespons // 列表数据

                    // 设置账户列余额
                    if (listType == 0) {
                        sumHtml = lang.sumFB + ' <span class="sum-num">' + space.floatNum(data.SumMoneyUsd, 2) + ' USD</span>'
                    } else {
                        sumHtml = lang.sumBB + ' <span class="sum-num">' + space.floatNum(data.SumConvertBTC, BTCPrecise) + ' BTC ≈ ' + space.floatNum(data.SumConvertUSD, 2) + ' USD</span>'
                    }
                    dom.eamSum.html(sumHtml)

                    // 设置列表内容
                    if (listArr && listArr != '') {
                        listArr.forEach(function (item) {
                            html += coinListHtml(item)
                        })
                    } else {
                        html = '<tr><td colspan="6">' + space.language.common.noData + '</td> </tr>'
                    }
                    dom.coinList.find('tbody').html(html)
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        }

        // 点击切换币列表
        dom.btnFB.on('click', function () {
            if (!$(this).hasClass('selected')) {
                changeList($(this), 0)
            }
        })

        dom.btnBB.on('click', function () {
            if (!$(this).hasClass('selected')) {
                changeList($(this), 1)
            }
        })

        // 切换按钮
        function changeList($target, type) {
            // 切换按钮样式
            $target.addClass('selected').siblings().removeClass('selected')
            // 更改列表类型
            listType = type
            // 清空列表
            dom.coinList.find('tbody').html('')
            space.loadingIn('#coinList')
            // 获取新列表
            getListInfo()
        }


        // 加载语言文本
        function setLang() {
            var setText = space.setText
            // var language = DH.langType
            var langManage = DH.language.asset.manage

            setText('asset', langManage.asset)
            setText('MAinfo', langManage.MAinfo)
            setText('MAnavList', langManage.MAnavList)
            setText('Mremaining', langManage.Mremaining)
            setText('Mrechagee', langManage.Mrechagee)
            setText('Mdeposit', langManage.Mdeposit)
            setText('btnFB', langManage.btnFB)
            setText('btnBB', langManage.btnBB)
        }

        setLang()
        getListInfo()

        // 提币 充币
        dom.coinList.on('click', '.get-btn,.pay-btn', function () {
            var className = $(this).attr('class')
            var coinid = $(this).data('id')
            var coinName = $(this).data('name')
            if (className == 'get-btn') {
                window.location.href = '/assets.html?modle=outcoin&coinid=' + coinid + '&coinName=' + coinName
            } else {
                window.location.href = '/assets.html?modle=incoin&coinid=' + coinid + '&coinName=' + coinName
            }
        })

        // 点击充值/提现按钮
        dom.coinList.on('click', '.recharge-btn,.deposit-btn', function () {
            var className = $(this).attr('class')
            if (className == 'recharge-btn') {
                window.location.href = 'assets.html?modle=recharge'
            } else {
                window.location.href = 'assets.html?modle=deposit'
            }
        })
    }
}(window, document, DH))
