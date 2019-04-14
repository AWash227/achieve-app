import React, {Component} from 'react';
import { connect } from "react-redux";
import {Drawer} from 'antd';
import { closeDrawer } from "../actions/appActions";
import  GoalForm  from './GoalForm';
import HabitForm from './HabitForm';
import PropTypes from "prop-types";

  function DetermineForm(props) {
    if(props.formType === "Habit"){
      return <HabitForm />;
    }
    if(props.formType === "Goal"){
      return <GoalForm />;
    }
    return <div></div>
  }
class AppDrawer extends Component{

  render(){
    return(
      <Drawer
        title={this.props.title}
        placement="right"
        onClose={this.props.closeDrawer.bind(this)}
        width="100%"
        visible={this.props.app.drawerOpen}
      >
      <DetermineForm formType={this.props.app.formType} />
      </Drawer>
    );
  }
}

// Tell the component that it needs to have closeDrawer()
AppDrawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};

//Map app to Redux' app
const mapStateToProps = state => ({
  app: state.app
});

// Export component with the ability to closeDrawer and w/ Redux' app props
export default connect(
  mapStateToProps,
  { closeDrawer }
)(AppDrawer);
