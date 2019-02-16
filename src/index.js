import React from "react";
import { render } from "react-dom";

import "./styles.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 20 };
  }

  H2OState = temp => {
    if (temp >= 100) {
      return "steam";
    } else if (temp >= 1) {
      return "water";
    } else {
      return "ice";
    }
  };

  render() {
    const { temp } = this.state;
    return (
      <div className={this.H2OState(temp)}>
        <h2>
           Phase:{this.H2OState(temp)}, {temp}℃
        </h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onPlus10Click}>+10</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onMinus10Click}>-10</button>
      </div>
    );
  }

  onPlusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 1 });
  };

  onPlus10Click = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 10 });
  };

  onMinusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 1 });
  };

  onMinus10Click = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 10 });
  };
}

render(<H2O />, document.getElementById("root"));
