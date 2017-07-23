import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'),
);
