import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';


const LoggedInTopMenu = (props) => {

  console.log(props)

  return (
    <Menu pointing secondary fluid widths={4}>
      <Menu.Item name="You're" active={true} onClick={this.handleItemClick} />
      <Menu.Item name='logged' active={false} onClick={this.handleItemClick} />
      <Menu.Item name='in' active={false} onClick={this.handleItemClick} />
      <Menu.Item name='Log Out' active={false} onClick={this.handleItemClick} />
    </Menu>
  )
}


const mapStateToProps = (state) => {
  return {
    activeMenuItem: state.activeMenuItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    // increment: () => {
    //   dispatch({ type: 'SOMETHING', something: 2 })
    // },
    // decrement: () => {
    //   dispatch({ type: 'SOMETHING_ELSE', something: 3 })
    // }

  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInTopMenu);
