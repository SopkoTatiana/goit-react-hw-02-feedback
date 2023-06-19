import { Component } from 'react';
import FeedbackOptions from './FeedbacksOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackHeandler = ({ currentTarget: { name } }) => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => (acc += value), 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePersentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.feedbackHeandler}
        />
        <h2>Statistic</h2>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePersentage={positivePersentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
