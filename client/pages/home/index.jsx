import React from 'react';
import { Button } from 'antd';
import './style.less';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-box">
        <Button type="primary">Ant Button</Button>

        <a href="/about">to Abort Page</a>
      </div>
    );
  }
}

