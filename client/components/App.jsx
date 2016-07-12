// import React from 'react'
// import { render } from 'react-dom'
// import { Router, Route, Link, browserHistory } from 'react-router'
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var App = () => (
  <div>
    <h3>Good Eats</h3>
    <ul>
      <li><Link to="/places">Places</Link></li>
      <li><Link to="/add">Add</Link></li>
    </ul>
  </div>
);

window.App = App;