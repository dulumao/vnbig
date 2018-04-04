/*
 *  获取当前时区
 *  日期：2018/1/30.
 *  作者：Math
 * */
;
(function (space) {
    'use strcit'

    // https://github.com/tradingview/charting_library/wiki/Symbology#timezone
    // https://www.zeitverschiebung.net/cn/all-time-zones.html
    var timezones = {
        '-11': 'Pacific/Honolulu',
        '-10': 'Pacific/Honolulu',
        '-9.5': 'Pacific/Honolulu',
        '-9': 'America/Los_Angeles',
        '-8': 'America/Los_Angeles',
        '-7': 'America/Phoenix',
        '-6': 'America/Chicago',
        '-5': 'America/New_York',
        '-4': 'America/Caracas',
        '-3': 'America/Argentina/Buenos_Aires',
        '-2': 'America/Sao_Paulo',
        '-0': 'Europe/London',
        '+1': 'Europe/Berlin',
        '+2': 'Europe/Athens',
        '+3': 'Europe/Moscow',
        '+3.5': 'Asia/Tehran',
        '+4': 'Asia/Dubai',
        '+5': 'Asia/Ashkhabad',
        '+5.5': 'Asia/Kolkata',
        '+5.75': 'Asia/Kathmandu',
        '+6': 'Asia/Almaty',
        '+7': 'Asia/Bangkok',
        '+8': 'Asia/Hong_Kong',
        '+9': 'Asia/Tokyo',
        '+10': 'Australia/Brisbane',
        '+10.5': 'Australia/Adelaide',
        '+11': 'Australia/Sydney',
        '+12': 'Pacific/Auckland',
        '+13': 'Pacific/Auckland', // New Zealand
        '+13.75': 'Pacific/Chatham',
        '+14': 'Pacific/Chatham',
    }

    function getTimezoneName() {
        var time = new Date().getTimezoneOffset() / 60
        time *= -1
        if (time > 0) {
            time = '+' + time
        }
        return timezones[time]
    }

    space.getTimezoneName = getTimezoneName
}(DH))
