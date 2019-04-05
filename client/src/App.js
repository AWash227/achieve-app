import React, { Component, Fragment } from 'react';
import { Navigation } from './components/layouts';
import { HabitCard } from './components/layouts';
import Dashboard from './components/Dashboard';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import store from './store';

export default class extends Component{
 
  render() {
    return (

    <Provider store={store}>
      <Navigation />
      <Dashboard />
      <HabitCard />
    </Provider>
    )
  }
}