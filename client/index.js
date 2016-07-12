// import ReactDOM from 'react-dom'
// import App from './components/App'

// ReactDOM.render(<App data={exampleData}/>, document.getElementById('app'));
ReactDOM.render(<App 
  urlGET="http://127.0.0.1:8080/places" 
  urlPOST="http://127.0.0.1:8080/create"
  />, document.getElementById('app'));