import echarts from "echarts";

export const getOption = ({ sortby, total, classified, complete, partial }) => {
  var posList = [
    "left",
    "right",
    "top",
    "bottom",
    "inside",
    "insideTop",
    "insideLeft",
    "insideRight",
    "insideBottom",
    "insideTopLeft",
    "insideTopRight",
    "insideBottomLeft",
    "insideBottomRight"
  ];
  let app = {};
  app.configParameters = {
    rotate: {
      min: -90,
      max: 90
    },
    align: {
      options: {
        left: "left",
        center: "center",
        right: "right"
      }
    },
    verticalAlign: {
      options: {
        top: "top",
        middle: "middle",
        bottom: "bottom"
      }
    },
    position: {
      options: echarts.util.reduce(
        posList,
        function(map, pos) {
          map[pos] = pos;
          return map;
        },
        {}
      )
    },
    distance: {
      min: 0,
      max: 100
    }
  };

  app.config = {
    rotate: 90,
    align: "left",
    verticalAlign: "middle",
    position: "insideBottom",
    distance: 15
  };

  var labelOption = {
    normal: {
      show: false,
      position: app.config.position,
      distance: app.config.distance,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      rotate: app.config.rotate,
      formatter: "{c}  {name|{a}}",
      fontSize: 10,
      rich: {
        name: {
          textBorderColor: "#fff"
        }
      }
    }
  };

  var option = {
    color: ["#003366", "#006699", "#4cabce", "#e5323e"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: ["total", "classified", "complete", "partial"]
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center",
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: sortby
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "total",
        type: "bar",
        barGap: 0,
        label: labelOption,
        data: total
      },
      {
        name: "classified",
        type: "bar",
        label: labelOption,
        data: classified
      },
      {
        name: "complete",
        type: "bar",
        label: labelOption,
        data: complete
      },
      {
        name: "partial",
        type: "bar",
        label: labelOption,
        data: partial
      }
    ]
  };
  return option;
};
