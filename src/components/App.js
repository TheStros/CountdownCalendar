import React, { Component } from "react";
import Countdown from "../Countdown/Countdown";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import CalendarPage from './Calendar';
import Resources from './Resources';
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
  <div>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/countdown" component={Countdown} />
        <Route path="/resources" component={Resources} />
      </Switch>
    </Router>
  </div>
  );
}
}
  
export default App;
