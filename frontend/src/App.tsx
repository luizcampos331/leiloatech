import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { ToastProvider } from './hook/toast';

const App: React.FC = () => (
  <Router>
    <ToastProvider>
      <Routes />
    </ToastProvider>

    <GlobalStyle />
  </Router>
);

export default App;
