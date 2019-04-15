import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Popover, Button, List} from 'antd';
import { getHabits } from '../actions/habitActions';
import { openDrawer, openModal, closeModal } from '../actions/appActions';
import HabitCard from './HabitCard';
import GoalCard from './GoalCard';

class CardModal extends Component {

  handleOk = (e) => {
    console.log(e);
    this.props.closeModal();
  }

  handleCancel = (e) => {
    console.log(e);
    this.props.closeModal();
  }

  render(){
    return(
      <Modal
        visible={this.props.app.modalOpen}
        width={"100%"}
        onClose={() => this.props.closeModal()}
        onOk={() => this.handleOk(this)}
        onCancel={() => this.handleCancel(this)}>
      </Modal>
    )
  }
}
CardModal.propTypes = {
  openDrawer: PropTypes.func.isRequired,
  getHabits: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal,
  habit: state.habit,
  app: state.app
});

export default connect(
  mapStateToProps,
  {  openDrawer, getHabits, openModal, closeModal }
)(CardModal);
