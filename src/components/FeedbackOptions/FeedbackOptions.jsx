import React from 'react';

export const FeedbackOptions = ({ items,onClickFeedback }) => {
  return (
    <div>
      {items.map((item, index) => (
        <button key={index} onClick={()=>onClickFeedback(item)}>{item}</button>
      ))}
    </div>
  );
};
