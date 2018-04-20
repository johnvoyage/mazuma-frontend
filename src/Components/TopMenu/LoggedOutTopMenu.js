import React from 'react';
import { Menu } from 'semantic-ui-react';


const LoggedOutTopMenu = (props) => {

  return (
    <Menu pointing secondary fluid widths={4}>
      <Menu.Item name="You're" active={true} onClick={this.handleItemClick} />
      <Menu.Item name='logged' active={false} onClick={this.handleItemClick} />
      <Menu.Item name='out' active={false} onClick={this.handleItemClick} />
      <Menu.Item name='Log In' active={false} onClick={this.handleItemClick} />
    </Menu>
  )
}

export default LoggedOutTopMenu
