import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteGoal, renderGoal } from "../actions/goalActions";
import { getHabits } from '../actions/habitActions';
import PropTypes from "prop-types";
import { Card, Icon, Tooltip, Button, Popover } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import { Goal } from "./layouts";

const { Meta } = Card;

class GoalCard extends Component {
  onDeleteClick = _id => {
    this.props.deleteGoal(_id);
  };

  onGoalClick = goal => {
    this.props.getHabits();
    this.props.renderGoal(goal);
    return(
    <Goal width="100%"/>
    )
    

  }

  render = () => (
    <Router>
        <Card
          key={this.props.key}
          title={[
            <Popover
              key="1"
              content={this.props.reward}
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
          onClick={() => this.onGoalClick
            (            
             {
             
               title: this.props.title,
               description: this.props.description,
               id: this.props.id,
               reward: this.props.reward,
               complete: this.props.complete,
               specific: this.props.specific,
               measurable: this.props.measurable,
               achievable: this.props.achievable,
               timely: this.props.timely
             }
            )}
        >
          <Meta description={this.props.description} />
        </Card>

      <Route path="/card/" component={Goal} />

    </Router>
  );
}

GoalCard.propTypes = {
  deleteGoal: PropTypes.func.isRequired,
  renderGoal: PropTypes.func.isRequired,
  getHabits: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal,
  habit: state.habit
});

export default connect(
  mapStateToProps,
  { deleteGoal, renderGoal, getHabits }
)(GoalCard);
