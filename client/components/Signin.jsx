class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSignup(e) {
    e.preventDefault();

    var username = this.state.username;
    var password = this.state.password;

    if (username && password) {
      this.setState({
        username: '',
        password: ''
      });

      $.ajax({
        url: '/signinUser', 
        type: 'POST',
        data: JSON.stringify({username: username, password: password}),
        contentType: 'application/json',
        success: function(data) {
          browserHistory.push('/places');
          console.log('successfully signed in!');
        }.bind(this),
        error: function(data) {
          alert('Incorrect username or password!');
        }
      });
    }
  }
  
  render() {
    return (
      <form className="section" onSubmit={this.handleSignup.bind(this)}>
        <input 
          type="text" placeholder="username" 
          value={this.state.username}
          onChange={this.handleUsernameChange.bind(this)}
        />
        <input 
          type="password" placeholder="password" 
          value={this.state.password}
          onChange={this.handlePasswordChange.bind(this)}
        />
        <button className="btn waves-effect waves-light" type="submit" name="action">sign in</button>
      </form>
    );
  }
}

window.Signin = Signin;

// <i className="material-icons right">send</i>