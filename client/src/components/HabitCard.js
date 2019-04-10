import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteHabit } from '../actions/habitActions';
import PropTypes from 'prop-types';
import { Card, Icon, Tooltip, Button, Popover } from 'antd';

const { Meta } = Card;


class HabitCard extends Component{
  
  onDeleteClick = (_id) => {
    this.props.deleteHabit(_id);

  }

  render() {
    return(
    <Card
      key={this.props.key}
      title=
      {[
      <Popover key="1" content={this.props.reward} title="Reward for completion:">
        <Button shape="circle" size="small" icon="gift" />
      </Popover>,
      "  ",
      this.props.title
      ]}
      extra=
        {
          <Icon
            type="star"
            />
        }
      size="small"
      cover={<img src="https://cdn-images-1.medium.com/max/2600/1*TsiGnufi7Y8tgJRLx8zipg.jpeg" />}
      actions=
      {[
        <Icon key="1" type="rise" />,
        <Icon key="2" type="edit" />,
        <Tooltip placement="top" title="Delete"><Icon type="delete"  onClick={() => this.onDeleteClick(this, this.props.id)}/></Tooltip> 
      ]}
      hoverable={true}>
      <Meta 
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