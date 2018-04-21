import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SignUpForm from '../SignUp/SignUpForm';
import { loggedInMenuOptions, loggedOutMenuOptions } from '../TopMenu/MenuOptions';


const MainSegmentOne = (props) => {

  let activeItem

  switch (props.activeMenuItem) {
    case loggedInMenuOptions[0]:
      activeItem = "LI 0";
    case loggedInMenuOptions[1]:
      activeItem = "LI 1";
      break;
    case loggedInMenuOptions[2]:
      activeItem = "LI 2";
      break;
    case loggedOutMenuOptions[0]:
      activeItem = "LO 0";
      break;
    case loggedOutMenuOptions[1]:
      activeItem = "LO 1";
      break;
    case loggedOutMenuOptions[2]:
      activeItem = <SignUpForm />;
      break;
    case loggedOutMenuOptions[3]:
      activeItem = "LO 3"
      break;
    default:
      activeItem = "SHOULDNT GET HERE"
  }

  return(
    <Segment>
      {activeItem}
    </Segment>
  )
}

const mapStateToProps = (state) => {
  return {
    // loggedIn: state.loggedIn,
    activeMenuItem: state.activeMenuItem,
  };
};

export default connect(
  mapStateToProps
)(MainSegmentOne)
