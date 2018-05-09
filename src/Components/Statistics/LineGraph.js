import React from "react";
import { Line } from "react-chartjs-2";
import { Segment, Header } from "semantic-ui-react";
import chartHelpers from "../../HelperFunctions/chartHelpers";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
import lineChartOptions from "../../StaticOptions/lineChartOptions";
import generalChartOptions from "../../StaticOptions/generalChartOptions";
import { connect } from "react-redux";

const LineGraph = props => {
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
  };

  const goalDataLinesToShow = Object.keys(props.goalContainer)
    .filter(goal => props.goalComparison && props.goalContainer[goal].show)
    .filter(goal => {
      if (props.showSubcategories.indexOf("net worth") > -1) {
        return ["netWorth", "assets", "liabilities"].indexOf(goal) > -1;
      } else {
        return ["netIncome", "income", "spending"].indexOf(goal) > -1;
      }
    });

  const goalData = goal => {
    let dataPoint = chartData[goal][0];
    return lineDataPointsToMap.map((datapoint, index) => {
      if (index === 0) {
        return dataPoint;
      } else {
        if (["netWorth", "assets", "liabilities"].indexOf(goal) > -1) {
          dataPoint *=
            props.goalContainer[goal].amount /
              100 /
              props.goalContainer[goal].time +
            1;
          return dataPoint;
        } else {
          dataPoint +=
            props.goalContainer[goal].amount / props.goalContainer[goal].time;
          return dataPoint;
        }
      }
    });
  };

  const goalDataSet = goal => {
    return {
      ...lineChartOptions[`${goal}Goals`],
      label: "GOAL",
      data: goalData(goal)
    };
  };

  const goalDataSets = () => goalDataLinesToShow.map(goal => goalDataSet(goal));

  lineGraphData.datasets = lineGraphData.datasets.concat(goalDataSets());

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
    goalComparison: state.chartContainer.goalComparison,
    goalContainer: state.goalContainer
  };
};

export default connect(mapStateToProps, null)(LineGraph);
