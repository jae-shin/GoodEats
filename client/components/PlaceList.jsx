var PlaceList = ({places}) => (
  <div className="placeList">
    {places.map(place =>
      <PlaceListEntry name={place.name} time={place.time} menus={place.menus} />
    )}
  </div>
);

window.PlaceList = PlaceList;