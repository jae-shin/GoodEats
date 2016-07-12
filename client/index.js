window.Router = window.ReactRouter.Router;
window.Route = window.ReactRouter.Route;
window.Link = window.ReactRouter.Link;
window.browserHistory = window.ReactRouter.browserHistory;
window.IndexRoute = window.ReactRouter.IndexRoute;


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PlaceList}/>
      <Route path="places" component={PlaceList}/>
      <Route path="create" component={CreateForm}/>
      <Route path="signup" component={Signup}/>
    </Route>
  </Router>
), document.getElementById('app'));

