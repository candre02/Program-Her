// import files
import * as React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Comments from './pages/Comments';
import ProgramHer from './pages/ProgramHer';

import { Route, BrowserRouter as Router } from "react-router-dom";
// import 'chakraProvider' component
import { ChakraProvider } from '@chakra-ui/react';


import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";

// app function
function App({Component}) {
  return (
    <>
    <ChakraProvider> 
       <Component />
    <Router>
      <Navbar />
      
        <Route exact path="/" component={ProgramHer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/contact" component={Contact} />
      
    </Router>
    </ChakraProvider>   
    <div className="App">
      <h1>Program Her </h1>
      <Navbar />
      <Footer />
    </div>
    </>
  );
}

// export app
export default App;
