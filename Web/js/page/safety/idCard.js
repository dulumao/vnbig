;
(function (window, document, space) {
    // 照片认证
    var initDom = function () {
        return {
            auth: $('#auth'),
            pass: $('#pass'),
            nopass: $('#nopass'),
            fileInput1: $('#fileInput1'),
            fileInput2: $('#fileInput2'),
            fileInput3: $('#fileInput3'),
            img: [$('#img1'), $('#img2'), $('#img3')],
            submit: $('#submit'),
            resubmit: $('#resubmit'),
            row2: $('.idcard-row2'),
        }
    }
    var idImg = [], // 服务器返回相对路径的图片地址
        baseImg = []// base64格式图片
    var canSub = false// 默认不能提交
    var maxImgSize = 500 * 1024 * 1 // 最大图片大小
    space.idCardInit = function () {
        var dom = initDom()
        // 加载语言文本
        var lang = DH.language
        // 获取认证状态
        getStatus()
        // 设置语言
        setLang()
        dom.fileInput1.change(function (e) {
            if (filterImg(e)) {
                getFile(e, 0)// 获取base64图片
            }
        })
        dom.fileInput2.change(function (e) {
            if (filterImg(e)) {
                getFile(e, 1)// 获取base64图片
            }
        })
        dom.fileInput3.change(function (e) {
            if (filterImg(e)) {
                getFile(e, 2)// 获取base64图片
            }
        })
        // 提交按钮
        dom.submit.click(function () {
            if (!canSub) {
                return
            }
            for (var i = 0; i < idImg.length; i++) {
                if (!idImg[i]) {
                    space.error(lang.safety.idCard.uploadImg)
                    return
                }
            }
            util.comAjax({
                url: space.apiUrl + '630',
                target: dom.submit,
                data: {
                    MemberId: space.UID,
                    CardHandImg: idImg[2],
                    CardBackImg: idImg[1],
                    CardFrontImg: idImg[0],
                    Type: 0,
                },
            }).done(function (res) {
                if (res.ReturnCode === 1000) {
                    space.error(lang.safety.idCard.submitSuccess, function () {
                        window.location.reload()
                    })
                    dom.row2.hide()
                    dom.submit.text(lang.safety.idCard.auditing)// 按钮显示审核中
                    canSub = false
                } else {
                    space.error(res.ReturnMsg)
                }
            }).fail(function () {
                space.error(space.language.common.ajaxInfo[3])
            })
        })
        dom.resubmit.click(function () {
            dom.nopass.fadeOut(500, function () {
                dom.auth.fadeIn()
                canSub = true
            })
        })
        function getFile(e, index) {
            DH.Base64(e.target, function (base64) {
                baseImg[index] = base64
                sendImg(base64, index)// 上传图片获取地址
            })
        }
        // 判断图片大小超过限制大小返回false
        function filterImg(e) {
            var files = e.target.files[0]
            if (!files) {
                return false
            }
            var fsize = files.size
            if (fsize > maxImgSize) {
                space.error(lang.safety.idCard.large)
                // 清空内容
                e.target.value = ''
                return false
            }
            return true
        }
        function setView(index) {
            dom.img[index].attr('src', baseImg[index])
        }
        function sendImg(base64Img, index) {
            util.comAjax({
                url: space.apiUrl + '920',
                data: {
                    Img: base64Img,
                },
            }).done(function (res) {
                if (res.ReturnCode === 1000) {
                    idImg[index] = res.Data.url
                    setView(index)// 执行预览
                } else {
                    space.error(res.ReturnMsg)
                }
            }).fail(function () {
                space.error(space.language.message.upFail)
            })
        }
        // 获取认证状态
        function getStatus() {
            util.comAjax({
                url: space.apiUrl + '620',
                data: {
                    MemberId: space.UID,
                },
            }).done(function (res) {
                if (res.ReturnCode === 1000 && res.Data && res.Data !== '') {
                    var data = res.Data
                    var status = res.Data.Status
                    if (status === 0) {
                        // 未认证
                        dom.auth.show()
                        canSub = true
                    } else if (status === 1) {
                        // 已认证
                        dom.pass.show()
                    } else if (status === 2) {
                        // 不通过
                        dom.nopass.show()
                    } else {
                        dom.row2.hide()
                        dom.auth.show()
                        dom.submit.text(lang.safety.idCard.auditing)
                        dom.img[0].attr('src', data.CardFrontImg)
                        dom.img[1].attr('src', data.CardBackImg)
                        dom.img[2].attr('src', data.CardHandImg)
                    }
                } else {
                    space.error(res.ReturnMsg)
                }
            }).fail(function () {
                space.error(space.language.common.ajaxInfo[3])
            })
        }
        // 设置语言
        function setLang() {
            var setText = space.setText
            setText('title', lang.safety.idCard.title)
            setText('zm', lang.safety.idCard.zm)
            setText('bm', lang.safety.idCard.bm)
            setText('sc', lang.safety.idCard.sc)
            setText('chooseImg', lang.safety.idCard.chooseImg)
            setText('submit', lang.safety.idCard.submit)
            setText('why', lang.safety.idCard.why)
            setText('resubmit', lang.safety.idCard.resubmit)
            setText('success', lang.safety.idCard.success)
            setText('nosuccess', lang.safety.idCard.nosuccess)
        }
    }
}(window, document, DH))
