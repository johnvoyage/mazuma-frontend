import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

const GraphOptions = props => {
  const handleChartTypeClick = event => {
    const chartType = event.target.name;
    props.updateChartType(chartType);
  };

  return (
    <div>
      <Button.Group attached="top">
        <Button
          onClick={handleChartTypeClick}
          name="line"
          positive={props.chartType === "line"}
        >
          Line
        </Button>
        <Button.Or />
        <Button
          onClick={handleChartTypeClick}
          name="pie"
          positive={props.chartType === "pie"}
        >
          Pie
        </Button>
        <Button.Or />
        <Button
          onClick={handleChartTypeClick}
          name="bar"
          positive={props.chartType === "bar"}
        >
          Bar
        </Button>
      </Button.Group>
      {props.chartType !== "pie" ? (
        <Button.Group attached="top">
          <Button>Net Worth</Button>
          <Button.Or text="and" />
          <Button>Assets</Button>
          <Button.Or text="and" />
          <Button>Liabilities</Button>
          <Button.Or text="and" />
          <Button>Net Income</Button>
          <Button.Or text="and" />
          <Button>Income</Button>
          <Button.Or text="and" />
          <Button>Spending</Button>
        </Button.Group>
      ) : (
        <Button.Group attached="top">
          <Button>Assets</Button>
          <Button.Or />
          <Button>Liabilities</Button>
          <Button.Or />
          <Button>Earning</Button>
          <Button.Or />
          <Button>Spending</Button>
        </Button.Group>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    chartType: state.chartContainer.chartType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateChartType: chartType => {
      dispatch({ type: "UPDATE_CHART_TYPE", chartType });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphOptions);
