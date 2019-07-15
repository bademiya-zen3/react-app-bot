export const data={
    reportType:['Total Number of Sessions','Income Tax Information','PF Related Information','Salary Related Information','View Offer Lette','Resignation Letter'],
    lastTwoDays:[187,72,58,72,9,9],
    monthToDate:[1229,519,425,519,47,81],
    yearly:[14855,5906,5547,5906,757,813] 
  }


export const getBarOption = (data,type) => {
  return {
  color: ['#3398DB'],
  tooltip : {
      trigger: 'axis',
      axisPointer : {             
          type : 'shadow'       
      }
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          data : data.reportType,
          axisTick: {
              alignWithLabel: true
          }
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          name:type[0].toUpperCase()+type.slice(1),
          type:'bar',
          barWidth: '60%',
          data:data[type]
      }
  ]
}};

