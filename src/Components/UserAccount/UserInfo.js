import React from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

const UserInfo = props => {
  return (
    <Segment>
      <h3>Email: {props.userEmail}</h3>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    userEmail: state.userInfo.email
  };
};

export default connect(mapStateToProps, null)(UserInfo);
