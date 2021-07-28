import React from 'react';
import styled from 'styled-components';

interface Props {
  steps: string[];
  activeStep: number;
  handleSetStep: (step: number) => void;
}

const Filters: React.FunctionComponent<Props> = ({
  steps,
  activeStep,
  handleSetStep,
}: Props) => {
  return (
    <List>
      {steps.map((step, index) => {
        const isCompletedStep = index < activeStep;
        const isActiveStep = index === activeStep;
        return (
          <Item
            key={step}
            completed={isCompletedStep}
            active={isActiveStep}
            onClick={() => handleSetStep(index)}
          >
            <Title active={isActiveStep} completed={isCompletedStep}>
              {step}
            </Title>
          </Item>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const Item = styled.li<{ active: boolean; completed: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  flex: 1;

  &:before {
    position: absolute;
    content: '';
    border-bottom: 5px solid #dbdbdb;
    width: 100%;
    top: 35px;
    left: -50%;
    z-index: 1;
  }

  &:after {
    position: absolute;
    content: '';
    border-bottom: 5px solid #5125da;
    width: 0;
    top: 35px;
    left: 50%;
    z-index: 2;
    transition: all 0.2s ease;
  }

  ${({ completed }) => completed && `&:after { width: 100%;}`}

  &:first-child::before {
    content: none;
  }
  &:last-child::after {
    content: none;
  }
`;

const Title = styled.p<{ active: boolean; completed: boolean }>`
  color: #dbdbdb;
  font-size: 18px;
  margin-bottom: 10px;
  transition: all 0.2s ease;
  font-weight: bold;

  &:after {
    content: '';
    background-color: #fff;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 5px solid #dbdbdb;
    display: flex;
    position: absolute;
    z-index: 3;
    left: calc(50% - 10px);
    top: calc(50% + 10px);
  }

  ${({ active }) => active && `color: #5125da; &:after { border-color:#5125da; }`}
  ${({ completed }) => completed && `color: #5125da; &:after { border-color:#5125da; }`}
`;

export default Filters;
