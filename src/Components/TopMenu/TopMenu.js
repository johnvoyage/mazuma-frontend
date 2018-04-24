import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
// import DropdownMenu from './DropdownMenu';
import { loggedInMenuOptions, loggedOutMenuOptions } from './MenuOptions';



const TopMenu = (props) => {

  const loggedIn = !!props.userInfo.email

  loggedIn ? loggedInMenuOptions[0] = props.userInfo.email : null

  const menuOptions = loggedIn ? loggedInMenuOptions : loggedOutMenuOptions

  console.log(menuOptions)

  const renderMenuItems = () => {
    return menuOptions.map((menuOption, index) => {
      return (
        <Menu.Item
          key={ index }
          name={ menuOption }
          active={ props.activeMenuItem === menuOption }
          onClick={
            menuOption !== 'Sign Out' ? (
              () => props.changeActiveMenuItem(menuOption)
            ) :
              (() => props.logUserOut())
          }
        />
      )
    })
  }

  return (
    <Menu pointing secondary fluid widths={ menuOptions.length }>
      {renderMenuItems()}

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

/*<Menu.Item
  name={ menuOptions[0] }
  active={ props.activeMenuItem === menuOptions[0] }
  onClick={ () => props.changeActiveMenuItem(menuOptions[0]) }
  disabled={ menuOptions[0] === 'Mazuma' }
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
</Dropdown>*/
