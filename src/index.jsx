import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
/*
const routing = (
  <Router basename="/betaThunderWebsite">
    <div className={'outerWrapper'}>
      <Route exact path="/" component={App} />
    </div>
  </Router >
)
*/
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
