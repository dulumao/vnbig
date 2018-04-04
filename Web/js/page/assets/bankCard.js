/*
 *  银行卡管理
 *  日期：2017/9/28.
 *  作者：Math
 * */
;
(function (window, document, space) {
    'use strict'

    // 方法名称与页面名称一致
    var initDom = function () {
        return {
            realName: $('#realName'),
            bankSelect: $('#bankSelect'),
            cardNumber: $('#cardNumber'),
            bankType: $('#bankType'),
            submit: $('#submit'),
            history: $('#history'),
        }
    }
    var lang = space.language.assetsBank
    // 输入错误提示
    function msgTip(msg) {
        if (!msg) {
            $('#msgTip').hide()
            return
        }
        $('#msgTip').show().html(msg)
    }
    space.bankCardInit = function () {
        var dom = initDom()
        // 修改密码输入框的type
        space.setPassWordInput()

        // 个人信息
        var realName = ''
        util.comAjax({
            url: space.apiUrl + '480',
            data: {
                MemberId: space.UID,
            },
        }).done(function (res) {
            if (res.ReturnCode == 1000 && res.Data) {
                res.Data.Name = res.Data.Name || ''
                dom.realName.val(res.Data.Name)
                realName = res.Data.Name
                $('.js-name').html(realName)

                /* if (res.Data.BankCardList) { //银行卡列表
                    dom.bankSelect.divSelect({
                        data: res.Data.BankCardList,
                        dataId: 'Value',
                        dataText: 'Text'
                    })
                }*/
            } else {
                space.error(res.ReturnMsg)
            }
        })

        // 添加银行卡
        dom.submit.on('click', function () {
            var data = {
                MemberId: space.UID,
                BankCardNumber: $.trim(dom.cardNumber.val()),
            }
            if (!data.BankCardNumber) {
                msgTip(lang.apiError[0])
                return
            }
            msgTip()
            util.comAjax({
                url: space.apiUrl + '1933',
                target: dom.submit,
                data: data,
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    space.error(lang.apiOk, function () {
                        window.location.reload()
                    })
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        })


        function historyHtml(obj) {
            var html =
                '<tr>\
                    <td class="js-name">' + realName + '</td>\
                    <td>' + obj.BankCardNumber + '</td>\
                    <td><a href="javascript:;" data-id="' + obj.Id + '" class="remove">' + lang.remove[2] + '</a> </td>\
                </tr>'
            return html
        }
        // 获取添加银行卡记录
        function cardList() {
            util.comAjax({
                url: space.apiUrl + '2000',
                data: {
                    MemberId: space.UID,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    var html = ''
                    var data = res.Data || {}
                    if (data.BxBankInfo && data.BxBankInfo != '') {
                        data.BxBankInfo.forEach(function (item) {
                            html += historyHtml(item)
                        })
                    } else {
                        html = '<tr><td colspan="5">' + space.language.common.noData + '</td> </tr>'
                    }
                    dom.history.find('tbody').html(html)
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        }

        // 删除银行卡
        dom.history.on('click', '.remove', function () {
            var $this = $(this),
                id = $this.data('id')
            var isConfirm = confirm(lang.remove[0])
            if (!isConfirm) {
                return
            }
            util.comAjax({
                url: space.apiUrl + '2001',
                data: {
                    MemberId: space.UID,
                    Id: id,
                },
            }).done(function (res) {
                if (res.ReturnCode == 1000) {
                    space.error(lang.remove[1], function () {
                        cardList()
                    })
                } else {
                    space.error(res.ReturnMsg)
                }
            })
        })
        function setLang() {
            var setText = space.setText
            // 语言接口
            // var language = space.langType
            var langAsset = space.language.asset.bankCard
            setText('title', langAsset.title)
            setText('tips', langAsset.tips)
            setText('items', langAsset.items)
            setText('box', langAsset.box)
        }
        setLang()
        cardList()
    }
}(window, document, DH))
