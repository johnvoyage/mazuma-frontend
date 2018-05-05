import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

const GraphOptions = props => {
  const handleClick = event => {
    const chartType = event.target.name;
    props.updateChartType(chartType);
  };

  return (
    <Button.Group attached="top">
      <Button
        onClick={handleClick}
        name="line"
        positive={props.chartType === "line"}
      >
        Line
      </Button>
      <Button.Or />
      <Button
        onClick={handleClick}
        name="pie"
        positive={props.chartType === "pie"}
      >
        Pie
      </Button>
      <Button.Or />
      <Button
        onClick={handleClick}
        name="bar"
        positive={props.chartType === "bar"}
      >
        Bar
      </Button>
    </Button.Group>
  );
};

const mapStateToProps = state => {
  return {
    chartType: state.chartContainer.chartType
    // showSubcategories: state.chartContainer.showSubcategories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateChartType: chartType => {
      dispatch({ type: "UPDATE_CHART_TYPE", chartType });
    }

    // updateChartSubcategories: arrayOfSubcategories => {
    //   dispatch({ type: "UPDATE_CHART_SUBCATEGORIES", arrayOfSubcategories });
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphOptions);
