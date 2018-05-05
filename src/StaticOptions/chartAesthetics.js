// import chartOptions from "./chartOptions";

const standardLine = {
  fill: false,
  lineTension: 0.1,
  borderColor: "red",
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

const netWorth = standardLine;
const assets = standardLine;
const liabilities = standardLine;
const netIncome = standardLine;
const income = standardLine;
const spending = standardLine;

export default {
  line: {
    netWorth,
    assets,
    liabilities,
    netIncome,
    income,
    spending
  }
};
