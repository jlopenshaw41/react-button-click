import React from "react";
import { ChildClass } from "./ChildClass";
import { SiblingClass } from "./SiblingClass";

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
        <SiblingClass totalClicks={this.state.totalClicks} />
        <ChildClass onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
