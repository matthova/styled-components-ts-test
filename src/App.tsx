import React from 'react';
import baseStyled, {ThemeProvider, ThemedStyledInterface} from 'styled-components';

import logo from './logo.svg';
import './App.css';

export const theme = {
    color: {
        red: '#FFAAAA'
    },
};

export type Theme = typeof theme;

export const styled = baseStyled as ThemedStyledInterface<Theme>;

const Foo = styled('div')`
  background: ${p => p.theme.color.red};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Foo>Foo</Foo>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
