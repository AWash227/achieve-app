import React, {Component} from 'react';
import { Layout, List } from 'antd';
import { HabitCard, HabitForm } from '../components';
import { connect } from 'react-redux';
import { getHabits} from '../actions/habitActions';
import PropTypes from 'prop-types';

class HabitList extends Component{
  componentDidMount = () =>{
    this.props.getHabits();
  }


  render(){
    return(
      <Layout style={{margin: "8px"}}>
        <List
          grid={{
            gutter: 8, xs: 1, sm: 2, md: 3, lg: 4, xl: 6, xxl: 6,
          }} 
          dataSource={this.props.habit.habits}
          renderItem={habit => (
            <List.Item key={habit._id}>
              <HabitCard
                id={habit._id}
                title={habit.title}
                description={habit.description}
                reward={habit.reward}
                complete={habit.complete}
                link={habit.link}
                simplify={habit.simplify}
                />
            </List.Item>
          )}
        >

        </List>
      <HabitForm />
      </Layout>
    )
  }
}

HabitList.propTypes = {
  getHabits: PropTypes.func.isRequired,
  habit: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  habit: state.habit
})

export default connect(mapStateToProps, { getHabits })(HabitList);