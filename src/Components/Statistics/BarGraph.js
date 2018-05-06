import React from "react";
import { Bar } from "react-chartjs-2";
import { Segment } from "semantic-ui-react";
import chartHelpers from "../../HelperFunctions/chartHelpers";
import dateHelpers from "../../HelperFunctions/dateHelpers";

import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
import barChartOptions from "../../StaticOptions/barChartOptions";
import generalChartOptions from "../../StaticOptions/generalChartOptions";
import { connect } from "react-redux";

const BarGraph = props => {
  const barDataPointsToMap = chartHelpers.arrayOfDatesWithEntries(
    props.beginDate,
    props.endDate,
    props.entries
  );

  const massAssignHelper = arrayOfSubcategories => {
    return barDataPointsToMap.map(date => {
      // console.log(date);
      // console.log(dateHelpers.yesterday(date));
      return financialStatementHelpers.amountOfEntriesGivenSubcategories(
        arrayOfSubcategories,
        props.accounts,
        props.entries,
        dateHelpers.yesterday(date),
        // 0,
        // date,
        date
      );
    });
  };
  console.log(massAssignHelper([1, 2, 3, 4, 5, 6]));

  const chartData = {};
  chartData.netWorth = massAssignHelper([1, 2, 3, 4, 5, 6]);
  chartData.assets = massAssignHelper([1, 2, 3, 4]);
  chartData.liabilities = massAssignHelper([5, 6]).map(num => -num);
  chartData.netIncome = massAssignHelper([8, 9]).map(num => -num);
  chartData.income = massAssignHelper([8]).map(num => -num);
  chartData.spending = massAssignHelper([9]);

  const barGraphData = {
    labels: barDataPointsToMap,
    datasets: props.showSubcategories.map(subcategory => {
      const grabKey =
        subcategory === "net worth"
          ? "netWorth"
          : subcategory === "net income" ? "netIncome" : subcategory;
      return {
        ...barChartOptions[grabKey],
        label: subcategory.toUpperCase(),
        data: chartData[grabKey]
      };
    }),
    options: generalChartOptions.standardLine
  };

  return props.showSubcategories.length !== 0 ? (
    <Segment>
      <Bar data={barGraphData} options={generalChartOptions.standardLine} />
    </Segment>
  ) : (
    <h3>Please select a subcategory</h3>
  );
};

// <Segment>
//   {props.chartType === "bar" ? (
//     <Line data={barGraphData} />
//   ) : props.chartType === "bar" ? (
//     <Bar data={barGraphData} />
//   ) : (
//     <Pie data={barGraphData} />
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

export default connect(mapStateToProps, null)(BarGraph);
