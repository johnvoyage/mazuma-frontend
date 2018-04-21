import React from 'react';
import { connect } from 'react-redux';
import LoggedInTopMenu from './LoggedInTopMenu';
import LoggedOutTopMenu from './LoggedOutTopMenu';


const TopMenu = (props) => {

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

export default connect(
  mapStateToProps
)(TopMenu);
