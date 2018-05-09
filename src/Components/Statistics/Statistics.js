import React from "react";
import GraphOptions from "./GraphOptions";
import SubcategoryOptions from "./SubcategoryOptions";
import TimingFilter from "./TimingFilter";
import { Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";

const Statistics = props => {
  const handleChange = event => {
    props.toggleChartCheckbox(event.target.parentElement.children[0].name);
  };

  return (
    <div>
      <GraphOptions />
      <SubcategoryOptions />
      <br />{" "}
      {props.chartType === "line" ? (
        <Checkbox
          name="goalComparison"
          slider
          label="Show goals"
          checked={props.goalComparison}
          onChange={handleChange}
        />
      ) : null}
      {props.chartType === "bar" &&
      props.showSubcategories.indexOf("net worth") > -1 ? (
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
