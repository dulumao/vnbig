/*
 *  资产管理-资产列表
 *  日期：2017/9/28.
 *  作者：Math
 * */
;
(function (window, document, space) {
    // 加载语言文本
    var lang = space.language.assetsEntrust
    space.entrustInit = function () {
        var ele = {
                recordHeader: $('#recordHeader'), // 列表标题盒子
                orderList: $('#orderList'), // 委托挂单列表内容盒子
                historyList: $('#historyList'), // 委托历史列表内容盒子
                ManageBtn: $('#ManageBtn'), // ‘查询’按钮
                coinAll: $('#coinAll'), // 查询币种选择默认盒子
                startTime: $('#startTime'), // 开始时间input
                endTime: $('#endTime'), // 结束时间input
                ordersBtn: $('#ordersBtn'), // 委托挂单切换按钮
                historyBtn: $('#historyBtn'), // 委托历史切换按钮
                unSettled: $('#unSettled'), // ‘尚未成交’字段
                operatingBtn: $('#operatingBtn'), // ‘操作’字段
            },
            listType = util.getUrlParams('index'), // 交易中心过来时给的字段
            USDToVND // USDToVND汇率

        // 默认加载委托挂单内容
        if (!listType) {
            listType = 'order'
        }

        // 委托挂单/委托历史 请求参数配置
        var ajaxData = {
            MemberKey: DH.UID,
            MemberId: DH.UID,
            CurrencyId: '',
            StartTime: '',
            EndTime: '',
            PageSize: 20,
        }

        // 获取汇率
        function exchangeRate() {
            util.comAjax({
                url: space.apiUrl + '2002',
                data: {},
            }).done(function (res) {
                if (res.ReturnCode === 1000 && res.Data) {
                    var data = res.Data
                    USDToVND = data.USDToVNDExchange // USDToVND
                    getOrders('') // 委托挂单列表首次加载
                    getHistory('') // 委托历史列表首次加载
                    if (listType == 'history') {
                        historyClass() // 委托历史选中样式首次处理
                    } else {
                        orderClass() // 委托挂单选中样式首次处理
                    }
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        }

        /*
       * 美元对其它币转换
       * number 初始数字
       * rate 汇率
       * unit 单位
       * agree 是否需要拼接≈和标签
       * */
        function USD2Money(number, rate, unit) {
            number *= 1
            if (!number && !rate) {
                return ''
            }
            var val = new Big(number).times(rate).toString()
            val = space.floatNum(val, 2) + ''
            var arr = val.split('.')
            val = arr[0].replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
            if (arr[1] && unit !== '₫') {
                val = val + '.' + arr[1]
            }
            val = '<span class="light">≈' + unit + val + '</span>'
            return val
        }
        // ‘查询’
        ele.ManageBtn.on('click', function () {
            queryList()
        })
        // 查询列表数据
        function queryList() {
            var id = ele.coinAll.find('option:selected').data('id')
            var startTime = ele.startTime.val()
            var endTime = ele.endTime.val()
            if (startTime && endTime) {
                ajaxData.CurrencyId = id
                ajaxData.StartTime = startTime
                ajaxData.EndTime = endTime
                ele.orderList.scrollLoad('loadData', 1)
                ele.historyList.scrollLoad('loadData', 1)
            } else {
                ajaxData.CurrencyId = id
                ele.orderList.scrollLoad('loadData', 1)
                ele.historyList.scrollLoad('loadData', 1)
            }
        }
        // 撤单操作
        function withdRawal() {
            ele.orderList.on('click', '.remove-color', function () {
                var $this = $(this),
                    id = $this.data('id')
                dialog.confirmInfo(lang.remove[0], function () {
                    util.comAjax({
                        url: space.apiUrl + '1680',
                        data: {
                            MemberId: space.UID,
                            Id: id,
                        },
                    }).done(function (res) {
                        if (res.ReturnCode == 1000) {
                            space.error(lang.remove[1], function () {
                                queryList()
                            })
                        } else {
                            space.error(res.ReturnMsg)
                        }
                    })
                })
            })
        }

        // 点击切换币列表
        ele.ordersBtn.on('click', function () {
            if (!$(this).hasClass('selected')) {
                changeList('order')
            }
        })
        ele.historyBtn.on('click', function () {
            if (!$(this).hasClass('selected')) {
                changeList('history')
            }
        })
        // 切换按钮
        function changeList(type) {
            // 根据type获取新列表
            if (type == 'history') { // 委托历史
                historyClass()
                ele.historyList.scrollLoad('loadData', 1)
            } else { // 委托挂单
                orderClass()
                ele.orderList.scrollLoad('loadData', 1)
            }
        }

        // 委托挂单选中样式处理
        function orderClass() {
            ele.ordersBtn.addClass('selected').siblings().removeClass('selected')
            ele.unSettled.removeClass('operating-hiden') // 标题‘尚未成交’
            ele.operatingBtn.removeClass('operating-hiden') // 标题‘操作’
            ele.recordHeader.removeClass('record-header-his') // 调整宽度
            ele.orderList.show()
            ele.historyList.hide()
        }
        // 委托历史选中样式处理
        function historyClass() {
            ele.historyBtn.addClass('selected').siblings().removeClass('selected')
            ele.unSettled.addClass('operating-hiden') // 标题‘尚未成交’
            ele.operatingBtn.addClass('operating-hiden') // 标题‘操作’
            ele.recordHeader.addClass('record-header-his') // 调整宽度
            ele.historyList.show()
            ele.orderList.hide()
        }
        // 模板
        function htmlTep(dd, type) {
            var arr = []
            $.each(dd, function (i, v) {
                var bg, // 每行的颜色类名
                    typeClass = 'rise', // 买/卖的颜色类名 买/绿色 卖/红色
                    entrustPrice = space.floatNum(v.EntrustPrice, DH.setPrecise(v.CurName, 'price'), true) // 委托价格（USD）取整
                if (i % 2 == 0) {
                    bg = 'odd'
                } else {
                    bg = 'even'
                }
                if (v.Type == 1) { // 0买 1卖
                    typeClass = 'drop'
                }
                var remove = '<a  class="remove-color" href="javascript:;" class="remove" data-id="' + v.Id + '">' + space.language.asset.assetsEntrust.ETcd + '</a>' // ‘撤单’语言处理

                var html = ''
                html += '<tr class=' + bg + '>'
                html += '<td>' + util.dateParse(v.CRTime, 'yyyy-MM-dd<br>HH:mm:ss') + '</td>' // 时间
                html += '<td class=' + typeClass + '>' + space.language.common.tradeType[v.Type] + '</td>' // 买/卖
                html += '<td>' + v.CurName + '</td>' // 币种
                html += '<td>' + entrustPrice // 委托价格(usd)
                html += '<br><p class="exchange">' + USD2Money(entrustPrice, USDToVND, '₫') + '</p></td>' // 委托价格(越南盾)
                html += '<td>' + space.floatNum(v.EntrustQuantity, DH.setPrecise(v.CurName, 'dealNum'), true) + '</td>' // 委托数量
                html += '<td>' + space.floatNum(v.Volume, DH.setPrecise(v.CurName, 'dealNum'), true) + '</td>' // 成交数量
                if (type == 'order') {
                    html += '<td>' + space.floatNum(v.NoVolume, DH.setPrecise(v.CurName, 'dealNum'), true) + '</td>' // ‘尚未成交’
                    html += '<td>' + remove + '</td>' // ‘撤单’
                }
                html += '</tr>'
                arr.push(html)
            })
            return arr.join('')
        }

        // 委托挂单列表和查询结果列表加载
        function getOrders() {
            ele.orderList.scrollLoad({
                ajax: function (pageIndex) {
                    ajaxData.PageIndex = pageIndex
                    return util.comAjax({
                        url: space.apiUrl + '2037',
                        data: ajaxData,
                    })
                },
                dataFn: function (data) {
                    return htmlTep(data, 'order')
                },
                colNum: 8, // 列数
                dataKey: 'ResultList', // 请求数据对象
                countKey: 'TotalCount', // 总页数下标
                pageIndex: 1,
                pageSize: 20,
                loadingTip: DH.language.asset.loadHint[0], // 滚动加载更多…
                noMoreTip: DH.language.asset.loadHint[1], // 没有更多数据了!
                noDataTip: DH.language.common.noData, // 暂无数据
            })
        }

        // 委托历史列表加载
        function getHistory() {
            ele.historyList.scrollLoad({
                ajax: function (pageIndex) {
                    ajaxData.PageIndex = pageIndex
                    return util.comAjax({
                        url: space.apiUrl + '1570',
                        data: ajaxData,
                    })
                },
                dataFn: function (data) {
                    return htmlTep(data, 'history')
                },
                colNum: 6, // 列数
                dataKey: 'TradeRecordList', // 请求数据对象
                countKey: 'TotalCount', // 总页数下标
                pageIndex: 1,
                pageSize: 20,
                loadingTip: DH.language.asset.loadHint[0], // 滚动加载更多…
                noMoreTip: DH.language.asset.loadHint[1], // 没有更多数据了!
                noDataTip: DH.language.common.noData, // 暂无数据
            })
        }

        // 查询组件币种加载
        function coinAll() {
            space.coinList().done(function (data) {
                if (data.length != 0) {
                    ele.coinAll.html('')
                    var optionHtml = '<option data-id="0" selected>' + lang.all + '</option>'
                    for (var i = 0; i < data.length; i++) {
                        optionHtml += '<option data-id=' + data[i].CurrencyId + '>' + data[i].CurrencyEnShortName + '</option>'
                    }
                    ele.coinAll.append(optionHtml)
                }
            })
        }

        function setLang() {
            var setText = space.setText
            // var language = DH.langType
            var langEntrust = DH.language

            setText('ETentrust', langEntrust.asset.assetsEntrust.ETentrust)
            setText('ETstarttime', langEntrust.asset.assetsEntrust.ETstarttime)
            setText('ETendtime', langEntrust.asset.assetsEntrust.ETendtime)
            setText('ETfind', langEntrust.asset.assetsEntrust.ETfind)
            setText('ETorder', langEntrust.asset.assetsEntrust.ETorder)
            setText('EThistory', langEntrust.asset.assetsEntrust.EThistory)
            setText('ETtime', langEntrust.asset.assetsEntrust.ETtime)
            setText('ETbuysell', langEntrust.asset.assetsEntrust.ETbuysell)
            setText('coinType', langEntrust.asset.assetsEntrust.coinType)
            setText('ETWTWTJG', langEntrust.asset.assetsEntrust.ETWTWTJG)
            setText('ETWTWTSL', langEntrust.asset.assetsEntrust.ETWTWTSL)
            setText('ETturnover', langEntrust.asset.assetsEntrust.ETturnover)
            setText('ETunsettled', langEntrust.asset.assetsEntrust.ETunsettled)
            setText('ETallSucceed', langEntrust.asset.assetsEntrust.ETallSucceed)
            setText('ETcd', langEntrust.asset.assetsEntrust.ETcd)
        }
        function init() {
            exchangeRate() // 获取汇率
            withdRawal() // 绑定撤单事件
            coinAll() // 查询组件币种加载
            setLang() // 设置语言
        }
        init()
    }
}(window, document, DH))
