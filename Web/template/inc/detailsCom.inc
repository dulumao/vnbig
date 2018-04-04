<div class="details-nav clearfix">
    <!-- <div class="all_coin_price">
        <div class="all_coin_show"><i class="price_i_xrp"><img></i><span></span><em></em></div>
        <!--下拉框-->
        <div class="all_coin_list">
            <div class="all_coin_box">
                <ul id="all_coin">
                    <!-- <li><a href="/coin/tic/">
                        <i class="deal_list_pic_tic"><img src="../../web/images/logo_smart1.png"></i>
                        <div class="all_coin_name">
                            <p>钛币&nbsp;<b>TIC</b></p>
                        </div>
                    </a></li> -->
                </ul>
                <script id="all_coin_tpl" type="text/template">
                    {{ for (var i = 0; i < data.length ; i++) { }}
                        <li><a href="details.html?id={{:=data[i].CurrencyId}}">
                        <i class="deal_list_pic_tic"><img src="{{:u=data[i].Img}}" /></i>
                        <div class="all_coin_name">
                            <p><!--{{:=data[i].CurrencyName}}-->
                                <b>{{:=data[i].CurrencyEnShortName}}</b>
                            </p>
                        </div>
                        </a></li>
                    {{ } }}
                </script> 
                <div class="sj"></div>
            </div>
        </div>
    <!--</div> -->
    <dl class="all_coin_info">
        <dt id="market-price">--</dt>
        <dd><p class="orange" id="market-max">-</p><em>-</em></dd>
        <dd><p class="green" id="market-min">-</p><em>-</em></dd>
        <dd><p id="market-buy">-</p><em>-</em></dd>
        <dd><p id="market-sell">-</p><em></em></dd>
        <dd class="w150"><p id="market-sum">-</p><em>-</em></dd>
    </dl>
</div>
<!--货币详情 -->
<div class="mess_info" id="lastarticle" style="visibility:hidden;padding-top:85px"> 
    <div class="mess_info_con">
        <a target="_blank" href="https://www.jubi.com/gonggao/2728.html">【官方公告】关于聚币网变更收款银行账户的通知</a>
        <span onclick="$('#lastarticle').css({visibility:'hidden',paddingTop:'85px'});">×</span> 
    </div> 
</div>
<!-- 提示信息-->

<div class="list-tab-box">
       <ul class="list-tab" id="list-tab">
        <li class="on" style="margin:0;" id="details"><a href="details.html"><i class="arrow-tab">-</i><span class="clon_name">--</span></a></li>
        <li id="info"><a href="info.html"><i class="arrow-tab">-</i><span class="clon_name">--</span></a></li>
        <li id="evaluate"><a href="evaluate.html"><i class="arrow-tab">-</i><span class="clon_name">--</span></a></li>
        <li id="newlist"><a href="newlist.html"><span class="clon_name">--</span><i class="arrow-tab">-</i></a></li>
</div>
<!--tab 切换 -->

