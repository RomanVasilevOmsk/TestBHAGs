import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ProgressBar from './components/ProgressBar';
import Main from './layouts/Main';
import globalStyles from './styles/global';

export const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Main>
        <ProgressBar />
      </Main>
    </>
  );
}

export default App;
