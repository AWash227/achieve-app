import React, { Component } from 'react';
import { Navigation, Header } from './components';
import { Dashboard, Goal } from './components/layouts';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';


import { Provider } from 'react-redux';
import store from './store';

export default class extends Component{
 
  render() {
    return (
    <Provider store={store}>
    <Router>
      <Route path="/" component={Dashboard} />
      <Route path="/card/:id" component={Goal} />
    </Router>
    </Provider>
    )
  }
}
