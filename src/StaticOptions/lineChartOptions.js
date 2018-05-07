const standardLine = (lineColor, dashArray) => {
  return {
    fill: false,
    lineTension: 0.1,
    borderColor: lineColor,
    borderCapStyle: "butt",
    borderDash: dashArray,
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10
  };
};

const netWorth = standardLine("#E7AD43", []);
const assets = standardLine("#2FA166", []);
const liabilities = standardLine("#DA554F", []);
const netIncome = standardLine("#E7AD43", []);
const income = standardLine("#2FA166", []);
const spending = standardLine("#DA554F", []);

const netWorthGoals = standardLine("#E7AD43", [5]);
const assetsGoals = standardLine("#2FA166", [5]);
const liabilitiesGoals = standardLine("#DA554F", [5]);
const netIncomeGoals = standardLine("#E7AD43", [5]);
const incomeGoals = standardLine("#2FA166", [5]);
const spendingGoals = standardLine("#DA554F", [5]);

export default {
  netWorth,
  assets,
  liabilities,
  netIncome,
  income,
  spending,
  //
  netWorthGoals,
  assetsGoals,
  liabilitiesGoals,
  netIncomeGoals,
  incomeGoals,
  spendingGoals
};
