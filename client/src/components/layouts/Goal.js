import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Popover, Button, List} from 'antd';
import { closeGoal } from '../../actions/goalActions';
import { getHabits } from '../../actions/habitActions';
import { openDrawer } from '../../actions/appActions';
import HabitCard from '../HabitCard';

class Goal extends Component {

  handleOk = (e) => {
    console.log(e);
    this.props.closeGoal()
  }

  handleCancel = (e) => {
    console.log(e);
    this.props.closeGoal()
  }

  render(){
    return(
      <Modal
        title=
          {[
            <Popover
              key="1"
              content={this.props.goal.selectedGoal.reward}
              title="Reward for completion:"
            >
              <Button shape="circle" size="small" icon="gift" />
            </Popover>,"  ",
            this.props.goal.selectedGoal.title,
            <Button key="2" type="primary" onClick={ this.props.openDrawer.bind(this, "Habit")}>Add Habit</Button>
          ]}
        visible={ this.props.goal.visible }
        width={"100%"}
        onOk={this.handleOk}
        onCancel={this.handleCancel}>
          
              <List
                grid={{
                  gutter: 8, xs: 1, sm: 2, md: 3, lg: 4, xl: 6, xxl: 6,
                }} 
                dataSource={this.props.habit.habits}
                renderItem={goal => (
                  <List.Item key={goal._id}>
                    <HabitCard
                      id={goal._id}
                      title={goal.title}
                      description={goal.description}
                      reward={goal.reward}
                      complete={goal.complete}
                      link={goal.link}
                      simplify={goal.simplify}
                      />
                  </List.Item>
                )}
              >

              </List>
      </Modal>
    )
  }
}
Goal.propTypes = {
  closeGoal: PropTypes.func.isRequired,
  openDrawer: PropTypes.func.isRequired,
  getHabits: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal,
  habit: state.habit,
  app: state.app
});

export default connect(
  mapStateToProps,
  { closeGoal, openDrawer, getHabits }
)(Goal);
