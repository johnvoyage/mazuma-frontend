import React from 'react';
import { connect } from 'react-redux';
import LoggedInTopMenu from './LoggedInTopMenu';
import LoggedOutTopMenu from './LoggedOutTopMenu';


const TopMenu = (props) => {

  console.log(props)

  return (
    <div>
      {
        props.loggedIn ?
        <LoggedInTopMenu /> :
        <LoggedOutTopMenu />
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    // increment: () => {
    //   dispatch({ type: 'SOMETHING', something: 2 })
    // },
    // decrement: () => {
    //   dispatch({ type: 'SOMETHING_ELSE', something: 3 })
    // }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
