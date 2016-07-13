class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignOut() {
    $.ajax({
      url: '/signoutUser', 
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        browserHistory.push('/');
        console.log('successfully signed out');
      }.bind(this),
      error: function(data) {
        console.error('failed to sign out');
      }
    });
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
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
            <li className="white-text right" onClick={this.handleSignOut.bind(this)}>Sign Out</li>
          </ul>
          {this.props.children}
        </nav>
        <div className="divider"></div>
      </div>
    );
  }
}

window.App = App;