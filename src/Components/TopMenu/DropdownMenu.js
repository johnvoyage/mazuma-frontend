import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';



const DropdownMenu = (props) => {

  return (
    <Dropdown.Menu>
      <Dropdown.Item>
        <Icon name='dropdown' />
        <span className='text'>New</span>

        <Dropdown.Menu>
          <Dropdown.Item>Document</Dropdown.Item>
          <Dropdown.Item>Image</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Item>
      <Dropdown.Item>Open</Dropdown.Item>
      <Dropdown.Item>Save...</Dropdown.Item>
      <Dropdown.Item>Edit Permissions</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Header>Export</Dropdown.Header>
      <Dropdown.Item>Share</Dropdown.Item>
    </Dropdown.Menu>
  )
}

export default DropdownMenu
