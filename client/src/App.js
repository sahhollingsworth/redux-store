import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Import component that allows store access to all children components
import { Provider } from 'react-redux';
// Import our custom store context instance
import store from './utils/store';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={ client }>
      <Router>
        <div>
        {/* Import the Provider to make the Redux store available to any nested components that need to access our Redux store. */}
          <Provider store={ store }>
            <Nav />
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/signup" component={ Signup } />
              <Route exact path="/success" component={ Success } />
              <Route exact path="/orderHistory" component={ OrderHistory } />
              <Route exact path="/products/:id" component={ Detail } />
              <Route component={ NoMatch } />
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
