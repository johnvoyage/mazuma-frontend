import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import UserAccountPage from '../UserAccount/UserAccountPage'
import SignUpForm from '../SignUp/SignUpForm';
import SignInForm from '../SignIn/SignInForm';
import Transactions from '../Transactions/Transactions';
import MazumaHomePage from '../LandingPage/MazumaHomePage';
import NetWorth from '../NetWorth/NetWorth';
import Statistics from '../Statistics/Statistics';

import FAQ from '../FAQ/FAQ';

import { loggedInMenuOptions, loggedOutMenuOptions } from '../TopMenu/MenuOptions';

const MainSegmentOne = (props) => {
  let activeItem

  switch (props.activeMenuItem) {
    case loggedInMenuOptions[0]:
      activeItem = <UserAccountPage />;
      break;
    case loggedInMenuOptions[1]:
      activeItem = <Transactions />;
      break;
    case loggedInMenuOptions[2]:
      activeItem = "Spending";
      break;
    case loggedInMenuOptions[3]:
      activeItem = <NetWorth />;
      break;
    case loggedInMenuOptions[4]:
      activeItem = <Statistics />;
      break;
    case loggedOutMenuOptions[0]:
      activeItem = <MazumaHomePage />;
      break;
    case loggedOutMenuOptions[1]:
      activeItem = <FAQ />;
      break;
    case loggedOutMenuOptions[2]:
      activeItem = "Forum";
      break;
    case loggedOutMenuOptions[3]:
      activeItem = <SignUpForm />;
      break;
    case loggedOutMenuOptions[4]:
      activeItem = <SignInForm />;
      break;
    // case null:
    //   activeItem = <MazumaHomePage />
    //   break;
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
  mapStateToProps,
  null
)(MainSegmentOne)
