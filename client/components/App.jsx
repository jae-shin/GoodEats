// import React from 'react'
// import { render } from 'react-dom'
// import { Router, Route, Link, browserHistory } from 'react-router'
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var Link = ReactRouter.Link;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="col s12">
          <h3 className="center"><Link to="/">Good Eats</Link></h3></div>
        <div className="divider"></div>
        <nav className="brown-text teal lighten-2">
          <ul role="nav">
            <Link to="/places">Eat Spots</Link>
            <Link to="/create">Add New</Link>
          </ul>
          {this.props.children}
        </nav>
        <div className="divider"></div>
      </div>
    );
  }
}

window.App = App;


// <CreateForm handleSubmitNewPlace={this.handleSubmitNewPlace.bind(this)}/>
// <PlaceList places={this.state.data}/>
// <ul>
//   <li><Link to="/places">Places</Link></li>
//   <li><Link to="/add">Add</Link></li>
// </ul>