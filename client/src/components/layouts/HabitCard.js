import React, { Component } from 'react';
import { Card, Icon, Avatar, Menu, Dropdown } from 'antd';

const { Meta } = Card;



const editActionMenu = (
  <Menu>
    <Menu.Item key="0">
      <a>Edit</a> 
    </Menu.Item>
    <Menu.Item>
      <a>Delete</a>
    </Menu.Item>
  </Menu>
)

class HabitCard extends Component{
  
  onDeleteClick = (id) => {
    this.props.deleteHabit(id);
    console.log("Deleted!")
  }

  render() {
    return(
    <Card
      key={this.props.key}
      extra={<Dropdown overlay={editActionMenu} trigger={['click']}><a onClick={this.onDeleteClick.bind(this, this.props.id)}><Icon type="more"/></a></Dropdown>}
      cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
      style={{ width: 300 }}
      size="default"
      hoverable={true}>
      <Meta 
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} 
      title={this.props.title}
      description={this.props.description}
      />
    </Card>
    )
  }

}

export default HabitCard;