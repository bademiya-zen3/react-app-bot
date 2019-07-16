//Purely for mocking data returned from api requests

//------>DATA FOR FIRST BAR CHART

export const dataArr = [
  {
    reportType: "Total Number of Sessions",
    dataType: "Last Two Days",
    value: 187
  },
  {
    reportType: "Income Tax Information",
    dataType: "Last Two Days",
    value: 72
  },
  {
    reportType: "PF Related Information",
    dataType: "Last Two Days",
    value: 58
  },
  {
    reportType: "Salary Related Information",
    dataType: "Last Two Days",
    value: 72
  },
  { reportType: "View Offer Lette", dataType: "Last Two Days", value: 9 },
  { reportType: "Resignation Letter", dataType: "Last Two Days", value: 9 }
];

export const dataArrMonthly = [
  { reportType: "Total Number of Sessions", dataType: "Monthly", value: 180 },
  { reportType: "Income Tax Information", dataType: "Monthly", value: 79 },
  { reportType: "PF Related Information", dataType: "Monthly", value: 60 },
  { reportType: "Salary Related Information", dataType: "Monthly", value: 72 },
  { reportType: "View Offer Lette", dataType: "Monthly", value: 90 },
  { reportType: "Resignation Letter", dataType: "Monthly", value: 19 }
];

export const dataArrYearly = [
  { reportType: "Total Number of Sessions", dataType: "Yearly", value: 187 },
  { reportType: "Income Tax Information", dataType: "Yearly", value: 27 },
  { reportType: "PF Related Information", dataType: "Yearly", value: 58 },
  { reportType: "Salary Related Information", dataType: "Yearly", value: 77 },
  { reportType: "View Offer Lette", dataType: "Yearly", value: 91 },
  { reportType: "Resignation Letter", dataType: "Yearly", value: 59 }
];

//----------->DATA FOR SECOND BAR CHART

export const dataMonthly = [
  {
    duration: "Jan",
    total: 48858,
    classified: 2768,
    completeResponse: 701,
    partialResponse: 1965
  },
  {
    duration: "Feb",
    total: 29161,
    classified: 1334,
    completeResponse: 301,
    partialResponse: 1009
  },
  {
    duration: "Mar",
    total: 38287,
    classified: 2466,
    completeResponse: 686,
    partialResponse: 1771
  },
  {
    duration: "Apr",
    total: 35249,
    classified: 2490,
    completeResponse: 681,
    partialResponse: 1679
  },
  {
    duration: "May",
    total: 34973,
    classified: 4155,
    completeResponse: 2183,
    partialResponse: 1508
  },
  {
    duration: "June",
    total: 36040,
    classified: 4871,
    completeResponse: 2558,
    partialResponse: 2300
  },
  {
    duration: "July",
    total: 11906,
    classified: 1612,
    completeResponse: 625,
    partialResponse: 985
  }
];

export const dataWeekly = [
  {
    duration: "Week1",
    total: 4888,
    classified: 278,
    completeResponse: 701,
    partialResponse: 1965
  },
  {
    duration: "Week2",
    total: 29161,
    classified: 134,
    completeResponse: 301,
    partialResponse: 109
  },
  {
    duration: "Week3",
    total: 38287,
    classified: 266,
    completeResponse: 66,
    partialResponse: 171
  },
  {
    duration: "Week4",
    total: 35249,
    classified: 240,
    completeResponse: 681,
    partialResponse: 169
  },
  {
    duration: "Week5",
    total: 34973,
    classified: 455,
    completeResponse: 213,
    partialResponse: 158
  },
  {
    duration: "Week6",
    total: 36040,
    classified: 471,
    completeResponse: 258,
    partialResponse: 2300
  },
  {
    duration: "Week7",
    total: 11906,
    classified: 162,
    completeResponse: 625,
    partialResponse: 98
  }
];

export const dataDaily = [
  {
    duration: "daily",
    total: 4888,
    classified: 278,
    completeResponse: 701,
    partialResponse: 195
  }
];

//-------------> DATA FOR PIE CHART

export const pieDataMonthly = [
  { errorType: "Form16 Info Not Found", value: 303 },
  { errorType: "IT Sheets Info Not Found", value: 9 },
  { errorType: "PaySlips Info Not Found", value: 158 },
  { errorType: "Request Token Not Suplied", value: 485 },
  { errorType: "Salary Release Info Not Found", value: 63 },
  { errorType: "Form16 Info Not Found", value: 303 }
];

export const pieDataYearly = [
  { errorType: "Form16 Info Not Found", value: 1639 },
  { errorType: "IT Sheets Info Not Found", value: 102 },
  { errorType: "PaySlips Info Not Found", value: 2785 },
  { errorType: "Request Token Not Suplied", value: 6272 },
  { errorType: "Salary Release Info Not Found", value: 620 },
  { errorType: "Form16 Info Not Found", value: 1639 }
];
