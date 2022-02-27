// import files
import * as React from 'react';
// import pages
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Comments from './pages/Comments';
import ProgramHer from './pages/ProgramHer';
// import react-router-dom
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import 'chakraProvider' component
import { ChakraProvider } from '@chakra-ui/react';
// import components
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";

// app function
function App() {
  return (
    <>
    <ChakraProvider> 
      
    <Router>
    <div className="App">
      
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProgramHer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/contact" component={Contact} />
        </Switch>
      
    
      
      <Footer />
    </div>
    </Router>
    </ChakraProvider> 
    </>
  );
}

// export app
export default App;
