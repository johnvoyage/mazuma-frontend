import React, { Component } from 'react';
import TopMenu from './Components/TopMenu/TopMenu';
import MainSegmentOne from './Components/MainSegment/MainSegmentOne';
import MainSegmentTwo from './Components/MainSegment/MainSegmentTwo';
import api from './Components/API/api';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token')
    // console.log(token)
    if (token) {
      api.auth
        .getCurrentUser()
        .then(json => {
          // console.log(json)
          if (json.error) {
            console.log("ERROR")
          } else {
            this.props.logUserIn(json)
          }
        })

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

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
    // activeMenuItem: state.activeMenuItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    // changeLogInStatus: () => {
    //   dispatch({ type: 'CHANGE_LOG_IN_STATUS'})
    // },

    logUserIn: (userInfo) => {
      // console.log(userInfo)
      // localStorage.setItem('token', userInfo.id)
      dispatch({ type: 'LOG_USER_IN', userInfo})
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;
