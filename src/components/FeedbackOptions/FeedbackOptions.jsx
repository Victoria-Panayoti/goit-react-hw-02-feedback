import PropTypes from 'prop-types';

export const FeedbackOptions = ({ items, onLeaveFeedback }) => (
  
    <div>
      {items.map((item, index) => (
        <button
          key={index}
          type='button'
          onClick={() => onLeaveFeedback(item)}>
          {item}
        </button>
      ))}
    </div>
);


FeedbackOptions.propTypes = {
  items: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
