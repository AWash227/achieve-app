import React, { Component } from 'react';
import { PageHeader, Button } from 'antd';
import { GoalForm } from '../components';
import { connect } from 'react-redux';
import { openDrawer } from '../actions/appActions';
import PropTypes from 'prop-types';

class Header extends Component {


  render() {
    return(
      <div>

      <PageHeader 
        onBack={() => null}
        title="Main"
        extra={<Button key="1" type="primary" onClick={this.props.openDrawer.bind(this, "Goal")}>Add Goal</Button>}
      />
      </div>
    )
  }
}

Header.propTypes = {
  openDrawer: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  app: state.app
})

export default connect(mapStateToProps, { openDrawer })(Header);
