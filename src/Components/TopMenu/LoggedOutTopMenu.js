import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import DropdownMenu from './DropdownMenu';



const LoggedOutTopMenu = (props) => {

  return (
    <Menu pointing secondary fluid widths={5}>
      <Menu.Item name="You're" active={true} onClick={this.handleItemClick} />
      <Menu.Item name='logged' active={false} onClick={this.handleItemClick} />
      <Menu.Item name='out' active={false} onClick={this.handleItemClick} />
      <Menu.Item name='Log In' active={false} onClick={this.handleItemClick} />
      <Dropdown item icon='sidebar' simple>
        <DropdownMenu />
      </Dropdown>
    </Menu>
  )
}

export default LoggedOutTopMenu
