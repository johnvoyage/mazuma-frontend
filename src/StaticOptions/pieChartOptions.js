// import chartOptions from "./chartOptions";
//
// function shadeColor2(color, percent) {
//   var f = parseInt(color.slice(1), 16),
//     t = percent < 0 ? 0 : 255,
//     p = percent < 0 ? percent * -1 : percent,
//     R = f >> 16,
//     G = (f >> 8) & 0x00ff,
//     B = f & 0x0000ff;
//   return (
//     "#" +
//     (
//       0x1000000 +
//       (Math.round((t - R) * p) + R) * 0x10000 +
//       (Math.round((t - G) * p) + G) * 0x100 +
//       (Math.round((t - B) * p) + B)
//     )
//       .toString(16)
//       .slice(1)
//   );
// }

// const arrayOfColors = numberOfSlices => {
//   const returnedArray = [];
//   let startingR = 239;
//   let startingG = 255;
//   let startingB = 0;
//   for (let i = 0; i <= numberOfSlices; i++) {
//     returnedArray.push(`rgb(${startingR}, ${startingB}, ${startingB})`);
//     // startingR -= 10;
//     startingG -= 15;
//     // startingB -= 2;
//   }
//   return returnedArray;
// };

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
  // tenScalingColorsWithBlackAsLast[numberOfSlices - 1] = "black";
  return tenScalingColors;
};

const pieChartOptions = (numberOfSlices, subcategory) => {
  return {
    backgroundColor: tenScalingColors(numberOfSlices, subcategory)
  };
};

// const standardPie = {
//   label: "Population (millions)",
//   backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"]
// };

// const netWorth = standardPie(numberOfSlices);
// const assets = standardPie(numberOfSlices);
// const liabilities = standardPie(numberOfSlices);
// const netIncome = standardPie(numberOfSlices);
// const income = standardPie(numberOfSlices);
// const spending = standardPie(numberOfSlices);

export default pieChartOptions;