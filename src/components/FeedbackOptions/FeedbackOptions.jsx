import PropTypes from 'prop-types';
import { FeedbackButton, ButtonBox } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ items, onLeaveFeedback }) => (
  
    <ButtonBox>
      {items.map((item) => (
        <FeedbackButton
          key={item}
          type='button'
          onClick={() => onLeaveFeedback(item)}>
          {item}
        </FeedbackButton>
      ))}
    </ButtonBox>
);


FeedbackOptions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
