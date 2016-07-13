var PlaceListEntry = ({name, time, menus}) => (
  <div className="section flow-text">
    <h5 className="placeName">{name}</h5>
    <div className="placeTime">{time} min walking distance</div>
    <div className="placeMenus">Go for the: {menus}</div> 
    <div className="divider"></div>
  </div>
);

window.PlaceListEntry = PlaceListEntry;