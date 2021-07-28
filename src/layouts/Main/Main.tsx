import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Main: React.FunctionComponent<Props> = ({ children }: Props) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Main;
