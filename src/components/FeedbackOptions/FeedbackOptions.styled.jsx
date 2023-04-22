import styled from 'styled-components';

export const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
`;
export const FeedbackButton = styled.button`
  display: flex;
  width: 80px;
  height: 32px;
  background-color: #655454;
  color: #ead5ab;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.03em;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #996666;
    background-color:#ffe4c4;
    transform: scale(1.1);
  }
`;
