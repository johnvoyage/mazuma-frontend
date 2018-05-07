// import chartOptions from "./chartOptions";

const standardBar = barColor => {
  return {
    backgroundColor: barColor
  };
};

// const standardPie = {
//   label: "Population (millions)",
//   backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"]
// };

const netWorth = standardBar("#E7AD43");
const assets = standardBar("#2FA166");
const liabilities = standardBar("#DA554F");
const netIncome = standardBar("#E7AD43");
const income = standardBar("#2FA166");
const spending = standardBar("#DA554F");

export default {
  netWorth,
  assets,
  liabilities,
  netIncome,
  income,
  spending
};
