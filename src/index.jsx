import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  Redirect,
} from 'react-router-dom';
import IdleTimer from 'react-idle-timer';
import { useIdleTimer } from 'react-idle-timer';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyles,
  BackgroundImg,
  Footer,
  Container,
} from './styles/global-styles';
import Routers from './routers';
import { theme } from './styles/theme';
import BackgroundImage from './assets/images/pense-farma-rodape-c-logo.svg';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container>
        <Routers />
      </Container>
      <Footer bgImg={BackgroundImage} />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
