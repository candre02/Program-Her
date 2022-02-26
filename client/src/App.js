// import files
import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Comments from './pages/Comments';
import ProgramHer from './pages/ProgramHer';
import Nav from './components/Nav';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';

// app function
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={ProgramHer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

// export app
export default App;
