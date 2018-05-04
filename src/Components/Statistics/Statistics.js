import React from "react";
import { Line } from "react-chartjs-2";
import GraphOptions from "./GraphOptions";
import TimingFilter from "./TimingFilter";
import { Segment } from "semantic-ui-react";
import chartHelpers from "../../HelperFunctions/chartHelpers";
// import dateHelpers from "../../HelperFunctions/dateHelpers";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";

import chartAesthetics from "../../StaticOptions/chartAesthetics";
import { connect } from "react-redux";

const Statistics = props => {
  const dataPointsToMap = chartHelpers.arrayOfDatesWithEntries(
    props.beginDate,
    props.endDate,
    props.entries
  );

  const netWorthData = dataPointsToMap.map(date => {
    return financialStatementHelpers.amountOfEntriesGivenSubcategories(
      [1, 2, 3, 4, 5, 6],
      props.accounts,
      props.entries,
      // props.beginDate,
      0,
      date
    );
  });

  // const assetsData = dataPointsToMap.map(date => {
  //   return financialStatementHelpers.amountOfEntriesGivenSubcategories(
  //     [1, 2, 3, 4],
  //     props.accounts,
  //     props.entries,
  //     // props.beginDate,
  //     0,
  //     date
  //   );
  // });
  //
  // const netIncomeData = dataPointsToMap.map(date => {
  //   return financialStatementHelpers.amountOfEntriesGivenSubcategories(
  //     [8, 9],
  //     props.accounts,
  //     props.entries,
  //     // props.beginDate,
  //     props.beginDate,
  //     date
  //   );
  // });
  //
  // const incomeData = dataPointsToMap.map(date => {
  //   return financialStatementHelpers.amountOfEntriesGivenSubcategories(
  //     [8],
  //     props.accounts,
  //     props.entries,
  //     // props.beginDate,
  //     props.beginDate,
  //     date
  //   );
  // });
  //
  // const spendingData = dataPointsToMap.map(date => {
  //   return financialStatementHelpers.amountOfEntriesGivenSubcategories(
  //     [9],
  //     props.accounts,
  //     props.entries,
  //     // props.beginDate,
  //     props.beginDate,
  //     date
  //   );
  // });
  //
  // const liabilitiesData = dataPointsToMap.map(date => {
  //   return -financialStatementHelpers.amountOfEntriesGivenSubcategories(
  //     [5, 6],
  //     props.accounts,
  //     props.entries,
  //     // props.beginDate,
  //     0,
  //     date
  //   );
  // });

  const data = {
    labels: dataPointsToMap,
    datasets: [
      {
        ...chartAesthetics.standard,
        label: "Net Worth",
        data: netWorthData
      }
    ]
  };

  // chartAesthetics.standard.datasets[0].data = netWorthData;
  // chartAesthetics.standard.datasets[1].data = assetsData;
  // chartAesthetics.standard.datasets[2].data = liabilitiesData;
  // chartAesthetics.standard.datasets[3].data = netIncomeData;
  // chartAesthetics.standard.datasets[4].data = incomeData;
  // chartAesthetics.standard.datasets[5].data = spendingData;

  // chartAesthetics.standard.labels = dataPointsToMap;

  return (
    <div>
      <GraphOptions />
      <br />
      <TimingFilter />
      <br />
      <Segment>
        <Line
          data={
            /*chartAesthetics.standard*/
            data
          }

          // width={100}
          // height={50}
          // options={{
          //   maintainAspectRatio: false
          // }}
        />
      </Segment>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    entries: state.userInfo.entries,
    accounts: state.userInfo.accounts,
    beginDate: state.chartContainer.beginDate,
    endDate: state.chartContainer.endDate
  };
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(Statistics);
