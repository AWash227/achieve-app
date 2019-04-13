import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addGoal,
  closeGoalDrawer,
  updateGoalProp
} from "../actions/goalActions";
import { Drawer, Form, Button, Input, Icon, Select, Checkbox } from "antd";
import PropTypes from "prop-types";

const Option = Select.Option;

const connectorList = ['Before', 'After'];


const NewGoalForm = Form.create({
  name: "global_state",
  onFieldsChange(props, changedFields) {
    changedFields.title = props.title;
    changedFields.description = props.description;
    changedFields.reward = props.reward;
    changedFields.specific = props.specific;
    changedFields.measurable = props.measurable;
    changedFields.achievable = props.achievable;
    changedFields.timely = props.timely;
  },
  
  mapPropsToFields(props) {
    return {
      title: Form.createFormField({
        title: props.title
      }),
      description: Form.createFormField({
        description: props.description
      }),
      reward: Form.createFormField({
        reward: props.reward
      }),
      specific: Form.createFormField({
        specific: props.specific
      }),
      measurable: Form.createFormField({
        measurable: props.measurable
      }),
      achievable: Form.createFormField({
        achievable: props.achievable
      }),
      timely: Form.createFormField({
        timely: props.timely
      })
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  }
})(props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form>
      {/* Title Input */}
      <Form.Item label="Name Your Goal:">
        {getFieldDecorator("title", {
          // UI verification
          rules: [{ required: true, message: "Title is required!" }]
          // TITLE input
        })(
          <Input
            prefix={<Icon type="build" />}
            placeholder="Type something memorable..."
          />
        )}
      </Form.Item>

      {/* Description Input */}
      <Form.Item label="Give it a Description">
        {getFieldDecorator("description", {
          // UI verification
          rules: [{ required: true, message: "Description is required!" }]
        })(
          // DESCRIPTION input
          <Input.TextArea
            prefix={<Icon type="align-left" />}
            placeholder="Describe your goal..."
            autosize={{ minRows: 2, maxRows: 6 }}
          />
        )}
      </Form.Item>

      <Form.Item label="Choose a Reward You'll Get Upon Completion:">
        {getFieldDecorator("reward", {
          // UI verification
          rules: [{ required: true, message: "Reward is required!" }]
          //REWARD input
        })(
          <Input
            prefix={<Icon type="gift" />}
            placeholder="Decide your reward..."
          />
        )}
      </Form.Item>

      <Form.Item label="Alter your goal until you can confidently check these boxes:">
          {getFieldDecorator("specific", {
            rules: [{ required: true, message: "Your goal is not specific, change it before submitting..."}]
          })(
            <Checkbox>Specific</Checkbox>
          )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("measurable", {
          rules: [{ required: true, message: "Your goal is not measurable, consider adding a metric to your goal."}]
        })(
          <Checkbox>Measurable</Checkbox>
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("achievable", {
          rules: [{ required: true, message: "Your goal is not achievable, consider making it a little less difficult."}]
        })(
          <Checkbox>Achievable</Checkbox>
        )}
      </Form.Item>


      <Form.Item>
        {getFieldDecorator("timely", {
          rules: [{ required: true, message: "Your goal is not timely, consider setting a date for it."}]
        })(
          <Checkbox>Timely</Checkbox>
        )}
      </Form.Item>
    </Form>
  );
});

class GoalForm extends Component {
  state = {
    title: "",
    description: "",
    reward: "",
    specific: false,
    measurable: false,
    achievable: false,
    timely: false,

  };

  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }))
  }


  handleSubmit = () => {
    this.form.validateFields((err, values) => {
      if(err) return;
      console.log(values);
      this.props.addGoal(values);
      this.props.closeGoalDrawer();
    })
  }


  render() {
    const fields = this.state.fields;

    return (
      <Drawer
        title="Add New Goal"
        placement="right"
        onClose={this.props.closeGoalDrawer.bind(this)}
        width="100%"
        visible={this.props.drawerOpen}
      >
        <NewGoalForm {...fields} id="myForm" ref={(form) => this.form = form} onChange={this.handleFormChange} onSubmit={this.handleSubmit}/>
        <Button
          onClick={this.props.closeGoalDrawer.bind(this)}
          style={{ marginRight: 8 }}
        >
          Cancel
        </Button>
        <Button form="myForm" onClick={this.handleSubmit} key="submit" htmlType="submit" type="primary">
          Submit
        </Button>
      </Drawer>
    );
  }
}

GoalForm.propTypes = {
  addGoal: PropTypes.func.isRequired,
  closeGoalDrawer: PropTypes.func.isRequired,
  updateGoalProp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  newgoal: state.newgoal
});

export default connect(
  mapStateToProps,
  { addGoal, closeGoalDrawer, updateGoalProp }
)(GoalForm);
