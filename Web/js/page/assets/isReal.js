/*
 *  判断是否实名认证
 *  日期：2017/9/29.
 *  作者：Math
 * */
;
(function (window, document, space) {
    'use strict'

    space.isReal = function () {
        var ref = new $.Deferred()
        util.comAjax({
            url: space.apiUrl + '750',
            data: {
                MemberId: space.UID,
            },
        }).done(function (res) {
            var noReals = space.language.common.noReals
            if (res.ReturnCode == 1000 && res.Data) {
                if (res.Data.RealNameResult != 1) { // 未实名认证
                    space.error(noReals[0], function () {
                        window.location.replace('safety.html?modle=authentication')
                    })
                } else if (res.Data.PictureResult != 1) { // 未照片认证
                    space.error(noReals[1], function () {
                        window.location.replace('safety.html?modle=idCard')
                    })
                } else if (res.Data.PassResult != 1) { // 未设置交易密码
                    space.error(noReals[2], function () {
                        window.location.replace('safety.html?modle=transaction')
                    })
                } else {
                    space.hasEmail = !!res.Data.EmailResult // 1 设置 0未设置
                    space.hasWithdraw = !!res.Data.TiXianPassResult // 提现密码 1 设置 0未设置
                    ref.resolve(true)
                }
            } else {
                space.error(res.ReturnMsg || noReals[0])
            }
        }).fail(function () {
            space.error(space.language.common.ajaxInfo[0])
        })
        return ref
    }
}(window, document, DH))
