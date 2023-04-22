import PropTypes from 'prop-types';
import { FeedbackButton, ButtonBox } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ items, onLeaveFeedback }) => (
  
    <ButtonBox>
      {items.map((item, index) => (
        <FeedbackButton
          key={index}
          type='button'
          onClick={() => onLeaveFeedback(item)}>
          {item}
        </FeedbackButton>
      ))}
    </ButtonBox>
);


FeedbackOptions.propTypes = {
  items: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
