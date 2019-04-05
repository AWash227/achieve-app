import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

export default class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'dash',
    };
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    })
  }
  render(){

    return(
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="dash">
          <Icon type="dashboard" /> Dashboard
        </Menu.Item>
        <Menu.Item key="stats">
          <Icon type="rise" />Stats
        </Menu.Item>
      </Menu>
    )
  }
}