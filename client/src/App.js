// import files
import * as React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Comments from './pages/Comments';
import ProgramHer from './pages/ProgramHer';
import Nav from './components/Nav';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import 'chakraProvider' component
import { ChakraProvider } from '@chakra-ui/react';

// app function
function App({ Component }) {
  return (
    <ChakraProvider>
      <Component />
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
  </ChakraProvider>  
  );
}

// export app
export default App;
