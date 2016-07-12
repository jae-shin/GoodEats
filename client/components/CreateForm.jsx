class CreateForm extends React.Component {
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

  handlePost(place) {
    $.ajax({
      url: '/createNewPlace', 
      type: 'POST',
      data: JSON.stringify(place),
      contentType: 'application/json',
      success: function(data) {
        // browserHistory push
        browserHistory.push('/places');
        console.log('successfully posted new place: ', place);
      }.bind(this),
      error: function(data) {
        console.error('failed to post new place: ', data);
      }
    });
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

      this.handlePost({
        name: name,
        time: time,
        menus: menus
      });
    }
  }
  
  render() {
    return (
      <div>
        <form className="section" onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type="text" placeholder="name of the food spot..." 
            value={this.state.name}
            onChange={this.handleNameChange.bind(this)}
          />
          <input 
            type="number" placeholder="walking time (mins) from Hack Reactor (please enter a number)..." 
            value={this.state.time}
            onChange={this.handleTimeChange.bind(this)}
          />
          <input 
            type="text" placeholder="include recommended dishes here (separate multiple with commas)..." 
            value={this.state.menus}
            onChange={this.handleMenusChange.bind(this)}
          />
          <button className="btn waves-effect waves-light" type="submit" name="action">add a new eat spot!</button>
        </form>
      </div>
    );
  }
}

window.CreateForm = CreateForm;

// <i className="material-icons right">send</i>