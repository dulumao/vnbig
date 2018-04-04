;

(function (zh) {
    // 提示信息
    zh.message = {
        refresh: '页面加载失败，请刷新页面重试！',
        upFail: '上传失败，请重试！',
        submit: '提交失败，请重试！',
        success: '提交成功！',
    }

    zh.common = {
        pageTitle: 'VNBIG-东南亚最大的数字资产交易平台！',
        // 所有class为lang-加上对象名
        login: '登录',
        reg: '注册',
        quit: '退出',
        name: '请输入邮箱',
        pass: '请输入密码',
        code: '请输入验证码',
        forget: '忘记密码?',
        memberReg: '用户注册',
        loginWell: '欢迎使用VNBIG',
        accountsTtle: '您正在使用的账号为：',
        uproperty: '总资产：',
        recharge: '充值',
        withdraw: '提现',
        entrust: '委托管理',
        toFinance: '去财务中心',
        repass: '请再次输入密码',
        Referrer: '请输入经理人',
        agree: '请同意VNBIG用户协议',
        mobile: '请输入手机号',
        getCode: '获取验证码',
        back: '< 返回',
        forgetTitle: '找回密码',
        newPass: '请输入新密码',
        newRepass: '请再次输入密码',
        mailbox: '请输入电子邮箱',
        phoneR: '手机注册',
        mailboxR: '邮箱注册',
        submit: '提交',
        noData: '暂无数据！',
        ajaxInfo: ['ajax调用异常：', 'ajax调用报错：', '网络错误！'],
        // 温馨提示
        warning: '温馨提示：数字资产是创新的投资产品，价格波动较大，具有较高的投资风险，请您投资前对数字资产充分认知，理性判断自己的投资能力，审慎做出投资决策',
        // unit: '￥',
        // unitAbbr: 'USD'
        unit: '$',
        unitAbbr: 'USD',
        or: '或',
        start: '开始交易',
        noReal: '您未实名认证，请先实名认证',
        noReals: ['您未实名认证，请先认证', '您未照片认证，请先认证', '您未设置交易密码，请先设置', '您未设置提现密码，请先设置'],
        tradeType: {
            0: '买',
            1: '卖',
        },
        btn: {
            ok: '确定',
            cancel: '取消',
        },
        // 翻页组件
        PTurnReach: '到第',
        PTurnPage: '页',
        PTurnDetermine: '确定',

    }

    zh.index = {
        wellText: '欢迎来到VNBIG',
        wellAbout: '我们是东南亚最大的数字货币交易平台，提供安全可靠的交易功能',
        banner: ['在全球最活跃的', '数字资产交易所进行安全交易'],
        regBtn: '创建您的账户',
        loginText: '已经是会员？',
        loginBtn: '登录',
        popPanel: [
            '公开发行！',
            '立即查看',
            '距首次代币发行（ICO）还剩',
            '天',
            '小时',
            '分钟',
            '秒',
            '本次发行已结束！',
        ],
    }

    // 登录注册页面需要内容
    zh.loginRegister = {
        login: {
            // 登录到您的账号
            ltitle: '登录到您的账号',
            // 账号
            luserId: '电子邮件',
            // 密码
            luserPwd: '密码',
            // 忘记密码
            lforgetPwd: '忘记密码?',
            // 登录
            ltoLogin: '登录',
            // 没有账号
            lnoneId: '没有帐号？',
            // 创建一个帐号在东南亚最大的数字货币交易平台开始交易
            lsubheading: '创建一个帐号在东南亚最大的数字货币交易平台开始交易。',
            // 创建您的帐户
            lcreatAccount: '立即注册',
            resetTip: '由于网站安全升级，您的密码过于简单，需要重新设置',
            resetPwd: ['重置密码', '账号：', '验证码：', '获取验证码', '新密码：', '确认密码：', '提交'],
            resetOk: '修改成功，请重新登录',
        },
        register: {
            // 国家
            rArea: '国家',
            // 中国
            rchina: '中国',
            // 越南
            rvite: '越南',
            // 选择国家
            rchooseArea: '选择国家…',
            // 电子邮件
            remail: '电子邮件',
            // 手机号
            rphone: '手机号',
            // 验证码
            rcode: '验证码',
            // 获取验证码
            rGetCode: '获取验证码',
            // 密码
            ruserPwd: '密码',
            // 重复输入密码
            rrepass: '重复输入密码',
            // 推荐人
            rreferrer: '邀请码',
            // 点击注册视为同意
            ragreen: '点击注册视为同意',
            // 使用条款
            rclause: '"用户协议"',
            // 同意并注册
            ragreenRegister: '同意并注册',
            // 已有帐号
            rhasAccount: '已有帐号?',
            // 请登录
            rpLogin: '请登录',
            // 创建您的帐户
            rcreatAccount: '创建您的帐户',
            // 注册VNBIG是创建帐户的第一步。一旦您的电子邮件确认，您需要完成您的个人资料并验证您的身份才能开始交易。
            rsubheading: '注册VNBIG是创建帐户的第一步。一旦您的电子邮件确认，您需要完成您的个人资料并验证您的身份才能开始交易。',
            // 1. 您提供的电子邮件地址将成为您的VNBIG ID，并将用于所有将来的通信，包括帐户恢复。保护您的电子邮件帐户，就像您的VNBIG帐户一样。请使用有效的电子邮件地址进行注册。
            p1: '1. 您提供的电子邮件地址将成为您的VNBIG ID，并将用于所有将来的通信，包括帐户恢复。保护您的电子邮件帐户，就像您的VNBIG帐户一样。请使用有效的电子邮件地址进行注册。',
            // 2. 您的密码必须为6位字符以上（不包括6位字符），但建议您选择至少32个字符的随机字母数字符号密码。
            p2: '2. 您的密码必须为6位字符以上（不包括6位字符），但建议您选择至少32个字符的随机字母数字符号密码。',
            // 3. 不要使用任何您使用过的其他方式的注册密码，特别是对于您注册的电子邮件地址。
            p3: '3. 不要使用任何您使用过的其他方式的注册密码，特别是对于您注册的电子邮件地址。',
            mactivate: '已注册，但未激活，请在验证邮件里点击激活',
        },
        error: {
            // 请输入手机或邮箱
            einputAccount: '请输入账号',
            // 请输入密码
            einputPwd: '请输入密码',
            // 请再次输入新密码
            einputRePwd: '请再次输入新密码',
            // 两次输入密码不相同，请再次输入
            epwdDifferent: '两次输入密码不相同，请再次输入',
            // 请输入验证码
            einputCode: '请输入验证码',
            // 验证码错误
            ecodeError: '验证码错误',
            // 手机号不能为空
            ephoneNull: '手机号不能为空',
            // 邮箱不能为空
            emailNulll: '邮箱不能为空',
            // 请输入正确的电子邮箱
            emailError: '请输入正确的电子邮箱',
            // 请选择国家
            echooseArea: '请选择国家',
        },
    }

    zh.header = {
        // 欢迎语
        wellcome: '您好，欢迎来到东南亚最大的数字资产交易平台！',
        // 导航文字,'币币交易'
        nav: ['首页', '交易中心', '资产管理', '安全中心', '帮助中心'],
    }

    zh.customer = {
        // 客服
        service: '客服',
        // 扫码添加Zalo在线客服
        customerTitle: '扫码添加Zalo在线客服',
        // 客服1: 阿兰
        lan: '客服1: 阿兰',
        // 客服2: 阿燕
        yan: '客服2: 阿燕',
    }

    // 交易中心
    zh.trade = {
        kBtn: ['周期', '分时', '1分钟', '3分钟', '5分钟', '15分钟', '30分钟', '1小时', '2小时', '4小时', '6小时', '8小时', '12小时', '日线', '周线'],
        kLabel: ['所有', '价格', '成交量', '开盘', '收盘', '最低', '最高'],
        enough: '您的余额不足，无法下单购买！',
        /* ~~~~~~~~~0~~~~~~~~~~~1~~~~~~~~2~~~~~~~3~~~~~~~4~~~~~~~~~5~~~~~~~~~6~~~*/
        input: ['最佳买价', '最大可买', '交易额', '可用', '最佳卖价', '最大可卖', '交易额'],
        // 输入错误
        priEmpty: '单价不能为空、0、负值',
        priLimit: ['输入价格不能超过当前价格10倍', '输入价格不能低于当前价格0.1倍'],
        numEmpty: '数量不能为空、0、负值',
        totalEmpty: '交易额太小，请重新输入',
        passEmpty: '交易密码不能为空',
        businessError: '交易失败！',
        business: '交易成功！',
        topInfo: ['最新成交价', '日涨跌', '最高价', '最低价'],
        // 交易列表
        dealList: {
            dealListTitle: '交易中心',
            toDeal: '交易中心',
            toBB: '币币交易',
            dealListItems: ['币种名称', '成交价', '成交量', '涨跌幅'],
        },
        // 买入与卖出
        buyFB: ['买入', '买入价格', '买入数量', '交易额', '手续费', '交易密码', '买入'],
        sellFB: ['卖出', '卖出价格', '卖出数量', '交易额', '手续费', '交易密码', '卖出'],

        buyBB: ['买入', '买入价格', '买入数量', '交易额', '交易密码', '买入', '手续费'],
        sellBB: ['卖出', '卖出价格', '卖出数量', '交易额', '交易密码', '卖出', '手续费'],
        // 交易订单
        order: {
            orderSell: ['卖出订单', '卖', '卖出价', '委单量'],
            orderBuy: ['购买订单', '买', '买入价', '委单量'],
            userOrderSell: '个人卖出订单',
            userOrderBuy: '个人购买订单',
            items: ['价格', '数量', '总价', '价格', '数量', '总价', '操作'],
            remove: ['撤单', '确定要撤单吗？', '撤单成功'],
        },
        // 5档挂单
        fiveOrder: ['买/卖', '价格', '委单量', '总额', '买入', '卖出'],
        // 成交记录
        transactionRecord: ['最新成交', '时间', '买／卖', '最新成交价', '成交量', '总金额', '个人成交记录'],
        inputPrice: '请输入价格', // inputPriceBuy & inputPriceSell
        inputVal: '请输入数量', // inputValBuy & inputValSell
        inputPass: '请输入交易密码', // inputPassBuy & inputPassSell
        // 20180201 交易中心
        entrustRecord: [
            '委托买入', // 0
            '委托卖出', // 1
            '时间', // 2
            '买/卖', // 3
            '币种', // 4
            '委托价格', // 5
            '委托数量', // 6
            '成交数量', // 7
            '尚未成交', // 8
            '委托挂单', // 9
            '委托历史', // 10
            '查看更多', // 11
            '您还没有登录，请', // 12
            '登录',
            '操作', // 13
        ],
    }

    // 交易详情页
    zh.details = {
        // 公共头部
        detailsCom: ['最高价', '最低价', '买一价', '卖一价', '24H成交量'],
        detailsComlistTab: ['交易', '了解', '评价', '资讯'],
        // k线图
        Kline: {
            KlineBtn: ['5分钟', '15分钟', '30分钟', '1小时', '8小时', '日线'],
            KlineLabel: ['所有', '价格[USD]', '成交量', '开盘', '收盘', '最低', '最高'],
            KlineLabelbb: ['所有', '价格', '成交量', '开盘', '收盘', '最低', '最高'],
        },
        // 用户具体可用币
        useble: ['可用', '冻结', '折合现金', '可用现金', '冻结现金'],
        // 买入与卖出
        business: {
            buy: ['买入', '买入价格', '买入数量', '交易额', '手续费', '交易密码', '买入'],
            sell: ['卖出', '卖出价格', '卖出数量', '交易额', '手续费', '交易密码', '卖出'],
        },
        // 买\卖记录
        BuySellRecords: ['买/卖', '价格', '数量', '折合现金'],
        // 成交记录
        transactionRecord: ['最近成交记录', '成交时间', '买／卖', '成交价', '成交量', '总金额'],
        // 提示信息
        messinfo: [
            '请输入数字！', // 0
            '不能为0或空', // 1
            '请登录后再进行买卖！', // 2
            '最佳买价只能为数字,不能为空,不能为0！', // 3
            '最大可买只能为数字,不能为空,不能为0！', // 4
            '无法购买此数量的产品!', // 5
            '请输入交易密码！', // 6
            '购买成功！', // 7
            '最佳卖价只能为数字,不能为空,不能为0！', // 8
            '最大可卖只能为数字,不能为空,不能为0！', // 9
            '无法卖出此数量的产品!', // 10
            '卖出成功！', // 11
        ],
    }

    // 币币交易
    zh.Exchange = {
        title: ['限价交易', '当前委托'],
        // 限价交易
        block1: ['可用', '买入价格', '买入数量', '交易额', '请输入交易密码', '可用', '卖出价格', '卖出数量', '交易额', '请输入交易密码'],
        // 当前委托
        block2: ['时间', '委托价', '委托量', '委托总额', '已成交', '成交均价', '未成交', '买/卖'],
        // 右侧表格
        right: ['买/卖', '价格', '数量'],
        // input默认内容
        input: ['买入价格', '买入数量', '请输入交易密码', '卖出价格', '卖出数量', '请输入交易密码'],
        // 按钮
        button: ['买入', '卖出'],
        // 购买数量错误
        Valerror: '可买资金不足！',
        // 输入错误
        priEmpty: '单价不能为空、0、负值',
        numEmpty: '购买数量不能为空、0、负值',
        passEmpty: '交易密码不能为空',
        businessError: '交易失败！',
        business: '交易成功！',
    }

    // 交易订单
    zh.order = {
        sell: '卖出订单',
        buy: '购买订单',
        items: ['价格', '数量', '折合现金', '价格', '数量', '折合现金'],
    }

    // 信息中心 info.html
    zh.info = [
        '介绍',
        '英文：',
        '缩写：',
        '推出日期：',
        '详细参数',
        '名称：',
        '英文名：',
        '英文简称：',
        '研发者：',
        '核心算法：',
        '发布日期：',
        '区块速度：',
        '发行总量：',
        '主要特色：',
        '不足之处：',
    ]

    // newlist-info.html
    zh.newlistInfo = [
        '推出日期：',
        '免责声明：',
        '本文由VNBIG小编整理自网络，仅为方便数字货币爱好者阅读参考，并不代表VNBIG建议，币市有风险，投资需谨慎。部分文章来源互联网，如该转载不符合您的意愿或侵犯您的版权，请您与我们联系，我们会尽快删除。',
        '投稿：如果您有需要发表的资讯文章，请发送至llihui@tonglingwangluo.com',
    ]

    // evaluate.html
    zh.evaluate = {
        title: ['评分', '我来讲两句', '币民都在说'],
        comment: ['技术评分：', '应用评分：', '前景评分：'],
        other: ['评价星级：', '人投票', '提交评论', '分', '评价说'],
        messinfo: [
            '评论不能为空！',
            '有禁忌字，请重新输入！',
            '评论成功！',
            '没有消息！',
            '评价说：',
        ],
    }

    zh.logo = './Web/img/common/logo-zh.png'

    // 底部
    zh.footer = {
        // 版权
        copyright: 'CopyRight 2015-2017 VNBIG All Rights Reserved. Powered 版权所有',
        // 关于
        aboutTitle: '关于VNBIG',
        about: {
            contact: '联系我们',
            fee: '费用',
            privacy: '隐私政策',
            agreement: '用户协议',
        },
        portTitle: '支持',
        port: {
            contactPort: '联系支持',
            portRes: '支持资源',
            toWap: '切换到手机网站',
        },
        footerNewsTitle: '公告',
        news: {
            newsText: 'VNBIG公告',
            twitter: '推特',
        },
        worksheet: '在线工单',
    }

    // 交易中心页面
    zh.deal = {
        // 列表头
        listName: ['币种名称', '最新成交价(USD)', '买一价', '卖一价', '价格趋势(3日)'],
        listNameBB: ['币种名称', '最新成交价', '日涨跌', '24H最高价', '24H最低价', '24H成交量', '价格趋势(3日)'],
        toDeal: '去交易',
        // 平台介绍文字
        introduce: {
            // 标题
            title: '安全可靠的数字资产交易平台',
            // 模块介绍
            modelTitle: ['系统可靠', '资金安全', '快捷方便', '服务专业'],
            modelText: [
                '银行级用户数据加密、动态身份验证，多级风险识别控制，保障交易安全',
                '钱包多层加密，离线存储于银行保险柜，资金第三方托管，确保安全',
                '充值即时、提现迅速，每秒万单的高性能交易引擎，保证一切快捷方便',
                '专业的客服团队，400电话和24小时在线QQ，VIP一对一专业服务',
            ],
            // 新闻标题
            news: {
                title: ['媒体报道', '市场动态', '帮助中心'],
                more: '查看更多>>',
                empty: '敬请期待！',
            },
        },
    }

    // 错误提示
    zh.error = {
        // 系统错误
        ajax: '系统罢工了！',
        returnCode: '系统错误刷新重试！',
        nullUser: '未知用户',
        quit: '退出失败',
        list: '数据正在维护',
        news: '没有消息！',
        // 输入错误
        idEmpty: '请输入邮箱',
        passEmpty: '请输入密码',
        codeEmpty: '请输入验证码',
        code: '验证码错误',
        telEmpty: '手机号不能为空',
        rePassEmpty: '请再次输入密码',
        passNo: '两次输入密码不相同，请再次输入',
        newpassEmpty: '请输入新密码',
        newRepassEmpty: '请再次输入新密码',
        coinList: '币种列表获取错误',
        buySell: '币种价格获取失败',
        nologin: '请登录后再进行买卖！',
        mailboxEmpty: '邮箱不能为空',
        mailboxInfo: '请输入正确的电子邮箱',
        PMname: '请输入正确的邮箱',
        // 密码强度弱，请输入至少6位的数字加字母组合
        complicacy: '请输入至少6位的数字和字母组合',
    }

    zh.tip = {
        forget: '重置密码成功！',
        reg: '注册成功，请登录！',
    }

    zh.safety = {
        indexPage: '首页',
        safetyCenter: '安全中心',
        itemList: ['安全中心', '实名认证', '照片认证', '修改登录密码', '修改交易密码', '找回交易密码', '修改提现密码', '找回提现密码'],
        common: {
            passComplicacy: '新密码长度不能小于6位',
        },
        safety: {
            title: '安全中心',
            leve: '中等',
            SSitems: ['姓名：', '账号：', '实名认证', '照片认证', '交易密码'],
            loginPass: ['登录密码', '登录VNBIG账户时需要输入的密码', '修改登录密码'],
            tradePass: ['交易密码', '在VNBIG进行交易时需要输入的密码', '修改交易密码'],
            withdrawPass: ['提现密码', '在VNBIG进行提现时需要输入的密码', '修改提现密码'],
            authPass: ['实名认证', '受国家要求及为了您的资金安全需进行实名认证'],
            idCardPass: ['照片认证', '受国家要求及为了您的资金安全需进行照片认证', '修改登录密码'],
            authStatus: ['未认证', '立即认证', '已认证', '查看', '审核未通过', '重新认证', '审核中', '查看进度', '未设置', '立即设置', '已设置', '立即修改'],
        },
        auth: {
            title: '实名认证',
            tips: '请认真填写（银行卡开户姓名），提交后不可修改!',
            SAitems: ['真实姓名：', '身份证号：', '确认'],
            authSuccess: ['已认证', '真实姓名：', '身份证号码：'],
            authDefeated: ['审核不通过', '重新提交'],
            authAudit: ['真实姓名：', '身份证号码：', '审核中'],
            prompt: ['请正确填写您的姓名', '请正确填写您的身份证号', '认证信息提交成功'],
        },
        idCard: {
            title: '照片认证',
            zm: '身份证正面',
            bm: '身份证背面',
            sc: '手持身份证正面',
            chooseImg: '选择图片',
            submit: '确认提交',
            success: '照片认证成功',
            submitSuccess: '提交成功',
            nosuccess: '照片认证失败',
            why: '您申请认证的照片模糊，不能审核您的身份，请重新提交',
            resubmit: '重新提交',
            auditing: '审核中',
            uploadImg: '请上传所有需要的图片',
            large: '图片过大！请上传小于500K的图片',
        },
        login: {
            title: '修改登录密码',
            tips: '为确保您的顺利交易，请牢记登录密码!',
            SLitems: ['登录密码：', '新登录密码：', '再次输入新密码：'],
            Btn: '保存',
            prompt: ['请输入原登录密码', '新登录密码不能为空', '再次输入新密码不能为空', '两次密码请输入一致', '密码修改成功，请重新登录'],
        },
        transaction: {
            title: '修改交易密码',
            tips: '第一次修改，不用输入原交易密码！',
            STitems: ['原交易密码：', '新交易密码：', '重复新密码：'],
            Btn: '确定',
            prompt: ['请输入原交易密码', '新交易密码不能为空', '重复的新密码不能为空', '两次密码请输入一致', '密码修改成功!'],
        },
        back: {
            title: '找回交易密码',
            SBitems: ['邮箱号：', '验证码：', '获取验证码', '新交易密码：', '重复新密码：'],
            Btn: '确定',
            prompt: ['请先设置您的交易密码!', '邮箱号不能为空!', '新交易密码不能为空', '重复的新密码不能为空', '两次密码请输入一致', '密码修改成功！'],
        },
        withdraw: {
            title: '修改提现密码',
            tips: '第一次修改，不用输入原提现密码！',
            STitems: ['原提现密码：', '新提现密码：', '重复新密码：'],
            Btn: '确定',
            prompt: ['请输入原提现密码', '新提现密码不能为空', '重复的新密码不能为空', '两次密码请输入一致', '密码修改成功!'],
        },
        backWithdraw: {
            title: '找回提现密码',
            SBitems: ['邮箱号：', '验证码：', '获取验证码', '新提现密码：', '重复新密码：'],
            Btn: '确定',
            prompt: ['请先设置您的提现密码!', '邮箱号不能为空!', '新提现密码不能为空', '重复的新密码不能为空', '两次密码请输入一致', '密码修改成功！'],
        },
    }

    // 资产管理
    zh.asset = { // html中
        indexPage: '首页',
        asset: '资产管理',
        itemList: ['资产管理',
            '充值',
            '提现',
            '银行卡管理',
            '转入虚拟币', '转出虚拟币', '委托管理', '成交查询', 'VNBIG经理人'],
        loadHint: [ // “资产管理”中的滚动加载提示语
            '滚动加载更多…', // 0
            '没有更多数据了!', // 1
        ],
        // 资产管理
        manage: {
            asset: '资产管理',
            Mremaining: '总额约：',
            Mrechagee: '充值',
            Mdeposit: '申请提现',
            MAinfo: '推荐VNBIG赚佣金，躺着也挣钱！',
            MAnavList: ['币种', '可用余额', '委托冻结', '总计', '操作', '提现冻结'],
            Mhandle: ['提币', '充币', '充值', '提现'],
            sumFB: '账户余额约合：',
            sumBB: '总资产折合：',
            btnFB: '法币账户',
            btnBB: '数字币账户',
        },
        // 充值
        recharge: {
            REcharge: '充值',
            bankRecharge: '银行转账充值',
            bdbank: '绑定银行卡',
            REinfo1: '尊敬的用户，平台充值系统已升级，请按以下充值流程进行操作:',
            REinfo2: '使用已绑定的银行卡转账',
            REinfo3: '系统自动入账',
            REinfo4: '充值提醒',
            REinfo5: '抱歉，当前账户暂时未绑定银行卡，请添加银行卡后进行充值。',
            REinfo6: '请注明汇款信息及时间',
            REaddbank: '添加银行卡',
            REhkbank: '汇款银行：',
            REname: '开户姓名：',
            REbanknum: '银行卡号：',
            REfhinfo: '分行信息：',
            REczmoney: '充值金额：',
            REmess: '备注：',
            REpassword: '交易密码：',
            REsure: '确定',
            REcontactAgent: '请联系下方代理商进行充值',
            contact: ['ZALO二维码', '代理商QQ'],
            REczrecord: '充值记录',
            REnavList: ['充值金额', '时间', '状态', '订单编号'],
            RNewNeedList: [ // 充值 20180118 新需求
                '在进行交易前，您需要银行卡转账', // 0
                '请输入充值金额', // 1
                '约等于', // 2
                '下一步', // 3
                '收款方', // 4
                '收款人：', // 5
                '收款帐号：', // 6
                '开户行：', // 7
                'VNBIG官方收款账户，请仔细核对信息', // 8
                '订单编号：', // 9
                '充值金额：', // 10
                '取消', // 11
                '已确认金额', // 12
                '您已成功取消订单！', // 13
                '您已成功确认订单！', // 14
                '您有未完成订单，请先完成该订单！', // 15
                '充值须知', // 16
                '支持金额: 单笔最低充值金额为', // 17
                '1. 账户充值目前支持网银转账和线下银行柜台汇款，暂不支持其它支付方式；', // 18
                '2. 用户输入充值金额，点击下一步，即会生成一个唯一的订单编号，用户需牢记此订单编号；', // 19
                '3. 在汇款时备注该订单编号，成功付款后，充值金额将通过工作人员审核后添加至用户账户（充值中/ 充值成功的订单是无法撤销退款的）。', // 20
                '最小充值金额为:', // 21
                '提现须知', // 22
                '支持金额: 单笔最低提现金额：1美元；单笔最高提现金额：1400美元；当天累计最高提现金额：4600美元。', // 23
                '1.提现处理时间: 周一至周五 08:00~17:00；（非工作时间的提现，将延迟至第二个工作日的上午8点后处理，请您耐心等待）；', // 24
                '2. 提现方式: 仅限您实名并且已绑定的银行卡进行提现处理；提现具体到账时间以银行出账时间为准；', // 25
                '3. 注意事项: 非实名认证的银行卡提现我平台不予处理；如果您的资金未在规定时间内到账，请联系客服。', // 26
                '（非常重要，请务必填写此6位数字在转账或汇款的备注里！否则可能会影响充值到账！）', // 27  充值内容
                '4.【充值时间】：本平台充值时间为越南河内时间 8:00 a.m -- 5:00 p.m 。', // 28  充值内容
                '5.【到账时间】：同行汇款，理论上，当天到账，财务会将等值USD充值到您的VNBIG账户；跨行汇款，上午汇款，理论上，下午到账，财务会将等值USD充值到您的VNBIG账户; 跨行汇款，下午汇款，财务会以客户实际到账时间将等值USD充值到您的VNBIG账户；充值高峰期到账时间为1到2天不等，如遇到节假日及周末高峰期会有延迟。', // 29  充值内容
            ],
        },
        bankCard: {
            title: '银行卡管理',
            tips: '暂不支持信用卡和支付宝，请填写实名认证的银行卡账户信息',
            items: ['真实姓名：', '实名认证，不能修改', '选择银行：', '银行卡号：', '银行卡开户行：', '填写详细的开户行，方便我们及时转账', '添加银行卡'],
            box: ['添加记录', '银行类型', '开户行', '户主姓名', '卡号', '操作'],
        },
        inCoin: {
            title: '转入虚拟币',
            items: ['可用虚拟币', '虚拟币', '冻结虚拟币', '', '这是您的钱包地址，请将您的', '转入此地址：', '钱包地址'],
            explain: ['转入说明：', '1. 转入是自动的，', '转账需要整个', '网络进行确认，达到 3 个确认后您的', '会自动充值到您的账户中', '2. 此地址是您唯一且独自使用的转入地址，您可以同时进行多次充值，也可将此地址做为您在矿池的付款地址', '3. 本地址禁止充值除', '之外的其他资产 任何其他资产充值将不可找回'],
            box: ['转入记录', '记录ID', '实付', '到账时间', '确认数', '发送时间', '状态'],
        },
        outCoin: {
            title: '转出虚拟币',
            items: ['可用虚拟币', '虚拟币', '冻结虚拟币', '虚拟币'],
            form: ['转出数量：', '提现密码：', '验证码：', '获取验证码', '手续费：', '手续费范围：', '增加手续费将提升到账速度', '转出地址：', '手续费：'],
            tips: ['错误提示', '确认转出'],
            explain: ['转出说明：', '1. 转出是自动的，', '转账需要整个', '网络进行确认，达到 3 个确认后您的', '会自动充值到您的账户中', '2. 此地址是您唯一且独自使用的转入地址，您可以同时进行多次充值，也可将此地址做为您在矿池的付款地址', '3. 本地址禁止充值除', '之外的其他资产 任何其他资产充值将不可找回'],
            box: ['转出记录', '提现ID', '时间', '提现', '到帐', '转账备注'],
            status: {
                1: '未确认',
                2: '已确认',
                3: '已处理',
                4: '失败',
            },
            CodeSend: '验证码已发送，请前往邮箱查收！',
            noEmail: '请输入邮箱地址',
            noCode: '请输入验证码',
            EmailBing: '邮箱绑定成功',
            noEmailText: [
                '请先绑定邮箱',
                '输入邮箱：',
                '输入验证码',
                '获取验证码',
                '绑定邮箱',
            ],
            minText: '最小提币数量为：',
            partHint: '特别说明：提币请选择imtoken或者kcash钱包，选择其他 钱包可能会无法接收而给您造成损失。',
        },
        // 资产管理 VNBIG经理人
        assetsHandler: {
            HAhandler: 'VNBIG经理人',
            HAinviteNum: '我的邀请人数',
            HAinviteUrl: '我的邀请链接',
            HAcopyUrl: '复制链接',
            HAassetsInfo: '你可以通过邀请朋友来扩大您的投资人脉，交流投资心得,可以将邀请链接发送给朋友',
            HAfriendList: '邀请记录',
            HAfriendName: '用户名',
            HAregisterTime: '注册时间',
            HAprofit: '收益',
            HAtotal: '合计 : ',
            HNewNeed: [ // 20180206 经理人新需求
                '总收益(USD)', // 0
                '昨日收益(USD)', // 1
                '今日收益(USD)', // 2
                '我的邀请', // 3
                '1. 我的邀请码为：', // 4
                '可以让您推荐的用户填写到注册时的“邀请码”一栏；', // 5
                '2. 您也可以直接发送以下链接给好友点击打开注册；', // 6
                '3. 保存二维码图片，转发给您的朋友扫码打开链接注册。', // 7
                '您可以通过邀请朋友来扩大您的投资人脉，交流投资心得，可以将邀请链接发送给朋友。并且，', // 8
                '您将持续获得被邀请人所有交易手续费的 ', // 9
                '% 提成奖励。', // 10
                '复制链接成功!', // 11
            ],
        },
        // 资产管理 委托管理
        assetsEntrust: {
            ETentrust: '委托管理',
            ETstarttime: '请选择开始时间',
            ETendtime: '请选择结束时间',
            ETfind: '查询',
            ETorder: '委托挂单',
            EThistory: '委托历史',
            ETtime: '时间',
            ETbuysell: '买/卖',
            coinType: '币种',
            ETWTWTJG: '委托价格',
            ETWTWTSL: '委托数量',
            ETturnover: '成交数量',
            ETunsettled: '尚未成交',
            ETallSucceed: '操作',
            ETcd: '撤单',
        },
        // 资产管理 提现
        assetsDeposit: {
            DEtitle: '提现', // 0
            DEinfo: '暂时不支持信用卡和支付宝提现，目前仅支持储蓄卡提现。', // 1
            DEaccount: '收款银行账号', // 2
            DEcannuse: '可用金额', // 3
            DEtxmoeny: '提现金额', // 4
            DEchangpas: '提现密码', // 5
            DEsuretx: '确认提现', // 6
            DEtxrecord: '提现记录', // 7
            DEsxf: '手续费', // 8
            DEsuremoeny: '实际到账', // 9
            DEbankid: '收款银行账号', // 10
            DEtime: '时间', // 11
            DEstat: '状态', // 12
            DEall: '全部提现', // 13
        },
    }

    // 转入虚拟币
    zh.assetsIncoin = {
        status: {
            0: '未处理',
            1: '成功',
            2: '失败',
        },
    }

    // 转出虚拟币
    zh.assetsOutcoin = {
        status: {
            1: '未确认',
            2: '已确认',
            3: '已处理',
            4: '失败',
        },
        apiError: ['转出数量不能为空、0、负值', '请输入提现密码', '请输入验证码', '最低手续费为', '最高手续费为', '请输入转出地址'],
        apiOk: '转出成功，请在收到邮件后30分钟内点击确认',
        minNum: '转出数量不能小于最小提币数！',
    }

    // 银行卡管理
    zh.assetsBank = {
        apiError: ['请输入银行卡号', '请输入银行卡开户行'],
        apiOk: '添加成功',
        remove: ['确定要删除该银行卡吗？', '删除成功', '删除'],
    }

    // 充值管理
    zh.assetsRecharge = {
        status: {
            0: '未处理',
            1: '用户提交',
            2: '财务确认',
        },
        apiError: ['请输入充值金额', '请输入交易密码'],
        apiOk: '充值成功',
    }

    // 提现
    zh.assetsDeposit = {
        apiError: ['请输入提现金额', '请输入提现密码'], // 0
        notCard: '抱歉，当前账户暂时未绑定银行卡', // 1
        apiOk: '提现成功', // 2
        canUse: '可用余额 ', // 3
        extraDe: '额外扣除 ', // 4
        serviceCharge: ' 手续费 (费率0.8%)', // 5
        cashMin: '单笔提现金额不得小于1USD', // 6
        cashMax: '单笔提现金额不得大于1400USD', // 7
    }

    // 委托管理
    zh.assetsEntrust = {
        all: '全部',
        remove: ['确定要撤单吗？', '撤单成功'],
    }

    // 底部页面
    zh.help = {
        // 页面公用右侧
        right: {
            rightTitle: [
                '联系支持',
                '公告',
                '社交媒体',
            ],
            rightText: [
                '所有技术支持问题都通过我们的支持系统来处理。',
                '想知道VNBIG发生了什么？关注我们。',
            ],
            rightNews: 'VNBIG公告',
            rightTwitter: '推特',
        },
        fee: {
            feeTitle: '费率说明',
            // feeSection: ['自2017年9月26日起生效', '制造者意味着什么？', '交易费用是多少？'],
            // feetext: [
            //     '为了鼓励流动性强劲，市场扩张更加紧密，VNBIG采用了多层次的制作者收费表。所有用户于2017年9月26日移至此模型。访问“<a class="import" href="assets.html?modle=record">成交查询</a>”页面以跟踪您的进度。',
            //     '每次交易都是在双方之间进行的：制造者的订单存在于交易前的订单上，以及接受订单的人，他们将订单匹配（或“采取”）制造商的订单。制造商如此命名，因为他们的订单使流动性在一个市场。接管者是通过将制造商的订单与自己的订单相匹配来消除流动性。<br>制造者模式鼓励市场流动性，奖励制造商的流动性，并以费用折扣。这也导致市场扩张更加严格，原因是制造商竞争激烈。收取者支付的较高费用通常被更严格的差价提供的更好的价格抵消。',
            //     '交易手续费将从您的成交总额中扣除。若成交后获得货币资产，则支付货币交易手续费；反之，若成交后获得数字资产，则支付数字资产交易手续费。',
            //     '例如：您以6300美元卖出1BTC，会扣除6.3美元手续费，获得6293.7美元。您以6300元买入1BTC，会扣除0.001BTC手续费，获得0.999BTC。'
            // ],
            feeTable: ['制作者', '接受者', '交易量(30天)'],
            feeText: ['您当前的制造者/接受者的费率为', '向下一层进展', '您的30天内交易量为', '您需要', '达到', '每24小时，我们将计算该账户最后30天的交易量，并根据上述表格动态调整费用。'],
        },
        contact: {
            conTitle: '联系支持',
            conSection: '让我们知道你需要什么',
            conItemName: [
                '问题类型：',
                '电子邮件：',
                '附件：',
                '问题内容：',
                '如果遇到数字资产问题，请填写您钱包地址',
                '您遇到了什么问题：',
            ],
            // '上传图片或压缩文件',
            conInput: '上传图片',
            conSubmit: '提交',
            conTips: '该邮箱不受联系请求的监控。有关技术援助，请联系我们。',
            conselect: [
                '选择一个问题类型...',
                '注册',
                '密码',
                '实名认证',
                '充币',
                '提币',
                '交易',
                '其他',
            ],
            error: [
                '提交失败请重试',
                '提交成功',
                '请选择问题类型',
                '请输入问题描述',
                '请输入邮箱地址,以便我们和您联系',
                '请输入正确的邮箱地址',
                '请输入问题描述',
                '上传的文件格式错误',
            ],
        },
        news: {
            newsTitle: 'VNBIG公告',
            newsSection: ['关于VNBIG', 'VNBIG公告'],
            newsInfo: 'VNBIG是领先的数字资产交易所，提供各种数字资产。VNBIG成立于2016年3月，提供 安全的交易环境，为客户提供现金的图表和数据分析工具。',
        },
    }
    // 众筹VNC
    zh.wpaper = {
        // banner内容
        banContent: [
            'VNBIG TOKEN', // 0
            '（已在交易所存储的ETH可使用提现功能转出）', // 1
            '距首次代币发行（ICO）还剩', // 2
            '天', // 3
            '小时', // 4
            '分钟', // 5
            '秒', // 6
            '立即参与', // 7
            'ETH地址', // 8
            '已充值', // 9
            '每个用户最多认购', // 10
            '确认认购', // 11
            '已认购', // 12
            '本次发行已结束！', // 13
            '您已成功认购！', // 14
            '认购失败，请重试！', // 15
            '距代币发行（ICO）结束还剩', // 16
        ],

        // 分配部分的内容
        allotContent: [
            'VNC 代币发行分配',
            '团队持有: 50%',
            '市场推广: 15%',
            '早期投资者: 10%',
            '公开发行: 25%',
            '下载白皮书',
            'VNC 代币回购机制',
            '在平台部署在线上正式投入运营后，每季度将平台净利润的 40%用于回购 VNC 代币，回购后的 VNC 代币会进行销毁处理，直至平台上的 VNC 代币流通总量为10 亿为止。',
        ],
        // 发行计划
        plan: {
            planTitle: 'VNC 发行计划',
            planText: [
                '本次 VNBIG 代币发行将于2018年1月18日20:00(北京时间)在区块链项目发行官网开始发售。', // 0
                '众筹发行支持币种：', // 1
                '以太坊 (ETH)', // 2
                '白名单注册会员制：', // 3
                '白名单会员需在2018年1月16日开始申请，保有', // 4
                '20ETH 额度', // 5
                '第一轮兑换（2018年1月18日-1月20日）：', // 6
                '1ETH 兑换 40000VNC', // 7
                '第二轮兑换（2018年1月21日-1月28日）：', // 8
                '1ETH 兑换 36000VNC', // 9
                '发行 VNC 兑完即止。', // 10
            ],
        },
        // OTC 场外交易与期货功能
        trade: {
            tradeH3: 'OTC 场外交易与期货功能',
            tradeTitle: [
                'OTC 场外交易',
                '杠杆交易功能',
            ],
            tradeText: [
                'Vnbig 拟开通人民币及美元对数字货币的直接交易渠道与交易， 在平台上，用户和投资人直接买卖所有区块链数字资产，平台拥有极高信用保障和强力技术支撑，保证能快速、安全买入所有数字币并进行法币的充值与提现。',
                'Vnbig 拟开通指数合约的交易功能，平台用户在这里交易指定区块链数字资产现货及衍生资产。设置事前和事中的止损设置，预警设置，以实现完整的交易流程和拓展。',
            ],
        },
        // VNBIG 简介
        synopsis: {
            synopsisH3: [
                'VNBIG 简介',
                'VNBIG 优点',
            ],
            synopsisTitle: [
                '高性能支持',
                '安全稳定',
                '支持币种',
                '流动性支持',
                '运营能力',
                '多语言支持',
            ],
            currencyList: [
                'BTC',
                'ETH',
                'LTC',
                'BCH',
                'VNC（VNBIG的Token代币）',
                'IOTA',
                'ETC',
                'EOS',
            ],
            synopsisText: [
                'VNBIG 区块链资产交易平台依托潜力巨大的东南亚交易市场，向全球范围内的用户和投资人提供一个全流程、易操作、具备高信任保障的区块链资产的交易平台。区块链技术和以其相互依存的金融体系将是未来行业发展的大趋势，所以想借助时代契机，助力整个区块链应用及商业市场。', // 0
                'VNBIG 交易系统采用内存撮合技术， 使用AWS 亚马逊云强大的运维体系，支持高并发访问， 确保高速度的订单处理能力以及交易时效，保证在处理订单时不会出现任何延时和卡顿。', // 1
                'VNBIG 采用了先进的多层、多集群系统架构。多层层架构的设计大幅提高了系统的性能、安全性、稳定性和扩展性。功能部署、版本更新无需停机进行。同时VNBIG 采用交易与储存分离设计， 可以多维确认交易， 最大限度保障终端用户的操作体验。', // 2
                '在交易初期， 我们将提供对以下币种的支持：', // 3
                '后期逐步上线其他优质币种。', // 4
                'VNBIG 在行业内有丰富的资源和众多的合作伙伴。以及拥有众多东南亚资源，在系统上线前，已和多家国内外的矿厂、投资基金、交易大户达成共识，VNBIG 平台上线后， 他们的交易也将转移至平台为平台提供充足的流动性，带给用户良好的交易体验。', // 5
                'VNBIG 拥有资深运营团队， 社交媒体互动营销、 社群建设、 深度品牌树立共同打造出东南亚区块链和数字资产的权威品牌。', // 6
                'VNBIG第一期上线版本已支持越南语、英文、繁体中文、简体中文四种语言，后期会逐步支持包括日、韩等其他语言，为打造世界级区块链资产交易平台扫清语言障碍。', // 7
            ],
        },
        team: {
            teamTitle: [
                '核心团队介绍',
                '管理团队',
                '顾问团队',
            ],
            teamName: [
                'CEO 恩东', // 0
                'COO 阮大福', // 1
                'CTO Andrey loshakov', // 2
                '徐宝龙', // 3
                '楼霁月', // 4
                '帅初', // 5
                '孙泽宇', // 6
                '椰子', // 7
            ],
            teamMeg: [
                '越南知名数字货币投资人。 Foreign Trade University（河内外贸大学），K48系(2009-2013)，专业：国际商业经济学International Business Economics，拥有多年的数字货币关注以及从业经验，个人曾经参与投资全球的诸个区块链应用及数字货币项目。', // 0
                '毕业于越南河内百科大学，越南早期数字货币玩家，有一定的社群影响力和扎实的运营经验。', // 1
                'Andrey系统架构师、对冲基金策略分析师。他研发了对冲基金筛选和 RMB对冲母基金组合构建所需的交易引擎。Andrey从新西伯利亚国立大学毕业， 并从莫斯科new economics school 获得数学金融硕士学位。', // 2
                '龙眼区块链创始人，毕业于中国人民大学，北京大学 MBA。曾任火币网（中国三大数字货币交易平台之一）区块投研中心总监。2016 年初，创立了Dragonshield信息安全服务网站为中国海外情报公司和多个安保公司提供公司级信息安全及私人安保服务。', // 3
                '约 翰 霍 普 金 斯 大 学 研 究 生 学 位。Tokenmania Asset Management Corporation联合创始人。致力于提供数字货币领域全套资产管理服务，从事数字货币对冲基金投资、数字货币现货投资。', // 4
                'Qtum创始人', // 5
                '著名区块链、数字货币投资人', // 6
                '毕业于中国科技大学和中国科学院', // 7
                '博士期间就从事区块链技术开发', // 8
                '参与国内外众多区块链项目', // 9
                '库神钱包联合创始人', // 10
                '无引力基金联合创始人', // 11
                '北京大学金融科技创新实验室研究员', // 12
                '业内大咖', // 13
                'kernas资本合伙人', // 13
                '前ug创始人', // 14
                '曾全程参与辅导多家拟上市公司的IPO', // 15
                '创建ugChain区块链，致力于区块链应用落地', // 16
            ],
        },
    }
}(DH.lang.zh))
