import React from "react";
import GraphOptions from "./GraphOptions";
import SubcategoryOptions from "./SubcategoryOptions";
import TimingFilter from "./TimingFilter";
import { Checkbox } from "semantic-ui-react";

// import chartHelpers from "../../HelperFunctions/chartHelpers";
// import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
// import chartAesthetics from "../../StaticOptions/chartAesthetics";
// import generalChartOptions from "../../StaticOptions/generalChartOptions";
import { connect } from "react-redux";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";

const Statistics = props => {
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
  //
  // const lineGraphData = {
  //   labels: lineDataPointsToMap,
  //   datasets: props.showSubcategories.map(subcategory => {
  //     const grabKey =
  //       subcategory === "net worth"
  //         ? "netWorth"
  //         : subcategory === "net income" ? "netIncome" : subcategory;
  //     return {
  //       ...chartAesthetics.line[grabKey],
  //       label: subcategory.toUpperCase(),
  //       data: chartData.line[grabKey]
  //     };
  //   }),
  //   options: generalChartOptions.standardLine
  // };
  const handleChange = event => {
    console.log(event.target.name);
    props.toggleChartCheckbox(event.target.parentElement.children[0].name);
  };

  // const handleChange = event => {
  //   props.toggleInitialEntry();
  // };

  return (
    <div>
      <GraphOptions />
      <SubcategoryOptions />
      <br />{" "}
      <Checkbox
        slider
        name="goalComparison"
        label="Show goals"
        checked={props.goalComparison}
        onChange={handleChange}
      />
      {props.chartType === "bar" ? (
        <Checkbox
          name="hideInitial"
          slider
          label="Hide initial entry"
          checked={props.hideInitial}
          onChange={handleChange}
        />
      ) : null}
      <TimingFilter />
      <br />
      {props.chartType === "line" ? (
        <LineGraph />
      ) : props.chartType === "bar" ? (
        <BarGraph />
      ) : (
        <PieGraph />
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleChartCheckbox: checkbox => {
      dispatch({ type: "TOGGLE_CHART_CHECKBOX", checkbox });
    }
  };
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
    hideInitial: state.chartContainer.hideInitial
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
