"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={require('./components/app')}>
            <IndexRoute component={require('./components/homePage')} />
            <Route path="authors" component={require('./components/authors/authorPage')} />
            <Route path="about" component={require('./components/about/aboutPage')} />
        </Route>
    </Router>
), document.getElementById('app'));
