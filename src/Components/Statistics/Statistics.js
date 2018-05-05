import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import GraphOptions from "./GraphOptions";
import SubcategoryOptions from "./SubcategoryOptions";
import TimingFilter from "./TimingFilter";
import { Segment } from "semantic-ui-react";
import chartHelpers from "../../HelperFunctions/chartHelpers";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
import chartAesthetics from "../../StaticOptions/chartAesthetics";
import generalChartOptions from "../../StaticOptions/generalChartOptions";
import { connect } from "react-redux";

const Statistics = props => {
  const dataPointsToMap = chartHelpers.arrayOfDatesWithEntries(
    props.beginDate,
    props.endDate,
    props.entries
  );

  const massAssignHelper = arrayOfSubcategories => {
    return dataPointsToMap.map(date => {
      return financialStatementHelpers.amountOfEntriesGivenSubcategories(
        arrayOfSubcategories,
        props.accounts,
        props.entries,
        0,
        date
      );
    });
  };

  const lineData = {};
  lineData.netWorth = massAssignHelper([1, 2, 3, 4, 5, 6]);
  lineData.assets = massAssignHelper([1, 2, 3, 4]);
  lineData.liabilities = massAssignHelper([5, 6]).map(num => -num);
  lineData.netIncome = massAssignHelper([8, 9]).map(num => -num);
  lineData.income = massAssignHelper([8]).map(num => -num);
  lineData.spending = massAssignHelper([9]);

  const lineGraphData = {
    labels: dataPointsToMap,
    datasets: props.showSubcategories.map(subcategory => {
      const grabKey =
        subcategory === "net worth"
          ? "netWorth"
          : subcategory === "net income" ? "netIncome" : subcategory;
      return {
        ...chartAesthetics.line[grabKey],
        label: subcategory.toUpperCase(),
        data: lineData[grabKey]
      };
    }),
    options: generalChartOptions.standardLine
  };

  return (
    <div>
      <GraphOptions />
      <SubcategoryOptions />
      <br />
      <TimingFilter />
      <br />
      <Segment>
        {props.chartType === "line" ? (
          <Line data={lineGraphData} />
        ) : props.chartType === "bar" ? (
          <Bar data={lineGraphData} />
        ) : (
          <Pie data={lineGraphData} />
        )}
      </Segment>
    </div>
  );
};

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

export default connect(mapStateToProps, null)(Statistics);
