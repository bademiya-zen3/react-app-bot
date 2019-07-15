
// Sample date format which would be returned by the getBarData action creator
export const dataArr = [{"reportType":"Total Number of Sessions","dataType":"Last Two Days","value":187},
{"reportType":"Income Tax Information","dataType":"Last Two Days","value":72},
{"reportType":"PF Related Information","dataType":"Last Two Days","value":58},
{"reportType":"Salary Related Information","dataType":"Last Two Days","value":72},
{"reportType":"View Offer Lette","dataType":"Last Two Days","value":9},
{"reportType":"Resignation Letter","dataType":"Last Two Days","value":9}]



export const getOption =(reportTypes,dataValues,resultType)=> {
    
  return {
  color: ['#3398DB'],
  tooltip : {
      trigger: 'axis',
      axisPointer : {             
          type : 'shadow'       
      }
  },
  grid: {
      left: '10%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          data : reportTypes,
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
          name:resultType,
          type:'bar',
          barWidth: '20%',
          data:dataValues
      }
  ]
}};

