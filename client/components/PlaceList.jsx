class PlaceList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      places: [ { name: '', time: '', menus: ''} ]
    };
  }

  getAllPlaces() {
    $.ajax({
      url: '/placesList', 
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        this.setState({places: data});
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
      <div className="placeList">
        {this.state.places.map(place =>
          <PlaceListEntry name={place.name} time={place.time} menus={place.menus} />
        )}
      </div>
    );
  }
}


window.PlaceList = PlaceList;

