import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteHabit } from '../../actions/habitActions';
import PropTypes from 'prop-types';
import { Card, Icon, Dropdown, Menu, Button } from 'antd';

const { Meta } = Card;


class HabitCard extends Component{
  
  onDeleteClick = (_id) => {
    this.props.deleteHabit(_id);

  }

  render() {
    return(
    <Card
      key={this.props.key}
      title={this.props.title}
      extra=
        {
          <Dropdown 
            overlay=
              {
                <Menu>
                  <Menu.Item>Edit</Menu.Item>
                  <Menu.Item onClick={this.onDeleteClick.bind(this, this.props.id)}>Delete</Menu.Item>
                </Menu>
              }
            trigger={['click']}><Icon type="more" /></Dropdown>
        }
      size="small"
      cover={<img src="https://cdn-images-1.medium.com/max/2600/1*TsiGnufi7Y8tgJRLx8zipg.jpeg" />}
      actions={[<Icon type="rise" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      hoverable={true}>
      <Meta 
        title={[<Button shape="circle" size="small" icon="gift" />, " ", this.props.reward]}
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