import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory} from 'react-router';
import routes from './routes';
import App from './App';
import Content from './components/content';

ReactDOM.render(
  // <Router history={hashHistory} routes={routes} />
  <App>
    <Content/>
  </App>
  , document.getElementById('root'),
);
