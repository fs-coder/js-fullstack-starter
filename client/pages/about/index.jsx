import React from 'react';

export default class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    const { hello } = this.props;
    return (
      <div>
        <h2>{hello}: {count}</h2>
        <button onClick={() => {
          this.setState({ count: count + 1 });
        }}
        >+</button>
        <button onClick={() => {
          this.setState({ count: count - 1 });
        }}
        >-</button>
        <button onClick={() => alert('it works!')}>click me</button>
      </div>
    );
  }
}
