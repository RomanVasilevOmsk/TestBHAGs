import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import Steps from '../Steps';
import Button from '../Button';

const DEFAULT_FIRST_PAGE = 0;
const MIN_STEPS_COUNT = 2;
const MAX_STEPS_COUNT = 5;

const mockSteps = ['Design', 'Build', 'Launch'];

const ProgressBar: React.FunctionComponent = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [steps, setSteps] = useState<string[]>([]);

  const validStepCount = useMemo(
    () => steps.length > MIN_STEPS_COUNT && steps.length < MAX_STEPS_COUNT,
    [steps],
  );

  useEffect(() => {
    setSteps(mockSteps);
    if (steps.length > 0 && !validStepCount) {
      alert('Invalid step count');
    }
  }, [setSteps, steps]);

  const onSetPrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const onSetNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const isDisabledPrevButton = useMemo(
    () => activeStep === DEFAULT_FIRST_PAGE,
    [activeStep],
  );

  const isDisabledNextButton = useMemo(
    () => activeStep === steps.length - 1,
    [activeStep, steps],
  );

  if (!validStepCount) {
    return null;
  }

  return (
    <Root>
      <Steps steps={steps} activeStep={activeStep} handleSetStep={setActiveStep} />
      <NavigationWrapper>
        <Button
          title="< Prev"
          handleClick={onSetPrevStep}
          disabled={isDisabledPrevButton}
        />

        <Button
          title="Next >"
          handleClick={onSetNextStep}
          disabled={isDisabledNextButton}
        />
      </NavigationWrapper>
    </Root>
  );
};

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const NavigationWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  & button:first-child {
    margin-right: 10px;
  }
`;

export default ProgressBar;
