import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';


const TopMenu = (props) => {

  console.log(props)

  return (
    <div>
      <Menu pointing secondary fluid widths={3}>
        <Menu.Item name='home' active={true} onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={false} onClick={this.handleItemClick} />
        <Menu.Item name='friends' active={false} onClick={this.handleItemClick} />
      </Menu>

      <Segment>
        Inside Segment 1
      </Segment>

      <Segment>
        Inside Segment 2
      </Segment>

    </div>
  )
}

export default TopMenu
