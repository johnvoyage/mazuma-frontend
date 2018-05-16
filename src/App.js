import React, { Component } from "react";
import TopMenu from "./Components/TopMenu/TopMenu";
import MainSegmentOne from "./Components/MainSegment/MainSegmentOne";
import { fetchUserData } from "./Actions/fetchUserData";

import api from "./Components/API/api";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then(json => {
        if (json.error) {
          console.log("ERROR");
        } else {
          this.props.fetchUserData(json.id);
          this.props.signUserIn(json);
        }
      });
    }
  }

  render() {
    return (
      <div>
        <TopMenu />
        <MainSegmentOne />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: userId => {
      dispatch(fetchUserData(userId));
    },
    signUserIn: userInfo => {
      dispatch({ type: "SIGN_USER_IN", userInfo });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
