import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addHabit,
  closeHabitDrawer,
  updateHabitProp
} from "../../actions/habitActions";
import { Drawer, Form, Button, Input, Icon, Select } from "antd";
import PropTypes from "prop-types";

const Option = Select.Option;

const connectorList = ['Before', 'After'];


const NewHabitForm = Form.create({
  name: "global_state",
  onFieldsChange(props, changedFields) {
    changedFields.title = props.title;
    changedFields.description = props.description;
    changedFields.reward = props.reward;
    changedFields.linkObj = props.linkObj;
    changedFields.connector = props.connector;
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
      linkObj: Form.createFormField({
        linkObj: props.linkObj,
      }),
      connector: Form.createFormField({
        connector: props.connector
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
      <Form.Item label="Name Your Habit:">
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

      <Form.Item label="Link it into your routine:" ></Form.Item>
      <Input.Group compact>
      <Form.Item>
        {getFieldDecorator("connector", {
          initialValue: (false ? "Before" : "After"),
          rules: [{ required: true, message: "A link is required!" }]
          //LINKOBJ input
        })(
          <Select>
            <Option value="Before">Before</Option>
            <Option value="After">After</Option>
          </Select>
        )}
      </Form.Item>
      <Form.Item compact>
        {getFieldDecorator("linkObj", {
          rules: [{ required: true, message: "A link is required!" }]
          //LINKOBJ input
        })(
          <Input
            style={{  top: "4px"}}
            prefix={<Icon type="link" />}
            placeholder="Describe where here..."
          />
        )}
      </Form.Item>
      </Input.Group>
    </Form>
  );
});

class HabitForm extends Component {
  state = {
    title: "",
    description: "",
    reward: "",
    linkObj: "",
    connector: "",
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
      this.props.addHabit(values);
      this.props.closeHabitDrawer();
    })
  }


  render() {
    const fields = this.state.fields;

    return (
      <Drawer
        title="Add New Habit"
        placement="right"
        onClose={this.props.closeHabitDrawer.bind(this)}
        width="100%"
        visible={this.props.drawerOpen}
      >
        <NewHabitForm {...fields} id="myForm" ref={(form) => this.form = form} onChange={this.handleFormChange} onSubmit={this.handleSubmit}/>
        <Button
          onClick={this.props.closeHabitDrawer.bind(this)}
          style={{ marginRight: 8 }}
        >
          Cancel
        </Button>
        <Button form="newHabitForm" onClick={this.handleSubmit} key="submit" htmlType="submit" type="primary">
          Submit
        </Button>
      </Drawer>
    );
  }
}

HabitForm.propTypes = {
  addHabit: PropTypes.func.isRequired,
  closeHabitDrawer: PropTypes.func.isRequired,
  updateHabitProp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  newhabit: state.newhabit
});

export default connect(
  mapStateToProps,
  { addHabit, closeHabitDrawer, updateHabitProp }
)(HabitForm);
