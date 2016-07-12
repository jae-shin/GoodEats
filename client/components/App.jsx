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
      url: this.props.urlGET, 
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

  handleSubmitNewPlace(place) {
    $.ajax({
      url: this.props.urlPOST, 
      type: 'POST',
      data: JSON.stringify(place),
      contentType: 'application/json',
      success: function(data) {
        this.getAllPlaces();
        console.log('successfully posted new place: ', place);
      }.bind(this),
      error: function(data) {
        console.error('failed to post new place: ', data);
      }
    });
  }

  componentDidMount() {
    this.getAllPlaces();
  }

  render() {
    return (
      <div className="container">
        <div className="col s12"><h3 className="center">Good Eats</h3></div>
        <CreateForm handleSubmitNewPlace={this.handleSubmitNewPlace.bind(this)}/>
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