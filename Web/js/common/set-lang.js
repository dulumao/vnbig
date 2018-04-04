/*
 *  页面设置语言包
 *  日期：2018/1/19.
 *  作者：Math
 * */
;
(function (space, $, window) {
    'use strict'

    var lang = space.language

    function init() {
        setLang()

        // 确保语言包显示完整
        setTimeout(function () {
            $('body').css('visibility', 'visible').addClass('bg-white')
        }, 300)
    }
    /*
     * 设置语言方法
     * target 目标元素
     * text 语言包
     * */
    function setText(target, text) {
        if (typeof target === 'string') {
            target = $('.lang-' + target)
        }
        if (target.length === 0) {
            return
        }
        var len = target.length
        if (len > 1 && typeof text === 'object') { // text为数组时
            for (var i = 0; i < len; i++) {
                var index = target.eq(i).attr('index')
                // 当targrt为input时
                if (target[i].nodeName.toLocaleLowerCase() == 'input') {
                    target.eq(i).attr('placeholder', text[index])
                } else {
                    target.eq(i).html(text[index])
                }
            }
            return
        }
        if (typeof text === 'object') {
            text = text[0]
        }
        // 当targrt为input时
        if (target[0] && target[0].nodeName.toLocaleLowerCase() == 'input') {
            target.attr('placeholder', text)
            return
        }
        target.html(text)
    }

    space.setText = setText

    var pageLang = {}
    // 设置公共部分语言
    pageLang.common = function () {
        setText('warning', lang.common.warning)
        setText('login', lang.common.login)
        setText('reg', lang.common.reg)
        setText('quit', lang.common.quit)
        setText('name', lang.common.name)
        setText('pass', lang.common.pass)
        setText('code', lang.common.code)
        setText('forget', lang.common.forget)
        setText('memberReg', lang.common.memberReg)
        setText('loginWell', lang.common.loginWell)
        setText('accountsTtle', lang.common.accountsTtle)
        setText('uproperty', lang.common.uproperty)
        setText('recharge', lang.common.recharge)
        setText('withdraw', lang.common.withdraw)
        setText('entrust', lang.common.entrust)
        setText('toFinance', lang.common.toFinance)
        setText('mobile', lang.common.mobile)
        setText('repass', lang.common.repass)
        setText('Referrer', lang.common.Referrer)
        setText('agree', lang.common.agree)
        setText('getCode', lang.common.getCode)
        setText('newPass', lang.common.newPass)
        setText('newRepass', lang.common.newRepass)
        setText('submit', lang.common.submit)
        setText('forgetTitle', lang.common.forgetTitle)
        setText('back', lang.common.back)
        setText('mailbox', lang.common.mailbox)
        setText('phoneR', lang.common.phoneR)
        setText('mailboxR', lang.common.mailboxR)
        setText('or', lang.common.or)
        setText('start', lang.common.start)

        // 设置导航栏文字
        setText('nav', lang.header.nav)

        // 设置客服文字
        setText('service', lang.customer.service)
        setText('customerTitle', lang.customer.customerTitle)
        setText('lan', lang.customer.lan)
        setText('yan', lang.customer.yan)

        // 页脚
        setText('aboutTitle', lang.footer.aboutTitle)
        setText('contact', lang.footer.about.contact)
        setText('fee', lang.footer.about.fee)
        setText('privacy', lang.footer.about.privacy)
        setText('agreement', lang.footer.about.agreement)
        setText('portTitle', lang.footer.portTitle)
        setText('contactPort', lang.footer.port.contactPort)
        setText('portRes', lang.footer.port.portRes)
        setText('toWap', lang.footer.port.toWap)
        setText('footerNewsTitle', lang.footer.footerNewsTitle)
        setText('newsText', lang.footer.news.newsText)
        setText('twitter', lang.footer.news.twitter)
        setText('worksheet', lang.footer.worksheet)
        setText('copyright', lang.footer.copyright)

        // warring 错误提示
        setText('echooseArea', lang.loginRegister.error.einputAccount)
        setText('einputPwd', lang.loginRegister.error.einputPwd)
        setText('einputRePwd', lang.loginRegister.error.einputRePwd)
        setText('epwdDifferent', lang.loginRegister.error.epwdDifferent)
        setText('einputCode', lang.loginRegister.error.einputCode)
        setText('ecodeError', lang.loginRegister.error.ecodeError)
        setText('ephoneNull', lang.loginRegister.error.ephoneNull)
        setText('emailNulll', lang.loginRegister.error.emailNulll)
        setText('emailError', lang.loginRegister.error.emailError)
        setText('echooseArea', lang.loginRegister.error.echooseArea)

        // 帮助中心公用右侧
        setText('rightTitle', lang.help.right.rightTitle)
        setText('rightText', lang.help.right.rightText)
        setText('rightNews', lang.help.right.rightNews)
        setText('rightTwitter', lang.help.right.rightTwitter)
    }

    // 首页
    pageLang.index = function () {
        setText('wellText', lang.index.wellText)
        setText('wellAbout', lang.index.wellAbout)
        setText('banner', lang.index.banner)
        setText('regBtn', lang.index.regBtn)
        setText('loginText', lang.index.loginText)
        setText('loginBtn', lang.index.loginBtn)
    }

    // 登录页面语言
    pageLang.login = function () {
        setText('ltitle', lang.loginRegister.login.ltitle)
        setText('luserId', lang.loginRegister.login.luserId)
        setText('luserPwd', lang.loginRegister.login.luserPwd)
        setText('lforgetPwd', lang.loginRegister.login.lforgetPwd)
        setText('ltoLogin', lang.loginRegister.login.ltoLogin)
        setText('lnoneId', lang.loginRegister.login.lnoneId)
        setText('lsubheading', lang.loginRegister.login.lsubheading)
        setText('lcreatAccount', lang.loginRegister.login.lcreatAccount)
    }

    // 注册页面
    pageLang['register-mail'] = pageLang['register-phone'] = function () {
        setText('rArea', lang.loginRegister.register.rArea)
        setText('rvite', lang.loginRegister.register.rvite)
        setText('rchina', lang.loginRegister.register.rchina)
        setText('rchooseArea', lang.loginRegister.register.rchooseArea)
        setText('remail', lang.loginRegister.register.remail)
        setText('rphone', lang.loginRegister.register.rphone)
        setText('rmailboxReg', lang.loginRegister.register.rmailboxReg)
        setText('rphoneReg', lang.loginRegister.register.rphoneReg)
        setText('rcode', lang.loginRegister.register.rcode)
        setText('rGetCode', lang.loginRegister.register.rGetCode)
        setText('ruserPwd', lang.loginRegister.register.ruserPwd)
        setText('rrepass', lang.loginRegister.register.rrepass)
        setText('rreferrer', lang.loginRegister.register.rreferrer)
        setText('ragreen', lang.loginRegister.register.ragreen)
        setText('rclause', lang.loginRegister.register.rclause)
        setText('ragreenRegister', lang.loginRegister.register.ragreenRegister)
        setText('rhasAccount', lang.loginRegister.register.rhasAccount)
        setText('rpLogin', lang.loginRegister.register.rpLogin)
        setText('rcreatAccount', lang.loginRegister.register.rcreatAccount)
        setText('rsubheading', lang.loginRegister.register.rsubheading)
        setText('p1', lang.loginRegister.register.p1)
        setText('p2', lang.loginRegister.register.p2)
        setText('p3', lang.loginRegister.register.p3)
    }

    // 交易页面
    pageLang.tradeFB = pageLang.tradeBB = function () {
        /* 头部信息*/
        setText('topInfo', lang.trade.topInfo)
        /* 交易品列表*/
        setText('toDeal', lang.trade.dealList.toDeal)
        setText('toBB', lang.trade.dealList.toBB)
        setText('dealListItems', lang.trade.dealList.dealListItems)
        /* K线图*/
        setText('kBtn', lang.trade.kBtn)
        /* 买入卖出框*/
        setText('buyFB', lang.trade.buyFB)
        setText('sellFB', lang.trade.sellFB)
        setText('buyBB', lang.trade.buyBB)
        setText('sellBB', lang.trade.sellBB)
        setText('inputPriceBuy', lang.trade.inputPrice)
        setText('inputValBuy', lang.trade.inputVal)
        setText('inputPassBuy', lang.trade.inputPass)
        setText('inputPriceSell', lang.trade.inputPrice)
        setText('inputValSell', lang.trade.inputVal)
        setText('inputPassSell', lang.trade.inputPass)
        /* 订单列表*/
        setText('orderBuy', lang.trade.order.orderBuy)
        setText('orderSell', lang.trade.order.orderSell)
        setText('items', lang.trade.order.items)
        setText('fiveOrder', lang.trade.fiveOrder)
        /* 个人订单列表*/
        setText('userOrderBuy', lang.trade.order.userOrderBuy)
        setText('userOrderSell', lang.trade.order.userOrderSell)
        /* 成交记录*/
        setText('transactionRecord', lang.trade.transactionRecord)
        setText('entrustRecord', lang.trade.entrustRecord)
    }

    // 安全中心
    // 单独页面语言在单独js中设置
    pageLang.safety = function () {
        setText('indexPage', lang.safety.indexPage)
        setText('safetyCenter', lang.safety.safetyCenter)
        setText('itemList', lang.safety.itemList)
    }

    // 资产管理
    // 单独页面语言在单独js中设置
    pageLang.assets = function () {
        setText('indexPage', lang.asset.indexPage)
        setText('asset', lang.asset.asset)
        setText('itemList', lang.asset.itemList)
    }

    // 费率说明
    pageLang['help-expense'] = function () {
        setText('feeTitle', lang.help.fee.feeTitle)
        // setText('feeSection', lang.help.fee.feeSection)
        // setText('feetext', lang.help.fee.feetext)
        setText('feeTable', lang.help.fee.feeTable)
        setText('feeText', lang.help.fee.feeText)
    }

    // 联系我们
    pageLang['help-contact'] = function () {
        setText('conTitle', lang.help.contact.conTitle)
        setText('conSection', lang.help.contact.conSection)
        setText('conItemName', lang.help.contact.conItemName)
        setText('conInput', lang.help.contact.conInput)
        setText('conSubmit', lang.help.contact.conSubmit)
        setText('conTips', lang.help.contact.conTips)
        setText('conselect', lang.help.contact.conselect)
    }
    
    // 新闻中心
    pageLang['help-news'] = pageLang['newlist-info'] = function () {
        setText('newsTitle', lang.help.news.newsTitle)
        setText('newsSection', lang.help.news.newsSection)
        setText('newsInfo', lang.help.news.newsInfo)
    }
    
    // 白皮书
    pageLang.wpaper = function () {
        setText('planTitle', lang.wpaper.plan.planTitle)
        setText('planText', lang.wpaper.plan.planText)
        setText('tradeH3', lang.wpaper.trade.tradeH3)
        setText('tradeTitle', lang.wpaper.trade.tradeTitle)
        setText('tradeText', lang.wpaper.trade.tradeText)
        setText('synopsisH3', lang.wpaper.synopsis.synopsisH3)
        setText('synopsisTitle', lang.wpaper.synopsis.synopsisTitle)
        setText('synopsisText', lang.wpaper.synopsis.synopsisText)
        setText('currencyList', lang.wpaper.synopsis.currencyList)
        setText('teamTitle', lang.wpaper.team.teamTitle)
        setText('teamName', lang.wpaper.team.teamName)
        setText('teamMeg', lang.wpaper.team.teamMeg)
        setText('banContent', lang.wpaper.banContent)
        setText('allotContent', lang.wpaper.allotContent)
    }

    function setLang() {
        var pathname = window.location.pathname
        pathname = pathname.replace('/', '').replace('.html', '')
        if (pathname === '') {
            pathname = 'index'
        }
        pageLang.common()
        pageLang[pathname] && pageLang[pathname]()
    }

    init()
}(DH, jQuery, window))
