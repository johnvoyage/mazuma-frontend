import React from "react";
import { Line } from "react-chartjs-2";
import GraphOptions from "./GraphOptions";
import TimingFilter from "./TimingFilter";
import { Segment } from "semantic-ui-react";

import data from "./Data";
import { connect } from "react-redux";

const Statistics = props => {
  // data: [65, 59, 80, 81, 56, 55, 40]
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

  data.datasets[0].data = [65, 59, 80, 81, 56, 55, 40];
  data.labels = [
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
          data={data}
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
    accounts: state.userInfo.accounts
  };
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(Statistics);
