/*
 *  下拉菜单
 *  日期：2017/9/26.
 *  作者：Math
 * */
;
(function ($) {
    'use strict'

    var Base = function (ele, params) {
        var defaults = {
                data: '', // 数据列表[]
                dataId: 'id', // 数据列表Id下标
                dataText: 'value', // 数据列表文本下标
                selectId: 'selectid', // id标识
                change: '', // 改变值后的回调函数
                selectedIndex: 0, // 默认选中值的索引值
                time: 200, // 下拉动画时间
                tipText: '请选择', // 提示文字
            },
            opts = $.extend(defaults, params),
            This = this,
            $this = This.ele = $(ele),
            len = $this.length
        if (typeof ele === 'string') {
            opts.ele = ele
        }
        if (len == 0) return
        if (len > 1) {
            $this.each(function () {
                return new Base(this, opts)
            })
            return
        }
        opts.ele = opts.ele ? opts.ele : '.' + ele.className
        This.opts = opts
        This.init()
    }
    Base.prototype = {
        constructor: Base,
        init: function () {
            var This = this
            if ((typeof This.opts.data === 'object') && This.opts.data.length > 0) {
                This.html()
            }
            This.ele.on('click', 'cite', function (e) { // 显示下拉
                This.slideDown(This, e)
            })
            $(document).click(function () {
                This.hide(This.ele.find('ul'))
            })
            This.ele.on('click', 'a', function () { // 选择菜单
                This.choose($(this))
            })
        },
        html: function () { // 数据转化成html片断
            var This = this,
                htmls = '<i></i><ul>',
                cite = ''
            for (var i = 0, len = This.opts.data.length; i < len; i++) {
                var str = This.opts.data[i]
                if (typeof This.opts.selectedIndex === 'number') { // 设置默认选中值
                    if (i == This.opts.selectedIndex) {
                        cite = '<cite ' + This.opts.selectId + '="' + str[This.opts.dataId] + '">' + str[This.opts.dataText] + '</cite>'
                    }
                } else if (i == 0) {
                    cite = '<cite><span>' + This.opts.tipText + '</span></cite>'
                }
                htmls += '<li><a href="javascript:;" ' + This.opts.selectId + '="' + str[This.opts.dataId] + '">' + str[This.opts.dataText] + '</a></li>'
            }
            htmls += '</ul>'
            This.ele.html(htmls + cite)
        },
        setValue: function (text, val) {
            if (!text) return
            var This = this
            This.ele.find('[' + This.opts.selectId + '=' + val + ']').addClass('on').parent().siblings().find('a').removeClass('on')
            This.ele.find('cite').html(text).attr(This.opts.selectId, val)
        },
        show: function (obj) {
            var This = this
            obj.closest(This.opts.ele).css('z-index', 10)
            obj.stop().slideDown(This.opts.time)
        },
        hide: function (obj) {
            var This = this
            obj.closest(This.opts.ele).css('z-index', 1)
            obj.stop().slideUp(This.opts.time)
        },
        slideDown: function (obj, e) { // 显示下拉
            var This = this,
                ul = This.ele.find('ul')
            e = e || window.event
            if (ul.is(':hidden')) {
                This.show(ul)
            } else {
                This.hide(ul)
            }
            $(This.opts.ele).each(function () {
                var $ul = $(this).find('ul')
                if ($ul[0] !== ul[0]) {
                    This.hide($ul)
                }
            })
            e.stopPropagation()
        },
        choose: function (obj) { // 选择菜单
            var This = this,
                cite = This.ele.find('cite'),
                id = obj.attr(This.opts.selectId),
                text = obj.html()
            cite.attr(This.opts.selectId, id).html(text)
            This.hide(This.ele.find('ul'))
            if (obj.hasClass('on')) {
                return
            }
            obj.addClass('on').parent().siblings().find('a').removeClass('on')
            This.opts.change && This.opts.change(id, This.ele)
        },
    }

    $.fn.divSelect = function (options, arg1, arg2) {
        var name = 'divSelect'
        this.each(function () {
            var $this = $(this),
                data = $this.data(name)
            if (typeof options === 'string') {
                data[options](arg1, arg2)
            } else {
                $this.data(name, new Base(this, options))
            }
        })
        return this
    }
}(jQuery))
