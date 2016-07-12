// import React from 'react'
// import { render } from 'react-dom'
// import { Router, Route, Link, browserHistory } from 'react-router'
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var Link = ReactRouter.Link;

var App = ({data}) => (
  <div className="container">
    <h3>Good Eats</h3>
    <CreateForm />
    <PlaceList places={data}/>
  </div>
);

window.App = App;

// <ul>
//   <li><Link to="/places">Places</Link></li>
//   <li><Link to="/add">Add</Link></li>
// </ul>