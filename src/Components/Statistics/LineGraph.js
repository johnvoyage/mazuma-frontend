import React from "react";
import { Line } from "react-chartjs-2";
// import GraphOptions from "./GraphOptions";
// import SubcategoryOptions from "./SubcategoryOptions";
// import TimingFilter from "./TimingFilter";
import { Segment } from "semantic-ui-react";
import chartHelpers from "../../HelperFunctions/chartHelpers";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
import lineChartOptions from "../../StaticOptions/lineChartOptions";
import generalChartOptions from "../../StaticOptions/generalChartOptions";
import { connect } from "react-redux";

const LineGraph = props => {
  const lineDataPointsToMap = chartHelpers.arrayOfDatesWithEntries(
    props.beginDate,
    props.endDate,
    props.entries
  );

  const massAssignHelper = arrayOfSubcategories => {
    return lineDataPointsToMap.map(date => {
      return financialStatementHelpers.amountOfEntriesGivenSubcategories(
        arrayOfSubcategories,
        props.accounts,
        props.entries,
        0,
        date
      );
    });
  };

  const chartData = {};
  chartData.netWorth = massAssignHelper([1, 2, 3, 4, 5, 6]);
  chartData.assets = massAssignHelper([1, 2, 3, 4]);
  chartData.liabilities = massAssignHelper([5, 6]).map(num => -num);
  chartData.netIncome = massAssignHelper([8, 9]).map(num => -num);
  chartData.income = massAssignHelper([8]).map(num => -num);
  chartData.spending = massAssignHelper([9]);

  const lineGraphData = {
    labels: lineDataPointsToMap,
    datasets: props.showSubcategories.map(subcategory => {
      const grabKey =
        subcategory === "net worth"
          ? "netWorth"
          : subcategory === "net income" ? "netIncome" : subcategory;
      return {
        ...lineChartOptions[grabKey],
        label: subcategory.toUpperCase(),
        data: chartData[grabKey]
      };
    })
  };

  return props.showSubcategories.length !== 0 ? (
    <Segment>
      <Line data={lineGraphData} options={generalChartOptions.standardLine} />
    </Segment>
  ) : (
    <h3>Please select a subcategory</h3>
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

export default connect(mapStateToProps, null)(LineGraph);
