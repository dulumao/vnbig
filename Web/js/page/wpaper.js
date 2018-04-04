;
(function () {
    var Wpaper = function () {
        this.init()
    }

    var pro = Wpaper.prototype

    pro.init = function () { // 初始化
        this.userId = DH.UID
        this.domInit() // 初始化dom节点
        this.isLogin() // 判断是否登录
        this.progreenInit() // 进度条初始化
        this.toLogin() // 立即参与
        this.clickAffirm() // 确认认购功能
        this.downloadWpaper() // 下载白皮书
        this.chartInit() // 图表初始化
    }

    pro.domInit = function () { // dom节点初始化
        this.dom = {
            $loginShow: $('#loginShow'), // 是否登录的显示内容区域
            $addressImg: $('#addressImg'), // 钱包二维码图片
            $addressDetail: $('#addressDetail'), // 钱包地址
            $nowNum: $('#nowNum'), // 已筹数量
            $donePro: $('#donePro'), // 已完成的进度条显示
            $totalPro: $('#totaoPro'), // 总的进度条
            $totalNum: $('#totalNum'), // 总的众筹数量
            $chargeMon: $('#chargeMon'), // 已充值数量
            $countText: $('#countText'),
            $offerBuy: $('#offerBuy'), // 确认认购 按钮
            $subscribeNum: $('#subscribeNum'), // 已认购显示
            $goLogin: $('#goLogin'), // 立即参与 按钮
            $downloadWpaper: $('#downloadWpaper'), // 下载白皮书 按钮
        }
    }

    pro.clickAffirm = function () { // 确认认购
        var that = this,
            dom = that.dom
        dom.$offerBuy.on('click', function () { // 点击“确认认购”按钮
            if (dom.$offerBuy.hasClass('disabled')) {
                return
            }
            var hintLang = DH.language.wpaper.banContent
            util.comAjax({
                url: DH.apiUrl + '2003',
                data: { MemberId: that.userId },
            }).done(function (res) {
                var data = res.Data,
                    dealTotal = that.toDecimal(data.Total, 8)
                if (res.ReturnCode == 1000) {
                    dialog.toast(hintLang[14])
                    dom.$offerBuy.addClass('hidden')
                    dom.$subscribeNum.removeClass('hidden').find('.have-sub').text(dealTotal)
                    that.progreenInit() // 认购成功后 重新加载进度条
                } else {
                    dialog.toast(res.ReturnMsg)
                }
            })
        })
    }

    pro.toLogin = function () { // 立即参与
        var dom = this.dom
        dom.$goLogin.on('click', function () { // 点击‘立即参与按钮’  前往登录页面
            DH.goLogin()
        })
    }

    pro.downloadWpaper = function () { // 下载白皮书
        var that = this,
            dom = that.dom,
            lang = DH.langType,
            wpaperUrl
        switch (lang) {
        case 'zh':
            wpaperUrl = 'https://www.vnbig.com/WhitePaper/VNC_WhitePaper_cn_v12.pdf'
            break
        case 'ct':
            wpaperUrl = 'https://www.vnbig.com/WhitePaper/VNC_WhitePaper_cn_v12.pdf'
            break
        case 'en':
            wpaperUrl = 'https://www.vnbig.com/WhitePaper/VNC_WhitePaper_en_v12.pdf'
            break
        default:
            wpaperUrl = 'https://www.vnbig.com/WhitePaper/VNC_WhitePaper_vn_v12.pdf'
            break
        }
        dom.$downloadWpaper.on('click', function () {
            $(this).attr('href', wpaperUrl)
        })
    }

    pro.isLogin = function () { // 验证是否登录状态
        var dom = this.dom
        if (this.userId) {
            dom.$loginShow.find('.wallet-address').eq(0).removeClass('hidden').siblings('.wallet-address').addClass('hidden')
            this.getAddress()
        } else {
            dom.$loginShow.find('.wallet-address').eq(1).removeClass('hidden').siblings('.wallet-address').addClass('hidden')
        }
    }

    pro.progreenInit = function () { // 初始化进度条位置
        var that = this,
            dom = that.dom,
            donePro = dom.$donePro,
            nowNum = dom.$nowNum,
            totalProLeng = dom.$totalPro.width(), // 总的发行数量对应的宽度
            doneNum = dom.$nowNum, // 已完成数量与占比
            totalNum = dom.$totalNum, // 总数量
            doneWidth, // 进度条宽度
            doneRatio // 已完成占总数量的比例

        util.comAjax({
            url: DH.apiUrl + '2005',
            data: {},
        }).done(function (res) {
            var data = res.Data
            if (res.ReturnCode == 1000 && data) {
                doneRatio = ((data.VncAdd / data.VncAll) * 100).toFixed(2) + '%'
                doneWidth = (data.VncAdd / data.VncAll) * totalProLeng
                doneNum.html('<span>' + data.VncAdd + '</span> VNC (' + doneRatio + ')')
                totalNum.text(data.VncAll)
                donePro.width(doneWidth)
                nowNum.css('left', doneWidth)
                var time1 = data.VncNow - data.VncStartTime
                var time2 = data.VncEndTime - data.VncNow
                if (time1 < 0) { // 发行未开始
                    DH.countDown('notStart', time1 * -1)
                    dom.$countText.html(DH.language.wpaper.banContent[2])
                    dom.$offerBuy.addClass('disabled').attr('disabled', 'disabled')
                    return
                }
                if (time2 < 0) { // 已结束
                    dom.$countText.html(DH.language.wpaper.banContent[13])
                    $('#timeList').html('<br><span class="sell-out">' + DH.language.wpaper.banContent[13] + '</span>')
                    dom.$offerBuy.addClass('disabled').attr('disabled', 'disabled')
                    return
                }
                // 正在进行中
                dom.$countText.html(DH.language.wpaper.banContent[16])
                dom.$offerBuy.removeClass('disabled').removeAttr('disabled')
                DH.countDown('ing', time2)
            } else {
                dialog.toast(res.ReturnMsg)
            }
        })
    }

    pro.chartInit = function () { // 环形图表初始化
        var lang = DH.langType

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pieChart'))
        // 指定图表的配置项和数据
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}',
            },
            color: ['#ef7d32', '#a6a6a6', '#f3c853', '#2e8ea9'],
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'normal',
                            },
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: [],
                },
            ],
        }
        switch (lang) {
        case 'zh':
            option.series[0].data = [
                { value: 15, name: '15% 市场推广' },
                { value: 10, name: '10% 早期投资者' },
                { value: 25, name: '25% 公开发行' },
                { value: 50, name: '50% 团队持有' },
            ]
            break
        case 'en':
            option.series[0].data = [
                { value: 15, name: '15% Marketing' },
                { value: 10, name: '10% Early investors' },
                { value: 25, name: '25% Public issuing ' },
                { value: 50, name: '50% Team holding' },
            ]
            break
        case 'ct':
            option.series[0].data = [
                { value: 15, name: '15% 市場推廣' },
                { value: 10, name: '10% 早期投資者' },
                { value: 25, name: '25% 公開發行 ' },
                { value: 50, name: '50% 團隊持有' },
            ]
            break
        default:
            option.series[0].data = [
                { value: 15, name: '15% Đưa ra thị trương' },
                { value: 10, name: '10% Nhà đầu tư kỳ đầu' },
                { value: 25, name: '25% Phát hành công khai' },
                { value: 50, name: '50% Đội có' },
            ]
            break
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
    }

    pro.toDecimal = function (num, places) { // 小数点初始化
        num = DH.floatNum(num, places)
        num = num.toString()
        var arr = num.split('.')
        var num1 = arr[0]
        var num2 = arr[1] || '0'
        var length = num2.length
        if (length < places) {
            for (var i = length; i < places; i++) {
                num2 += '0'
            }
            num = num1 + '.' + num2
        }
        return num
    }

    pro.getAddress = function () { // 获取钱包地址 以及认购数量
        var that = this,
            dom = that.dom
        util.comAjax({
            url: DH.apiUrl + '2004',
            data: { MemberId: this.userId },
        }).done(function (res) {
            var data = res.Data
            if (res.ReturnCode == 1000) {
                var rechange = that.toDecimal(data.RechargeCount, 8),
                    total = that.toDecimal(data.Total, 8)
                dom.$addressImg.attr('src', data.QrAddress)
                dom.$addressDetail.text(data.WalletAddress)
                dom.$chargeMon.text(rechange)
                if (data.IsBuy == 0) {
                    dom.$offerBuy.removeClass('hidden')
                } else {
                    dom.$subscribeNum.removeClass('hidden').find('.have-sub').text(total)
                }
            } else {
                dialog.toast(res.ReturnMsg)
            }
        })
    }

    $(function () {
        return new Wpaper()
    })
}())
