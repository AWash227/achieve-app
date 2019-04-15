import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteGoal, renderGoal, selectGoal } from "../actions/goalActions";
import { getHabits } from '../actions/habitActions';
import { openModal } from '../actions/appActions';
import PropTypes from "prop-types";
import { Card, Icon, Tooltip, Button, Popover } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import CardModal from "./CardModal";

const { Meta } = Card;


class GoalCard extends Component {

  onDeleteClick = () => {
    this.props.deleteGoal(this.props.id);
  };

  onGoalClick = () => {
    console.log("GOAL HAS BEEN CLICKED");
    this.props.selectGoal.bind(this.props.goal.goals, this.props.id);
    this.props.openModal()
  }
  render = () => (
      <div
      onClick={this.onGoalClick.bind(this)} 
      >
        <Card
          key={this.props.key}
          title={[
            <Popover
              key="1" content={this.props.reward}
              title="Reward for completion:"
            >
              <Button shape="circle" size="small" icon="gift" />
            </Popover>,
            "  ",
            this.props.title
          ]}
          extra={<Icon type="star" />}
          size="small"
          cover={
            <img src="https://cdn-images-1.medium.com/max/2600/1*TsiGnufi7Y8tgJRLx8zipg.jpeg" />
          }
          actions={[
            <Icon key="1" type="rise" />,
            <Icon key="2" type="edit" />,
            <Tooltip placement="top" title="Delete">
              <Icon
                type="delete"
                onClick={() => this.onDeleteClick(this, this.props.id)}
              />
            </Tooltip>
          ]}
          hoverable={true}
        >
          <Meta description={this.props.description} />
        </Card>
      </div>
  );
}

GoalCard.propTypes = {
  deleteGoal: PropTypes.func.isRequired,
  renderGoal: PropTypes.func.isRequired,
  getHabits: PropTypes.func.isRequired,
  selectGoal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal,
  habit: state.habit,
  app: state.app
});

export default connect(
  mapStateToProps,
  { deleteGoal, renderGoal, getHabits, selectGoal, openModal }
)(GoalCard);
