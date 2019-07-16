//utility function that accepts receive data sent from api end point and
//formats data as required by bar charts
export const prepareChartData = data => {
  let temp = {};
  data.forEach(obj => {
    for (let key in obj) {
      if (temp[key]) temp[key].push(obj[key]);
      else {
        temp[key] = [];
        temp[key].push(obj[key]);
      }
    }
  });
  return temp;
};
