;
(function (window, document, space) {
    // 安全中心
    var initDom = function () {
        return {
            userId: $('#userId'), // 用户ID
            useName: $('#useName'), // 姓名
            useTel: $('#useTel'), // 邮箱
            SMicon: $('#SMicon'), // 实名认证icon
            SMtitle: $('#SMtitle'), // 实名认证title
            SMauth: $('#SMauth'), // 实名认证状态icon
            SMstate: $('#SMstate'), // 实名认证状态
            SMmore: $('#SMmore'), // 实名认证链接
            ZPicon: $('#ZPicon'), // 照片认证icon
            ZPtitle: $('#ZPtitle'), // 照片认证title
            ZPauth: $('#ZPauth'), // 照片认证状态icon
            ZPstate: $('#ZPstate'), // 照片认证状态
            ZPmore: $('#ZPmore'), // 照片认证链接
            JYicon: $('#JYicon'), // 交易密码icon
            JYtitle: $('#JYtitle'), // 交易密码title
            JYauth: $('#JYauth'), // 交易密码状态icon
            JYstate: $('#JYstate'), // 交易密码状态
            JYmore: $('#JYmore'), // 交易密码链接
            DLhandle: $('#DLhandle'), // 底部登录密码
            JYhandle: $('#JYhandle'), // 底部交易密码
            SMhandle: $('#SMhandle'), // 底部实名认证
            ZPhandle: $('#ZPhandle'), // 底部照片认证
        }
    }
    space.centerInit = function () {
        var dom = initDom()
        // 加载语言文本
        var lang = DH.language
        // 设置语言
        setLang()
        getInformation()// 加载认证信息
        function getInformation() {
            // 处理实名/照片认证状态
            function handleMes(tateCode, state, bigIconOff, bigIconOn) {
                if (state == 0) { // 0. 未认证 1.已认证  2.审核不通过 3 审核中
                    dom[tateCode + 'icon'].removeClass(bigIconOn).addClass(bigIconOff)
                    dom[tateCode + 'auth'].removeClass('yes').addClass('no')
                    dom[tateCode + 'state'].html(lang.safety.safety.authStatus[0])// "未认证"
                    dom[tateCode + 'more'].html(lang.safety.safety.authStatus[1])// "立即认证"
                    dom[tateCode + 'handle'].html(lang.safety.safety.authStatus[1])// "立即认证"
                } else if (state == 1) {
                    dom[tateCode + 'icon'].removeClass(bigIconOff).addClass(bigIconOn)
                    dom[tateCode + 'auth'].removeClass('no').addClass('yes')
                    dom[tateCode + 'state'].html(lang.safety.safety.authStatus[2])// "已认证"
                    dom[tateCode + 'more'].html(lang.safety.safety.authStatus[3])// "查看"
                    dom[tateCode + 'handle'].html(lang.safety.safety.authStatus[3])// "查看"
                } else if (state == 2) {
                    dom[tateCode + 'icon'].removeClass(bigIconOn).addClass(bigIconOff)
                    dom[tateCode + 'auth'].removeClass('yes').addClass('no')
                    dom[tateCode + 'state'].html(lang.safety.safety.authStatus[4])// "审核未通过"
                    dom[tateCode + 'more'].html(lang.safety.safety.authStatus[5])// "重新认证"
                    dom[tateCode + 'handle'].html(lang.safety.safety.authStatus[5])// "重新认证"
                } else if (state == 3) {
                    dom[tateCode + 'icon'].removeClass(bigIconOn).addClass(bigIconOff)
                    dom[tateCode + 'auth'].removeClass('yes').addClass('no')
                    dom[tateCode + 'state'].html(lang.safety.safety.authStatus[6])// "审核中"
                    dom[tateCode + 'more'].html(lang.safety.safety.authStatus[7])// "查看进度"
                    dom[tateCode + 'handle'].html(lang.safety.safety.authStatus[7])// "查看进度"
                }
            };
            // 处理交易密码状态
            function handleJyMes(tateCode, state, bigIconOff, bigIconOn) {
                if (state == 0) {
                    dom[tateCode + 'icon'].removeClass(bigIconOn).addClass(bigIconOff)
                    dom[tateCode + 'auth'].removeClass('yes').addClass('no')
                    dom[tateCode + 'state'].html(lang.safety.safety.authStatus[8])// "未设置"
                    dom[tateCode + 'more'].html(lang.safety.safety.authStatus[9])// "立即设置"
                } else if (state == 1) {
                    dom[tateCode + 'icon'].removeClass(bigIconOff).addClass(bigIconOn)
                    dom[tateCode + 'auth'].removeClass('no').addClass('yes')
                    dom[tateCode + 'state'].html(lang.safety.safety.authStatus[10])// "已设置"
                    dom[tateCode + 'more'].html(lang.safety.safety.authStatus[11])// "立即修改"
                }
            };
            // 处理提现密码状态
            function handleTxMes(tateCode, state) {
                if (state == 0) {
                    // dom[tateCode + "icon"].removeClass(bigIconOn).addClass(bigIconOff);
                    // dom[tateCode + "auth"].removeClass("yes").addClass("no");
                    // dom[tateCode + "state"].html(lang.safety.safety.authStatus[8]);//"未设置"
                    // dom[tateCode + "more"].html(lang.safety.safety.authStatus[9]);//"立即设置"
                } else if (state == 1) {
                    // dom[tateCode + "icon"].removeClass(bigIconOff).addClass(bigIconOn);
                    // dom[tateCode + "auth"].removeClass("no").addClass("yes");
                    // dom[tateCode + "state"].html(lang.safety.safety.authStatus[10]);//"已设置"
                    // dom[tateCode + "more"].html(lang.safety.safety.authStatus[11]);//"立即修改"
                }
            };
            // 请求认证信息状态码
            util.comAjax({
                url: DH.apiUrl + '750',
                json: true,
                type: 'POST',
                data: {
                    MemberId: DH.UID,
                },
            }).done(function (res) {
                // console.log(res)
                if (res.ReturnCode == 1000) {
                    var data = res.Data
                    handleMes('SM', data.RealNameResult, 'bshiming-off', 'bshiming-on')
                    handleMes('ZP', data.PictureResult, 'bidCard-off', 'bidCard-on')
                    handleJyMes('JY', data.PassResult, 'bcode-off', 'bcode-on')
                    handleTxMes('TX', data.TiXianPassResult)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        }

        getPersonal()// 获取个人信息
        function getPersonal() {
            util.comAjax({
                url: DH.apiUrl + '590',
                json: true,
                type: 'POST',
                data: {
                    MemberId: DH.UID,
                },
            }).done(function (res) {
                $('#centerRight').removeClass('hidden')
                space.loadingOut('.center-right')
                var data = res.Data
                if (res.ReturnCode == 1000) {
                    // console.log(data)
                    dom.userId.html(data.MemberId)
                    dom.useName.html(data.RealName)
                    var accout = data.Call + ''
                    if (accout.indexOf('@') === -1) {
                        accout = accout.replace(accout.substr(3, 4), '****')
                    }
                    dom.useTel.html(accout)
                    // console.log(data);
                } else {
                    DH.error(res.ReturnMsg)
                }
            }).fail(function (err) {
                DH.fail(err)
            })
        }
        function setLang() {
            var setText = space.setText

            setText('title', lang.safety.safety.title)
            setText('leve', lang.safety.safety.leve)
            setText('SSitems', lang.safety.safety.SSitems)
            setText('loginPass', lang.safety.safety.loginPass)
            setText('tradePass', lang.safety.safety.tradePass)
            setText('withdrawPass', lang.safety.safety.withdrawPass)
            setText('authPass', lang.safety.safety.authPass)
            setText('idCardPass', lang.safety.safety.idCardPass)
            setText('authStatus', lang.safety.safety.authStatus)
        }
    }
}(window, document, DH))
