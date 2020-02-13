import React, { Component } from 'react'; 

type ClockState = {
  time: Date
}

type AppProps = {}

export default class Clock extends Component<{}, ClockState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      time: new Date() 
    }
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>
  }
}