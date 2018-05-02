const standard = (number, prefix = "") => {
  const negative = number < 0 ? "- " : "";
  const dollars = Math.abs(parseFloat(number))
    .toString()
    .split(".")[0];
  const cents = parseFloat(number)
    .toFixed(2)
    .split(".")[1];
  return `${negative}${prefix}${formatDollars(dollars)}.${cents}`;
};

const formatDollars = number => {
  return number
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    .join(",")
    .split("")
    .reverse()
    .join("");
};

const withoutCents = (number, prefix = "") => {
  return standard(number, prefix).slice(0, -3);
};

export default {
  standard,
  withoutCents
};
