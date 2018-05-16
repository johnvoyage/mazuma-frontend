const nineScalingReds = [
  "#FFCDD2",
  "#EF9A9A",
  "#E57373",
  "#EF5350",
  "#F44336",
  "#E53935",
  "#D32F2F",
  "#C62828",
  "#B71C1C"
];

const nineScalingGreens = [
  "#DCEDC8",
  "#C5E1A5",
  "#AED581",
  "#9CCC65",
  "#8BC34A",
  "#7CB342",
  "#689F38",
  "#558B2F",
  "#33691E"
];

const tenScalingColors = (numberOfSlices, subcategory) => {
  const tenScalingColors =
    subcategory === "liabilities" || subcategory === "spending"
      ? [...nineScalingReds]
      : [...nineScalingGreens];
  numberOfSlices > 9
    ? tenScalingColors.push("black")
    : (tenScalingColors[numberOfSlices - 1] = "black");
  return tenScalingColors;
};

const pieChartOptions = (numberOfSlices, subcategory) => {
  return {
    backgroundColor: tenScalingColors(numberOfSlices, subcategory)
  };
};

export default pieChartOptions;
