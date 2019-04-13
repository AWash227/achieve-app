import React, {Component, Fragment} from 'react';
import { Layout, List } from 'antd';
import  GoalCard  from '../GoalCard'
import GoalForm from '../GoalForm';
import Navigation from '../Navigation';
import Header from '../Header';
import { connect } from 'react-redux';
import { getGoals } from '../../actions/goalActions';
import PropTypes from 'prop-types';

class Dashboard extends Component{
  componentDidMount = () =>{
    this.props.getGoals();
  }

  render(){
    return(
        <Fragment>
          <Header />
          <Layout>
            <Navigation />
            <Layout style={{margin: "8px"}}>
              <List
                grid={{
                  gutter: 8, xs: 1, sm: 2, md: 3, lg: 4, xl: 6, xxl: 6,
                }} 
                dataSource={this.props.goal.goals}
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
            <GoalForm />
            </Layout>
          </Layout>
        </Fragment>
    )
  }
}

Dashboard.propTypes = {
  getGoals: PropTypes.func.isRequired,
  goal: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  goal: state.goal
})

export default connect(mapStateToProps, { getGoals })(Dashboard);
