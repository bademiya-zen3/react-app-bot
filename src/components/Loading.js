import React, { Component } from "react";

export default class Loading extends Component {
  static defaultProps = {
    text: "Loading"
  };
  state = {
    text: this.props.text
  };
  componentDidMount() {
    const stopper = this.props.text + "...";
    this.interval = setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: this.props.text }))
        : this.setState(({ text }) => ({ text: text + "." }));
    }, 300);
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return (
      <div className="loading-container">
        <p>{this.state.text}</p>
      </div>
    );
  }
}
