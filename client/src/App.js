import React, { Component } from 'react';
import { Navigation, Header } from './components';
import { Dashboard } from './components/layouts';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import { Provider } from 'react-redux';
import store from './store';

export default class extends Component{
 
  render() {
    return (
    <Provider store={store}>
      <Header />
      <Layout>
        <Navigation />
        <Dashboard />
      </Layout>
    </Provider>
    )
  }
}