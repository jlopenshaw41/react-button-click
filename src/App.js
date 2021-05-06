import React from "react";
import { ChildClass } from "./ChildClass";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    this.setState({ totalClicks: total + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.totalClicks}</p>
        <ChildClass onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
