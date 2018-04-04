;

(function (vi) {
    // 提示信息
    vi.message = {
        refresh: 'Không tải được trang, vui lòng làm mới trang để thử lại！',
        upFail: 'Tải lên thất bại, vui lòng thử lại！',
        submit: 'Gửi không thành công, vui lòng thử lại！',
        success: 'Gửi thành công！',
    }

    vi.common = {
        // 您好，欢迎来到东南亚最大的数字资产交易平台
        pageTitle: 'Chào mừng bạn đến với sàn giao dịch tiền kỹ thuật số lớn nhất Đông Nam Á！',
        // 所有class为lang-加上对象名
        // 登录
        login: 'ĐĂNG NHẬP',
        // 会员注册
        reg: 'ĐĂNG KÝ',
        // 退出
        quit: 'Thoát ra',
        // 用户名
        name: 'E-mail',
        // 密码
        pass: 'Mật khẩu',
        // 验证码
        code: 'Mã xác nhận',
        // 忘记密码
        forget: 'Quên mật khẩu?',
        // 会员注册
        memberReg: 'Đăng ký thành viên',
        // 欢迎
        loginWell: 'Chào mừng',
        // 登录VNBIG
        accountsTtle: 'Bạn đang sử dụng tài khoản: ',
        // 总资产
        uproperty: 'Tổng tài sản của bạn：',
        // 充值越南盾
        recharge: 'Nạp tiền',
        // 提现越南盾
        withdraw: 'Rút tiền ',
        // 委托管理
        entrust: 'Quản lý ủy quyền',
        // 去财务中心-d
        toFinance: 'Đến trung tâm tài chính',
        // 请再次输入密码
        repass: 'Nhập lại mật khẩu',
        // 请输入经理人
        Referrer: 'Nhập tên người môi giới',
        // 请同意VNBIG用户协议
        agree: 'Đồng ý với thoả hiệp của VNBIG',
        // 输入手机号
        mobile: 'Nhập số điện thoại',
        // 获取验证码
        getCode: 'Lấy mã xác nhận',
        // 返回-d
        back: '< Quay lại',
        // 找回密码
        forgetTitle: 'Tìm lại mật khẩu',
        // 请输入新密码
        newPass: 'Mật khẩu mới',
        // 请再次输入新密码
        newRepass: 'Nhập lại mật khẩu mới',
        // 请输入电子邮箱-d
        mailbox: 'Nhập e-mail',
        // 手机注册-d
        phoneR: 'Đăng ký qua điện thoại',
        // 邮箱注册-d
        mailboxR: 'Đăng ký qua e-mail',
        // 提交
        submit: 'Giao nộp',
        // 暂无数据！-d
        noData: 'Không có số liệu!',
        // ['ajax调用异常：','ajax调用报错：','网络错误！']-d
        ajaxInfo: ['ajax bất thường：', 'ajax báo lỗi：', 'Lỗi mạng！'],
        // 温馨提示
        warning: ' Tài sản số là một sản phẩm đầu tư mới, giá cả biến động lớn, có nhiều rủi ro, trước khi tham gia đầu tư, quý khách vui lòng tìm hiểu kỹ càng để có kế hoạch đầu tư và phán đoán một cách lý trí',
        // unit: '₫',
        // unitAbbr: 'VND'
        unit: '$',
        unitAbbr: 'USD',
        or: 'hoặc',
        start: 'Bắt đầu',
        noReal: 'Bạn không phải là xác thực tên thật, trước tiên hãy xác thực tên',
        noReals: ['Bạn chưa xác thực, vui lòng xác thực trước khi thao tác.', 'Bạn không được chứng nhận. Xin xác nhận', 'Bạn chưa đặt mật khẩu giao dịch. Vui lòng đặt nó trước', 'Vui lòng đặt mật khẩu rút tiền mặt của bạn trước tiên!'],
        tradeType: {
            0: 'Mua', // 买
            1: 'Bán', // 卖
        },
        btn: {
            ok: 'Ok',
            cancel: 'Đã hủy',
        },
        // 翻页组件
        PTurnReach: 'Đến',
        PTurnPage: 'trang',
        PTurnDetermine: 'Xác nhận',
    }

    vi.index = {
        wellText: 'Chào mừng bạn đến với VNBIG',
        wellAbout: 'Chúng tôi là sàn giao dịch tiền kỹ thuật số an toàn và đáng tin cậy lớn nhất Đông Nam Á',
        banner: ['Giao dịch an toàn trong', 'môi trường tài sản số đầy biến động'],
        regBtn: 'Lập tài khoản',
        loginText: 'Đã là thành viên ?',
        loginBtn: 'Đăng nhập',
        popPanel: ['Phát hành công khai！', 'lập tức kiểm tra', 'Cách phát hành ICO còn', 'ngày', 'giơ', 'phút', 'giây', 'kết thúc đợt phát hành lần này！'],
    }

    // 登录注册页面
    vi.loginRegister = {
        login: {
            // 登录到您的账号
            ltitle: 'Đăng nhập',
            // 账号
            luserId: 'E-mail',
            // 密码
            luserPwd: 'Mật khẩu',
            // 忘记密码
            lforgetPwd: 'Quên mật khẩu?',
            // 登录
            ltoLogin: 'Đăng nhập',
            // 没有账号
            lnoneId: 'Chưa có tài khoản ?',
            // 创建一个帐号在东南亚最大的数字货币交易平台开始交易
            lsubheading: 'Lập tài khoản và bắt đầu giao dịch trên sàn giao dịch tiền kỹ thuật số lớn nhất Đông Nam Á',
            // 创建您的帐户
            lcreatAccount: 'Đăng ký ngay',
            resetTip: 'Do tính bảo mật của trang web, mật khẩu của bạn quá đơn giản và cần được đặt lại',
            resetPwd: ['Đặt lại mật khẩu', 'Số tài khoản：', 'Mã xác minh：', 'Lấy mã xác nhận', 'Mật khẩu mới：', 'Xác nhận mật khẩu：', 'Để gửi'],
            resetOk: 'Nếu những thay đổi thành công, vui lòng đăng nhập lại',
        },
        register: {
            // 国家    ****有道
            rArea: 'Quốc gia',
            // 中国
            rchina: 'Trung Quốc',
            // 越南
            rvite: 'Việt Nam',
            // 选择国家
            rchooseArea: 'Chọn quốc gia…',
            // 电子邮件
            remail: 'E-mail',
            // 手机号    *******有道
            rphone: 'Số điện thoại',
            // 手机注册-d
            rphoneReg: 'Đăng ký qua điện thoại',
            // 邮箱注册-d
            rmailboxReg: 'Đăng ký qua e-mail',
            // 验证码
            rcode: 'Mã xác minh',
            // 获取验证码
            rGetCode: 'Lấy mã xác nhận',
            // 密码
            ruserPwd: 'Mật khẩu',
            // 重复输入密码
            rrepass: 'Nhập lại mật khẩu',
            // 推荐人    *****有道
            rreferrer: 'Mã Vip',
            // 点击注册视为同意
            ragreen: 'đồng ý',
            // 使用条款
            rclause: '"Thoả thuận người dùng"',
            // 同意并注册
            ragreenRegister: 'Đồng ý và đăng ký',
            // 已有帐号
            rhasAccount: 'Đã có tài khoản?',
            // 请登录
            rpLogin: 'Đăng nhập',
            // 创建您的帐户
            rcreatAccount: 'Lập tài khoản',
            // 注册VNBIG是创建帐户的第一步。一旦您的电子邮件确认，您需要完成您的个人资料并验证您的身份才能开始交易。
            rsubheading: 'Đăng ký VNBIG là bước đầu tiên của lập tài khoản, sau khi xác nhận qua e-mail, bạn cần hoàn thiện thông tin cá nhân và xác minh chủ tài khoản mới có thể bắt đầu giao dịch.',
            // 1. 您提供的电子邮件地址将成为您的VNBIG ID，并将用于所有将来的通信，包括帐户恢复。保护您的电子邮件帐户，就像您的VNBIG帐户一样。请使用有效的电子邮件地址进行注册。
            p1: '1. E-mail mà bạn cung cấp sẽ là ID VNBIG của bạn, sẽ được sử dụng để tiếp nhận thông tin, bao gồm cả tìm lại tài khoản. Hãy bảo vệ e-mail của bạn giống như tài khoản VNBIG. Vui lòng sử dụng địa chỉ mail hợp lệ để đăng ký.',
            // 2. 您的密码必须为6位字符以上（不包括6位字符），但建议您选择至少32个字符的随机字母数字符号密码。
            p2: '2. Mật khẩu bắt buộc phải từ 6 ký tự trở lên, chúng tôi khuyên bạn nên chọn ít nhất 32 ký tự ngẫu nhiên chữ, số làm mật khẩu.',
            // 3. 不要使用任何您使用过的其他方式的注册密码，特别是对于您注册的电子邮件地址。
            p3: '3. Không nên sử dụng những mật khẩu cũ bạn đã dùng, đặc biệt là mật khẩu của e-mail đăng ký tài khoản.',
            mactivate: 'Đã đăng ký nhưng chưa kích hoạt, vui lòng đến e-mail để kích hoạt',
        },
        error: {
            // 请输入手机或邮箱
            einputAccount: 'Vui lòng nhập số tài khoản',
            // 请输入密码
            einputPwd: 'Mật khẩ',
            // 请再次输入密码
            einputRePwd: 'Nhập lại mật khẩu',
            // 两次输入密码不相同，请再次输入
            epwdDifferent: 'Hai lần nhập Mật khẩu mới không giống nhau',
            // 请输入验证码
            einputCode: 'Mã xác nhận',
            // 验证码错误
            ecodeError: 'Mã xác nhận sai',
            // 手机号不能为空
            ephoneNull: 'Số điện thoại không được trống',
            // 邮箱不能为空
            emailNulll: 'E-mail không được bỏ trống',
            // 请输入正确的电子邮箱
            emailError: 'Vui lòng nhập chính xác e-mail',
            // 请选择国家
            echooseArea: 'Chọn quốc gia',
        },
    }

    // 交易订单
    vi.order = {
        sell: 'Bán ra',
        buy: 'Mua vào',
        items: ['Giá cả', 'Số lượng', 'Tương đương', 'Giá cả', 'Số lượng', 'Tương đương'],
    }

    vi.header = {
        // 欢迎语
        wellcome: 'Chào mừng bạn đến với sàn giao dịch tiền kỹ thuật số lớn nhất Đông Nam Á !',
        // 导航文字['首页','交易中心','资产管理','安全中心','帮助中心']-d'Giao dịch tiền tệ'
        nav: ['Trang chủ', 'Giao dịch', 'Tài sản', 'Bảo mật', 'Trợ giúp'],
    }

    vi.customer = {
        // 客服
        service: 'CSKH',
        // 扫码添加Zalo在线客服
        customerTitle: 'Quét mã Qr để kết bạn zalo với bộ phận CSKH online',
        // 客服1: 阿兰
        lan: 'CSKH1: Lan',
        // 客服2: 阿燕
        yan: 'CSKH2: Yến',
    }

    // 交易中心
    vi.trade = {
        kBtn: ['Chu kỳ', 'Line', 'Biểu đồ 5 phút', 'Biểu đồ 15 phút', 'Biểu đồ 30 phút', 'Biểu đồ 1h', 'Biểu đồ 8h', 'Biểu đồ ngày'],
        kLabel: ['Tất cả', 'Giá cả', 'Khối lượng', 'Mở sàn', 'Đóng sàn', 'Giá thấp nhất', 'Giá cao nhất'],
        enough: 'Tiền của bạn không đủ để mua!',
        /* ~~~~~~~~~0~~~~~~~~~~~1~~~~~~~~2~~~~~~~3~~~~~~~4~~~~~~~~~5~~~~~~~~~6~~~*/
        input: ['Giá mua tốt', 'Mua tôi đa', 'Tiền giao dịch', 'Khả dụng', 'Giá bán tốt', 'Bán tôi đa', 'Tiền giao dịch'],
        // 输入错误
        priEmpty: 'Đơn giá không được bỏ trống, bằng 0, hoặc là số âm',
        priLimit: ['Giá đầu vào không thể vượt quá 10 lần giá hiện hành', 'Nhập giá không được thấp hơn giá hiện tại là 0,1 lần'],
        numEmpty: 'Số lượng mua vào không được bỏ trống, bằng 0, hoặc là số âm',
        totalEmpty: 'Số tiền giao dịch quá nhỏ. Vui lòng nhập lại',
        passEmpty: 'Mật khẩu giao dịch không được bỏ trống',
        businessError: 'Giao dịch thất bại!',
        business: 'Giao dịch thành công!',
        // ['最新成交价', '日涨跌', '最高价', '最低价'],
        topInfo: ['Giá mới nhất', 'Tăng giảm', 'Giá cao nhất', 'Giá thấp nhất'],
        // 交易列表
        dealList: {
            dealListTitle: 'Giao dịch',
            toDeal: 'Giao dịch',
            toBB: 'Giao dịch tiền tệ',
            dealListItems: ['Loại tiền', 'Mới nhất', 'Khối lượng', 'Tăng giảm'],
        },
        // 买入与卖出
        // ['买入','买入价格','买入数量','交易额','手续费','请输入交易密码','买入']
        buyFB: ['Mua vào', 'Giá mua', 'Số lượng', 'Tiền giao dịch', 'Phí giao dịch', 'Mật mã', 'Mua vào'],
        // ['卖出','卖出价格','卖出数量','最大可卖','交易额','手续费','请输入交易密码','卖出']
        sellFB: ['Bán ra', 'Giá bán', 'Số lượng', 'Tiền giao dịch', 'Phí giao dịch', 'Mật mã', 'Bán ra'],
        // ['买入','买入价格','买入数量','交易额','手续费','请输入交易密码','买入']
        buyBB: ['Mua vào', 'Giá mua', 'Số lượng', 'Tiền giao dịch', 'Mật mã', 'Mua vào', 'Phí giao dịch'],
        // ['卖出','卖出价格','卖出数量','最大可卖','交易额','手续费','请输入交易密码','卖出']
        sellBB: ['Bán ra', 'Giá bán', 'Số lượng', 'Tiền giao dịch', 'Mật mã', 'Bán ra', 'Phí giao dịch'],

        // 交易订单
        order: {
            orderSell: ['Bán ra', 'Bán', 'Giá Bán', 'Lượng đơn hàng'],
            orderBuy: ['Mua vào', 'Mua', 'Giá mua', 'Lượng đơn hàng'],
            userOrderSell: 'Đơn đặt hàng bán cá nhân',
            userOrderBuy: 'Đơn đặt hàng cá nhân',
            items: ['Giá cả', 'Số lượng', 'Tương đương', 'Giá cả', 'Số lượng', 'Tương đương', 'Hoạt động'],
            remove: ['Rút một đơn', 'Bạn có chắc chắn muốn hủy đơn hàng？', 'Hủy một thành công duy nhất'],
        },
        // 5档挂单
        // -------------0----------1-------------2---------------3-------4-------5--------
        fiveOrder: ['Mua / Bán', 'Giá cả', 'Lượng đơn hàng', 'Tổng tiền', 'Mua', 'Bán'],
        //
        transactionRecord: ['Giao dịch mơi nhất', 'Thời gian', 'Mua / Bán',
            'Giao dịch gần nhất', 'Lượng giao dịch ', 'Tổng số tiền',
            'Hồ sơ giao dịch cá nhân'],
        inputPrice: 'Vui lòng nhập giá', // inputPriceBuy & inputPriceSell
        inputVal: 'Vui lòng nhập số tiền', // inputValBuy & inputValSell
        inputPass: 'Mật mã', // inputPassBuy & inputPassSell
        // 20180201 交易中心
        entrustRecord: [
            'Uỷ thác mua vào', // 0
            'Uỷ thác bán ra', // 1
            'Thời gian', // 2
            'Mua / Bán', // 3
            'Loại coin', // 4
            'Giá ủy thác', // 5
            'Số lượng ủy thác', // 6
            'Số lượng giao dịch thành công', // 7
            'Chưa khớp lệnh', // 8
            'Lệnh treo ủy thác', // 9
            'Lịch sử ủy thác', // 10
            'Xem thêm chi tiết', // 11
            'Bạn chưa đăng nhập, vui lòng', // 12
            'vui lòng', // 13
            'Hoạt động', // 14
        ],
    }

    // 交易详情页
    vi.details = {
        // 公共头部['最高价','最低价','买一价','卖一价','24H成交量']
        detailsCom: ['Giá cao nhất', 'Giá thấp nhất', 'Giá mua', 'Giá bán', 'Lượng giao dịch trong 24h'],
        // ['交易','了解','评价','资讯']
        detailsComlistTab: ['Giao dịch', 'Tìm hiểu', 'Thông tin', 'Thông tin'],
        // k线图
        Kline: {
            // ['5分钟','15分钟','30分钟','1小时','8小时','日线']
            KlineBtn: ['Biểu đồ 5 phút', 'Biểu đồ 15 phút', 'Biểu đồ 30 phút', 'Biểu đồ 1h', 'Biểu đồ 8h', 'Biểu đồ ngày'],
            // ['所有','价格[RMB]','成交量','开盘','收盘','最低','最高']-d
            KlineLabel: ['Tất cả', 'Giá cả', 'Lượng giao dịch', 'Mở sàn', 'Đóng sàn', 'Giá thấp nhất', 'Giá cao nhất'],
            KlineLabelbb: ['Tất cả', 'Giá cả', 'Lượng giao dịch', 'Mở sàn', 'Đóng sàn', 'Giá thấp nhất', 'Giá cao nhất'],
        },
        // 用户具体可用币['可用','冻结','折合人民币','可用人民币','冻结人民币']
        useble: ['Khả dụng', 'Phong tỏa', 'Đổi ra tiền Việt', 'Số tiền Việt khả dụng', 'Phong toả tiền Việt'],
        // 买入与卖出
        business: {
            // ['买入','买入价格','买入数量','交易额','手续费','请输入交易密码','买入']
            buy: ['Mua vào', 'Giá mua', 'Số lượng mua vào', 'Tiền giao dịch', 'Tiền phí', 'Nhập mật khẩu giao dịch', 'Mua vào'],
            // ['卖出','卖出价格','卖出数量','最大可卖','交易额','手续费','请输入交易密码','卖出']
            sell: ['Bán ra', 'Giá bán', 'Số lượng bán ra', 'Tiền giao dịch', 'Tiền phí', 'Nhập mật khẩu giao dịch', 'Bán ra'],
        },
        // 买\卖记录['买/卖','价格','数量','折合人民币']
        BuySellRecords: ['Mua/Bán', 'Giá cả', 'Số lượng', 'Đổi ra tiền Việt'],
        // 成交记录['最近成交记录','成交时间','买／卖','成交价','成交量','总金额']
        transactionRecord: ['Lịch sử giao dịch gần đây', 'Thời gian giao dịch', 'Mua / Bán', 'Giá giao dịch', 'Lượng giao dịch ', 'Tổng số tiền'],
        // 提示信息[
        //     '请输入数字！',//0
        //     '不能为0或空',//1
        //     '请登录后再进行买卖！',//2
        //     '最佳买价只能为数字,不能为空,不能为0！',//3
        //     '最大可买只能为数字,不能为空,不能为0！',//4
        //     '无法购买此数量的产品!',//5
        //     '请输入交易密码！',//6
        //     '购买成功！',//7
        //     '最佳卖价只能为数字,不能为空,不能为0！',//8
        //     '最大可卖只能为数字,不能为空,不能为0！',//9
        //     '无法卖出此数量的产品!',//10
        //     '卖出成功！'//11
        // ]-d
        messinfo: [
            'Xin nhập số！', // 0
            'Không được là 0 hoặc bỏ trống', // 1
            'Mời đăng nhập trước khi tiến hành mua bán！', // 2
            'Giá mua vào tốt nhất chỉ có thể là số, không được bỏ trống, không được là 0!', // 3
            'Giá cao nhất có thể mua chỉ có thể là số, không được bỏ trống, không được là 0!', // 4
            'Không mua sản phẩm với số lượng này được!', // 5
            'Nhập mật khẩu giao dịch！', // 6
            'Mua vào thành công!', // 7
            'Giá bán ra tốt nhất chỉ có thể là số, không được bỏ trống, không được là 0!', // 8
            'Giá cao nhất có thể bán chỉ có thể là số, không được bỏ trống, không được là 0!', // 9
            'Không bán sản phẩm với số lượng này được!', // 10
            'Bán ra thành công!', // 11
        ],
    }

    // 币币交易
    vi.Exchange = {
        // ['限价交易','当前委托']-d
        title: ['Giao dịch giới hạn giá', 'Ủy quyền hiện tại'],
        // 限价交易['可用', '买入价格', '买入数量', '交易额', '请输入交易密码', '可用', '卖出价格', '卖出数量', '交易额', '请输入交易密码']
        block1: ['Khả dụng', 'Giá mua', 'Số lượng mua vào', 'Tiền giao dịch', 'Nhập mật khẩu giao dịch', 'Khả dụng', 'Giá bán', 'Số lượng bán ra', 'Tiền giao dịch', 'Nhập mật khẩu giao dịch'],
        // 当前委托['时间','委托价','委托量','委托总额','已成交','成交均价','未成交','买/卖']-d
        block2: ['Thời gian', 'Giá ủy quyền', 'Lượng uỷ quyền', 'Tổng số tiền ủy quyền', 'Lượng giao dịch', 'Giá giao dịch trung bình', 'Chưa thành công', 'Mua/bán'],
        // 右侧表格['买/卖','价格','数量']
        right: ['Mua/bán', 'Giá cả', 'Số lượng'],
        // input默认内容['买入价格','买入数量','请输入交易密码','卖出价格','卖出数量','请输入交易密码']
        input: ['Giá mua', 'Số lượng mua vào', 'Nhập mật khẩu giao dịch', 'Giá bán', 'Số lượng bán ra', 'Nhập mật khẩu giao dịch'],
        // 按钮['买','卖']
        button: ['Mua vào', 'Bán ra'],
        // 购买数量错误
        Valerror: 'Số dư không đủ！',
        // 输入错误
        // 单价不能为空、0、负值-d
        priEmpty: 'Đơn giá không được bỏ trống, bằng 0, hoặc là số âm',
        // 购买数量不能为空、0、负值-d
        numEmpty: 'Số lượng mua vào không được bỏ trống, bằng 0, hoặc là số âm',
        // 交易密码不能为空-d
        passEmpty: 'Mật khẩu giao dịch không được bỏ trống',
        // 交易失败！-d
        businessError: 'Giao dịch thất bại!',
        // 交易成功！-d
        business: 'Giao dịch thành công！',
    }

    // info.html
    vi.info = [
        'Giới thiệu',
        'Tên tiếng Anh：',
        'Tên gọi tắt：',
        'Ngày ra mắt：',
        'Tham số chi tiết',
        'Tên gọi：',
        'Tên tiếng Anh：',
        'Ngày ra mắt：',
        'Người phát minh：',
        'Cách tính：',
        'Ngày phát hành：',
        'Tốc độ dữ liệu：',
        'Lượng phát hành：',
        'Đặc trưng：',
        'Điểm yếu：',
    ]

    // newlistInfo.html

    vi.newlistInfo = [
        'Ngày ra mắt：',
        'Chú thích：',
        'Bài viết này do VNBIG tổng hợp chỉ với mục đích tham khảo, đây không phải là kiến nghị của VNBIG. Thị trường tiền ảo chứa nhiều rủi ro, hãy thận trọng khi đầu tư . Một số bài viết được sưu tầm thông qua mạng internet, nếu không phù hợp với quan điểm hoặc vi phạm bản quyền của bạn, vui lòng liên hệ lại với chúng tôi, chúng tôi sẽ gở bỏ .',
        'Nộp bài : Nếu bạn muốn phát biểu bài viết, mời gửi đến llihui@tonglingwangluo.com',
    ]

    // evaluate.html
    vi.evaluate = {
        // ['评分','我来讲两句','币民都在说']-d
        title: ['Điểm số', 'Tôi cũng đến bình luận', 'Người khác nói gì'],
        comment: ['Điểm số kỹ thuật：', 'Điểm số ứng dụng：', 'Điểm số tương lai：'],
        other: ['Đánh giá cấp sao：', 'người bỏ phiếu', 'Nộp bình luận', 'Điểm', 'bình luận'],
        // [
        //     '评论不能为空！',
        //     '有禁忌字，请重新输入！',
        //     '评论成功！',
        //     '没有消息！'
        // ]-d
        messinfo: [
            'Bình luận không được bỏ trống!',
            'Có từ bị cấm, vui lòng viết lại!',
            'Bình luận thành công!',
            'Không có tin！',
            'Bình luận:',
        ],
    }

    vi.logo = './Web/img/common/logo-vi.png'

    // 底部
    vi.footer = {
        // 版权所有
        copyright: 'CopyRight 2015-2017 VNBIG All Rights Reserved. Powered Bản quyền thuộc',
        // 关于
        aboutTitle: 'Về VNBIG',
        about: {
            contact: 'Liên hệ',
            fee: 'Chi phí',
            privacy: 'Chính sách bảo mật',
            agreement: 'Thoả thuận người dùng',
        },
        portTitle: 'Hỗ trợ',
        port: {
            contactPort: 'Liên hệ hỗ trợ',
            portRes: 'Tài nguyên hỗ trợ',
            toWap: 'Chuyển sang phên bản trên điện thoại',
        },
        footerNewsTitle: 'Thông Báo',
        news: {
            newsText: 'Thông báo của VNBIG',
            twitter: 'Twitter',
        },
        worksheet: 'Hỏi & Đáp Trực tuyến',
    }

    // 交易中心页面
    vi.deal = {
        // 列表头  Giá giao dịch gần nhất
        listName: ['Loại tiền', 'Giá mới nhất', 'Giá mua', 'Giá bán', 'Xu hướng giá (3 ngày)'],
        // listNameBB: ['币种名称','最新成交价','日涨跌','24H最高价','24H最低价','24H成交量','价格趋势(3日)'],-d
        listNameBB: ['Loại tiền', 'Giá mới nhất', '%Change', '24HR High', '24HR Low', 'Volume', 'Xu hướng giá (3 ngày)'],
        toDeal: 'Đi giao dịch',
        // 平台介绍文字
        introduce: {
            // 标题
            // 安全可靠的数字资产交易平台
            title: 'Sàn giao dịch tài sản số an toàn và đáng tin cậy nhất',
            // 模块介绍
            modelTitle: ['Hệ thống an toàn', 'Tài sản an toàn', 'Tiện lợi', 'Phục vụ chuyên nghiệp'],
            modelText: [
                'Bảo mật dữ liệu tài khoản ngân hàng, Xác thực thông tin chủ tài khoản, khống chế các rủi ro, bảo đảm giao dịch an toàn',
                'Ví tiền sẽ được bảo vệ nhiều tầng, bảo vệ trong  két sắt, bảo quản bởi bên thứ 3, đảm bảo an toàn',
                'Nạp và rút tiền nhanh chóng, mỗi giây có thể thực hiện hàng vạn giao dịch, bảo đảm thuận tiện về mọi mặt',
                'Đội ngũ CSKH chuyên nghiệp với 400 tư vấn viên phục vụ 24h hỗ trợ trực tuyến trên QQ, tư vấn 1-1 dành cho khách VIP',
            ],
            // 新闻标题
            news: {
                // ['媒体报道','市场动态','帮助中心']-d
                title: ['Truyền thông đưa tin', 'Động thái thị trường', 'Trung tâm trợ giúp'],
                more: 'Xem thêm >>',
                empty: 'Xin vui lòng chờ！',
            },
        },
    }

    vi.error = {
        // 系统错误-d
        ajax: 'Hệ thống đình công!',
        returnCode: 'Hệ thống lỗi, vui lòng thử lại!',
        nullUser: 'Người dùng lạ mặt',
        quit: 'Thoát ra thất bại',
        list: 'Dữ liệu đang được bảo trì',
        news: 'Không có tin！',
        // 输入错误-d
        idEmpty: 'Vui lòng nhập hộp thư',
        passEmpty: 'Mật khẩu',
        codeEmpty: 'Mã xác nhận',
        code: 'Mã xác nhận sai',
        telEmpty: 'Số điện thoại không được trống',
        rePassEmpty: 'Nhập lại mật khẩu',
        passNo: 'Hai lần nhập Mật khẩu mới không giống nhau',
        newpassEmpty: 'Mật khẩu mới',
        newRepassEmpty: 'Nhập lại mật khẩu mới',
        // -d
        coinList: 'Danh sách các loại tiền lấy về lỗi',
        buySell: 'Giá cả các loại tiền lấy về thất bại',
        nologin: 'Mời đăng nhập trước khi tiến hành mua bán!',
        mailboxEmpty: 'E-mail không được bỏ trống',
        mailboxInfo: 'Vui lòng nhập chính xác e-mail',
        PMname: 'Vui lòng nhập đúng địa chỉ email',
        // 密码强度弱，请输入至少6位的数字加字母组合
        complicacy: 'Nhập ít nhất 6 chữ số cộng với sự kết hợp thư',
    }

    vi.tip = {
        forget: 'Sửa chữa thành công!',
        // -d
        reg: 'Đăng ký thành công, mời đăng nhập!',
    }

    vi.safety = {
        indexPage: 'Trang chủ',
        safetyCenter: 'Bảo mật',
        itemList: ['Bảo mật', 'xác thực', 'Ảnh xác thực', 'Thay đổi mật khẩu đăng nhập', 'Đổi mật khẩu giao dịch', 'Tìm lại mật khẩu giao dịch', 'Đổi mật khẩu rút tiền', 'Tìm lại mật khẩu rút tiền'],
        common: {
            passComplicacy: 'Mật khẩu mới không được nhỏ hơn 6 chữ số',
        },
        safety: {
            title: 'Bảo mật',
            leve: 'Trung bình',
            SSitems: ['Tên：', 'Số tài khoản:', 'Hộp thư.', 'Ảnh xác thực', 'Đổi mật khẩu'],
            loginPass: ['Mật khẩu đăng nhập', 'Mật khẩu bạn cần nhập khi đăng nhập vào tài khoản VNBIG', 'Thay đổi mật khẩu đăng nhập'],
            tradePass: ['Mật khẩu giao dịch', 'Mật khẩu bạn cần nhập vào các giao dịch của VNBIG', 'Đổi mật khẩu giao dịch'],
            withdrawPass: ['Mật khẩu mới', 'Mật khẩu bạn cần nhập vào rút tiền VNBIG', 'Đổi mật khẩu rút tiền'],
            authPass: ['Xác thực', 'Cần tiến hành xác thực để đảm bảo an toàn cho tài sản của bạn.'],
            idCardPass: ['Xác thực qua ảnh', 'Cần tiến hành xác thực để đảm bảo an toàn cho tài sản của bạn.', 'Thay đổi mật khẩu đăng nhập'],
            // ['未认证','立即认证','已认证','查看','审核未通过','重新认证','审核中','查看进度','未设置','立即设置','已设置','立即修改']
            authStatus: ['Chưa xác thực', 'Xác thực ngay', 'Đã chứng thực', 'Kiểm tra', 'Chưa qua chỉnh sửa', 'Tái xác nhận', 'Đang xét duyệt', 'Tiến độ', 'Chưa cài đặt', 'Cài đặt ngay', 'Đã cài đặt', 'Ngay lập tức thay đổi'],
        },
        auth: {
            title: 'xác thực',
            tips: 'Hãy điền đầy đủ thông tin (tên tài khoản thẻ ngân hàng), không thể sửa đổi sau khi nộp hồ sơ!',
            SAitems: ['Tên thật：', 'Thẻ căn cước：', 'Giao nộp'],
            authSuccess: ['Đã chứng thực', 'Tên thật：', 'Số chứng minh thư：'],
            authDefeated: ['Không qua được kiểm tra kỹ', 'Nộp lại.'],
            authAudit: ['Tên thật：', 'Số chứng minh thư：', 'Đang xét duyệt'],
            prompt: ['Hãy điền tên đúng của ngài.', 'Làm ơn đúng số chứng minh Thư Điền', 'Thông tin xác thực cho thành công.'],
        },
        idCard: {
            title: 'Ảnh xác thực',
            zm: 'Thẻ căn cước',
            bm: 'Mặt sau của thẻ căn cước',
            sc: 'Ảnh cầm thẻ căn cước',
            chooseImg: 'Chọn hình ảnh',
            submit: 'Xác nhận nộp',
            success: 'Bức ảnh chứng nhận thành công.',
            submitSuccess: 'Đăng ký thành công.',
            nosuccess: 'Bức ảnh chứng nhận thất bại.',
            why: 'Ông xin chứng nhận bức ảnh mờ, không thể chỉnh sửa Thông tin của bạn, xin nộp lại',
            resubmit: 'Nộp lại.',
            auditing: 'Đang xét duyệt',
            uploadImg: 'Xin hãy tải lên. Tất cả cần hình ảnh',
            large: 'Hãy tải lên hình ảnh nhỏ hơn 500K',
        },
        login: {
            title: 'Thay đổi mật khẩu đăng nhập',
            tips: 'Để đảm bảo giao dịch được thuận lợi, xin vui lòng ghi nhớ mật khẩu đăng nhập.',
            SLitems: ['Mật khẩu đăng nhập：', 'Mật khẩu mới：', 'Nhập mật khẩu mới một lần nữa：'],
            Btn: 'Lưu',
            prompt: ['Hãy nhập mật khẩu đăng nhập thô', 'Không thể đăng nhập mật khẩu mới để trống', 'Một lần nữa nhập mật khẩu mới không thể rỗng', 'Hai lần. Hãy nhập mật khẩu phù hợp', 'Sửa đổi mật khẩu đăng nhập lại thành công, làm ơn'],
        },
        transaction: {
            title: 'Đổi mật khẩu giao dịch',
            tips: 'Lần đầu thay đổi, không cần nhập mật khẩu cũ',
            STitems: ['Mật khẩu giao dịch cũ:', 'Mật khẩu giao dịch mới:', 'Nhập lại mật khẩu mới:'],
            Btn: 'Lưu',
            prompt: ['Hãy nhập mật mã gốc.', 'Mật khẩu mới không thể để trống', 'Lặp đi lặp lại mật khẩu mới không thể rỗng ', ' hai lần. Hãy nhập mật khẩu phù hợp', 'Mật mã thay đổi thành công!'],
        },
        back: {
            title: 'Tìm lại mật khẩu giao dịch',
            SBitems: ['Email:', 'Mã xác minh:', 'Nhận mã xác minh', 'Mật khẩu giao dịch mới:', 'Nhập lại mật khẩu mới:'],
            Btn: 'Lưu',
            prompt: ['Hãy thiết lập mật khẩu giao dịch của bạn!', 'hộp thư. Không thể cho rảnh! "," Mật khẩu mới không thể để trống', 'Lặp đi lặp lại mật khẩu mới không thể rỗng ', ' hai lần. Hãy nhập mật khẩu phù hợp', 'Mật mã thay đổi thành công！'],
        },
        withdraw: {
            title: 'Đổi mật khẩu rút tiền',
            tips: 'Đổi mật khẩu lần đầu, không cần nhập mật khẩu cũ!',
            STitems: ['Mật khẩu rút tiền cũ: ', 'Mật khẩu mới: ', 'Nhập lại mật khẩu mới: '],
            Btn: 'Lưu',
            prompt: ['Vui lòng nhập mật khẩu cũ.', 'Mật khẩu mới không thể để trống', 'Lặp đi lặp lại mật khẩu mới không thể rỗng ', ' hai lần. Hãy nhập mật khẩu phù hợp', 'Mật mã thay đổi thành công!'],
        },
        backWithdraw: {
            title: 'Tìm lại mật khẩu rút tiền',
            SBitems: ['Email:', 'Mã xác minh:', 'Nhận mã xác minh', 'Mật khẩu mới:', 'Nhập lại mật khẩu mới:'],
            Btn: 'Lưu',
            prompt: ['Vui lòng đặt mật khẩu rút tiền mặt của bạn trước tiên!', 'hộp thư. Không thể cho rảnh! "," Mật khẩu mới không thể để trống', 'Lặp đi lặp lại mật khẩu mới không thể rỗng ', ' hai lần. Hãy nhập mật khẩu phù hợp', 'Mật mã thay đổi thành công！'],
        },
    }

    vi.asset = {
        indexPage: 'Trang chủ',
        asset: 'Tài sản',
        itemList: ['Tài sản',
            'Nạp tiền',
            'Rút tiền',
            'Quản lý thẻ ngân hàng',
            'Nạp coin', 'Rút coin', 'Quản lý ủy quyền', 'Lịch sử giao dịch', 'Người môi giới của VNBIG'],
        loadHint: [ // “资产管理”中的滚动加载提示语
            'kéo xuống để tải về nhiều hơn...', // 0
            'không còn dữ liệu!', // 1
        ],
        // 资产管理
        manage: {
            asset: 'Tài sản',
            Mremaining: 'Số dư：',
            Mrechagee: 'Nạp tiền',
            Mdeposit: 'Rút tiền',
            MAinfo: 'Giới thiệu bạn bè ngay , để nhận quà tặng hấp dẫn!',
            MAnavList: ['Tiền tệ', 'Số dư có sẵn', 'đóng băng lệnh ủy thác', 'Tổng cộng', 'thao tác', 'Đóng băng tiền rút'],
            Mhandle: ['rút coin', 'nạp coin', 'nạp tiền', 'rút tiền'],
            sumFB: 'Số dư tài khoản：',
            sumBB: 'Tổng tài sản tương đương：',
            btnFB: 'Tài khoản tiền pháp định',
            btnBB: 'Tài khoản tiền kỹ thuật số',
        },
        // 充值
        recharge: {
            REcharge: 'Nạp tiền',
            bankRecharge: 'nạp tiền Bank Transfer',
            bdbank: 'thẻ ngân hàng Bind',
            REinfo1: 'Thân mến, hệ thống nền tảng nạp tiền đã được nâng cấp, hãy làm theo các quá trình nạp tiền:',
            REinfo2: 'Thẻ ngân hàng chuyển các ràng buộc',
            REinfo3: 'Hệ thống tự động ghi',
            REinfo4: 'Lời nhắc nạp tiền',
            REinfo5: 'Rất tiếc, tài khoản hiện tại không được kèm theo thẻ ngân hàng, vui lòng thêm thẻ ngân hàng để nạp tiền.',
            REinfo6: 'Xin cho biết thông tin chuyển tiền và thời gian',
            REaddbank: 'Thêm thẻ ngân hàng',
            REhkbank: 'Kiều hối Ngân hàng:',
            REname: 'Tên tài khoản:',
            REbanknum: 'Số thẻ ngân hàng:',
            REfhinfo: 'Thông tin chi nhánh:',
            REczmoney: 'Số tiền nạp:',
            REmess: 'Lưu ý:',
            REpassword: 'Mật khẩu giao dịch',
            REsure: 'Ok',
            REcontactAgent: 'Vui lòng liên hệ với đại lý bên dưới để nạp tiền',
            contact: ['ZALO Mã QR', 'Đại lý QQ'],
            REczrecord: 'Hồ sơ nạp tiền',
            REnavList: ['Số tiền nạp', 'Thời gian', 'Tiểu bang', 'mã giao dịch'],
            RNewNeedList: [ // 充值 20180118 新需求
                'Trước khi giao dịch, quý khách cần  có thẻ ngân hàng để', // 0
                'xin vui lòng nhập số tiền cần nạp', // 1
                'tương đương với', // 2
                'bước tiếp theo', // 3
                'bên nhận tiền', // 4
                'người nhận tiền:', // 5
                'số tài khoản nhận tiền:', // 6
                'ngân hàng:', // 7
                'Tài khoản VNBIG chính thức nhận tiền, vui lòng kiểm tra lại thông tin', // 8
                'mã giao dịch：', // 9
                'số tiền nạp：', // 10
                'Hủy', // 11
                'Xác nhận nạp tiền', // 12
                'bạn đã hủy giao dịch  thành công！', // 13
                'bạn đã xác nhận giao dịch thành công！', // 14
                'bạn có giao dịch chưa hoàn thành, vui lòng hoàn thành giao dịch đó trước！', // 15
                'Chú ý khi nạp tiền', // 16
                'Số tiền thanh toán : mỗi lần nạp tiền ít nhất là', // 17
                '1. Dùng tài khoản ngân hàng hỗ trợ chuyển khoản qua ngân hàng trực tuyến (e-banking) và chuyển tiền qua ngân hàng thông thường.Hiện tại chúng tôi chưa hỗ trợ thêm các cách thức nạp tiền khác;', // 18
                '2. Khách hàng nhập số tiền cần nạp, nhấn vào bước tiếp theo, một mã số đặt lệnh duy nhất sẽ hiện ra, vui lòng nhớ kỹ mã này;', // 19
                '3. Trong quá trình giao dịch, hãy ghi lại mã giao dịch trên, sau khi chuyển khoản thành công, nhân viên chúng tôi sẽ kiểm duyệt số tiền giao dịch theo yêu cầu của quý khách và chuyển vào tài khoản của quý khách (các lệnh trong quá trình nạp tiền hoặc lệnh nạp tiền thành công sẽ không được hủy).', // 20
                ' khách hàng để được hỗ trợ:', // 21
                'Lưu ý khi rút tiền', // 22
                'Số tiền thanh toán: Số tiền rút ít nhất 1 USD mỗi lần, số tiền rút nhiều nhất 1400 USD mỗi lần, tổng số tiền rút ra trong ngày là 4600 USD.', // 23
                '1. Thời gian xử lí rút tiền : thứ 2 đến thứ 5.08:00-17:00; ( Nếu rút tiền trong những ngày không làm việc , sẽ bị hoãn lại và được xử lí sau 8:00 vào ngày làm việc tiếp theo , xin vui lòng chờ đợi', // 24
                '2. Phương thức rút tiền :Chúng tôi chỉ xử lí lí những trường hợp  sử dụng tên thực và tài khoản ngân hàng có liên kết  ; thời gian rút tiền  sẽ tính theo thời gian ngân hàng xuất khoản làm chuẩn', // 25
                '3. Những điều cần lưu ý:Chúng tôi không xử lí tài khoản ngân hàng không khai tên thật ,nếu số tiền của bạn không vào tài khoản theo thời gian quy định, xin vui lòng liên hệ bộ phận chăm sóc khách hàng để được hỗ trợ.', // 26
                '(dãy số này vô cùng quan trọng, quý khách vui lòng điền theo số thứ tự chính xác 6 số này vào danh mục " lưu ý chuyển khoản hoặc ngoại hối "! Nếu không sẽ ảnh hưởng đến việc nạp tiền vào tài khoản của quý khách) .', // 27  充值内容
                'Thời gian nạp tiền: Thời gian hoạt động nạp tiền tại sàn VNBIG sẽtheo giờ Hà Nội, Việt Nam, từ 8 giờ sáng đến 5 giờ chiều. ', // 28
                'Thời gian tiền chuyển vào tài khoản: Nếu tài khoản cùng ngân hàng, số tiền sẽ được chuyển vào tài khoản ngay trong ngày hôm đó, bộ phận tài chính sẽ chuyển giá trị USD tương đương để chuyển đến tài khoản VNBIG của quý khách; Chuyển tiền liên ngân hàng, nếu chuyển khoản vào buổi sáng, tiền sẽ chuyển thành công vào buổi chiều ngày hôm đó, bộ phận tài chính sẽchuyển giá trị USD tương đương để chuyển đến tài khoản VNBIG của quý khách; Chuyển tiền liên ngân hàng, nếu chuyển tiền vào buổi chiều, bộ phận tài chính sẽ căn cứ vào thời gian thực tế tiền vào của khách hàng và sẽ dựa trên giá trị tương đương của USD để chuyển đến tài khoản VNBIG của quý khách; Giờ cao điểm tiền chuyển vào tài khoản chênh lệch từ 24h đến 48h, ví dụ vào các ngày lễ hoặc cuối tuần, giờ cao điểm sẽ bị hoãn lại.', // 29
            ],
        },
        bankCard: {
            title: 'Quản lý thẻ ngân hàng',
            tips: 'Vui lòng không hỗ trợ thẻ tín dụng và Alipay, vui lòng điền vào tên thật của thông tin tài khoản thẻ ngân hàng',
            items: ['Tên thật：', 'xác thực Real-tên không thể được sửa đổi', 'Chọn Ngân hàng:', 'Số thẻ ngân hàng:', 'Ngân hàng thẻ ngân hàng:', 'Điền vào các chi tiết của Ngân hàng để giúp chúng tôi chuyển', 'thêm thẻ'],
            box: ['Thêm Bản ghi', 'Loại ngân hàng', 'Mở ngân hàng', 'Tên chủ hộ', 'Số thẻ', 'Hoạt động'],
        },
        inCoin: {
            title: 'Chuyển tiền vào',
            items: ['số coin có sẵn', '', 'Số coin đóng băng ', '', 'Đây là địa chỉ ví tiền của bạn, xin vui lòng chuyển', 'của bạn đến địa chỉ này:', 'Địa chỉ Wallet'],
            explain: ['Chú thích :', '1. Khi chuyển ', 'hệ thống sẽ tiến hành các bước xác nhận , khi số lượng xác nhận đủ 3 lần ,', ' số lượng ', 'sẽ tự động chuyển vào tài khoản của bạn .', '2. địa chỉ này là địa chỉ nạp coin duy nhất mà bạn có thể sử dụng, bạn có thể tiến hành việc nạp coin nhiều lần cùng một lúc hoặc bạn có thể sử dụng địa chỉ này làm địa chỉ thanh toán của bạn.', '3. Địa chỉ này chỉ có thể nạp ', ' không thể nạp các coin khác .Bạn cần chú ý , nếu nạp sai loại coin bạn sẽ không thể tìm lại được .'],
            box: ['Lịch sử', 'Lịch sử ID', 'thực tế đã trả', 'thời gian về đến tài khoản', 'số lượng xác nhận', 'Thời gian gửi', 'Trạng thái'],
        },
        outCoin: {
            title: 'Chuyển tiền ra',
            items: ['số coin có sẵn', '', 'Số coin đóng băng', ''],
            form: ['Số lượng rút:', 'Rút mật khẩu:', 'Mật khẩu rút coin:', 'Nhận mã xác minh', 'Phí giao dịch:', 'Phí giao dịch phạm vi:', 'tăng lệ phí sẽ tăng lên đến tốc độ tài khoản', 'Địa chỉ rút:', 'Phí giao dịch:'],
            tips: ['Thông báo lỗi', 'Xác nhận chuyển'],
            explain: ['chú ý khi rút coin:', '1. Khi chuyển ', 'hệ thống sẽ tiến hành các bước xác nhận , khi số lượng xác nhận đủ 3 lần , ', 'số lượng ', ' sẽ tự động chuyển vào tài khoản của bạn .', '2. địa chỉ này là đại chỉ nạp coin duy nhất mà bạn có thể sử dụng, bạn có thể tiến hành việc nạp coin nhiều lần cùng một lúc hoặc bạn có thể sử dụng địa chỉ này làm địa chỉ thanh toán của bạn.', '3. Địa chỉ này chỉ có thể nạp ', ' không thể nạp các coin khác .Bạn cần chú ý , nếu nạp sai loại coin bạn sẽ không thể tìm lại được .'],
            box: ['lịch sử chuyển ra', 'số tài khoản', 'Thời gian', 'rút coin', 'đã về tài khoản', 'ghi chú'],
            status: {
                1: 'Chưa xác nhận',
                2: 'Xác nhận',
                3: 'Đã được xử lý',
                4: 'Không thành công',
            },
            CodeSend: 'Mã xác minh đã được gửi, vui lòng đi kiểm tra hộp thư! ',
            noEmail: 'Vui lòng nhập địa chỉ E-mail',
            noCode: 'Hãy nhập mã xác minh',
            EmailBing: 'Hộp thư kết thành công',
            noEmailText: [
                'Trước tiên hãy buộc hộp thư',
                'Nhập E-mail：',
                'Mã xác minh：',
                'Nhận Mã xác minh',
                'Bind E-mail',
            ],
            minText: 'Số coin tối thiểu có thể rút：',
            partHint: 'Đặc biệt chú ý: Khi rút coin vui lòng chọn ví imtoken hoặc Kcash, nếu quý khách chọn các ví tiền khác, quý khách có thể không nhận được tài sản và mang lại những mất mát đáng tiếc.',
        },
        // 资产管理 VNBIG经理人
        assetsHandler: {
            HAhandler: 'Người môi giới của VNBIG',
            HAinviteNum: 'Số bạn bè đã mời',
            HAinviteUrl: 'Link mời',
            HAcopyUrl: 'Sao chép liên kết',
            HAassetsInfo: 'Bạn có thể gửi link mời cho bạn bè hoặc chia sẻ trên mạng xã hội để mời thêm người tham gia, thông qua đó mở rộng nguồn đầu tư, giao lưu và học hỏi.',
            HAfriendList: 'Lịch sử giới thiệu',
            HAfriendName: 'Tên người dùng',
            HAregisterTime: 'Thời gian đăng ký',
            HAprofit: 'Lợi nhuận',
            HAtotal: 'Tổng cộng : ',
            HNewNeed: [ // 20180206 经理人新需求
                'Tổng lợi nhuận(USD)', // 0
                'Lợi nhuận hôm qua(USD)', // 1
                'Lợi nhuận hôm nay(USD)', // 2
                'Người mời của tôi', // 3
                '1. Mã mời của tôi：', // 4
                'có thể bảo những người mà bạn mời điền mã mời  vào mục " mã VIP";', // 5
                '2. Bạn cũng có thể chia sẻ link dưới đây để mời bạn bè click vào đăng kí;', // 6
                '3.Lưu ảnh mã QR,gửi mã QR cho bạn bè để đăng kí.', // 7
                'Bạn có thể thông qua việc mời bạn bè để mở rộng quan hệ đầu tư, chia sẻ kinh nghiệm.', // 8
                'Bạn có thể gửi đường link mã mời cho bạn bè và tiếp tục nhận ', // 9
                '% hoa hồng  giao dịch từ người bạn giới thiệu.', // 10
                'Sao chép link thành công!', // 11
            ],
        },
        // 资产管理 委托管理
        assetsEntrust: {
            ETentrust: 'Quản lý ủy quyền',
            ETstarttime: 'Chọn thời gian bắt đầu',
            ETendtime: 'Chọn thời gian kết thúc',
            ETfind: 'kiểm tra',
            ETorder: 'Lệnh treo ủy thác',
            EThistory: 'Lịch sử ủy thác',
            ETtime: 'Thời gian',
            ETbuysell: 'Mua/Bán',
            coinType: 'loại coin',
            ETWTWTJG: 'Giá ủy thác',
            ETWTWTSL: 'Số lượng ủy thác',
            ETturnover: 'Số lượng giao dịch thành công',
            ETunsettled: 'Chưa khớp lệnh',
            ETallSucceed: 'thao tác',
            ETcd: 'Rút một đơn',
        },
        // 资产管理 提现
        assetsDeposit: {
            DEtitle: 'Rút tiền',
            DEinfo: 'Tạm thời không hỗ trợ thẻ tín dụng ,vui lòng hãy sử dụng thẻ ghi nợ (Debit card)',
            DEaccount: 'Tài khoản nhận ',
            DEcannuse: 'Có bao nhiêu',
            DEtxmoeny: 'Số tiền rút',
            DEchangpas: 'Mật khẩu rút tiền',
            DEsuretx: 'Xác nhận rút tiền',
            DEtxrecord: 'Lịch sử rút tiền',
            DEsxf: 'Phí',
            DEsuremoeny: 'Số tiền đã về tài khoản',
            DEbankid: 'Tài khoản nhận',
            DEtime: 'Thời gian.',
            DEstat: 'Trạng thái',
            DEall: 'Rút toàn bộ', // 13
        },
    }

    // 轉入虛似幣
    vi.assetsIncoin = {
        status: {
            0: 'Không điều trị',
            1: 'Thành công',
            2: 'Không thành công',
        },
    }

    // 轉出虛似幣
    vi.assetsOutcoin = {
        status: {
            1: 'Chưa xác nhận',
            2: 'Xác nhận',
            3: 'Đã được xử lý',
            4: 'Không thành công',
        },
        apiError: ['Số lần chuyển tiền không được để trống, 0, tiêu cực', 'Vui lòng nhập rút mật khẩu', 'Vui lòng nhập mã xác minh', 'Phí tối thiểu là', 'Phí tối đa là', 'Vui lòng nhập Địa chỉ ra'],
        apiOk: 'Nếu việc chuyển giao thành công, vui lòng nhấp vào OK trong vòng 30 phút sau khi nhận được email',
        minNum: 'Số coin chuyển đi không được nhỏ hơn số coin tối thiểu được rút',
    }

    // 銀行卡管理
    vi.assetsBank = {
        apiError: ['Số thẻ ngân hàng', 'Ngân hàng thẻ ngân hàng'],
        apiOk: 'Đã thêm thành công',
        remove: ['Bạn có chắc chắn muốn xóa thẻ không?', 'Xóa thành công', 'Bị xóa'],
    }

    // 充值管理
    vi.assetsRecharge = {
        status: {
            0: 'Không điều trị',
            1: 'Gửi',
            2: 'Xác nhận',
        },
        apiError: ['Số tiền nạp', 'Mật khẩu giao dịch'],
        apiOk: 'Nạp tiền thành công',
    }

    // 提現
    vi.assetsDeposit = {
        apiError: ['Số tiền', 'Vui lòng nhập rút mật khẩu'],
        notCard: 'Rất tiếc, tài khoản hiện tại không được kèm theo thẻ ngân hàng',
        apiOk: 'Để thành công',
        canUse: 'số dư khả dụng ', // 3
        extraDe: 'khấu trừ ngoài ', // 4
        serviceCharge: ' phí thủ tục ( phí theo tỉ lệ 0.8%)', // 5
        cashMin: 'Số tiền mỗi lần rút không được ít hơn 1 USD', // 6
        cashMax: 'Số tiền mỗi lần rút không được nhiều hơn 1,400 USD', // 7
    }

    // 委托管理
    vi.assetsEntrust = {
        all: 'Tất cả',
        remove: ['Bạn có chắc chắn muốn hủy đơn hàng?', 'Hủy một thành công duy nhất'],
    }

    // 底部页面
    vi.help = {
        // 页面公用右侧
        right: {
            rightTitle: [
                'Liên hệ hỗ trợ',
                'Thông báo',
                'Truyền thông',
            ],
            rightText: [
                'Mọi vấn đề và hỗ trợ kỹ thuật đều được xử lý thông qua hệ thống hỗ trợ của chúng tôi.',
                'Bạn muốn tìm hiểu tất cả về VNBIG ? Xin hãy theo dõi hoạt động của chúng tôi.',
            ],
            rightNews: 'Thông báo của VNBIG',
            rightTwitter: 'Twitter',
        },
        fee: {
            feeTitle: 'Tỷ lệ thanh toán',
            // feeSection: ['Có hiệu lực từ ngày 26 tháng 9 năm 2017', 'Nhà sản xuất có ý nghĩa gì?', 'Phí giao dịch là bao nhiêu ?'],
            // feetext: [
            //     'Để khuyến khích tính lưu động và đẩy mạnh sự phát triển của thị trường, VNBIG sử dụng bảng phí với nhiều cấp bậc .Tất cả khách hàng đều sẽ được chuyển sang mô hình này vào ngày 26 tháng 9 năm 2017. Truy cập vào "<a class="import" href="assets.html?modle=record">Truy vấn giao dịch</a>" để theo dõi tiến độ của bạn.',
            //     'Mỗi giao dịch được tiến hành đều phải có hai bên:  đơn hàng của nhà sản xuất tồn tại trên đơn hàng trước khi giao dịch, cùng với những người chấp nhận đơn hàng, họ sẽ cho khớp với đơn hàng của nhà sản xuất. Nhà sản xuất được đặt tên như vậy là vì các đơn hàng của họ sẽ được thanh khoản trên thị trường. Người tiếp nhận sẽ thông qua việc khớp đơn hàng của mình với đơn hàng của nhà sản xuất để loại bỏ thanh khoản. Mô hình nhà sản xuất khuyến khích thanh khoản trên thị trường, khen thưởng tính thanh khoản của nhà sản xuất và giảm chi phí. Đây cũng là một nhân tố làm cho việc mở rộng thị trường càng thêm nghiêm ngặt vì tính cạnh tranh cao giữa các nhà sản xuất. Người tiếp nhận trả phí cao hơn thường được bù đắp bởi mức giá tốt hơn. ',
            //     'Phí giao dịch sẽ được khấu trừ từ tổng số tiền giao dịch của khách hàng. Nếu sau giao dịch nhận được tài sản tiền tệ, khách hàng phải thanh toán chi phí giao dịch tiền tệ; ngược lại, nếu nhận được tài sản số, sẽ phải thanh toán chi phí giao dịch tài sản số.',
            //     'Ví dụ: Bạn bán 1 BTC với giá 6300USD, sẽ bị trừ phí 6.3USD, nhận được 6293.7USD. Mua vào 1 BTC với giá 6300USD, sẽ trừ phí tương đương 0.001BTC và nhận về 0.999BTC.'
            // ],
            feeTable: ['Nhà sản xuất', 'Người tiếp nhận', 'KLGD (30 ngày)'],
            feeText: ['Mức giá hiện tại của nhà sản xuất / người nhận', 'xuống một mức', 'khối lượng giao dịch của bạn trong 30 ngày', 'bạn cần', 'đạt', 'mỗi 24 giờ , Chúng tôi tính 30 ngày cuối cùng trong khối lượng giao dịch của tài khoản và tự động điều chỉnh phí dựa trên bảng trên. '],
        },
        contact: {
            conTitle: 'Liên hệ hỗ trợ',
            conSection: 'Hãy cho chúng tôi biết những gì bạn cần',
            conItemName: [
                'Loại vấn đề:',
                'E-mail:',
                'Tệp đính kèm:',
                'Nội dung câu hỏi:',
                'Xin vui lòng điền địa chỉ ví của bạn nếu đang gặp vấn đề về tài sản số',
                'Vấn đề của bạn là gì:',
            ],
            // 'Tải lên một hình ảnh hoặc một tập tin nén'
            conInput: 'Tải ảnh lên',
            conSubmit: 'Gửi đi',
            conTips: 'Hộp thư không được giám sát theo yêu cầu, vui lòng liên hệ với chúng tôi để được hỗ trợ kỹ thuật.',
            conselect: [
                'Chọn loại câu hỏi...',
                'Đăng ký',
                'Mật khẩu',
                'Xác thực tên thật',
                'Charge',
                'Tuyi',
                'Thương mại',
                'Khác',
            ],
            error: [
                'Gửi không thành công xin vui lòng thử lại',
                'Gửi thành công',
                'Hãy chọn loại vấn đề',
                'Vui lòng nhập mô tả về sự cố',
                'Hãy nhập địa chỉ email để chúng tôi có thể liên hệ với bạn',
                'Hãy nhập đúng địa chỉ email',
                'Hãy nhập mô tả về vấn đề',
                'Tệp đã tải lên không đúng định dạng',
            ],
        },
        news: {
            newsTitle: 'Thông Báo',
            newsSection: ['Về VNBIG', 'Thông báo của VNBIG'],
            newsInfo: 'VNBIG là sàn giao dịch tài sản số hàng đầu với nhiều loại tài sản số. VNBIG được thành lập vào tháng 3 năm 2016 , cung cấp cho khách hàng môi trường giao dịch an toàn và công cụ phân tích số liệu chính xác nhất.',
        },
    }
    // 众筹VNC
    vi.wpaper = {
        // banner内容
        banContent: [
            'VNBIG TOKEN', // 0
            '（Nếu tài khoản trên sàn giao dịch đã có sẵn ETH thì có thể sử dụng chức năng rút tiền trong mục tài sản để chuyển ra）', // 1
            'Cách phát hành ICO còn', // 2
            'ngày', // 3
            'giơ', // 4
            'phút', // 5
            'giây', // 6
            'Tham gia ngay', // 7
            'Địa chỉ ETH', // 8
            'Đã nạp&nbsp;', // 9
            'Mỗi người dùng đăng ký ', // 10
            'Xác nhận mua', // 11
            'Đã đăng kí', // 12
            'kết thúc đợt phát hành lần này！', // 13
            'Bạn đã đăng kí  thành công！', // 14
            'đăng kí thất bại, thử lại！', // 15
            'thời gian kết thúc (ICO) còn', // 16
        ],
        // 分配部分的内容
        allotContent: [
            'Phân phối phát hành VNC',
            'Đội có: 50%',
            'Đưa ra thị trương: 15%',
            'Nhà đầu tư kỳ đầu: 10%',
            'Phát hành công khai: 25%',
            'Tải về sách trắng',
            'Cơ chế mua lại VNC',
            'Sau khi sàn được triển khai chính thức đi vào hoạt động, mỗi quý 40% lợi nhuận ròng của sàn sẽ được sử dụng để mua lại các VNC. VNC sau khi mua về sẽ đươc xử lý cho đến khi tổng số lưu thông của VNC trên sàn lên đến 10 tỷ.',
        ],
        // 发行计划
        plan: {
            planTitle: 'Kế hoạch phát hành VNC',
            planText: [
                'Lần này VNBIG sẽ được bán tại trang web chính thức của dự án blockchain lúc 20:00 (giờ Bắc Kinh) vào ngày 18 tháng 1 năm 2018.', // 0
                'Loại tiền đươc hỗ trơ khi phát hành quần chúng：', // 1
                'Ethereum', // 2
                'Danh sách trắng đăng ký thành viên：', // 3
                'Các thành viên trong danh sách trắng cần phải đăng ký vào ngày 16 tháng 1 năm 2018，Giữ &nbsp;', // 4
                '20ETH Hạn mức', // 5
                'Đổi lần 1（Ngày 18 tháng 1 năm 2018 - ngày 20 tháng 1）：', // 6
                '1ETH Đổi 40000VNC', // 7
                'Đổi lần 2（Ngày 21 tháng 1 năm 2018 - ngày 28 tháng 1）：', // 8
                '1ETH Đổi 36000VNC', // 9
                'Phát hành VNC cho đến khi đổi hết。', // 10
            ],
        },
        // OTC 场外交易与期货功能
        trade: {
            tradeH3: 'Chức năng tương lai và giao dịch OTC',
            tradeTitle: [
                'Giao dịch OTC',
                'Chức năng giao dịch đòn bẩy',
            ],
            tradeText: [
                'Vnbig dự kiến sẽ khởi động các kênh giao dịch và giao dịch trực tiếp bằng nhân dân tệ và đôla trên sàn này, người sử dụng và nhà đầu tư trực tiếp mua và bán tất cả các tài sản kỹ thuật số blockchain.Nền tảng này có bảo đảm tín dụng cao và hỗ trợ kỹ thuật mạnh mẽ để đảm bảo mua nhanh ,an toàn và hợp pháp.',
                'Vnbig dự định mở chức năng giao dịch hợp đồng  số, trong đó người sử dụng sàn giao dịch ở đây có thể giao dịch  và mở rộng tài sản kỹ thuật số blockchain được chỉ định. Đặt cài đặt chống mất mát và cảnh báo trước  để đạt được quá trình giao dịch và mở rộng hoàn chỉnh.',
            ],
        },
        // VNBIG 简介
        synopsis: {
            synopsisH3: [
                'Giơi thiệu về VNBIG',
                'Ưu điểm của VNBIG',
            ],
            synopsisTitle: [
                'Hỗ trơ tính năng cao',
                'An toàn ổn định',
                'Loại tiền đươc hỗ trơ',
                'Hỗ trơ tính lưu động',
                'Năng lực vận hành',
                'Hỗ trơ nhiều ngôn ngữ',
            ],
            currencyList: [
                'BTC',
                'ETH',
                'LTC',
                'BCH',
                'VNC（Token của VNBIG）',
                'IOTA',
                'ETC',
                'EOS',
            ],
            synopsisText: [
                'Sàn giao dịch blockchain  của VNBIG dựa vào tiềm năng to lớn của thị trường thương mại Đông Nam Á, hướng về người sử dụng  và các nhà đầu tư trên toàn cầu để cung cấp một quy trình đầy đủ, dễ thao tác, đảm bảo sự tự tin cao trong sàn giao dịch blockchain .Công nghệ Blockchain và hệ thống tài chính có ảnh hưởng lẫn nhau và sẽ là những lợi thế cho sự phát triển của ngành trong tương lai. Do đó, chúng tôi muốn tận dụng cơ hội để tăng cường ứng dụng của blockchain và thị trường thương mại.', // 0
                'Hệ thống giao dịch của VNBIG chọn dùng công nghệ kết hợp với bộ nhớ, sử dụng hệ thống hoạt động và bảo trì mạnh mẽ của AWS Amazon Cloud để hỗ trợ truy cập đồng thời cao để đảm bảo khả năng xử lý đơn đặt hàng tốc độ cao và hiệu quả thời gian  giao dịch để đảm bảo việc xử lý đơn đặt hàng không chậm trễ và kẹt.', // 1
                'VNBIG sử dụng hệ thống nhiều tầng đa cấp tiên tiến. Thiết kế của một kiến trúc đa tầng cải thiện đáng kể hiệu năng hệ thống, bảo mật, ổn định và khả năng mở rộng. Triển khai chức năng, cập nhật phiên bản mà không có thời gian chết. Đồng thời, VNBIG chấp nhận thiết kế tách biệt giao dịch và lưu trữ để xác nhận giao dịch đa chiều và tối đa hóa trải nghiệm vận hành của người dùng.', // 2
                'Trong thời kì đầu giao dịch, chúng tôi sẽ hỗ trợ các loại tiền tệ sau đây:', // 3
                'Các loại tiền tệ khác sẽ được hỗ trợ trong các kỳ sau.', // 4
                'VNBIG  có nhiều nguồn lực và nhiều đối tác trong ngành. Sau khi khởi động sàn giao dịch của VNBIG, các giao dịch của họ cũng sẽ được chuyển sang sàn giao dịch để cung cấp đủ khả năng thanh toán cho sàn này nhằm ung cấp cho người dùng những trải nghiệm giao dịch tốt nhất.', // 5
                'VNBIG có một đội ngũ vận hành đầy kinh nghiệm.Tiếp thị truyền thông xã hội  tốt,để xây dựng một cộng đồng mạnh mẽ、 thành lập thương hiệu đẳng cấp,cùng nhau tạo ra tài sản kỹ thuật số và blockchain Đông Nam A với thương hiệu có quyền uy.', // 6
                'VNBIG kì đầu tiên trực tuyến đã hỗ trợ nhiều loại ngôn ngữ khác nhau như tiếng Việt, tiếng Anh, tiếng Trung phồn thể à giản thể, sau này sẽ từng bước hỗ trợ thêm tiếng Nhật, tiếng Hàn để tạo ra một sàn giao dịch blockchain mang đẳng cấp t hế giới mà không bị rào cản về mặt ngôn ngữ.', // 7
            ],
        },
        team: {
            teamTitle: [
                'Giơi thiệu về đội ngũ cốt lõi',
                'Đội quản lý',
                'Đội tư vấn',
            ],
            teamName: [
                'CEO An Đông', // 0
                'COO  Dương Đại Phú', // 1
                'CTO Andrey loshakov', // 2
                'Xu Bao Long', // 3
                'Lou JI Yue', // 4
                'Shuai Chu', // 5
                'Sun Zeyu', // 6
                'Ye Zi', // 7
            ],
            teamMeg: [
                'Giám đốc điều hành: Nguyễn An Đông,  nhà đầu tư tiền tệ số nổi tiếng tạ Việt Nam. Đại học Ngoại Thương, K48 (2009-2013), chuyên ngành kinh tế quốc tế, có nhiều năm kinh nghiệm về tiền tệ và kinh doanh, cá nhân đã tham gia vào việc đầu tư các ứng dụng chuỗi khối toàn cầu và dự án tiền tệ kỹ thuật số.', // 0
                'Tốt nghiệp Đại Học Bách Khoa Hà Nội, Nhà một người tiên phong chơi đồng tiền kỹ thuật số, có kinh nghiệm nhất định trong trong hoạt động kinh doanh và có là người có tiếng nói trong xã hội.\n', // 1
                'Nhà kiến trúc hệ thống - Andrey, nhà chiến lược quỹ phòng hộ. Ông đã phát triển các công cụ giao dịch cần thiết để xây dựng quỹ phòng hộ và danh mục đầu tư quỹ phòng hộ. Andrey tốt nghiệp Đại học Tổng hợp Novosibirsk và nhận bằng thạc sỹ về tài chính toán học của trường kinh tế mới Moscow.', // 2
                'Xu Baolong - ngươi sáng lập chuỗi Mắt Rồng, tốt nghiệp Đại học Nhân Dân Trung Quốc, Đại học Bắc Kinh Quản trị Kinh doanh. Ông từng là Giám đốc Trung tâm Nghiên cứu Đầu tư Chặn Mạng Huntsman (một trong ba nền kinh doanh tiền tệ lớn ở Trung Quốc). Vào đầu năm 2016, trang web Dịch vụ An ninh Thông tin của Dragonshield được thành lập để cung cấp cho tình báo Trung Quốc và các công ty bảo mật khác với bảo mật thông tin cấp cao và các dịch vụ an ninh cá nhân.', // 3
                'Lou Ji Yue- tốt nghiệp đại học Johns Hopkins.  Đồng sáng lập công ty Quản lý Tài sản Tokenmania. Cam kết cung cấp đầy đủ các dịch vụ quản lý tài sản trong lĩnh vực tiền tệ kỹ thuật số, tham gia vào các khoản đầu tư quỹ phòng hộ tiền tệ và đầu tư tiền điện tử số.', // 4
                'Người sáng lập Qtum', // 5
                'nhà đầu tư tiền tệ số nổi tiếng tại Việt Nam', // 6
                'Tốt nghiệp Đại học Khoa học và Công nghệ Trung Quốc và Học viện Khoa học Trung Quốc', // 7
                'Phát triển công nghệ blockchain trong quá trình học tiến sĩ của mình', // 8
                'Tham gia nhiều dự án blockchain trong nước và quốc tế', // 9
                'Người sáng lập ví tiền V-God', // 10
                'Người sáng lâp quỹ Wu yin li', // 11
                'Nhà nghiên cứu, Đại học Bắc Kinh Học viện Tài chính và Khoa học ', // 12
                'kinh nghiệm sâu trong ngành', // 13
                'người hợp tác đầu tư Kernas', // 13
                'Người sáng lập ug ', // 14
                'Đã tham gia tư vấn cho một số công ty được niêm yết trên IPO', // 15
                'Sáng lập ugChain blockchain, dành riêng cho các ứng dụng chặn.', // 16
            ],
        },
    }
}(DH.lang.vi))
