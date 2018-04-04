;
(function () {
    var select = $('#selectBox'),
        question = $('#questionBox'),
        email = $('#EmailBox'),
        files = $('#files'),
        detail = $('#detailText'),
        pack = $('#packBox'),
        submit = $('#submitBtn')
    var filesVal
    var regMail = DH.regMail // 邮箱正则
    // var failsType = /(\.*.jpg$)|(\.*.png$)|(\.*.jpeg$)|(\.*.gif$)|(\.*.bmp$)|(\.*.rar$)/; //上传文件类型限制
    var failsType = /(\.*.jpg$)|(\.*.png$)|(\.*.jpeg$)|(\.*.gif$)|(\.*.bmp$)/ // 上传文件类型限制图片
    var rarType = /\.(rar|zip|7z|gz|tar)$/
    var wlang = DH.language.help.contact
    var id = DH.UID
    function init() {
        // 获取用户帐号或者唯一标识符
        var onlyId = util.cookie.get('onlyId') == 'null' ? '' : util.cookie.get('onlyId')
        if (!DH.UID) {
            id = !onlyId ? '' : onlyId
        }
        // 初始化输入框
        emptyContext()
        // 给上传绑定事件
        files.change(function (e) {
            var val = e.target.value
            // 判断类型
            if (failsType.test(val)) {
                // if(rarType.test(val)){
                //     filesVal = e.target.files[0];
                // }else{
                // 转为base64
                var myBase64 = new Base64(e.target, function (base64) {
                    filesVal = base64
                })
                // }
                $('#filesTip').text(val)
            } else {
                DH.error(wlang.error[7])
            }
        })
        // 绑定按钮事件
        submit.click(function () {
            // 获取各输入框的值
            var val = {
                select: select.val(),
                email: email.val(),
                files: filesVal,
                detail: detail.val(),
                question: question.val(),
                pack: pack.val(),
            }
            // 判断是否为空
            var canSubmit = isEmpty(val)
            if (canSubmit) {
                util.comAjax({
                    url: DH.apiUrl + '760',
                    json: true,
                    type: 'POST',
                    data: {
                        Question: val.question,
                        QuestionType: val.select,
                        EmailAddress: val.email,
                        OtherFile: val.files,
                        QuestionContext: val.detail,
                        MoneyAddress: val.pack,
                        LoginState: DH.UID ? 1 : 0,
                        MemberKey: id,
                    },
                }).done(function (res) {
                    var messWarn = res.ReturnMsg || wlang.error[0]
                    var stuta = res.ReturnCode
                    if (stuta == 1000) {
                        // 清空内容
                        emptyContext()
                        DH.error(wlang.error[1])
                        $('#filesTip').text(wlang.conInput)
                        if (!DH.UID) {
                            id = res.Data
                            util.cookie.set('onlyId', res.Data, 86400000)                
                        }
                    } else {
                        DH.error(messWarn)
                    };
                }).fail(function (err) {
                    DH.fail(err)
                })
            }
        })
    }
    function emptyContext() {
        select.val('0')
        question.val('')
        email.val('')
        files[0].value = ''
        detail.val('')
        pack.val('')
    }
    function isEmpty(val) {
        if (val.question == '') {
            DH.error(wlang.error[3])
            return false
        }
        if (val.select == '0') {
            DH.error(wlang.error[2])
            return false
        }
        if (val.email == '') {
            DH.error(wlang.error[4])
            return false
        }
        if (!regMail.test(val.email)) {
            DH.error(wlang.error[5])
            return false
        }
        if (val.detail == '') {
            DH.error(wlang.error[6])
            return false
        }
        return true
    }
    init()
}())
