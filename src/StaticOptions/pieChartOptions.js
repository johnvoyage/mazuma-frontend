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

const pieChartOptions = numberOfSlices => {
  // console.log(numberOfSlices);
  return {
    label: "Population (millions)",
    backgroundColor: [
      "#193300",
      "#336600",
      "#4C9900",
      "#66CC00",
      "#80FF00",
      "#99FF33",
      "#B2FF66",
      "#CCFF99",
      "#E5FFCC",
      "GREY"
    ]
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
