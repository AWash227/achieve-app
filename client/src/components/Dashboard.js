import React, {Component} from 'react';
import { HabitCard } from './layouts'
import axios from 'axios';
import { connect } from 'react-redux';
import { getHabits, deleteHabit } from '../actions/habitActions';
import PropTypes from 'prop-types';

const api = 'http://localhost:4000/api/habits';

class Dashboard extends Component{
  componentDidMount = () =>{
    this.props.getHabits();
  }
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render(){
    return(
      <div>
        {this.props.habit.habits.map((c) =>
        <HabitCard 
          key={c.id} 
          title={c.title}
          description={c.description}
          reward={c.reward}
          complete={c.repeat}
          link={c.link}
          simplify={c.simplify} />
        )}
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

export default connect(mapStateToProps, { getHabits, deleteHabit })(Dashboard);