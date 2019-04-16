import React, {Component} from 'react';
import { Tag, Icon } from 'antd';

export default class TagBar extends Component{
  render(){
    return(
      <div>
        <Icon type="tags" style={{paddingRight: "8px"}}/>
        <Tag color="blue">08/21/19</Tag>
        <Tag color="red">Priority 1</Tag>
      </div>
    )
  }
}