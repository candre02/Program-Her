// import files
import * as React from 'react'
// import pages
import About from './not pages/About'
import Contact from './not pages/Contact'
import Services from './not pages/Services'
import SingleComment from './not pages/Comments'
import ProgramHer from './not pages/ProgramHer'
import Profile from './not pages/Profile'
// import react-router-dom
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
// import 'chakraProvider' component
import { ChakraProvider } from '@chakra-ui/react'
// import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

// import statement @apollo/client
import { setContext } from '@apollo/client/link/context';

import CommentList from './components/CommentList'



const httpLink = createHttpLink({
  uri: "/graphql",
});

// setContext: create a middleware function that will retrieve the token, combine it with httpLink
// authLink: setContext() to retrieve the token from localStorage, set the HTTP req headers of evry req to include the token
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      // ... spread operator
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // combine authlink and httplink
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// app function
function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={ProgramHer} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/singlecomment" component={SingleComment} />
              <Route exact path="/comment/:id" component={CommentList} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  )
}

// export app
export default App
