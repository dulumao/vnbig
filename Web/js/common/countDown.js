/*
 *  倒计时
 *  日期：2018-01-15
 *  作者：handong
 * */
;(function (DH, window) {
    'use strict'

    function checkTime(i) { // 格式化数字格式， 将小于10的数字前面加上‘0’，如‘1’=> '01'
        i = i.toString()
        var len = i.length
        if (i < 10 && len < 2) {
            i = '0' + i
        }
        return i
    }

    function showCountDown(type, leftTime) { // 计算倒计时的时间  ‘天’、‘时’、‘分’、‘秒’
        var dd = checkTime(parseInt((leftTime / 1000 / 60 / 60) / 24, 10)), // 计算剩余的天数
            hh = checkTime(parseInt((leftTime / 1000 / 60 / 60) % 24, 10)), // 计算剩余的小时数
            mm = checkTime(parseInt((leftTime / 1000 / 60) % 60, 10)), // 计算剩余的分钟数
            ss = checkTime(parseInt((leftTime / 1000) % 60, 10)), // 计算剩余的秒数
            dom = {
                $sellPop: $('#sellPop'), // 首页弹窗
                $dayTime: $('#dayTime'), // 倒计时 天
                $hourTime: $('#hourTime'), // 倒计时 小时
                $minTime: $('#minTime'), // 倒计时 分钟
                $secondTime: $('#secondTime'), // 倒计时 秒
            }

        if (leftTime <= 0 && type === 'ing') { // 已结束
            $('#timeList').html('<br><span class="sell-out">' + DH.language.wpaper.banContent[13] + '</span>')
            dom.$sellPop.hide()
            return
        }
        if (leftTime <= 0 && type === 'notStart') { // 开始了
            window.location.reload()
            return
        }
        dom.$dayTime.html(dd)
        dom.$hourTime.html(hh)
        dom.$minTime.html(mm)
        dom.$secondTime.html(ss)
    }

    function countDown(type, leftTime) { // 倒计时时间设置
        setInterval(function () {
            leftTime -= 1000
            showCountDown(type, leftTime)
        }, 1000)
    }
    DH.countDown = countDown
}(DH, window))
