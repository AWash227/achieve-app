import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteHabit } from '../../actions/habitActions';
import PropTypes from 'prop-types';
import { Card, Icon, Avatar, Menu, Dropdown } from 'antd';

const { Meta } = Card;



const editActionMenu = (
  <Menu>
    <Menu.Item key="0">
      <div>Edit</div> 
    </Menu.Item>
    <Menu.Item>
      <div>Delete</div>
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
      extra={<Dropdown overlay={editActionMenu} trigger={['click']}><div onClick={this.onDeleteClick.bind(this, this.props._id)}><Icon type="more"/></div></Dropdown>}
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

HabitCard.propTypes = {
  deleteHabit: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  habit: state.habit
})

export default connect(mapStateToProps, { deleteHabit })(HabitCard);