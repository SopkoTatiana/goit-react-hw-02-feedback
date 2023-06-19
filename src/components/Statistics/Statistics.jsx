import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => {
  return (
    <ul>
      <li>Good {good}</li>
      <li>Neutral {neutral}</li>
      <li>Bad {bad}</li>
      <li>Total {total}</li>
      <li>Positive feedbacks {positivePersentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
};

export default Statistics;
