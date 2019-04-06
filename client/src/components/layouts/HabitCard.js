import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteHabit } from '../../actions/habitActions';
import PropTypes from 'prop-types';
import { Card, Icon, Avatar} from 'antd';

const { Meta } = Card;


class HabitCard extends Component{
  
  onDeleteClick = (_id) => {
    this.props.deleteHabit(_id);

  }

  render() {
    return(
    <Card
      key={this.props.key}
      extra={<Icon type="more" onClick={this.onDeleteClick.bind(this, this.props.id)} />}
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