import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Main from './Components/Structure/Main';
import AboutContainer from './Components/About/AboutContainer';
import BlogContainer from './Components/Blog/BlogContainer';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/about" component={AboutContainer} />
          <Route exact path="/blog" component={BlogContainer} />
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
