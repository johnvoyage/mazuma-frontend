import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'semantic-ui-react';
import DropdownMenu from './DropdownMenu';
import { loggedInMenuOptions, loggedOutMenuOptions } from './MenuOptions';



const TopMenu = (props) => {

  const loggedIn = !!props.userInfo.email

  loggedInMenuOptions[0] = props.userInfo.email

  const menuOptions = loggedIn ? loggedInMenuOptions : loggedOutMenuOptions

  return (
    <Menu pointing secondary fluid widths={ menuOptions.length + 1 }>
      <Menu.Item
        name={ menuOptions[0] }
        active={ props.activeMenuItem === menuOptions[0] }
        onClick={ () => props.changeActiveMenuItem(menuOptions[0]) }
      />
      <Menu.Item
        name={ menuOptions[1] }
        active={ props.activeMenuItem === menuOptions[1] }
        onClick={ () => props.changeActiveMenuItem(menuOptions[1]) }
      />
      <Menu.Item
        name={ menuOptions[2] }
        active={ props.activeMenuItem === menuOptions[2] }
        onClick={ () => props.changeActiveMenuItem(menuOptions[2]) }
      />
      <Menu.Item
        name={ menuOptions[3] }
        active={ props.activeMenuItem === menuOptions[3] }
        onClick={
          loggedIn ?
            () => props.logUserOut()
          :
            () => props.changeActiveMenuItem(menuOptions[3])
        }
      />
      <Dropdown item icon='sidebar' simple>
        <DropdownMenu />
      </Dropdown>
    </Menu>
  )

}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    activeMenuItem: state.activeMenuItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => {
      localStorage.removeItem('token')
      dispatch({ type: 'LOG_USER_OUT' })
    },

    changeActiveMenuItem: (activeMenuItem) => {
      dispatch({ type: 'CHANGE_ACTIVE_MENU_ITEM', activeMenuItem})
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
