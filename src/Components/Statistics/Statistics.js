import React from "react";
import { Line } from "react-chartjs-2";
import GraphOptions from "./GraphOptions";
import TimingFilter from "./TimingFilter";
import { Segment } from "semantic-ui-react";
import chartData from "../../HelperFunctions/chartData";

import chartAesthetics from "../../StaticOptions/chartAesthetics";
import { connect } from "react-redux";

const Statistics = props => {
  // data: [65, 59, 80, 81, 56, 55, 40]
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

  const netWorthData = chartData.netWorth(
    props.beginDate,
    props.endDate,
    props.entries,
    props.accounts
  );

  chartAesthetics.standard.datasets[0].data = netWorthData;
  chartAesthetics.standard.labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];

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
