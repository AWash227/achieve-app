import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHabit, closeHabitDrawer } from '../../actions/habitActions';
import { 
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  DatePicker,
  Icon 
} from 'antd';
import PropTypes from 'prop-types';

class HabitForm extends Component{


  render(){

    return(
      <Drawer 
        title="Add New Habit"
        placement="right"
        closable={false}
        onClose={this.props.closeHabitDrawer.bind(this)}
        width="25rem"
        visible={this.props.drawerOpen}>
        <Form>
          <Form.Item label="Name Your Goal">
            <Input />
          </Form.Item>
        </Form>
      </Drawer>
    )
  }
}

HabitForm.propTypes = {
  addHabit: PropTypes.func.isRequired,
  closeHabitDrawer: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  habit: state.habit
})

export default connect(mapStateToProps, { addHabit, closeHabitDrawer })(HabitForm);