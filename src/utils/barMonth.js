import echarts from 'echarts'

export const dataArr =[{"duration":"Jan","total":48858,"classified":2768,"completeResponse":701,"partialResponse":1965},
{"duration":"Feb","total":29161,"classified":1334,"completeResponse":301,"partialResponse":1009},
{"duration":"Mar","total":38287,"classified":2466,"completeResponse":686,"partialResponse":1771},
{"duration":"Apr","total":35249,"classified":2490,"completeResponse":681,"partialResponse":1679},
{"duration":"May","total":34973,"classified":4155,"completeResponse":2183,"partialResponse":1508},
{"duration":"June","total":36040,"classified":4871,"completeResponse":2558,"partialResponse":2300},
{"duration":"July","total":11906,"classified":1612,"completeResponse":625,"partialResponse":985}];




export const  getOption = ({duration,total,classified,completeResponse,partialResponse}) =>{
    var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];
let app={};
app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
  
};


var labelOption = {
    normal: {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 10,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

var option = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['total', 'classified', 'completeResponse', 'partialResponse']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: duration
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'total',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: total
        },
        {
            name: 'classified',
            type: 'bar',
            label: labelOption,
            data: classified
        },
        {
            name: 'completeResponse',
            type: 'bar',
            label: labelOption,
            data: completeResponse
        },
        {
            name: 'partialResponse',
            type: 'bar',
            label: labelOption,
            data: partialResponse
        }
    ]
};
return option;
}   