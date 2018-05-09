import React from "react";
import { Line } from "react-chartjs-2";
import { Segment, Header } from "semantic-ui-react";
import chartHelpers from "../../HelperFunctions/chartHelpers";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
import lineChartOptions from "../../StaticOptions/lineChartOptions";
import generalChartOptions from "../../StaticOptions/generalChartOptions";
// import { subcategoryNameToArrayOfIds } from "../../StaticOptions/subcategories";
import { connect } from "react-redux";
// import { lineGoals } from "../../HelperFunctions/lineGoals";

const LineGraph = props => {
  // const lineDataPointsToMap = chartHelpers.arrayOfDatesWithEntries(
  //   props.beginDate,
  //   props.endDate,
  //   props.entries
  // );

  const lineDataPointsToMap = chartHelpers
    .arrayOfDates(props.beginDate, props.endDate)
    .slice(1);

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
    // .concat(
    //   props.goalComparison
    //     ? props.showSubcategories.map(subcategory => {
    //         const grabKey =
    //           subcategory === "net worth"
    //             ? "netWorth"
    //             : subcategory === "net income" ? "netIncome" : subcategory;
    //         return {
    //           ...lineChartOptions[`${grabKey}Goals`],
    //           label: "GOALS",
    //           data: lineGoals(
    //             lineDataPointsToMap.length,
    //             financialStatementHelpers.amountOfEntriesGivenSubcategories(
    //               subcategoryNameToArrayOfIds(subcategory),
    //               props.accounts,
    //               props.entries,
    //               0,
    //               lineDataPointsToMap[0]
    //             ),
    //             0.00025
    //           )
    //         };
    //       })
    //     : []
    // )
  };

  return props.showSubcategories.length !== 0 ? (
    <Segment>
      <Line data={lineGraphData} options={generalChartOptions.standardLine} />
    </Segment>
  ) : (
    <Header
      as="h1"
      textAlign="center"
      content="Please select a subcategory"
      id="red-text"
    />
  );
};

const mapStateToProps = state => {
  return {
    entries: state.userInfo.entries,
    accounts: state.userInfo.accounts,
    beginDate: state.chartContainer.beginDate,
    endDate: state.chartContainer.endDate,
    showSubcategories: state.chartContainer.showSubcategories,
    chartType: state.chartContainer.chartType,
    goalComparison: state.chartContainer.goalComparison
  };
};

export default connect(mapStateToProps, null)(LineGraph);
