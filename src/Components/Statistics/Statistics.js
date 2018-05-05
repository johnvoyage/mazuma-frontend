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

  const [
    netWorthData,
    assetData,
    liabilityData,
    netIncomeData,
    incomeData,
    spendingData
  ] = [
    massAssignHelper([1, 2, 3, 4, 5, 6]),
    massAssignHelper([1, 2, 3, 4]),
    massAssignHelper([5, 6]),
    massAssignHelper([8, 9]),
    massAssignHelper([8]),
    massAssignHelper([9])
  ];

  const data = {
    labels: dataPointsToMap,
    datasets: [
      {
        ...chartAesthetics.standard,
        label: "Net Worth",
        data: netWorthData
      }
    ],
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
          <Line data={data} />
        ) : props.chartType === "bar" ? (
          <Bar data={data} />
        ) : (
          <Pie data={data} />
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
