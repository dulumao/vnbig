;

(function (en) {
    // 提示信息
    en.message = {
        refresh: 'Page failed to load, please refresh the page to try again！',
        upFail: 'Upload failed, try again！',
        submit: 'Submit failed, try again！',
        success: 'Success！',
    }

    en.common = {
        pageTitle: 'The largest digital asset trading platform in South East Asia！',
        // 所有class为lang-加上对象名
        login: 'Sign In',
        reg: 'Sign Up',
        quit: 'Sign Out',
        name: 'Input User Name',
        pass: 'Input Password',
        code: 'Input Validation Code',
        forget: 'Forget Password?',
        memberReg: 'Member Sign Up',
        loginWell: 'Welcome',
        accountsTtle: 'Signing In VNBIG',
        uproperty: 'Your assets：',
        recharge: 'Recharge',
        withdraw: 'Withdraw',
        entrust: 'Assets Management',
        toFinance: 'Go to the financial center',
        repass: 'login Password Again',
        Referrer: 'Input Agent',
        agree: 'Accept VNBIG User Protocol',
        mobile: 'Input Phone Number',
        getCode: 'Get Validation Code',
        back: '< Back',
        forgetTitle: 'Find Back Password',
        newPass: 'New Login Password',
        newRepass: 'New Login Password Again',
        mailbox: 'Please Input Email Address',
        phoneR: 'Phone Number Register',
        mailboxR: 'Emailbox Register',
        submit: 'Confirm/Sure',
        noData: 'No data!',
        ajaxInfo: ['Call ajax exception：', 'call ajax error：', 'net error！'],
        // 温馨提示
        warning: 'Kindly reminder：Digital asset is an innovative investment product, the price fluctuates greatly, and it has higher investment risks. Before you invest, please fully recognize the digital assets, rationally judge your investment ability, and make prudent investment decisions',
        unit: '$',
        unitAbbr: 'USD',
        or: 'Or',
        start: 'Start Trading',
        noReal: 'You are not a real name authentication, please first name authentication',
        noReals: ['You are not authenticated. Please certify', 'You are not certified, please first certify', 'You have not set a trading password. Please set it first', 'Please set up your withdraw password first!'],
        tradeType: {
            0: 'Buy',
            1: 'Sell',
        },
        btn: {
            ok: 'Ok',
            cancel: 'Cancel',
        },
        // 翻页组件
        PTurnReach: 'To the',
        PTurnPage: 'page',
        PTurnDetermine: 'Determine',
    }

    en.index = {
        wellText: 'Welcome to VNBIG',
        wellAbout: "We are Southeast Asia's largest digital currency trading platform, providing safe and reliable trading function",
        banner: ["Trade securely on the world's", 'most active digital asset exchange.'],
        regBtn: 'Create your account',
        loginText: 'Already member?',
        loginBtn: 'Sign In',
        popPanel: [
            'Public issuing!',
            'Immediately check',
            'left from the initial currency offer (ICO)',
            'day',
            'hour',
            'minute',
            ' second',
            'this offering is over! ',
        ],
    }

    // 登录注册页面
    en.loginRegister = {
        login: {
            // 登录到您的账号
            ltitle: 'Log in to your account',
            // 账号
            luserId: 'E-mail',
            // 密码
            luserPwd: 'Password',
            // 忘记密码
            lforgetPwd: 'Forget password?',
            // 登录
            ltoLogin: 'Login',
            // 没有账号
            lnoneId: 'There is no account？',
            // 创建一个帐号在东南亚最大的数字货币交易平台开始交易
            lsubheading: "Create an account to start trading in southeast Asia's largest digital currency trading platform",
            // 创建您的帐户
            lcreatAccount: 'immediately register',
            resetTip: 'Due to the security of your site, your password is too simple and needs to be reset',
            resetPwd: ['Reset Password', 'Account：', 'Verification code：', 'Get code', 'New password：', 'Confirm password：', 'Submit'],
            resetOk: 'If the changes are successful, please login again',
        },
        register: {
            // 国家
            rArea: 'Country',
            // 中国
            rchina: 'China',
            // 越南
            rvite: 'Vietnam',
            // 选择国家
            rchooseArea: 'Choose the country…',
            // 电子邮件
            remail: 'E-mail',
            // 手机号
            rphone: 'Mobile phone no.',
            // 验证码
            rcode: 'Verification code',
            // 获取验证码
            rGetCode: 'Get validation code',
            // 密码
            ruserPwd: 'Password',
            // 重复输入密码
            rrepass: 'Repeat password',
            // 推荐人
            rreferrer: 'Invitation code',
            // 点击注册视为同意
            ragreen: 'Click register to agree',
            // 使用条款
            rclause: '"User Agreement"',
            // 同意并注册
            ragreenRegister: 'Consent and registration',
            // 已有帐号
            rhasAccount: 'Existing account?',
            // 请登录
            rpLogin: 'Please log in',
            // 手机注册
            rphoneReg: 'Phone Register',
            // 邮箱注册
            rmailboxReg: 'Emailbox Register',
            // 创建您的帐户
            rcreatAccount: 'Create your account',
            // 注册VNBIG是创建帐户的第一步。一旦您的电子邮件确认，您需要完成您的个人资料并验证您的身份才能开始交易。
            rsubheading: 'Registering VNBIG is the first step to creating an account.Once your email is confirmed, you need to complete your profile and verify your identity before you start trading.',
            // 1. 您提供的电子邮件地址将成为您的VNBIG ID，并将用于所有将来的通信，包括帐户恢复。保护您的电子邮件帐户，就像您的VNBIG帐户一样。请使用有效的电子邮件地址进行注册。
            p1: '1. Your E-mail address will be your VNBIG ID and will be used for all future communications, including account recovery.Protect your email account, just like your VNBIG account.Please register with a valid email address.',
            // 2. 您的密码必须为6位字符以上（不包括6位字符），但建议您选择至少32个字符的随机字母数字符号密码。
            p2: '2. Your password must be more than 6 characters (not including 6 characters), but it is recommended that you choose a random alphanumeric password of at least 32 characters.',
            // 3. 不要使用任何您使用过的其他方式的注册密码，特别是对于您注册的电子邮件地址。
            p3: '3. Do not use any other registration password that you have used, especially for your registered email address.',
            mactivate: 'Registered but not activated. Please activate in verify mail',
        },
        error: {
            // 请输入手机或邮箱
            einputAccount: 'Please input Username',
            // 请输入密码
            einputPwd: 'Please enter your password',
            // 请再次输入新密码
            einputRePwd: 'Please enter the new password again',
            // 两次输入密码不相同，请再次输入
            epwdDifferent: 'The two passwords are different. Please enter again',
            // 请输入验证码
            einputCode: 'Please enter the verification code',
            // 验证码错误
            ecodeError: 'Verification code error',
            // 手机号不能为空
            ephoneNull: "The phone number can't be empty",
            // 邮箱不能为空
            emailNulll: 'Mailbox cannot be empty',
            // 请输入正确的电子邮箱
            emailError: 'Please enter the correct E-mail address',
            // 请选择国家
            echooseArea: 'Please select the country',
        },
    }

    // 交易订单
    en.order = {
        sell: 'Sell Orders',
        buy: 'Purchase Orders',
        items: ['Price', 'Quantity', 'Tổng giá', 'Price', 'Quantity', 'Tổng giá'],
    }

    en.header = {
        // 欢迎语
        wellcome: 'The largest digital asset trading platform in South East Asia！',
        // 导航文字,'Currency Transaction'
        nav: ['Home', 'Trade Center', 'Assets', 'Account', 'Help'],
    }

    en.customer = {
        // 客服
        service: 'Customer',
        // 扫码添加Zalo在线客服
        customerTitle: 'Scan Qr code to add online customer care staff on zalo.',
        // 客服1: 阿兰
        lan: 'Customer care 1: Miss Lan',
        // 客服2: 阿燕
        yan: 'Customer care 2: Ms Yen',
    }

    // 交易中心
    en.trade = {
        kBtn: ['Time', 'Realtime', '5 minutes', '15 minutes', '30 minutes', '1 hour', '8 hours', '24 hours'],
        kLabel: ['All', 'Price', 'Deal Volume', 'Opening', 'Closing', 'Lowest Price', 'Highest Price'],
        enough: 'Our balance is not enough, you can\'t place an order!',
        /* ~~~~~~~~~0~~~~~~~~~~~1~~~~~~~~2~~~~~~~3~~~~~~~4~~~~~~~~~5~~~~~~~~~6~~~*/
        input: ['Best price', 'Maximum buying', 'Deal price', 'Available', 'Best sell price', 'Maximum sell volume', 'Deal price'],
        // 输入错误
        priEmpty: 'Unit-price can not be empty, 0, negative value',
        priLimit: ['The input price can not exceed 10 times the current price', 'Enter the price can not be lower than the current price of 0.1 times'],
        numEmpty: 'The quantity purchased cannot be null, 0, or negative',
        totalEmpty: 'The transaction amount is too small. Please re-enter',
        passEmpty: 'Trade password can not be empty',
        businessError: 'Trade failed!',
        business: 'Trade successful!',
        // ['最新成交价', '日涨跌', '最高价', '最低价'],
        topInfo: ['Latest deal price', 'Change', 'Highest price', 'Lowest price'],
        // 交易列表
        dealList: {
            dealListTitle: 'Trading Center',
            toDeal: 'Trading Center',
            toBB: 'Currency Trading',
            dealListItems: ['Name', 'Final Price', 'Volume', 'Change'],
        },
        // 买入与卖出
        buyFB: ['Buy', 'Price', 'Quantity', 'Deal price', 'Service charge', 'Password', 'Buy'],
        sellFB: ['Sell', 'Price', 'Quantity', 'Deal price', 'Service charge', 'Password', 'Sell'],
        buyBB: ['Buy', 'Price', 'Quantity', 'Deal price', 'Password', 'Buy', 'Service charge'],
        sellBB: ['Sell', 'Price', 'Quantity', 'Deal price', 'Password', 'Sell', 'Service charge'],

        // 交易订单
        order: {
            orderSell: ['Sell Orders', 'Sell', 'Sell Price', 'Order Amount'],
            orderBuy: ['Purchase Orders', 'Buy', 'Buy Price', 'Order Amount'],
            userOrderSell: 'Individual sell orders',
            userOrderBuy: 'Individual purchase orders',
            items: ['Price', 'Quantity', 'Total price', 'Price', 'Quantity', 'Total price', 'Operating'],
            remove: ['withdraw', 'Sure you withdraw? ', ' Withdrawal single success'],
        },
        // 5档挂单
        fiveOrder: ['Buy / Sell', 'Price', 'Order Amount', 'Total Amount', 'Buy', 'Sell'],
        // 成交记录
        transactionRecord: ['Latest Transaction', 'Time', 'Buy / Sell', 'Latest deal price', 'Deal Volume', 'Aggregate Amount', 'Personal transaction record'],
        inputPrice: 'Please enter the price', // inputPriceBuy & inputPriceSell
        inputVal: 'Please enter the amount', // inputValBuy & inputValSell
        inputPass: 'Password', // inputPassBuy & inputPassSell
        // 20180201 交易中心
        entrustRecord: [
            'Entrust to buy', // 0
            'Entrust to sell', // 1
            'Time', // 2
            'Buy / Sell', // 3
            'Currency', // 4
            'Entrust price', // 5
            'Entrust quantity', // 6
            'Number of deals', // 7
            'Not yet completed', // 8
            'Delegate pending order', // 9
            'Entrust History', // 10
            'See more', // 11
            'You are not logged in, please', // 12
            'login',
            'Operation', // 13
        ],
    }

    // 交易详情页
    en.details = {
        // 公共头部
        detailsCom: ['Highest Price', 'Lowest Price', 'Buy Per Price', 'Sell Per Price', '24H Deal Volume'],
        detailsComlistTab: ['Trade', 'Knowing', 'Comment', 'News'],
        // k线图
        Kline: {
            KlineBtn: ['5 minutes', '15 minutes', '30 minutes', '1 hour', '8 hours', '24 hours'],
            KlineLabel: ['All', 'Price[USD]', 'Deal Volume', 'Opening', 'Closing', 'Lowest Price', 'Highest Price'],
            KlineLabelbb: ['All', 'Price', 'Deal Volume', 'Opening', 'Closing', 'Lowest Price', 'Highest Prices'],
        },
        // 用户具体可用币
        useble: ['Available Assets', 'Frozen Assets', 'Converting', 'Avaliable Balance', 'Frozen Assets'],
        // 买入与卖出
        business: {
            buy: ['Buy-in', 'buy-in price', 'Buy-in quantity', 'Deal price', 'Service charge', 'Please input trade password', 'Buy-in'],
            sell: ['Sell', 'Sell price', 'Sell quantity', 'Deal price', 'Service charge', 'Please input trade password', 'Sell'],
        },
        // 买\卖记录
        BuySellRecords: ['Buy/Sell', 'Price', 'Amount', 'Convert To USD'],
        // 成交记录
        transactionRecord: ['Recent Deal Record', 'Deal Time', 'Buy/Sell', 'Deal Price', 'Deal Volume', 'Aggregate Amount'],
        // 提示信息
        messinfo: [
            'Please input number！', // 0
            '0 or empty is invalid', // 1
            'Please purchase after login！', // 2
            'The best buy-in price is numer,neither empty nor 0!', // 3
            'The maximum buy only for numbers,neither empty nor 0!', // 4
            'Unable to purchase this quantity of product!', // 5
            'Please input trade password！', // 6
            'Purchase successful!', // 7
            'The best sell price is numer,neither empty nor 0!', // 8
            'The maximum availabel sell only for numbers,neither empty nor 0!', // 9
            'Unable to sell this quantity of product!', // 10
            'Sell successful!', // 11
        ],
    }

    // 币币交易
    en.Exchange = {
        title: ['Limit trading price', 'Current agent'],
        // 限价交易
        block1: ['Available', 'buy-in price', 'Buy-in quantity', 'Deal price', 'Please input trade password', 'Available', 'Sell price', 'Sell quantity', 'Deal price', 'Please input trade password'],
        // 当前委托
        block2: ['Date', 'Precatory Price', 'Precatory Amount', 'Aggregate Amount', 'Deal Volume', 'Average Price', 'Not Traded', 'Buy/Sell'],
        // 右侧表格
        right: ['Buy/Sell', 'Price', 'Amount'],
        // input默认内容
        input: ['Buy-in Price', 'Buy-in Quantity', 'Please Input Trade Password', 'Sell Price', 'Sell Quantity', 'Please Input Trade Password'],
        // 按钮
        button: ['Buy', 'Sell'],
        // 购买数量错误
        Valerror: 'Your balance is insufficient！',
        // 输入错误
        priEmpty: 'Unit-price can not be empty, 0, negative value',
        numEmpty: 'The quantity purchased cannot be null, 0, or negative',
        passEmpty: 'Trade password can not be empty',
        businessError: 'Trade failed!',
        business: 'Trade successful!',
    }

    // info.html
    en.info = [
        'Introduce',
        'English Name：',
        'English Abbreviation：',
        'Push-off Date：',
        'Detail',
        'Name：',
        'English Name：',
        'English Abbreviation：',
        'Developers：',
        'Core Algorithm：',
        'Release Date：',
        'Block Speed：',
        'Total Issued：',
        'Main Features：',
        'Inadequacy：',
    ]

    // newlist-info.html
    en.newlistInfo = [
        'Push-off Date：',
        'Disclaimer：',
        'This article by the VNBIG editor compiled from the network, only for the convenience of digital money lovers B352:C410 reference, does not represent VNBIG proposal, currency City risk, investment needs to be cautious. Some articles from the Internet, such as the reprint does not meet your wishes or infringe on your copyright, please contact us, we will delete as soon as possible.',
        'Submission: if you have any information articles you need to publish, please send to llihui@tonglingwangluo.com',
    ]

    // evaluate.html
    en.evaluate = {
        title: ['Grade', 'I want to say', 'What thay said'],
        comment: ['skill score：', 'application score：', 'prospect score：'],
        other: ['comment star：', 'voter', 'Commit Comment', 'scores', 'said'],
        messinfo: [
            'Comment content can not be empty!',
            'There are forbidden words, please re-enter!',
            'Comment successful!',
            'No message！',
            'Say:',
        ],
    }

    en.logo = './Web/img/common/logo-en.png'

    // 底部
    en.footer = {
        // 版权
        copyright: 'CopyRight 2015-2017 VNBIG All Rights Reserved. Powered all rights reserved',
        // 关于
        aboutTitle: 'About VNBIG',
        about: {
            contact: 'Contact Us',
            fee: 'Fee',
            privacy: 'Privacy Policy',
            agreement: 'User Agreement',
        },
        portTitle: 'Support',
        port: {
            contactPort: 'Contact Support',
            portRes: 'Support Resources',
            toWap: 'To Wap',
        },
        footerNewsTitle: 'Announcement',
        news: {
            newsText: 'VNBIG Announcement',
            twitter: 'Twitter',
        },
        worksheet: 'Online work order',
    }

    // 交易中心页面
    en.deal = {
        // 列表头
        listName: ['Currency Name', 'Latest Price', 'Buy Per Price', 'Sell Per Price', 'Price Trend (3 Day)'],
        listNameBB: ['Currency Name', 'Latest Price', '%Change', '24HR High', '24HR Low', 'Volume', 'Price Trend (3 Day)'],
        toDeal: 'To Trade',
        // 平台介绍文字
        introduce: {
            // 标题
            title: 'A secure and reliable digital asset trading platform',
            // 模块介绍
            modelTitle: ['System Reliability', 'Funds Security', 'Quick And Convenient', 'Professional Service'],
            modelText: [
                'Bank level user data encryption, dynamic authentication, multi-level risk identification control, to ensure transaction security',
                'Wallet multi-layer encryption, offline storage in bank safes, funds third party custody, to ensure safety',
                'Recharge instantly, quickly cash withdrawals, million per second of high-performance trading engine, to ensure that everything is quick and convenient',
                'Professional customer service team, 400 phone and 24 hour online QQ, VIP one to one professional services',
            ],
            // 新闻标题
            news: {
                title: ['Media Report', 'Market Dynamics', 'Support Center'],
                more: 'See More >>',
                empty: 'Coming Soon！',
            },
        },
    }

    en.error = {
        // 系统错误
        ajax: 'The system is on strike!',
        returnCode: 'System error ,try again later!',
        nullUser: 'Unknown user',
        quit: 'Sign out failure',
        list: 'Database is maintained',
        news: 'No message！',
        // 输入错误
        idEmpty: 'Please input user name',
        passEmpty: 'Please input password',
        codeEmpty: 'Please input validation code',
        code: 'Validation code invalid',
        telEmpty: 'Phone number can not be empty',
        rePassEmpty: 'Login password again',
        passNo: 'Inconsistent input of 2 times new login password',
        newpassEmpty: 'New login password',
        newRepassEmpty: 'New login password again',
        coinList: 'Currency type list access error',
        buySell: 'Currency price acquisition failed',
        nologin: 'Please purchase after login!',
        mailboxEmpty: 'Emial address can not be empty',
        mailboxInfo: 'Please input valid email address',
        PMname: 'Please enter your vaild email',
        // 密码强度弱，请输入至少6位的数字加字母组合
        complicacy: 'Please enter at least 6 digits plus letter combination',
    }

    en.tip = {
        forget: 'Change succeed！',
        reg: 'Register successful,please sign in!',
    }

    en.safety = {
        indexPage: 'Home',
        safetyCenter: 'Security Center',
        itemList: ['Security Center', 'Real Name Authentication', 'Photo Authentication', 'Modify login password', 'Modify transaction password', 'Retrieve transaction password', 'Modify withdraw password', 'Retrieve withdraw password'],
        common: {
            passComplicacy: 'The new password can not be less than 6 digits in length',
        },
        safety: {
            title: 'Security Center',
            leve: 'Secondary',
            SSitems: ['Name：', 'Account：', 'Real Name Authentication', 'Photo Authentication', 'Transaction password'],
            loginPass: ['Login password', 'The password you need to enter when logging into the VNBIG account', 'Modify login password'],
            tradePass: ['Transaction password', 'The password you need to enter in VNBIG transactions', 'Modify transaction password'],
            withdrawPass: ['Withdrawn password', 'The password you need to enter in VNBIG cash withdrawal', 'Modify withdrawal password'],
            authPass: ['Real Name Authentication', 'Real name authentication is required by the state and for the safety of your funds'],
            idCardPass: ['Photo Authentication', 'Photo authentication is required by the state and for the safety of your funds', 'Modify login password'],
            authStatus: ['Not certified', 'Immediate authentication', 'Authenticated', 'Check', 'The audit failed', 'Re authentication', 'In audit', 'View progress', 'Not set', 'Set immediately', 'Already set', 'Immediate modification'],
        },
        auth: {
            title: 'Real Name Authentication',
            tips: 'Please fill in the form (bank card name), after submission can not be modified!',
            SAitems: ['Real name', 'ID number', 'Confirm submission'],
            authSuccess: ['Authenticated', 'Real name', 'ID number'],
            authDefeated: ['Audit not through', 'Resubmit'],
            authAudit: ['Real name', 'ID number', 'In audit'],
            prompt: ['Please fill in your name', 'Please fill in your ID number correctly', 'Successful submission of certification information'],
        },
        idCard: {
            title: 'Photo Authentication',
            zm: 'Front of ID card',
            bm: 'ID card back',
            sc: 'Handheld ID card facade',
            chooseImg: 'Select Picture',
            submit: 'Confirm submission',
            success: 'Photo authentication successful',
            submitSuccess: 'Submit successfully',
            nosuccess: 'Photo authentication failed',
            why: 'The photo you requested for authentication is blurry and cannot be audited for your identity. Please resubmit it',
            resubmit: 'Resubmit',
            auditing: 'In audit',
            uploadImg: 'Please upload all the required pictures',
            large: 'Please upload an image of less than 500K',
        },
        login: {
            title: 'Modify login password',
            tips: 'To ensure your successful transaction, please keep in mind your login password!',
            SLitems: ['Login password', 'New login password:', 'Enter the new password again:'],
            Btn: 'Save',
            prompt: ['Please enter the original login password ', 'the new login password cannot be empty', 're enter the new password, not empty', 'two password, enter the same', 'password changes successfully, please log in again'],
        },
        transaction: {
            title: 'Modify transaction password',
            tips: 'The first modification, do not enter the original transaction password!',
            STitems: ['Original transaction password:', 'New transaction password:', 'Duplicate new password:'],
            Btn: 'Comfirm',
            prompt: ['Please enter the original transaction password. The new transaction password cannot be empty. The new password repeated cannot be empty. The two password, please enter the same ', ' password to change successfully!'],
        },
        back: {
            title: 'Retrieve trading code',
            SBitems: ['Email', 'Verification Code：', 'Get validation code', 'New transaction password:', 'Duplicate new password:'],
            Btn: 'Comfirm',
            prompt: ['Please set up your transaction password first!', 'Email cannot be Empty!', 'The new transaction password cannot be empty', 'The new duplicate password cannot be empty', 'The two password, please enter the same', 'Password changes succeeded!'],
        },
        withdraw: {
            title: 'Modify withdraw password',
            tips: 'The first modification, do not enter the original withdraw password!',
            STitems: ['Original withdraw password:', 'New withdraw password:', 'Duplicate new password:'],
            Btn: 'Comfirm',
            prompt: ['Please enter the original withdraw password. The new withdraw password cannot be empty. The new password repeated cannot be empty. The two password, please enter the same ', ' password to change successfully!'],
        },
        backWithdraw: {
            title: 'Retrieve trading code',
            SBitems: ['Email', 'Verification Code：', 'Get validation code', 'New withdraw password:', 'Duplicate new password:'],
            Btn: 'Comfirm',
            prompt: ['Please set up your withdraw password first!', 'Email cannot be Empty!', 'The new withdraw password cannot be empty', 'The new duplicate password cannot be empty', 'The two password, please enter the same', 'Password changes succeeded!'],
        },
    }

    en.asset = {
        indexPage: 'Home',
        asset: 'Assets',
        itemList: ['Assets',
            'Recharge',
            'Withdraw',
            'Bank card management',
            'Into the virtual currency', 'Out of virtual currency', 'Commissioned management', 'Transaction inquiries', 'VNBIG manager'],
        loadHint: [ // “资产管理”中的滚动加载提示语
            'Scroll load more ...', // 0
            'No more data!', // 1
        ],
        // 资产管理
        manage: {
            asset: 'Assets',
            Mremaining: 'Total of about: ',
            Mrechagee: 'Recharge',
            Mdeposit: 'Apply for withdrawal',
            MAinfo: 'Recommended VNBIG earn commissions, lying also earn money!',
            MAnavList: ['Currency', 'Available Balance', 'Commissioned Freeze', 'Total', 'Operating', 'Withdrawal Freeze'],
            Mhandle: ['Take out', 'Recharge', 'Recharge', 'Cash Withdrawal'],
            sumFB: 'Account balance about:',
            sumBB: 'Total assets equivalent:',
            btnFB: 'Cash account',
            btnBB: 'Digital currency account',
        },
        // 充值
        recharge: {
            REcharge: 'Recharge',
            bankRecharge: 'Bank transfer recharge',
            bdbank: 'Bind the bank card',
            REinfo1: 'Dear users, platform recharge system has been upgraded, please follow the following recharge process:',
            REinfo2: 'Use the bundled bank card transfer',
            REinfo3: 'The system is automatically recorded',
            REinfo4: 'Recharge reminders',
            REinfo5: 'Sorry, the current account is not bundled with a bank card, please add a bank card to recharge.',
            REinfo6: 'Please indicate remittance information and time',
            REaddbank: 'Add a bank card',
            REhkbank: 'Remittance Bank:',
            REname: 'Account Name:',
            REbanknum: 'Bank card number:',
            REfhinfo: 'Branch information:',
            REczmoney: 'Recharge amount:',
            REmess: 'Note:',
            REpassword: 'transaction password:',
            REsure: 'Ok',
            REcontactAgent: 'Please contact the agent below for recharge',
            contact: ['ZALO QR code', 'Agent QQ'],
            REczrecord: 'Recharge record',
            REnavList: ['Recharge amount', 'Time', 'State', 'Order Number'],
            RNewNeedList: [ // 充值 20180118 新需求
                'You need a bank card transfer,before proceeding with the transaction', // 0
                'Please enter the recharge amount', // 1
                'Approximately equal to', // 2
                'Next', // 3
                'Payee', // 4
                'Payee:', // 5
                'Receiving Account:', // 6
                'Bank:', // 7
                'VNBIG official receiving account, please check the information carefully', // 8
                'Order Number：', // 9
                'Recharge amount：', // 10
                'Cancel', // 11
                'confirm recharge', // 12
                'You have successfully canceled the order! ', // 13
                'You have successfully confirmed the order! ', // 14
                'You have an incomplete order, please complete the order! ', // 15
                'Recharge Notes', // 16
                'Support Amount: The single minimum charge amount is', // 17
                '1. Use your bank account that supports ebanking and normal offline banking remittance function. At the moment, we do not support other payment methods;', // 18
                '2. Enter recharge amount, click to the next step, there will be a code appearing, please remember this code;', // 19
                '3. During transaction, keep in mind the above code, after sucessful transaction, our staff will confirm your transaction and transfer the money into your account (during transaction/sucessful transaction, remittance not will not be cancelled ).', // 20
                'The minimum recharge amount is:', // 21
                'Cash instructions', // 22
                'The amount of support: a single minimum cash amount: 1 US dollars; single maximum cash amount: 1400 US dollars; the highest total cash withdrawal amount: 4600 US dollars.', // 23
                '1. Withdrawal processing time: Monday to Friday 08: 00 ~ 17: 00; (withdrawal of non-working hours, will be delayed until the second working day after 8:00 processing, please be patient);', // 24
                '2. Withdrawal method: only your real name and has been bound to the bank card withdrawals processing; withdrawals are specifically credited to the bank account time shall prevail;', // 25
                '3. Matters needing attention: The non-real-name certified bank card withdrawn from my platform will not be processed; if your funds are not credited within the specified time, please contact customer service.', // 26
                '（This code is very important, please carefully fill these 6 numbers in order in your remittance note! Or else it will have influence on remittance function）', // 27 充值内容
                'Recharge time : Ha Noi, Viet Nam time, from 8 a.m to 5 p.m.', // 28  充值内容
                'Payment arrival time : Within the same bank , the payment will be transferred within that day, the equivalent USD amount will be transferred to your VNBIG account;With inter-bank, if the remittance is implemented in the morning, the payment will be in your account in the afternoon that day, the equivalent USD amount will be transferred into your VNBIG account;With inter-bank, if the remittance is implemented in the afternoon, our financial section will base on the actual currency arrival time and the equivalent USD amount will be transferred into your VNBIG account;Peak time is diffent from 24 to 48 hours, for example, during the holiday and weekend, the peak time is delayed.', // 29  充值内容
            ],
        },
        bankCard: {
            title: 'Bank card management',
            tips: 'Please do not support credit card and Alipay, please fill out the real name of the bank card account information',
            items: ['Real name:', 'Real name certification, Can not be amended', 'Choose bank:', 'Bank card number:', 'Bank card bank:', 'Fill in the details of the bank, to facilitate our timely transfer', 'Card'],
            box: ['Add record', 'Bank type', 'Bank', 'Owner name', 'Card number', 'Operation'],
        },
        inCoin: {
            title: 'Into the virtual currency',
            items: ['Available currency', 'currency', 'Frozen currency', 'currency', 'This is your wallet address, please put yours', 'to this address:', 'Wallet address'],
            explain: ['Go to description:', '1. Transfer is automatic，', 'transfer takes the whole', 'Network to confirm, to achieve your confirmation after 3', 'Will automatically recharge to your account', '2. This address is your only and only use of the transfer address, you can also make multiple recharge, you can also use this address as your mine in the payment address', '3. This address is prohibited from filling in addition to ', ' other assets other than any other asset recharge will not be able to get back'],
            box: ['Go to record', 'record ID', 'pay', 'arrival time', 'confirm number', 'send time', 'state'],
        },
        outCoin: {
            title: 'Out of virtual currency',
            items: ['Available currency', 'currency', 'Frozen currency', 'currency'],
            form: ['Out of the number:', 'Withdrawals password:', 'Verification code:', 'Get code', 'Fee:', 'Fee range:', 'increase the fee will increase to the account speed', 'Out of address:', 'Service charge:'],
            tips: ['Error', 'check out'],
            explain: ['Export instructions:', '1. The transfer is automatic，', 'Transfer takes the whole', 'Network to confirm, after 3 confirmed your ', ' will automatically recharge to your account', '2. This address is your only and only use of the transfer address, you can also make multiple recharge, you can also use this address as your mine in the payment address', '3. This address is prohibited from filling in addition to ', ' other assets other than any other asset recharge will not be able to get back'],
            box: ['Out of record', 'Mention ID', 'Time', 'Pick', 'Arrive', 'Transfer notes'],
            status: {
                1: 'Unconfirmed',
                2: 'Confirmed',
                3: 'Processed',
                4: 'Failure',
            },
            CodeSend: 'Verification code has been sent, please go to the mailbox check! ',
            noEmail: 'Please Enter Email Address',
            noCode: 'Please enter the verification code',
            EmailBing: 'Mailbox Binding Success',
            noEmailText: [
                'Please bind the Email first',
                'Email:',
                'Validation Code:',
                'Get code',
                'Bind Email',
            ],
            minText: 'The minimum number of extractions is:',
            partHint: 'Special notice : When you withdraw money, please choose imtoken or kcash wallet. If you choose other wallets, you may not receive payment and this can even cause you loss.',
        },
        // 资产管理 VNBIG经理人
        assetsHandler: {
            HAhandler: 'VNBIG manager',
            HAinviteNum: 'My invitation number',
            HAinviteUrl: 'My invitation link',
            HAcopyUrl: 'Copy link',
            HAassetsInfo: 'You can invite friends to expand your investment contacts, exchange investment experience, can link will be invited to send to friends.',
            HAfriendList: 'Invitation record',
            HAfriendName: 'Username',
            HAregisterTime: 'Registration time',
            HAprofit: 'Income',
            HAtotal: 'Total : ',
            HNewNeed: [ // 20180206 经理人新需求
                'Total income(USD)', // 0.
                'Yesterday\'s income(USD)', // 1
                'Today\'s income(USD)', // 2.
                'My invitation', // 3.
                '1.My invitation code is: ', // 4.
                'You can ask the user to fill in the "Invitation code" column of the registration;', // 5
                '2. You can also send the following link to your friend to open the registration;', // 6
                '3. Save the qr code image and forward it to your friend to open the link registration.', // 7
                'You can expand your investment network by inviting friends, exchange investment tips, and send invitations to friends.And,', // 8
                'You will continue to receive all the transaction fees of the invitee ', // 9.
                '% commission.', // 10
                'Copy link successful!', // 11
            ],
        },
        // 资产管理 委托管理
        assetsEntrust: {
            ETentrust: 'Entrusted management',
            ETstarttime: 'Please select start time',
            ETendtime: 'Please select end time',
            ETfind: 'Query',
            ETorder: 'Entrusted orders',
            EThistory: 'Commissioned history',
            ETtime: 'Time',
            ETbuysell: 'Buy/Sell',
            coinType: 'Currency',
            ETWTWTJG: 'Consignment price',
            ETWTWTSL: 'Quantity entrusted',
            ETturnover: 'Turnover quantity',
            ETunsettled: 'Not yet concluded',
            ETallSucceed: 'Operating',
            ETcd: 'Withdraw',
        },
        // 资产管理 提现
        assetsDeposit: {
            DEtitle: 'Withdraw',
            DEinfo: 'Do not support the credit card and cash Alipay, currently only supports the savings card withdrawals.',
            DEaccount: 'Receiving account',
            DEcannuse: 'Available amount',
            DEtxmoeny: 'Cash withdrawal',
            DEchangpas: 'Withdrawals password',
            DEsuretx: 'Confirm cash withdrawal',
            DEtxrecord: 'Cash register',
            DEsxf: 'Service Charge',
            DEsuremoeny: 'Actual arrival',
            DEbankid: 'Receiving account',
            DEtime: 'Time',
            DEstat: 'State',
            DEall: 'All cash', // 13
        },
    }

    // 轉入虛似幣
    en.assetsIncoin = {
        status: {
            0: 'Untreated',
            1: 'Success',
            2: 'Failure',
        },
    }

    // 轉出虛似幣
    en.assetsOutcoin = {
        status: {
            1: 'Unconfirmed',
            2: 'Confirmed',
            3: 'Processed',
            4: 'Failure',
        },
        apiError: ['The number of transfers can not be empty, 0, negative', 'Withdrawals password', 'Verification code', 'The minimum fee is', 'The maximum fee is', 'Out of address'],
        apiOk: 'If the transfer is successful, please click OK within 30 minutes of receiving the email',
        minNum: 'The number of transfers can not be less than minimum!',
    }

    // 銀行卡管理m
    en.assetsBank = {
        apiError: ['Bank card number', 'Bank card bank'],
        apiOk: 'Added successfully',
        remove: ['Are you sure you want to delete the card?', 'Successfully deleted', 'Delete'],
    }

    // 充值管理
    en.assetsRecharge = {
        status: {
            0: 'Untreated',
            1: 'User submit',
            2: 'Financial Confirmation',
        },
        apiError: ['amount charged', 'Transaction password'],
        apiOk: 'Recharge success',
    }

    // 提現
    en.assetsDeposit = {
        apiError: ['Withdrawal Amount', 'Withdrawal password'],
        notCard: 'Sorry, the current account is not bound to a bank card',
        apiOk: 'Withdraw success',
        canUse: 'Available balance ', // 3
        extraDe: 'Extra deductions ', // 4
        serviceCharge: ' Fee (Rate 0.8%)', // 5
        cashMin: 'A single cash withdrawal amount of not less than 1USD', // 6
        cashMax: 'A single cash withdrawal amount shall not exceed 1,400USD', // 7
    }

    // 委托管理
    en.assetsEntrust = {
        all: 'All',
        remove: ['Are you sure you want to cancel the order?', 'Cancel a single success'],
    }

    // 底部頁面
    en.help = {
        // 頁面公用右側
        right: {
            rightTitle: [
                'Contact support',
                'Announcement',
                'Social media',
            ],
            rightText: [
                'All technical support issues are addressed through our support system.',
                'Want to know what happened to VNBIG? Follow us.',
            ],
            rightNews: 'VNBIG Announcement',
            rightTwitter: 'Twitter',
        },
        fee: {
            feeTitle: 'Rate Description',
            // feeSection: ['Effective from September 26, 2017', 'What does the maker mean?', 'How much is the transaction cost? '],
            // feetext: [
            //     'In order to encourage strong liquidity, market expansion more closely, VNBIG uses a multi-level producer fees table. All users moved to this model on September 26, 2017. Visit the "<a class="import" href="assets.html?modle=record"> Transaction Queries </a>" page to track your progress.',
            //     "Each transaction is made between the two parties: the manufacturer's order exists on the order before the transaction, as well as the order of the person who will order the order (or 'take') the manufacturer's order. Manufacturers are so named because their orders make liquidity in one market. The receiver is to eliminate liquidity by matching the manufacturer's order to his or her own order. <br> Maker model encourages market liquidity, rewards manufacturers' liquidity, and discounts on fees. This has also led to more stringent market expansion, because manufacturers are highly competitive. The higher fees paid by the collectors are usually offset by a better price provided by the more stringent difference.",
            //     'The transaction fee will be deducted from your total transaction amount. If the transaction after the acquisition of monetary assets, then pay the currency transaction fees; the other hand, if the transaction after the digital assets, then pay the digital asset transaction fees.',
            //     'For example: You sell for $ 6300 1BTC, will deduct the $ 6.3 fee, received $ 6293.7. You buy 6300 yuan to 1BTC, will be deducted 0.001BTC fee, get 0.999BTC.'
            // ],
            feeTable: ['Producer', 'Recipient', 'Trading volume (30 days)'],
            feeText: ['Your current producer / recipient rates are', 'down one level', 'your trading volume in 30 days', ' you need ', ' reached ', " every 24 hours , We calculate the last 30 days in the account's trading volume and dynamically adjust the fee based on the above table."],
        },
        contact: {
            conTitle: 'Contact support',
            conSection: 'Let us know what you need',
            conItemName: [
                'Question type:',
                'E-mail:',
                'Annex:',
                'Question content:',
                'If you encounter digital asset problems, please fill in your wallet address',
                "What's your problem:",
            ],
            // 'Upload pictures or compressed files'
            conInput: 'Upload pictures',
            conSubmit: 'Submit',
            conTips: 'The mailbox is not monitored by the contact request. For technical assistance, please contact us.',
            conselect: [
                'Choose a problem type ...',
                'Registered',
                'Password',
                'Verified',
                'Charge',
                'Tuyi',
                'Transaction',
                'Other',
            ],
            error: [
                'Submit failed please try again',
                'Submitted successfully',
                'Please choose the type of problem',
                'Please enter a description of the problem',
                'Please enter the email address so that we can contact you',
                'Please input the correct email address',
                'Please enter the description of the problem',
                'The uploaded file is malformed',
            ],
        },
        news: {
            newsTitle: 'VNBIG Announcement',
            newsSection: ['About VNBIG', 'VNBIG Announcement'],
            newsInfo: 'VNBIG is a leading digital asset exchange that offers a variety of digital assets. VNBIG was founded in March 2016 to provide a secure trading environment for providing customers with cash charts and data analysis tools.',
        },
    }
    // 众筹VNC
    en.wpaper = {
        // banner 里的内容
        banContent: [
            'VNBIG TOKEN', // 0
            '(the ETH stored in exchange can use cash transfer function)', // 1
            'left from the initial currency offer (ICO)', // 2
            'day', // 3
            'hour', // 4
            'minute', // 5
            'second', // 6
            'join immediately', // 7
            'ETH address', // 8
            'recharge', // 9
            'each user a maximum subscription ', // 10
            'Confirm subscribe', // 11
            'subscribe', // 12
            'this issue is over!', // 13
            'you have successfully subscribed!', // 14
            'fail to subscribe, please try again!', // 15
            'the end of the ICO is still', // 16.
        ],

        // 分配部分的内容
        allotContent: [
            'VNC currency issue distribution',
            'Team holding: 50%',
            'Marketing: 15%',
            'Early investors: 10%',
            'Public issuing: 25%',
            'download white paper',
            'VNC currency repurchase mechanism',
            'After the platform is deployed online and officially put into operation,\n' +
            ' 40% of the platform\'s net profit will be used to repurchase the VNC coin every three months. After repurchasing， VNC coin will be destroyed until the total VNC coin circulation amount on the platform is One billion.',
        ],
        // 发行计划
        plan: {
            planTitle: 'VNC Distribution plan',
            planText: [
                'This time, VNBIG will issue coin on sale at the official website of the blockchain project at 20:00 (Beijing time) on January 18th, 2018.', // 0
                'Public financing support currency:', // 1
                'ETH', // 2
                'White list membership system:', // 3
                'White list members need to apply on January 16th, 2018 , possess ', // 4
                '20ETH quota', // 5
                'Convert for the first round (January 18th, 2018 -January 20,2018): ', // 6
                '1 ETH = 40000VNC', // 7
                'Convert for the second round (January 21th, 2018 -January 28,2018): ', // 8
                '1 ETH = 36000VNC', // 9
                'Issue VNC to the end of the end.', // 10
            ],
        },
        // OTC 场外交易与期货功能
        trade: {
            tradeH3: 'OTC over-the-counter trading and futures function',
            tradeTitle: [
                'OTC over-the-counter trade',
                'Leveraged trading function',
            ],
            tradeText: [
                'Vnbig intends to launch RMB and USD direct trading channels and transactions on digital currencies. On the platform, users and investors directly buy and sell all blockchain digital assets. The platform guarantees high trustworthiness and strong technical support to ensure fast and safe purchase of all digital currency coin and implement legal currency recharge and withdrawals.',
                'Vnbig intends to open the trading function of the index contract where platform users trade blockchain digital asset. Set up stop-loss settings and warning settings before and during transaction, and in order to achieve a complete transaction process and expansion.',
            ],
        },
        // VNBIG 简介
        synopsis: {
            synopsisH3: [
                'VNBIG Introduction',
                'VNBIG Advantages',
            ],
            synopsisTitle: [
                'High - performance support',
                'Safe',
                'Support the currency',
                'Liquidity support',
                'Operation capability',
                'Multi-language support',
            ],
            currencyList: [
                'BTC',
                'ETH',
                'LTC',
                'BCH',
                'VNC（VNBIG\'s Token tokens）',
                'IOTA',
                'ETC',
                'EOS',
            ],
            synopsisText: [
                'VNBIG blockchain trading platform takes advantages of  huge potential trading market of Southeast Asia ,  provides a full process,easy-to-operate transaction with highly trurstworthy gurantee to global users and investors in the blockchain trading platform. Blockchain technology and its interdependent financial system will be  a big trend of future development. Therefore, we want to seize the opportunity of time to boost the application of the entire blockchain and the commercial market.', // 0
                'VNBIG trading system uses memory matching technology, using AWS Amazon Cloud\'s powerful operation and maintenance system to highly simultaneous access, to ensure high-speed order processing capabilities and transaction time effectiveness and no delay or stalling  happens during order process.', // 1
                'VNBIG chooses an advanced multi-tier, multi-cluster system framework.The design of multi-tier framework greatly improves the performance, security,stability and scalability of the system, Functional deployment, version update without downtime. Simultanuously, VNBIG adopts transaction and storage separation design ,so the users can implement multi-dimensional confirmation transaction and maximize the operation experience .', // 2
                'In the transaction innitial time, we will provide support for the following currencies:', // 3
                'In later period, step by step  go on-line other high-quality currency types.', // 4
                'VNBIG has a wealthy resources and many partners in this market.Moreover,VNBIG possesses many resources in Southeast Asia, it has reached both domestic and international investment funds and trading awareness before the system is launched. After the VNBIG platform is launched, their transactions will also be transferred to the platform.  Adequate mobility will be provided for the platform ,bring wonderful trading experience for users.', // 5
                'VNBIG has a senior operating team, social media interactive marketing, community building, and profound brand establishment that would create a prestigious brand of blockchain and digital assets in Southeast Asia.', // 6
                'The first online version of VNBIG has been supported with four languages: Vietnamese,English, Traditional Chinese and Mandarin Chinese. In the long run, VNBIG will gradually support other languages including Japanese, Korean and other languages to remove the language barrier for building a world-class blockchain trading platform.', // 7
            ],
        },
        team: {
            teamTitle: [
                'Core team introduction',
                'Management team',
                'Consultant Team',
            ],
            teamName: [
                'CEO Mr En Dong', // 0
                'COO Mr Nguyen Dai Phu', // 1
                'CTO Andrey loshakov', // 2
                'Mr Xu Baolong', // 3
                'Ms Lou Jiyue', // 4
                'Mr Shuai Chu', // 5
                'Mr Sun Zeyu', // 6
                'Mr Ye Zi', // 7
            ],
            teamMeg: [
                'A Vietnamese well-known digital currency investor who has graduated from National Foreign Trade University in Ha Noi, 48th Course (2009-2013), Major: International Business Economics. He has many years of digitalcurrency and business experience and  has been participated in global blockchain investment and Digital currency project.', // 0
                'Graduated from Ha Noi University of Science & Technology in Vietnam.  A bitcoin pioneer in Vietnam, he has his voice in society and solid business experience.', // 1
                'Mr Andrey: System Engineer, hedge fund strategy analyst. He researched & developed the trading engine  needed to set up a hedge fund selection and rmb hedge fund portfolio. Andrey graduated from Novosibirsk State University and obtained a Master\'s degree in Mathematical Finance from the new economics school in Moscow.', // 2
                ' Dragon Eye blockchain founder, graduated from Renmin University of China, Peking University MBA. He used to be the Director of Block Investment Research Center of Huntsman Network (one of the three major digital currency trading platforms in China). In early 2016, the Dragonshield Information Security Services website was founded to provide China Overseas Information-gathering company and multiple security companies with company-scale information security and private security services.', // 3
                'Graduated from Johns Hopkins University with Master -Tokenmania Asset Management Corporation Co-Founder. - providing a full range of asset management services in the digital currency area, engaging in digital currency hedge fund investments and digital currency actuals investments.', // 4
                'Qtum Founder', // 5
                'Famous blockchain, digital money investor', // 6
                'Graduated from China University of Science and Technology and Chinese Academy of Sciences', // 7
                'During his Ph.D. blockchain technology development', // 8
                'Participate in many domestic and international blockchain projects', // 9
                'Cohen founder of God Wallet', // 10
                'Co-founder of a non-gravitational fund', // 11
                'Researcher, Peking University Financial Science and Technology Innovation Laboratory', // 12
                'Big coffee industry', // 13
                'Kernas Capital Partners', // 13
                'Former ug founder', // 14
                'Has been involved in counseling a number of companies to be listed on the IPO', // 15
                'Create ugChain blockchain, dedicated to blockchain applications', // 16
            ],
        },
    }
}(DH.lang.en))
