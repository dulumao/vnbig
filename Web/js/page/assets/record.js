/*
 *  资产管理-资产列表
 *  日期：2017/9/28.
 *  作者：Math
 * */
;
(function (window, document, space) {
    // 方法名称与页面名称一致
    // var initDom = function () {
    //     return {
    //
    //     }
    // }
    space.recordInit = function () {
        if (!space.UID) {
            window.location.href = '/login.html'
        }

        var ele = {
            table: $('table'),
            dataShow: $('#dataShow'), // 加载更多提示框

        }
        // 模板
        function htmlTep(dd, arr) {
            $.each(dd, function (i, v) {
                var bg
                if (i % 2 == 0) {
                    bg = 'odd'
                } else {
                    bg = 'even'
                }
                var html = ''
                html += '<tr class=' + bg + '>'
                html += '<td>' + util.dateParse(v.CRTime, 'yyyy-MM-dd HH:mm:ss') + '</td>'
                html += '<td>' + space.language.common.tradeType[v.Type] + '</td>'
                html += '<td>' + v.CurName + '</td>'
                html += '<td>' + space.floatNum(v.Price, space.setPrecise(v.CurName, 'price', true)) + '</td>'
                html += '<td>' + space.floatNum(v.Count, space.setPrecise(v.CurName, 'dealNum', true)) + '</td>'
                html += '<td>' + space.floatNum(v.TotalAmt, space.setPrecise(v.CurName, 'total', true)) + '</td>'
                html += '</tr>'
                arr.push(html)
            })
        };

        function setLang() {
            // 加载语言文本
            var setText = space.setText
            // var language = space.langType
            var lang = space.language

            setText('REFind', lang.asset.assetsRecord.REFind)
            setText('REtime', lang.asset.assetsRecord.REtime)
            setText('REtradeType', lang.asset.assetsRecord.REtradeType)
            setText('coinType', lang.asset.assetsRecord.coinType)
            setText('REprice', lang.asset.assetsRecord.REprice)
            setText('REnumber', lang.asset.assetsRecord.REnumber)
            setText('REtotalMoney', lang.asset.assetsRecord.REtotalMoney)
            setText('REstate', lang.asset.assetsRecord.REstate)
            setText('loadLang', lang.asset.loadHint)
        }

        var pageIndex = 1, // 初始化请求第‘1’页
            pageSizeInit = 20, // 初始化请求每页‘20条数据’
            totalPage = 0 // 总页数
        function init() {
            // 成交查询初始化
            util.comAjax({
                url: space.apiUrl + '1570',
                json: true,
                type: 'POST',
                data: {
                    MemberId: space.UID,
                    PageIndex: pageIndex,
                    PageSize: pageSizeInit,

                },
            }).done(function (res) {
                var data = res.Data.TradeRecordList
                var stuta = res.ReturnCode
                var messWarn = res.ReturnMsg
                totalPage = Math.ceil(res.Data.TotalCount / pageSizeInit)
                if (pageIndex < totalPage) {
                    ele.dataShow.show().html('<span class="btn-loading"><i></i></span><span class="lang-loadLang" index="0">' + space.language.asset.loadHint[0] + '</span>')
                }
                if (pageIndex == totalPage && pageIndex != 1) {
                    ele.dataShow.show().html(space.language.asset.loadHint[1])
                }
                if (stuta == 1000) {
                    var arr = []
                    if (data.length != 0) {
                        htmlTep(data, arr, 0)
                        ele.table.find('tbody').append(arr.join(''))
                    } else {
                        ele.table.find('tbody').html('<tr><td colspan="5"><br/>' + space.language.common.noData + '</td></tr>')
                    }
                } else {
                    space.error(messWarn)
                }
                ;
            }).fail(function (err) {
                space.fail(err)
            })

            setLang()
        }

        // var dom = initDom()
        $('.record-centre').mCustomScrollbar({
            theme: 'dark',
            callbacks: {
                onTotalScroll: function () { // 滚动到底部加载更多
                    pageIndex += 1
                    if (pageIndex > totalPage) {
                        return
                    }
                    init()
                },
            },
        })
        init()
    }
}(window, document, DH))
