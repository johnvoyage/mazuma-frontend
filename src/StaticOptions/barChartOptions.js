const standardBar = barColor => {
  return {
    backgroundColor: barColor
  };
};

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
