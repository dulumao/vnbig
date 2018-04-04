<div class="header">
    <div class="header-container">
        <div class="header-left">
            <a class="logo" href="{{path}}">
                <img src="./Web/img/common/logo.png" >
            </a>
            <ul class="header-nav">
                <li id="index"><a class="nav-text lang-nav" index="0" href="{{path}}">-</a></li>
                <li id="trade"><a class="nav-text lang-nav" index="1" href="{{path}}tradeFB.html">-</a></li>
                <li id="property"><a class="nav-text lang-nav" index="2" href="{{path}}assets.html">-</a></li>
                <li id="safety"><a class="nav-text lang-nav" index="3" href="{{path}}safety.html">-</a></li>
                <li id="help"><a class="nav-text lang-nav" index="4" href="{{path}}newlist.html?newsType=3">-</a></li>
            </ul>
        </div>
        <div class="header-right">
            <div class="header-login">
                <div class="unlogin" id="unlogin">
                    <a id="login-btn" class="lang-login" href="{{path}}login.html">-</a>
                    <span class="lang-or">--</span>
                    <a id="register-btn" class="lang-reg" href="{{path}}register-mail.html">-</a>
                    <!-- <span class="lang-start">---</span> -->
                </div>
                <div class="login hide" id="login">
                    <a id="userName" href="{{path}}safety.html">----</a>
                    <a id="quit" class="lang-quit" href="javascript:void(0);">-</a>
                </div>
            </div>
	        <!--<div class="money-choose" id="moneyChoose">
				<span class="current">
					<em>&#45;&#45;</em>
					<i class="lang-arrow"></i>
				</span>
		        <ul class="choose-box">
			        <li data-id="$">$&nbsp;USD</li>
			        <li data-id="¥">¥&nbsp;CNY</li>
			        <li data-id="₫">₫&nbsp;VND</li>
		        </ul>
	        </div>-->
            <div class="lang-choose"  id="langChoose">
                <span class="now-lang" id="nowLang"><i class="lang-icon"></i><i class="lang-arrow"></i></span>
                <ul class="hander-lang-box" id="langBox">
                    <li type="vi"><i class="lang-icon icon-vi"></i>Tiếng Việt</li>
                    <li type="en"><i class="lang-icon icon-en"></i>English</li>
                    <li type="ct"><i class="lang-icon icon-ct"></i>繁體中文</li>
                    <li type="zh"><i class="lang-icon icon-zh"></i>简体中文</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- 弹出框-->
<div class="mess-info">
    <div class="mess-tip"></div>
</div>
<!-- 客服-->
<div class="customer-service" id="customerService">
    <div class="customer-btn">
        <div class="icon"></div>
        <span class="name lang-service">客服</span>
    </div>
    <div class="customer-center" id="customerCenter">
        <p class="title lang-customerTitle">扫码添加Zalo在线客服</p>
        <div class="code-box">
            <img src="/web/img/common/customer-lan.jpg">
            <div class="img-dashed"></div>
            <img src="/web/img/common/customer-yan.jpg">
        </div>
        <p class="customer-name">
            <span class="lang-lan">客服1: 阿兰</span>
            <span class="lang-yan">客服2: 阿燕</span>
        </p>
    </div>
</div>
