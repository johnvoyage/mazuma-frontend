import React from "react";
import { Pie } from "react-chartjs-2";
// import GraphOptions from "./GraphOptions";
// import SubcategoryOptions from "./SubcategoryOptions";
// import TimingFilter from "./TimingFilter";
import { Segment } from "semantic-ui-react";
import chartHelpers from "../../HelperFunctions/chartHelpers";
// import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
import pieChartOptions from "../../StaticOptions/pieChartOptions";
import generalChartOptions from "../../StaticOptions/generalChartOptions";
import { connect } from "react-redux";

const PieGraph = props => {
  const pieDataPointsToMap = arrayOfSubcategorieIds => {
    return chartHelpers.arrayOfAccountsBelongingToSubcategoryIds(
      arrayOfSubcategorieIds,
      props.accounts
    );
  };

  // console.log(pieDataPointsToMap);
  //
  // const pieGraphLabels = pieDataPointsToMap.map(account => account.name);

  // const lineDataPointsToMap = chartHelpers.arrayOfDatesWithEntries(
  //   props.beginDate,
  //   props.endDate,
  //   props.entries
  // );
  //
  const labelsMAssignHelper = arrayOfSubcategories => {
    return pieDataPointsToMap(arrayOfSubcategories, props.accounts).map(
      account => account.name
    );
  };
  //
  const chartDataLabels = {};
  // chartData.line.netWorth = labelsMAssignHelper([1, 2, 3, 4, 5, 6]);
  chartDataLabels.assets = labelsMAssignHelper([1, 2, 3, 4]);
  chartDataLabels.liabilities = labelsMAssignHelper([5, 6]);
  // chartData.netIncome = labelsMAssignHelper([8, 9]).map(num => -num);
  chartDataLabels.income = labelsMAssignHelper([8]);
  chartDataLabels.spending = labelsMAssignHelper([9]);

  const pieGraphData = {
    labels: chartDataLabels.pie[props.showSubcategories[0]],
    datasets: [
      {
        ...pieChartOptions["assets"],
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
