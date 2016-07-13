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
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </ul>
          {this.props.children}
        </nav>
        <div className="divider"></div>
      </div>
    );
  }
}

window.App = App;