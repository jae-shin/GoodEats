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
        <div className="row">
          <PlaceList places={this.state.data}/>
          <CreateForm handleSubmitNewPlace={this.handleSubmitNewPlace.bind(this)}/>
        </div>
      </div>
    );
  }
}

window.App = App;

