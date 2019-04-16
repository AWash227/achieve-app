import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { 
  Modal,
  Tooltip,
  Button,
  List,
  Typography,
  Icon,
  Divider,
  Switch
} from 'antd';
import { getHabits } from '../actions/habitActions';
import { openDrawer, openModal, closeModal } from '../actions/appActions';
import HabitCard from './HabitCard';
import GoalCard from './GoalCard';
import TagBar from './TagBar';

const {
  Title,
  Paragraph,
  Text
} = Typography;

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
        style={{ top: 45 }}
        title=
        {[
          <Title key="1"><Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />}/> {this.props.goal.selectedGoal.title}</Title>,
          
          <TagBar key="2"/>,
          <Divider key="3"/>,
          <Paragraph key="4"><Tooltip title="Reward"><Icon type="gift" /></Tooltip> {this.props.goal.selectedGoal.reward}</Paragraph>,
          <Paragraph key="5"><Tooltip title="Description"><Icon type="align-left" /></Tooltip> {this.props.goal.selectedGoal.description}</Paragraph>
        ]}
        footer={null}
        maskClosable={true}
        width={"98%"}
        onClose={() => this.props.closeModal()}
        onOk={() => this.handleOk(this)}
        onCancel={() => this.handleCancel(this)}>
        {/* HABITS ARE LISTED HERE */}
              <List
                grid={{
                  gutter: 8, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4,
                }} 
                dataSource={this.props.habit.habits}
                renderItem={goal => (
                  <List.Item key={goal._id}>
                    <GoalCard
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
        {/* BELOW THIS DIVIDER IS THE ATTRIBUTES BAR */}
        <Divider />
        <Tooltip title= {[ <Icon key="1" type="smile" />," ", "Specific", ]} >
          <Icon type="key" style={{paddingLeft: 4, paddingRight: 4 }}/>
        </Tooltip>
        <Tooltip title= {[ <Icon key="1" type="smile" />, " ", "Measurable" ]}
        >
          <Icon type="bar-chart" style={{paddingLeft: 4, paddingRight: 4 }}/>
        </Tooltip>
        <Tooltip title= {[ <Icon key="1" type="smile" />, " ", "Achievable" ]} >
          <Icon type="rocket" style={{paddingLeft: 4, paddingRight: 4 }}/>

        </Tooltip>
        <Tooltip title= {[ <Icon key="1" type="smile" />, " ", "Timely" ]} >
          <Icon type="clock-circle" style={{paddingLeft: 4, paddingRight: 4 }}/>
        </Tooltip>
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
