"use strict";

var React = require('react');

var Router = require('react-router');
var hashHistory = require('react-router').hashHistory;
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Router history={hashHistory}>
        <Route name="app" path="/" history={hashHistory} handler="{require('./components/app')}">
            <DefaultRoute handler="{require('./components/homePage')}" />
            <Route name="authors" handler="{require('./components/authors/authorPage')}" />
            <Route name="about" handler="{require('./components/about/aboutPage)}" />
        </Route>
    </Router>
);

module.exports = routes;

