// import React from 'react'
// import { render } from 'react-dom'
// import { Router, Route, Link, browserHistory } from 'react-router'
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var Link = ReactRouter.Link;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [ { name: '', time: '', menus: ''} ]
    };
  }

  getAllPlaces() {
    $.ajax({
      url: this.props.url, 
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(data) {
        console.error('failed to retreive from list of places: ', data);
      }
    });
  }

  componentDidMount() {
    this.getAllPlaces();
  }

  render() {
    return (
      <div className="container">
        <h3>Good Eats</h3>
        <CreateForm />
        <PlaceList places={this.state.data}/>
      </div>
    );
  }
}

window.App = App;

// <ul>
//   <li><Link to="/places">Places</Link></li>
//   <li><Link to="/add">Add</Link></li>
// </ul>