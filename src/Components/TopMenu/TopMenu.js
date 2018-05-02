import React from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
// import DropdownMenu from './DropdownMenu';
import {
  loggedInMenuOptions,
  loggedOutMenuOptions
} from "../../StaticOptions/menuOptions";

const TopMenu = props => {
  // console.log(props)
  const loggedIn = !!props.userInfo.email;

  // loggedIn ? loggedInMenuOptions[0] = props.userInfo.email : null

  const menuOptions = loggedIn ? loggedInMenuOptions : loggedOutMenuOptions;

  // console.log(menuOptions)

  const renderMenuItems = () => {
    return menuOptions.map((menuOption, index) => {
      return (
        <Menu.Item
          key={index}
          name={menuOption}
          active={props.activeMenuItem === menuOption}
          onClick={
            menuOption !== "Sign Out"
              ? () => props.changeActiveMenuItem(menuOption)
              : () => props.logUserOut()
          }
        />
      );
    });
  };

  return (
    <Menu pointing secondary fluid widths={menuOptions.length}>
      {!props.loading ? renderMenuItems() : null}
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    userInfo: state.userInfo,
    activeMenuItem: state.activeMenuItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logUserOut: () => {
      localStorage.removeItem("token");
      dispatch({ type: "LOG_USER_OUT" });
    },

    changeActiveMenuItem: activeMenuItem => {
      dispatch({ type: "CHANGE_ACTIVE_MENU_ITEM", activeMenuItem });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
