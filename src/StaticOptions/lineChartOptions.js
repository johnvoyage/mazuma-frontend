// import chartOptions from "./chartOptions";

const standardLine = lineColor => {
  return {
    fill: false,
    lineTension: 0.1,
    borderColor: lineColor,
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10
  };
};

// const standardPie = {
//   label: "Population (millions)",
//   backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"]
// };
const netWorth = standardLine("#E7AD43");
const assets = standardLine("#2FA166");
const liabilities = standardLine("#DA554F");
const netIncome = standardLine("#E7AD43");
const income = standardLine("#2FA166");
const spending = standardLine("#DA554F");

export default {
  netWorth,
  assets,
  liabilities,
  netIncome,
  income,
  spending
};
