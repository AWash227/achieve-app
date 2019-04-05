import React, { Component } from 'react';
import { PageHeader } from 'antd';

class Header extends Component {
  render() {
    return(
      <PageHeader 
        onBack={() => null}
        title="Main"
        subTitle="Subtitle goes here"
      
      />
    )
  }
}

export default Header;