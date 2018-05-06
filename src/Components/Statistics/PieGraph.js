import React from "react";
import { Pie } from "react-chartjs-2";
// import GraphOptions from "./GraphOptions";
// import SubcategoryOptions from "./SubcategoryOptions";
// import TimingFilter from "./TimingFilter";
import { Segment } from "semantic-ui-react";
import chartHelpers from "../../HelperFunctions/chartHelpers";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
import pieChartOptions from "../../StaticOptions/pieChartOptions";
import generalChartOptions from "../../StaticOptions/generalChartOptions";
import { connect } from "react-redux";

const PieGraph = props => {
  // const lineDataPointsToMap = chartHelpers.arrayOfDatesWithEntries(
  //   props.beginDate,
  //   props.endDate,
  //   props.entries
  // );
  //
  // const massAssignHelper = arrayOfSubcategories => {
  //   return lineDataPointsToMap.map(date => {
  //     return financialStatementHelpers.amountOfEntriesGivenSubcategories(
  //       arrayOfSubcategories,
  //       props.accounts,
  //       props.entries,
  //       0,
  //       date
  //     );
  //   });
  // };
  //
  // const chartData = { line: {}, pie: {}, bar: {} };
  // chartData.line.netWorth = massAssignHelper([1, 2, 3, 4, 5, 6]);
  // chartData.line.assets = massAssignHelper([1, 2, 3, 4]);
  // chartData.line.liabilities = massAssignHelper([5, 6]).map(num => -num);
  // chartData.line.netIncome = massAssignHelper([8, 9]).map(num => -num);
  // chartData.line.income = massAssignHelper([8]).map(num => -num);
  // chartData.line.spending = massAssignHelper([9]);

  const pieGraphData = {
    labels: ["red", "yellow", "blue"],
    datasets: [
      {
        data: [10, 20, 30]
      }
    ]
  };

  return (
    <Segment>
      <Pie data={pieGraphData} options={generalChartOptions.standardPie} />
    </Segment>
  );
};

// <Segment>
//   {props.chartType === "line" ? (
//     <Line data={lineGraphData} />
//   ) : props.chartType === "bar" ? (
//     <Bar data={lineGraphData} />
//   ) : (
//     <Pie data={lineGraphData} />
//   )}
// </Segment>

const mapStateToProps = state => {
  return {
    entries: state.userInfo.entries,
    accounts: state.userInfo.accounts,
    beginDate: state.chartContainer.beginDate,
    endDate: state.chartContainer.endDate,
    showSubcategories: state.chartContainer.showSubcategories,
    chartType: state.chartContainer.chartType
  };
};

export default connect(mapStateToProps, null)(PieGraph);
