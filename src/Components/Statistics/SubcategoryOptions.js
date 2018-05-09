import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

const SubcategoryOptions = props => {
  const handleClick = arrayOfSubcategories => {
    props.updateChartSubcategories(arrayOfSubcategories);
  };

  return props.chartType !== "pie" ? (
    <Button.Group attached="top">
      <Button
        onClick={event => handleClick(["net worth", "assets", "liabilities"])}
        positive={props.showSubcategories.indexOf("net worth") > -1}
      >
        Net Worth
      </Button>

      <Button.Or />
      <Button
        onClick={event => handleClick(["net income", "income", "spending"])}
        positive={props.showSubcategories.indexOf("net income") > -1}
      >
        Net Income
      </Button>
    </Button.Group>
  ) : (
    <Button.Group attached="top">
      <Button
        onClick={event => handleClick(["assets"])}
        positive={props.showSubcategories.indexOf("assets") > -1}
      >
        Assets
      </Button>
      <Button.Or />
      <Button
        onClick={event => handleClick(["liabilities"])}
        positive={props.showSubcategories.indexOf("liabilities") > -1}
      >
        Liabilities
      </Button>
      <Button.Or />
      <Button
        onClick={event => handleClick(["income"])}
        positive={props.showSubcategories.indexOf("income") > -1}
      >
        Earning
      </Button>
      <Button.Or />
      <Button
        onClick={event => handleClick(["spending"])}
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

// <Button.Group attached="top">
//   <Button
//     name="net worth"
//     onClick={handleClick}
//     positive={props.showSubcategories.indexOf("net worth") > -1}
//   >
//     Net Worth
//   </Button>
//   <Button.Or text="and" />
//   <Button
//     name="assets"
//     onClick={handleClick}
//     positive={props.showSubcategories.indexOf("assets") > -1}
//   >
//     Assets
//   </Button>
//   <Button.Or text="and" />
//   <Button
//     name="liabilities"
//     onClick={handleClick}
//     positive={props.showSubcategories.indexOf("liabilities") > -1}
//   >
//     Liabilities
//   </Button>
//   <Button.Or text="and" />
//   <Button
//     name="net income"
//     onClick={handleClick}
//     positive={props.showSubcategories.indexOf("net income") > -1}
//   >
//     Net Income
//   </Button>
//   <Button.Or text="and" />
//   <Button
//     name="income"
//     onClick={handleClick}
//     positive={props.showSubcategories.indexOf("income") > -1}
//   >
//     Income
//   </Button>
//   <Button.Or text="and" />
//   <Button
//     name="spending"
//     onClick={handleClick}
//     positive={props.showSubcategories.indexOf("spending") > -1}
//   >
//     Spending
//   </Button>
// </Button.Group>
