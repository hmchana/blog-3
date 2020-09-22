import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { Provider } from 'react-redux';
import ContactSearch from './components/contacts/ContactSearch';
import store from './store';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const searchUsers = async (text) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?${text}`
    );

    setUsers(res.data);
  };

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <ContactSearch searchUsers={searchUsers} />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
