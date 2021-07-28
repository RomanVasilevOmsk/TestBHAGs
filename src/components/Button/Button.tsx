import React from 'react';
import styled from 'styled-components';

interface Props {
  handleClick: () => void;
  title: string;
  disabled?: boolean;
}

const Button: React.FunctionComponent<Props> = ({
  title,
  handleClick,
  disabled = false,
}: Props) => {
  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-size: 14px;
  border-radius: 6px;
  transition: all 0.2s ease;
  padding: 10px 20px;
  background-color: #5125da;
  color: #fff;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #5125da;
    background-color: #fff;
    color: #5125da;
  }

  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
    background-color: #5125da;
    color: #fff;
    border: 1px solid transparent;
  }
`;

export default Button;
