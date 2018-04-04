/*
 *  k线图配置文件
 *  日期：2017/9/13.
 *  作者：Math
 * */

/*
var dates = ["2016-03-29", "2016-03-30", "2016-03-31", "2016-04-01", "2016-04-04", "2016-04-05", "2016-04-06", "2016-04-07", "2016-04-08", "2016-04-11", "2016-04-12", "2016-04-13", "2016-04-14", "2016-04-15", "2016-04-18", "2016-04-19", "2016-04-20", "2016-04-21", "2016-04-22", "2016-04-25", "2016-04-26", "2016-04-27", "2016-04-28", "2016-04-29", "2016-05-02", "2016-05-03", "2016-05-04", "2016-05-05", "2016-05-06", "2016-05-09", "2016-05-10", "2016-05-11", "2016-05-12", "2016-05-13", "2016-05-16", "2016-05-17", "2016-05-18", "2016-05-19", "2016-05-20", "2016-05-23", "2016-05-24", "2016-05-25", "2016-05-26", "2016-05-27", "2016-05-31", "2016-06-01", "2016-06-02", "2016-06-03", "2016-06-06", "2016-06-07", "2016-06-08", "2016-06-09", "2016-06-10", "2016-06-13", "2016-06-14", "2016-06-15", "2016-06-16", "2016-06-17", "2016-06-20", "2016-06-21", "2016-06-22", "2016-06-23", "2016-06-24", "2016-06-25", "2016-06-26", "2016-06-27", "2016-06-28", "2016-06-29", "2016-06-30", "2016-06-31", "2016-06-32", "2016-06-33", "2016-06-34", "2016-06-35", "2016-06-36", "2016-06-37", "2016-06-38", "2016-06-39", "2016-06-40", "2016-06-41", "2016-06-42", "2016-06-43", "2016-06-44", "2016-06-45", "2016-06-46", "2016-06-47", "2016-06-48", "2016-06-49", "2016-06-50"];

var data = [[17512.58, 17512.58, 17434.27, 17642.81, 86160000], [17652.36, 17716.66, 17652.36, 17790.11, 79330000], [17716.05, 17685.09, 17669.72, 17755.7, 102600000], [17661.74, 17792.75, 17568.02, 17811.48, 104890000], [17799.39, 17737, 17710.67, 17806.38, 85230000], [17718.03, 17603.32, 17579.56, 17718.03, 115230000], [17605.45, 17716.05, 17542.54, 17723.55, 99410000], [17687.28, 17541.96, 17484.23, 17687.28, 90120000], [17555.39, 17576.96, 17528.16, 17694.51, 79990000], [17586.48, 17556.41, 17555.9, 17731.63, 107100000], [17571.34, 17721.25, 17553.57, 17744.43, 81020000], [17741.66, 17908.28, 17741.66, 17918.35, 91710000], [17912.25, 17926.43, 17885.44, 17962.14, 84510000], [17925.95, 17897.46, 17867.41, 17937.65, 118160000], [17890.2, 18004.16, 17848.22, 18009.53, 89390000], [18012.1, 18053.6, 17984.43, 18103.46, 89820000], [18059.49, 18096.27, 18031.21, 18167.63, 100210000], [18092.84, 17982.52, 17963.89, 18107.29, 102720000], [17985.05, 18003.75, 17909.89, 18026.85, 134120000], [17990.94, 17977.24, 17855.55, 17990.94, 83770000], [17987.38, 17990.32, 17934.17, 18043.77, 92570000], [17996.14, 18041.55, 17920.26, 18084.66, 109090000], [18023.88, 17830.76, 17796.55, 18035.73, 100920000], [17813.09, 17773.64, 17651.98, 17814.83, 136670000], [17783.78, 17891.16, 17773.71, 17912.35, 80100000], [17870.75, 17750.91, 17670.88, 17870.75, 97060000], [17735.02, 17651.26, 17609.01, 17738.06, 95020000], [17664.48, 17660.71, 17615.82, 17736.11, 81530000], [17650.3, 17740.63, 17580.38, 17744.54, 80020000], [17743.85, 17705.91, 17668.38, 17783.16, 85590000], [17726.66, 17928.35, 17726.66, 17934.61, 75790000], [17919.03, 17711.12, 17711.05, 17919.03, 87390000], [17711.12, 17720.5, 17625.38, 17798.19, 88560000], [17711.12, 17535.32, 17512.48, 17734.74, 86640000], [17531.76, 17710.71, 17531.76, 17755.8, 88440000], [17701.46, 17529.98, 17469.92, 17701.46, 103260000], [17501.28, 17526.62, 17418.21, 17636.22, 79120000], [17514.16, 17435.4, 17331.07, 17514.16, 95530000], [17437.32, 17500.94, 17437.32, 17571.75, 111990000], [17507.04, 17492.93, 17480.05, 17550.7, 87790000], [17525.19, 17706.05, 17525.19, 17742.59, 86480000], [17735.09, 17851.51, 17735.09, 17891.71, 79180000], [17859.52, 17828.29, 17803.82, 17888.66, 68940000], [17826.85, 17873.22, 17824.73, 17873.22, 73190000], [17891.5, 17787.2, 17724.03, 17899.24, 147390000], [17754.55, 17789.67, 17664.79, 17809.18, 78530000], [17789.05, 17838.56, 17703.55, 17838.56, 75560000], [17799.8, 17807.06, 17689.68, 17833.17, 82270000], [17825.69, 17920.33, 17822.81, 17949.68, 71870000], [17936.22, 17938.28, 17936.22, 18003.23, 78750000], [17931.91, 18005.05, 17931.91, 18016, 71260000], [17969.98, 17985.19, 17915.88, 18005.22, 69690000], [17938.82, 17865.34, 17812.34, 17938.82, 90540000], [17830.5, 17732.48, 17731.35, 17893.28, 101690000], [17710.77, 17674.82, 17595.79, 17733.92, 93740000], [17703.65, 17640.17, 17629.01, 17762.96, 94130000], [17602.23, 17733.1, 17471.29, 17754.91, 91950000], [17733.44, 17675.16, 17602.78, 17733.44, 248680000], [17736.87, 17804.87, 17736.87, 17946.36, 99380000], [17827.33, 17829.73, 17799.8, 17877.84, 85130000], [17832.67, 17832.67, 17770.36, 17920.16, 89440000],[17512.58, 17512.58, 17434.27, 17642.81, 86160000], [17652.36, 17716.66, 17652.36, 17790.11, 79330000], [17716.05, 17685.09, 17669.72, 17755.7, 102600000], [17661.74, 17792.75, 17568.02, 17811.48, 104890000], [17799.39, 17737, 17710.67, 17806.38, 85230000], [17718.03, 17603.32, 17579.56, 17718.03, 115230000], [17605.45, 17716.05, 17542.54, 17723.55, 99410000], [17687.28, 17541.96, 17484.23, 17687.28, 90120000], [17555.39, 17576.96, 17528.16, 17694.51, 79990000], [17586.48, 17556.41, 17555.9, 17731.63, 107100000], [17571.34, 17721.25, 17553.57, 17744.43, 81020000], [17741.66, 17908.28, 17741.66, 17918.35, 91710000], [17912.25, 17926.43, 17885.44, 17962.14, 84510000], [17925.95, 17897.46, 17867.41, 17937.65, 118160000], [17890.2, 18004.16, 17848.22, 18009.53, 89390000], [18012.1, 18053.6, 17984.43, 18103.46, 89820000], [18059.49, 18096.27, 18031.21, 18167.63, 100210000], [18092.84, 17982.52, 17963.89, 18107.29, 102720000], [17985.05, 18003.75, 17909.89, 18026.85, 134120000], [17990.94, 17977.24, 17855.55, 17990.94, 83770000], [17987.38, 17990.32, 17934.17, 18043.77, 92570000], [17996.14, 18041.55, 17920.26, 18084.66, 109090000], [18023.88, 17830.76, 17796.55, 18035.73, 100920000], [17813.09, 17773.64, 17651.98, 17814.83, 136670000], [17783.78, 17891.16, 17773.71, 17912.35, 80100000], [17870.75, 17750.91, 17670.88, 17870.75, 97060000], [17735.02, 17651.26, 17609.01, 17738.06, 95020000], [17664.48, 17660.71, 17615.82, 17736.11, 81530000], [17650.3, 17740.63, 17580.38, 17744.54, 80020000], [17743.85, 17705.91, 17668.38, 17783.16, 85590000], [17726.66, 17928.35, 17726.66, 17934.61, 75790000], [17919.03, 17711.12, 17711.05, 17919.03, 87390000], [17531.76, 17710.71, 17531.76, 17755.8, 88440000], [17701.46, 17529.98, 17469.92, 17701.46, 103260000], [17501.28, 17526.62, 17418.21, 17636.22, 79120000], [17514.16, 17435.4, 17331.07, 17514.16, 95530000], [17437.32, 17500.94, 17437.32, 17571.75, 111990000], [17507.04, 17492.93, 17480.05, 17550.7, 87790000], [17525.19, 17706.05, 17525.19, 17742.59, 86480000], [17735.09, 17851.51, 17735.09, 17891.71, 79180000], [17859.52, 17828.29, 17803.82, 17888.66, 68940000], [17826.85, 17873.22, 17824.73, 17873.22, 73190000], [17891.5, 17787.2, 17724.03, 17899.24, 147390000]]
var volumes = []
data.forEach(function (item, index) {
    var float = item[0] - item[1] > 0 ? 1 : -1
    volumes.push([index, item[4], float])
})*/

;(function (window, document, space) {
    var borderColor = 'rgba(255, 255, 255, .2)'
    // var upColor = '#cb2526'
    // var downColor = '#0be279'

    function calculateMA(dayCount, datas) {
        var result = []
        for (var i = 0, len = datas.length; i < len; i++) {
            if (i < dayCount) {
                result.push(+datas[i][1])
            } else {
                var sum = 0
                for (var j = 0; j < dayCount; j++) {
                    sum = new Big(sum).plus(datas[i - j][1]).toString()
                }
                result.push(+space.floatNum(new Big(sum).div(dayCount).toString(), 6))
            }
        }
        return result
    }

    var option = function (data, volumes, dates, label, isMin) {
        var start = 0,
            end = 100,
            len = data.length,
            opacity = 1

        if (isMin) {
            opacity = 0
        }
        if (len > 60) {
            start = parseInt((len - 60), 10) || 0
        }
        var opt = {
            title: {
                show: false,
            },
            // 右边的title
            legend: {
                show: true,
            },
            // 提示框
            tooltip: {
                trigger: 'axis',
                // trigger: 'item',
                axisPointer: {
                    // type: 'cross',
                    show: true,
                },
                textStyle: {
                    fontSize: '12',
                    color: 'rgb(0,0,0)',
                    fontStyle: 'normal',
                },
                alwaysShowContent: true,
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderWidth: 2,
                padding: 10,
                borderColor: 'rgba(0,0,0,0.4)',
                formatter: function (params) {
                    var param = [],
                        ma = []
                    try {
                        params.forEach(function (item) {
                            if (item.seriesType !== 'line') {
                                param.push(item)
                            } else {
                                ma.push(item)
                            }
                        })
                        /*
                         label[1]=价格[RMB]
                         label[2]=成交量
                         label[3]=开盘
                         label[4]=收盘
                         label[5]=最低
                         label[6]=最高
                         */
                        var time = ''
                        if (param[0].dataIndex === (len - 1)) { // 最后一项
                            time = 'time'
                        }
                        if (param[0].data.length > 4) {
                            var temp = param[0]
                            param[0] = param[1]
                            param[1] = temp
                        }
                        var text = ''
                        text += '<span class="' + time + '">' + param[0].name + '</span><br/>'
                        text += param[0].seriesName + '：<span class="volumn">' + param[0].data[1] + '</span><br/>'
                        text += label[1] + '<br/>'
                        param[1].data.forEach(function (item, index) {
                            if (index > 0 && index < 5) {
                                text += label[index + 2] + '：<span class="price' + index + '">' + item + '</span><br/>'
                            }
                        })
                        ma.forEach(function (item) {
                            text += '<span class="' + item.seriesName + '">' + item.seriesName + '：<span>' + item.data + '</span></span><br/>'
                        })
                        return text
                    } catch (e) {
                        return ''
                    }
                },
                position: function (pos, params, el, elRect, size) {
                    var obj = { top: 10 }
                    obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30
                    return obj
                },
            },
            axisPointer: {
                link: { xAxisIndex: 'all' },
                label: {
                    backgroundColor: '#777',
                },
                snap: true,
            },
            // 整个canva
            grid: [
                {
                    x: '2%',
                    y: '5%',
                    width: '90%',
                    height: '72%',
                },
                {
                    x: '2%',
                    y2: '5%',
                    width: '90%',
                    height: '10%',
                    bottom: '6.5%',
                },
                {
                    x: '2%',
                    y: '5%',
                    width: '90%',
                    height: '72%',
                },
            ],
            visualMap: {
                show: false,
                seriesIndex: 1,
                dimension: 2,
                min: 0,
                pieces: [{
                    value: 1,
                    color: space.dropColor,
                }, {
                    value: -1,
                    color: space.riseColor,
                }],
            },
            xAxis: [
                {
                    gridIndex: 0,
                    type: 'category',
                    data: dates,
                    scale: true,
                    boundaryGap: true,
                    splitLine: { show: false },
                    axisTick: {
                        show: false,
                        alignWithLabel: true,
                        lineStyle: {
                            color: borderColor,
                        },
                    },
                    axisLabel: {
                        align: 'center',
                        show: false,
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: borderColor,
                        },
                    },
                },
                {
                    gridIndex: 1,
                    type: 'category',
                    data: dates,
                    scale: true,
                    boundaryGap: true,
                    splitLine: { show: false },
                    axisLabel: {
                        show: true,
                        color: 'rgba(255, 255, 255, 0.4)', // 日期文字
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel: true,
                        lineStyle: {
                            color: borderColor,
                        },
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: borderColor,
                        },
                    },
                },
            ],
            yAxis: [
                {
                    gridIndex: 0,
                    zlevel: 9999,
                    scale: true,
                    position: 'right',
                    name: label[1],
                    nameTextStyle: {
                        color: '#ffac00',
                        padding: [10, 0, 0, 0],
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: 'dotted',
                        },
                    },
                    boundaryGap: ['1%', '1%'],
                    splitNumber: 2,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: borderColor,
                        },
                    },
                    axisLabel: {
                        show: true,
                        inside: false,
                        margin: 0,
                        padding: [0, 0, 5, 0],
                        color: 'rgba(255, 255, 255, 0.4)',
                        verticalAlign: 'bottom',
                    },
                    nameLocation: 'middle',
                    /* min: function(min, max){
                        var value = min - min * .05
                        if(value < 0){
                            value = 0;
                        }
                        return parseFloat(value.toFixed(6));
                    },
                    max: function(min, max){
                        var value = max + max * .05
                        return parseFloat(value.toFixed(6));
                    }*/
                },
                {
                    gridIndex: 1,
                    scale: true,
                    position: 'right',
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: borderColor,
                        },
                    },
                    name: label[2],
                    nameTextStyle: {
                        color: '#ffac00',
                        padding: [10, 0, 0, 0],

                    },
                    nameLocation: 'middle',
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
            ],
            dataZoom: [
                {
                    type: 'inside',
                    xAxisIndex: [0, 1],
                    y: '85%',
                    startValue: start,
                    end: end,
                    minValueSpan: 10, // 限制最少个数
                    maxValueSpan: 50, // 限制最多个数
                    zoomLock: true,
                },
                /*
                {
                    type: 'slider',
                    y: '85%',
                    startValue: start,
                    end: end,
                    fillerColor: 'rgba(69,114,167,0.2)',
                    zlevel: 9,
                    textStyle: {
                        color: 'transparent',
                    },
                },*/
            ],
            series: [
                {
                    name: label[1],
                    type: 'candlestick',
                    data: data,
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    zlevel: 99,
                    itemStyle: {
                        normal: {
                            color: space.riseColor,
                            color0: space.dropColor,
                            borderColor: space.riseColor,
                            borderColor0: space.dropColor,
                            opacity: opacity,
                        },
                        emphasis: {
                            borderWidth: 1,
                            opacity: opacity,
                        },
                    },
                    barMaxWidth: 20,
                },
                {
                    name: label[2],
                    type: 'bar',
                    data: volumes,
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    zlevel: 99,
                    itemStyle: {
                        normal: {
                            color: '#eee',
                        },
                    },
                    tooltip: {
                        formatter: '{b0}<br />{a0} : {c0}',
                    },
                    barMinHeight: 1,
                    barMaxWidth: 20,
                },
                {
                    name: 'MA5',
                    type: 'line',
                    zlevel: 0,
                    symbolSize: 0,
                    data: calculateMA(5, data),
                    smooth: true,
                    smoothMonotone: 'x',
                    lineStyle: {
                        normal: {
                            opacity: 0.8,
                            color: '#eee',
                            width: 1,
                        },
                    },
                },
                {
                    name: 'MA10',
                    type: 'line',
                    zlevel: 0,
                    symbolSize: 0,
                    data: calculateMA(10, data),
                    smooth: true,
                    smoothMonotone: 'x',
                    lineStyle: {
                        normal: {
                            opacity: 0.8,
                            color: '#e0d400',
                            width: 1,
                        },
                    },
                },
            ],
        }
        return opt
    }

    // space.option = option(data, volumes, dates, space.lang.zh.trade.kLabel)
    space.option = option
}(window, document, DH))
