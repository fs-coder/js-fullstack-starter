import React from "react";
import { Button } from "antd";
import "./style.less";

export default class Home extends React.Component {
  state = {
    money: 0
  };

  add = () => {
    const { money } = this.state;
    this.setState({ money: money + 100 });
  };

  minus = () => {
    const { money } = this.state;
    this.setState({ money: money - 100 });
  };

  reset = () => {
    this.setState({ money: 0 });
  };

  render() {
    const { money } = this.state;
    return (
      <div className="home-page">
        <p>Your Money: ${money}</p>
        <Button type="primary" onClick={this.reset}>
          RESET
        </Button>
        <Button type="primary" onClick={this.add}>
          +
        </Button>
        <Button type="primary" onClick={this.minus}>
          -
        </Button>
      </div>
    );
  }
}
