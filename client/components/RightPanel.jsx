var RightPanel = ({handleSubmitNewPlace}) => (
  <div className="col s4 offset-s2">
    <CreateForm handleSubmitNewPlace={handleSubmitNewPlace} />
  </div>
);

window.RightPanel = RightPanel;

    // <Signup />
    // <Signin />
    // <Logout />