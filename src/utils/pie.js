export function getOption(data, chartVariant, title = "Error Types in %") {
  let option = {
    title: {
      text: title,
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: []
    },
    series: [
      {
        name: chartVariant,
        type: "pie",
        radius: "55%",
        center: ["40%", "60%"],
        data: data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
  return option;
}
