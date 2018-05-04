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
  // data: [65, 59, 80, 81, 56, 55, 40]
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  const dataPointsToMap = chartHelpers.arrayOfDatesWithEntries(
    props.beginDate,
    props.endDate,
    props.entries
  );

  // console.log(dataPointsToMap);

  const netWorthData = dataPointsToMap.map(date => {
    // console.log(date);
    // console.log(
    //   financialStatementHelpers.amountOfEntriesGivenSubcategories(
    //     [1, 2, 3, 4, 5, 6],
    //     props.accounts,
    //     props.entries,
    //     props.beginDate,
    //     date
    //   )
    // );
    return financialStatementHelpers.amountOfEntriesGivenSubcategories(
      [1, 2, 3, 4, 5, 6],
      props.accounts,
      props.entries,
      // props.beginDate,
      0,
      date
    );
  });

  // console.log(dataPointsToMap);
  // const netIncomeData
  // const incomeData
  // const spendingData
  // const assetData
  // const liabilityData

  chartAesthetics.standard.datasets[0].data = netWorthData;
  chartAesthetics.standard.labels = dataPointsToMap;

  return (
    <div>
      <GraphOptions />
      <br />
      <TimingFilter />
      <br />
      <Segment>
        <Line
          data={chartAesthetics.standard}
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
