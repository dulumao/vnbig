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
            eamTit: $('#handler'),
        }
    }
    space.handlerInit = function () {
        var dom = initDom()
        dom = dom.eamTit
        var ele = {
            tbody: $('.tbody'),
            history: $('#history'),
            inviteurl: $('#txtCommend'),
            inivtNum: $('#inivtNum'), // 邀请人数
            totalIncome: $('#totalIncome'), // 总收益
            yesterIncome: $('#yesterIncome'), // 昨日收益
            todayIncom: $('#todayIncom'), // 今日收益
            inivtCode: $('#inivtCode'), // 我的邀请码
            commission: $('#commission'), // 提成率
            inviteBox: $('#inviteBox'), // 币种盒子
            totalNumber: $('#totalNumber'), // 合计数值
        }

        // 复制功能
        dom.on('click', '#btnCopy', function () {
            return new window.clipBoard(document.getElementById('txtCommend'), {
                beforeCopy: function () {
                },
                copy: function () {
                    return document.getElementById('txtCommend').value
                },
                afterCopy: function () {
                    DH.error(DH.language.asset.assetsHandler.HNewNeed[11])
                    $('#btnCopy').css('background', '#666')
                    setTimeout(function () {
                        $('#btnCopy').css('background', '#006885')
                    }, 2000)
                },
            })
        })

        // 用户名隐藏方法
        function dealUsername(str) {
            if (!str) {
                str = '---'
                return str
            }
            if (str.indexOf('@') > -1) {
                var fistName = str.split('@')[0],
                    lastName = str.split('@')[1]
                fistName = fistName.replace(fistName.substring(1, fistName.length), '***')
                str = fistName + '@' + lastName
                return str
            }
            str = str.replace(str.substring(str.length - 4, str.length), '****')
            return str
        }

        // 设置语言
        function setLang() {
            // 加载语言文本
            var setText = space.setText
            // var language = DH.langType
            var lang = DH.language

            setText('HAhandler', lang.asset.assetsHandler.HAhandler)
            setText('HNewNeed', lang.asset.assetsHandler.HNewNeed)
            setText('HAinviteNum', lang.asset.assetsHandler.HAinviteNum)
            setText('HAcopyUrl', lang.asset.assetsHandler.HAcopyUrl)
            setText('HAfriendList', lang.asset.assetsHandler.HAfriendList)
            setText('HAfriendName', lang.asset.assetsHandler.HAfriendName)
            setText('HAregisterTime', lang.asset.assetsHandler.HAregisterTime)
            setText('HAprofit', lang.asset.assetsHandler.HAprofit)
            setText('HAtotal', lang.asset.assetsHandler.HAtotal)
            setText('noData', lang.common.noData)
        }

        /*
         * 美元对其它币转换
         * number 初始数字
         * rate 汇率
         * unit 单位
         * */
        function toMoney(number, place) {
            number *= 1
            var val = space.floatNum(number, place) + ''
            var arr = val.split('.')
            val = arr[0].replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
            if (arr[1]) {
                val = val + '.' + arr[1]
            }
            return val
        }

        // 经纪人信息等
        function handlerData() {
            util.comAjax({
                url: DH.apiUrl + '1580',
                type: 'POST',
                data: {
                    MemberId: DH.UID,
                },
            }).done(function (res) {
                var data = res.Data,
                    totalIncome = data.TotalIncome,
                    yesterdayIncome = data.YesterdayIncome,
                    todayIncome = data.TodayIncome,
                    hideTotal,
                    hideYester,
                    hideToday
                if (res.ReturnCode == 1000) {
                    var image = new Image()
                    image.src = data.QRCodeAddress
                    $('#QR-code').append(image)
                    ele.inivtNum.html(data.PeopleCount)
                    ele.inviteurl.val(data.Address)
                    ele.commission.html(data.Commission)
                    ele.inivtCode.html(data.UserId)
                    if (toMoney(totalIncome.USDTotalIncome, 2) == 0) {
                        hideTotal = 'hideData'
                    }
                    if (toMoney(yesterdayIncome.USDYesterdayIncome, 2) == 0) {
                        hideYester = 'hideData'
                    }
                    if (toMoney(todayIncome.USDTodayIncome, 2) == 0) {
                        hideToday = 'hideData'
                    }
                    ele.totalIncome.html(toMoney(totalIncome.USDTotalIncome, 2) + '<p class="' + hideTotal + '">≈₫' + toMoney(totalIncome.VNDTotalIncome, 2) + '</p>')
                    ele.yesterIncome.html(toMoney(yesterdayIncome.USDYesterdayIncome, 2) + '<p class="' + hideYester + '">≈₫' + toMoney(yesterdayIncome.VNDYesterdayIncome, 2) + '</p>')
                    ele.todayIncom.html(toMoney(todayIncome.USDTodayIncome, 2) + '<p class="' + hideToday + '">≈₫' + toMoney(todayIncome.VNDTodayIncome, 2) + '</p>')
                } else {
                    DH.error(res.ReturnMsg)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        }

        // 定义翻页信息
        var tradeType = 'USD', // 邀请记录币种
            pageSize = 10, // 一页几个
            PageCount, // 总页数
            page,
            tdArr = [33, 33, 33] // 列表td的宽度设置
        // 设置列表标题的宽度
        ele.history.find('.record-header .td').each(function (index) {
            $(this).addClass('td-' + tdArr[index])
        })

        // 邀请记录点击切换币种
        ele.inviteBox.on('click', '.trade-class', function () {
            if ($(this).hasClass('select-span')) {
                return
            }
            $(this).addClass('select-span').siblings().removeClass('select-span')
            tradeType = $(this).html()
            getInvita(1)
        })

        // 邀请列表模板
        function htmlTep(dd, arr) {
            $.each(dd, function (i, v) {
                var bg,
                    profit = toMoney(v.Profit, 6)
                if (i % 2 == 0) {
                    bg = 'odd'
                } else {
                    bg = 'even'
                }
                if (tradeType == 'USD') {
                    profit = toMoney(v.Profit, 2)
                }
                var html =
                    '<tr class="' + bg + '">\
                        <td class="td-' + tdArr[0] + '">' + dealUsername(v.MemberId) + '</td>\
                        <td class="td-' + tdArr[1] + '">' + util.dateParse(v.RegTime, 'yyyy-MM-dd HH:mm:ss') + '</td>\
                        <td class="td-' + tdArr[2] + '">' + profit + '</td>\
                    </tr>'

                arr.push(html)
            })
        }

        // 获取邀请记录
        function getInvita(pageIndex) {
            util.comAjax({
                url: DH.apiUrl + '1581',
                json: true,
                type: 'POST',
                data: {
                    MemberId: DH.UID,
                    Type: tradeType,
                    PageIndex: pageIndex,
                    PageSize: pageSize,
                },
            }).done(function (res) {
                var data = res.Data
                if (res.ReturnCode == 1000) {
                    var arr = [],
                        datalist = data.ListEntity
                    if (datalist.length != 0) {
                        var totalNumber = toMoney(data.TotalAmount, 6)
                        if (tradeType == 'USD') {
                            totalNumber = toMoney(data.TotalAmount, 2)
                        }
                        htmlTep(datalist, arr)
                        ele.tbody.find('tbody').html(arr.join(''))
                        // 合计数值显示
                        ele.totalNumber.html(totalNumber + ' ' + tradeType)
                        // 计算总页数
                        PageCount = Math.ceil(data.TotalCount / pageSize)
                        // 翻页组件调用
                        $('#page').show()// 让翻页的DIV出现
                        if (!page) {
                            var nowIndex = pageIndex
                            page = new window.PageTurn('#page', {
                                currentPage: nowIndex, // 当前页码
                                totalPage: PageCount, // 总页码
                                skip: false, // 跳页关闭
                                callback: function (number) { // 点击后回调事件
                                    pageIndex = number
                                    getInvita(pageIndex)
                                },
                            })
                        } else {
                            page.reload(pageIndex, PageCount)
                        }
                        // 翻页组件设置语言
                        var setText = space.setText
                        var lang = DH.language
                        setText('PTurnReach', lang.common.PTurnReach)
                        setText('PTurnPage', lang.common.PTurnPage)
                        setText('PTurnDetermine', lang.common.PTurnDetermine)
                    }
                } else {
                    DH.error(res.ReturnMsg)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        }

        setLang() // 语言
        getInvita(1)// 获取邀请记录
        handlerData()
    }
}(window, document, DH))
