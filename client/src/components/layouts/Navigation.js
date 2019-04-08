import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

export default class Navigation extends Component {
    state = {
      collapsed: true
    };

  handleToggle = () => {
    //REPLACE WITH REDUX ONCE THIS IS WORKING
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render(){

    return(
        <Sider 
          theme="light"
          style={{WebkitBoxShadow: "rgba(60,64,67,0.08) 0px 1px 1px 0px"}}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.handleToggle}
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>Dashboard</span> 
            </Menu.Item> 
            <Menu.Item key="2">
              <Icon type="rise" />
              <span>Stats</span> 
            </Menu.Item>
            <Menu.Item 
              key="3"
              onClick={this.handleToggle} 
            >
              <Icon 
                type={this.state.collapsed ? 'caret-right' : 'caret-left'}
                className="trigger"
              />
              <span>{this.state.collapsed ? 'Expand' : 'Collapse'}</span> 
            </Menu.Item>
          </Menu>
        </Sider>
    )
  }
}