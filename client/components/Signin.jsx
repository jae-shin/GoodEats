class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      time: '',
      menus: ''
    };
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleTimeChange(e) {
    this.setState({time: e.target.value});
  }

  handleMenusChange(e) {
    this.setState({menus: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    var name = this.state.name.trim();
    var time = this.state.time;
    var menus = this.state.menus.trim();

    if (name && time && menus) {
      this.setState({
        name: '',
        time: '',
        menus: ''
      });

      this.props.handleSubmitNewPlace({
        name: name,
        time: time,
        menus: menus
      });
    }
  }
  
  render() {
    return (
      <form className="section" onSubmit={this.handleSubmit.bind(this)}>
        <input 
          type="text" placeholder="name of the place" 
          value={this.state.name}
          onChange={this.handleNameChange.bind(this)}
        />
        <input 
          type="number" placeholder="walking time in mins" 
          value={this.state.time}
          onChange={this.handleTimeChange.bind(this)}
        />
        <input 
          type="text" placeholder="good dishes" 
          value={this.state.menus}
          onChange={this.handleMenusChange.bind(this)}
        />
        <button className="btn waves-effect waves-light" type="submit" name="action">add a new eat spot!</button>
      </form>
    );
  }
}

window.CreateForm = CreateForm;

// <i className="material-icons right">send</i>