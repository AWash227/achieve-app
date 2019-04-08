import React, { Component } from 'react';
import { PageHeader, Button } from 'antd';
import { HabitForm } from '../layouts';
import { connect } from 'react-redux';
import { openHabitDrawer } from '../../actions/habitActions';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return(
      <div>

      <PageHeader 
        onBack={() => null}
        title="Main"
        extra={<Button key="1" type="primary" onClick={() => this.props.openHabitDrawer()}>Add Habit</Button>}
      />
      <HabitForm drawerOpen={this.props.habit.drawerOpen} drawerClose={this.props.habit.drawerClose}/>
      </div>
    )
  }
}

Header.propTypes = {
  openHabitDrawer: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  habit: state.habit
})

export default connect(mapStateToProps, { openHabitDrawer })(Header);