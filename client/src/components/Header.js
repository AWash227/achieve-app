import React, { Component } from 'react';
import { PageHeader, Button } from 'antd';
import { HabitForm, GoalForm } from '../components';
import { connect } from 'react-redux';
import { openHabitDrawer,  } from '../actions/habitActions';
import { openGoalDrawer } from '../actions/goalActions';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return(
      <div>

      <PageHeader 
        onBack={() => null}
        title="Main"
        extra={<Button key="1" type="primary" onClick={() => this.props.openGoalDrawer()}>Add Habit</Button>}
      />
      <GoalForm drawerOpen={this.props.goal.drawerOpen} drawerClose={this.props.goal.drawerClose}/>
      </div>
    )
  }
}

Header.propTypes = {
  openHabitDrawer: PropTypes.func.isRequired,
  openGoalDrawer: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  goal: state.goal
})

export default connect(mapStateToProps, { openHabitDrawer, openGoalDrawer })(Header);