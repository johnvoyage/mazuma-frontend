import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import UserAccountPage from '../UserAccount/UserAccountPage'
import SignUpForm from '../SignUp/SignUpForm';
import SignInForm from '../SignIn/SignInForm';

import { loggedInMenuOptions, loggedOutMenuOptions } from '../TopMenu/MenuOptions';


const MainSegmentOne = (props) => {

  let activeItem

  switch (props.activeMenuItem) {
    case loggedInMenuOptions[0]:
      activeItem = <UserAccountPage />;
      break;
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
      activeItem = <SignInForm />;
      break;
    default:
      activeItem = "Defaaaaault in Main Seg 1"
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
