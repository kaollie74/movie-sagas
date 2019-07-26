import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';

// Routes
import Home from '../Routes/Home/Home';
import Details from '../Routes/Details/Details';
import EditPage from '../Routes/EditPage/EditPage';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <>
      <div className="App">
        <p>This is App</p>

      </div>

      <section>
        <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/Details" component={Details}/>
          <Route path="/EditPage" component={EditPage}/>
        </Router>
      </section>

      </>
    );
  }
}

export default App;
