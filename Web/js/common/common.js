;
(function (DH, window) {
    var lang
    function init() {
        var $langChoose = $('#langChoose')

        // 获取当前语言包 中文：zh ，越南文：vi
        var langType = util.ls.get('lang')
        if (!langType) {
            langType = 'vi'
            util.ls.set('lang', langType)
        }
        DH.langType = langType
        lang = DH.language = DH.lang[langType]
        $langChoose.find('.now-lang .lang-icon').addClass('icon-' + langType)
        $('body').addClass(langType)

        DH.riseColor = DH.langType === 'zh' ? '#ae4e54' : '#589065' // 判断如果是中文简体和繁体颜色为红
        DH.dropColor = DH.langType === 'zh' ? '#589065' : '#ae4e54' // 判断如果是中文简体和繁体颜色为绿


        // 添加切换语言事件
        $langChoose.on('click', 'li', function () {
            var type = $(this).attr('type')
            util.ls.set('lang', type)
            window.location.reload()
        })

        if (window.addEventListener) {
            window.addEventListener('storage', function (e) {
                if (e.key === 'lang' && e.newValue !== e.oldValue) {
                    window.location.reload()
                }
            })
        }

        // 重置输入框
        setPassWordInput()

        // 设置浏览器标签title
        document.title = lang.common.pageTitle

        // 输入框提示语点击后输入框成为焦点
        $('.input-tip').click(function () {
            $(this).siblings().focus()
        })
    }

    // 统一处理ajax错误
    DH.fail = function (/* err, callBack */) {
        // var text = DH.language.error.ajax;
        // if(typeof err == "string"){
        //     text = err
        // };
        // $('.mess-info .mess-tip').html(text);
        // $('.mess-info').fadeIn();
        // setTimeout(function(){
        //     if(callBack){
        //         callBack();
        //     }
        //     $('.mess-info').fadeOut();
        // },1500)
    }
    // 一般错误
    DH.error = function (info, callBack, time) {
        var text = DH.language.error.returnCode
        if (typeof info === 'string') {
            text = info
        };
        $('.mess-info .mess-tip').html(text)
        $('.mess-info').fadeIn()
        time = time || 1500
        setTimeout(function () {
            if (callBack) {
                callBack()
            }
            $('.mess-info').fadeOut()
        }, time)
    }

    /*
     * 浮点数取值,只舍不进
     * val 数值
     * precis 精确到几位小数点
     * min 是否限制最小值 false 最小值为0
     *
     * */
    DH.floatNum = function (val, precis) {
        var unit = ''
        if (val * 1 < 0) {
            unit = '-'
            val += ''
            val = val.replace('-', '') // 去掉负号
        }
        val += ''
        if (val === 'NaN' || val === 'Infinity' || val === 'undefined' || val === '0') {
            return 0
        }
        if (!val) {
            return ''
        }
        precis = precis || 9
        if (val.indexOf('e-') > 0) {
            var obj
            try {
                obj = new Big(val)
            } catch (e) {
                return ''
            }
            return '0.' + new Array(-1 * obj.e).join('0') + obj.c.join('')
        }
        if (val.indexOf('.') === -1) {
            return unit + parseInt(val, 10)
        }
        var arr = val.split('.')
        if (arr[1].length >= precis && (val * 1).toFixed(precis) * 1 === 0) { // 限制小最值
            return 0
        }
        arr[1] = arr[1].substring(0, precis)
        arr[0] = parseInt(arr[0], 10) || 0
        val = unit + arr[0] + '.' + arr[1]
        val = val.replace(/(\.)?(0)+$/, '')
        return val
    }

    // 输入框截取
    DH.floatInput = function (val, precis) {
        var unit = ''
        if (val * 1 < 0) {
            unit = '-'
            val += ''
            val = val.replace('-', '') // 去掉负号
        }
        val += ''
        if (val === 'NaN' || val === 'Infinity' || val === 'undefined' || val === '0') {
            return 0
        }
        if (!val) {
            return ''
        }
        precis = precis || 6
        if (val.indexOf('e-') > 0) {
            var obj
            try {
                obj = new Big(val)
            } catch (e) {
                return ''
            }
            return '0.' + new Array(-1 * obj.e).join('0') + obj.c.join('')
        }
        if (val.indexOf('.') === -1) {
            return unit + parseInt(val, 10)
        }
        var arr = val.split('.')
        if (arr[1].length >= precis && (val * 1).toFixed(precis) * 1 === 0) { // 限制小最值
            return 0
        }
        arr[1] = arr[1].substring(0, precis)
        arr[0] = parseInt(arr[0], 10) || 0
        if (arr[1].length === precis) {
            val = unit + arr[0] + '.' + arr[1]
            val = val.replace(/(\.)?(0)+$/, '')
        } else {
            val = unit + parseInt(arr[0], 10) + '.' + arr[1]
        }
        return val
    }
    /*
    * 设置小数精确度
    * currency 币种
    * type 类型 （交易额，数量，价格）
    * fb 是否法币交易
    * */
    DH.setPrecise = function (currency, type) {
        var data
        if (currency === 'USD') {
            return 2
        }
        if (type === 'price') { // 价格
            data = {
                BTC: 6,
                ETH: 6,
                ETC: 6,
                LTC: 6,
                BCC: 6,
                VEN: 6,
            }
            return 6
        } else if (type === 'num') { // 余额数量
            data = {
                BTC: 9,
                ETH: 9,
                ETC: 9,
                LTC: 9,
                BCC: 9,
                VEN: 9,
            }
            return 9
        } else if (type === 'dealNum') { // 成交数量
            return 9
        } // 交易额
        data = {
            BTC: 9,
            ETH: 9,
            ETC: 9,
            LTC: 9,
            BCC: 9,
            VEN: 9,
        }
        return 9
        // return data[currency] || 1
    }
        
    // 获取资产中心、安全中心右侧界面
    /**
     * url 请求页面地址
     * target 容器jQuery对象
     * callBack 回调事件
     */
    DH.getCenterHtml = function (url, target, pageFn, callback) {
        if (url) {
            url += '?v=2'
            if (!DH.UID) {
                window.location.replace('/login.html?redir=' + encodeURIComponent(window.location.href))
                return
            }
            target.fadeOut(500, function () {
                util.comAjax({
                    url: url,
                    dataType: 'html',
                    type: 'GET',
                    tab: 'nav',
                }).done(function (html) {
                    // 添加到容器中
                    var $html = $(html)
                    target.html($html)
                    DH[pageFn]($html)
                    target.fadeIn()
                    callback && callback()
                }).fail(function (err) {
                    DH.fail(err)
                })
            })
        }
    }
    // 为了防止自动填入在加载是将所有密码框type改为password
    function setPassWordInput() {
        var ua = navigator.userAgent
        // 非手机端
        if (!ua.match(/AppleWebKit.*Mobile.*/) && 'webkitTextSecurity' in document.documentElement.style) {
            return
        } else {
            $('body').on('focus', 'input[newpassword]', function () {
                $(this).attr('type', 'password')
            })
        }
    }
    DH.setPassWordInput = function () {
        
    }
    /**
     * 密码复杂性判断
     */
    // 交易/提现密码复杂性判断
    DH.passComplicacy = function (pass) {
        return pass.length >= 6
    }
    // 登录密码复杂性判断
    DH.loginComplicacy = function (val) {
        if (val.length < 6) {
            return false
        }
        if (/^[a-zA-Z]+$/.test(val)) {
            return false
        }
        if (/^\d+$/.test(val)) {
            return false
        }
        if (/^[^\w]+$/.test(val)) {
            return false
        }
        return true
    }

    // 跳转登录页
    DH.goLogin = function () {
        var url = window.location.href.replace(/\??redir=[^&]+/, '')
        window.location.href = 'login.html?redir=' + encodeURIComponent(url)
    }
    
    DH.redirLogin = function () {
        var redir = util.getUrlParams('redir') || '/'
        window.location.href = '/login.html?redir=' + encodeURIComponent(redir)
    }
    
    init()
}(DH, window))
