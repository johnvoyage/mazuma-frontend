import React from "react";
import { Pie } from "react-chartjs-2";
import { Segment, Header } from "semantic-ui-react";
import chartHelpers from "../../HelperFunctions/chartHelpers";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
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

  const filterEntriesWithinDateRange = () => {
    return financialStatementHelpers.filterEntriesWithinDateRange(
      props.entries,
      props.beginDate,
      props.endDate
    );
  };

  const amountOfEntriesGivenAccount = accountId => {
    return Math.abs(
      financialStatementHelpers.reduceNestedArrayOfTransactionsToAmount(
        accountId,
        financialStatementHelpers.mapTransactionsOfEntries(
          filterEntriesWithinDateRange()
        )
      )
    );
  };

  // const labelsMassAssignHelper = arrayOfSubcategories => {
  //   return pieDataPointsToMap(arrayOfSubcategories, props.accounts).map(
  //     account => account.name
  //   );
  // };

  const pieDataKeyValueArray = arrayOfSubcategories => {
    return pieDataPointsToMap(arrayOfSubcategories).map(account => {
      return { [account.name]: amountOfEntriesGivenAccount(account.id) };
    });
  };

  const pieDataSorted = arrayOfSubcategories => {
    return pieDataKeyValueArray(arrayOfSubcategories).sort((a, b) => {
      return Object.values(b) - Object.values(a);
    });
  };

  const topNineSlices = arrayOfSubcategories => {
    return [
      pieDataSorted(arrayOfSubcategories).slice(0, 9),
      pieDataSorted(arrayOfSubcategories).slice(9)
    ];
  };

  const tenthSlice = arrayOfSubcategories => {
    return {
      "ALL OTHERS": topNineSlices(arrayOfSubcategories)[1].reduce(
        (aggr, account) => {
          return aggr + parseFloat(Object.values(account));
        },
        0
      )
    };
  };

  const finalPieChartDataObject = arrayOfSubcategories => {
    let returnedObject = {};
    topNineSlices(arrayOfSubcategories)[0].forEach(account => {
      returnedObject = {
        ...returnedObject,
        [Object.keys(account)[0]]: Object.values(account)[0]
      };
    });
    returnedObject = { ...returnedObject, ...tenthSlice(arrayOfSubcategories) };
    return returnedObject;
  };

  console.log(topNineSlices([5, 6])[0]);
  console.log(tenthSlice([5, 6]));
  console.log(finalPieChartDataObject([5, 6]));

  const chartDataLabels = {};
  chartDataLabels.assets = Object.keys(
    finalPieChartDataObject([1, 2, 3, 4])
  ).map((acct, ind) => `${ind + 1}.) ${acct}`);
  chartDataLabels.liabilities = Object.keys(
    finalPieChartDataObject([5, 6])
  ).map((acct, ind) => `${ind + 1}.) ${acct}`);
  chartDataLabels.income = Object.keys(finalPieChartDataObject([8])).map(
    (acct, ind) => `${ind + 1}.) ${acct}`
  );
  chartDataLabels.spending = Object.keys(finalPieChartDataObject([9])).map(
    (acct, ind) => `${ind + 1}.) ${acct}`
  );

  const chartData = {};
  chartData.assets = Object.values(finalPieChartDataObject([1, 2, 3, 4]));
  chartData.liabilities = Object.values(finalPieChartDataObject([5, 6])).map(
    num => -num
  );
  // .reverse();
  chartData.income = Object.values(finalPieChartDataObject([8])).map(
    num => -num
  );
  // .reverse();
  chartData.spending = Object.values(finalPieChartDataObject([9]));

  const pieGraphData =
    props.showSubcategories.length !== 0
      ? {
          labels: chartDataLabels[props.showSubcategories[0]],
          datasets: [
            {
              ...pieChartOptions(
                chartDataLabels[props.showSubcategories[0]].length,
                props.showSubcategories[0]
              ),
              data: chartData[props.showSubcategories[0]]
            }
          ]
        }
      : {};

  return props.showSubcategories.length !== 0 ? (
    <Segment>
      <Pie data={pieGraphData} options={generalChartOptions.standardPie} />
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
    chartType: state.chartContainer.chartType
  };
};

export default connect(mapStateToProps, null)(PieGraph);
