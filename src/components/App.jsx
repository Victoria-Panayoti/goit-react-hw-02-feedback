import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = item => {
    this.setState(prevState => ({ [item]: prevState[item] + 1 }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <FeedbackOptions
          items={Object.keys(this.state)}
          onClickFeedback={this.handleClick}
        />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}
