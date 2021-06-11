import React from 'react';
import ReactDOM from 'react-dom';
import { positions, Provider, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
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

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider template={AlertTemplate} {...options}>
      <ThemeProvider theme={theme}>
        <Container>
          <Routers />
        </Container>
        <Footer bgImg={BackgroundImage} />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
