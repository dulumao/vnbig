/*
 *  滚动加载更多
 *  日期：2018-01-31
 *  作者：Math
 */
;(function ($) {
    'use strict'

    function Base(ele, options) {
        var defaults = {
            ajax: function () { }, // ajax请求方法
            dataFn: '', // 数据处理方法
            dataKey: 'list', // 数据列表下标
            countKey: 'Count', // 数据条数下标
            colNum: 3, // 表格列数
            noDataTip: '暂无数据', // 没有数据提示语
            noMoreTip: '已经到底了', // 到底提示
            loadingTip: '滚动加载更多...', // 加载中提示
            pageIndex: 1, // 第几页
            pageSize: 20, // 一页显示几条
        }
        if (!(this instanceof Base)) {
            return new Base(ele, options)
        }

        var opts = $.extend(defaults, options),
            self = this,
            $this = self.ele = $(ele),
            len = $this.length
        if (len == 0) return
        if (len > 1) {
            $this.each(function () {
                return new Base(this, opts)
            })
            return
        }
        self.opts = opts
        self.init()
    }

    var pro = Base.prototype

    pro.init = function () {
        var self = this
        self.opts.firstPage = self.opts.pageIndex // 第一页数字
        self.opts.totalPage = self.opts.pageIndex + 1 // 总页数
        self.addTipEle()
        self.scrollbar()
        self.loadData()
    }
    // 添加提示元素
    pro.addTipEle = function () {
        var self = this,
            opts = self.opts
        self.tipText = '<span class="btn-loading"><i></i></span><span class="tip-text">' + opts.loadingTip + '</span>'
        self.tipEle = $('<div class="scroll-load-more"></div>')
        self.tipEle.append(self.tipText)
        self.ele.find('table').after(self.tipEle)
    }

    // 绑定滚动方法
    pro.scrollbar = function () {
        var self = this,
            opts = self.opts
        self.ele.mCustomScrollbar({
            theme: 'dark',
            callbacks: {
                onTotalScroll: function () { // 滚动到底部加载更多
                    opts.pageIndex += 1
                    self.tipEle.show()
                    if (opts.pageIndex > opts.totalPage) {
                        return
                    }
                    self.loadData(opts.pageIndex)
                },
            },
        })
    }

    // 请求数据
    pro.loadData = function (pageIndex) {
        var self = this,
            opts = self.opts
        if (typeof pageIndex !== 'number') {
            pageIndex = opts.firstPage
        }
        opts.pageIndex = pageIndex
        opts.ajax(pageIndex).done(function (res) {
            res.Data = res.Data || {}
            var data = res.Data[opts.dataKey]
            opts.totalPage = Math.ceil(res.Data[opts.countKey] / opts.pageSize) - (1 - opts.firstPage) // 第一页不为1时
            if (opts.pageIndex >= opts.totalPage) {
                self.tipEle.html(opts.noMoreTip)
            }
            if (res.ReturnCode == 1000 && data && data != '') {
                self.tipEle.show()
                var html = opts.dataFn(data)
                if (pageIndex === opts.firstPage) {
                    if (opts.totalPage > opts.pageIndex) {
                        self.tipEle.html(self.tipText)
                    }
                    self.ele.find('tbody').html(html)
                    if (opts.pageIndex >= opts.totalPage && self.ele.height() > self.ele.find('table').height()) {
                        self.tipEle.hide()
                    }
                } else {
                    self.ele.find('tbody').append(html)
                }
                return
            }

            if (pageIndex === opts.firstPage) {
                self.tipEle.hide()
                self.ele.find('tbody').html('<tr><td class="odd" colspan="' + opts.colNum + '">' + opts.noDataTip + '</td> </tr>')
            }
        })
    }
    
    $.fn.scrollLoad = function (options) {
        var name = 'scrollLoad'
        var arg = [].slice.call(arguments, 1)
        this.each(function () {
            var $this = $(this),
                data = $this.data(name)
            if (typeof options === 'string') {
                data[options].apply(data, arg)
            } else {
                $this.data(name, new Base(this, options))
            }
        })
        return this
    }
}(jQuery, window))
