// ReactDOM.render(<App data={exampleData}/>, document.getElementById('app'));
// 
// ReactDOM.render(<App 
//   urlGET="http://127.0.0.1:8080/places" 
//   urlPOST="http://127.0.0.1:8080/create"
//   />, document.getElementById('app'));

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
    </Route>
  </Router>
), document.getElementById('app'));

