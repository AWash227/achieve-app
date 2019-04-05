import React, {Component} from 'react';
import { HabitCard } from './layouts'
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
          title={c.title}
          description={c.description}
          reward={c.reward}
          complete={c.complete}
          link={c.link}
          simplify={c.simplify} />
      </div>
    )
    return(
      <div>
      {habits}
      </div>
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