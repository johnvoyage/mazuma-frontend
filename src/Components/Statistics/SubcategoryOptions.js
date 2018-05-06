import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

const SubcategoryOptions = props => {
  const handleClick = event => {
    const subcategory = event.target.name;
    console.log(event.target.name);

    if (props.showSubcategories.indexOf(subcategory) > -1) {
      const newSubcategories = [...props.showSubcategories];
      newSubcategories.splice(newSubcategories.indexOf(subcategory), 1);
      props.updateChartSubcategories(newSubcategories);
    } else {
      const newSubcategories = [...props.showSubcategories];
      newSubcategories.push(subcategory);
      props.updateChartSubcategories(newSubcategories);
    }
  };
  const handlePieClick = event => {
    const subcategory = event.target.name;
    props.updateChartSubcategories([subcategory]);
    console.log(event.target.name);
  };
  return props.chartType !== "pie" ? (
    <Button.Group attached="top">
      <Button
        name="net worth"
        onClick={handleClick}
        positive={props.showSubcategories.indexOf("net worth") > -1}
      >
        Net Worth
      </Button>
      <Button.Or text="and" />
      <Button
        name="assets"
        onClick={handleClick}
        positive={props.showSubcategories.indexOf("assets") > -1}
      >
        Assets
      </Button>
      <Button.Or text="and" />
      <Button
        name="liabilities"
        onClick={handleClick}
        positive={props.showSubcategories.indexOf("liabilities") > -1}
      >
        Liabilities
      </Button>
      <Button.Or text="and" />
      <Button
        name="net income"
        onClick={handleClick}
        positive={props.showSubcategories.indexOf("net income") > -1}
      >
        Net Income
      </Button>
      <Button.Or text="and" />
      <Button
        name="income"
        onClick={handleClick}
        positive={props.showSubcategories.indexOf("income") > -1}
      >
        Income
      </Button>
      <Button.Or text="and" />
      <Button
        name="spending"
        onClick={handleClick}
        positive={props.showSubcategories.indexOf("spending") > -1}
      >
        Spending
      </Button>
    </Button.Group>
  ) : (
    <Button.Group attached="top">
      <Button
        name="assets"
        onClick={handlePieClick}
        positive={props.showSubcategories.indexOf("assets") > -1}
      >
        Assets
      </Button>
      <Button.Or />
      <Button
        name="liabilities"
        onClick={handlePieClick}
        positive={props.showSubcategories.indexOf("liabilities") > -1}
      >
        Liabilities
      </Button>
      <Button.Or />
      <Button
        name="income"
        onClick={handlePieClick}
        positive={props.showSubcategories.indexOf("income") > -1}
      >
        Earning
      </Button>
      <Button.Or />
      <Button
        name="spending"
        onClick={handlePieClick}
        positive={props.showSubcategories.indexOf("spending") > -1}
      >
        Spending
      </Button>
    </Button.Group>
  );
};

const mapStateToProps = state => {
  return {
    chartType: state.chartContainer.chartType,
    showSubcategories: state.chartContainer.showSubcategories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // updateChartType: chartType => {
    //   dispatch({ type: "UPDATE_CHART_TYPE", chartType });
    // },

    updateChartSubcategories: arrayOfSubcategories => {
      dispatch({ type: "UPDATE_CHART_SUBCATEGORIES", arrayOfSubcategories });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryOptions);
