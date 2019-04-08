import React, {Component} from 'react';
import { Layout, List } from 'antd';
import { HabitCard, HabitForm } from './layouts'
import { connect } from 'react-redux';
import { getHabits} from '../actions/habitActions';
import PropTypes from 'prop-types';

class Dashboard extends Component{
  componentDidMount = () =>{
    this.props.getHabits();
  }


  render(){
    
    const habits = this.props.habit.habits.map((c) => 
      <div key={c._id.toString()}>
          
        <HabitCard 
          key={c.key} 
          id={c._id}
          title={c.title}
          description={c.description}
          reward={c.reward}
          complete={c.complete}
          link={c.link}
          simplify={c.simplify} />
      </div>
    )
    return(
      <Layout style={{margin: "8px"}}>
        <List
          grid={{
            gutter: 8, xs: 1, sm: 2, md: 3, lg: 4, xl: 6, xxl: 6,
          }} 
          dataSource={this.props.habit.habits}
          renderItem={habit => (
            <List.Item>
              <HabitCard
                key={habit.key} 
                id={habit._id}
                title={habit.title}
                description={habit.description}
                reward={habit.reward}
                complete={habit.complete}
                link={habit.link}
                simplify={habit.simplify} />
            </List.Item>
          )}
        >

        </List>
      <HabitForm />
      </Layout>
    )
  }
}

Dashboard.propTypes = {
  getHabits: PropTypes.func.isRequired,
  habit: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  habit: state.habit
})

export default connect(mapStateToProps, { getHabits })(Dashboard);