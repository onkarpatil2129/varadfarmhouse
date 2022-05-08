import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Bookings from './components/pages/Bookings';
import Map from './components/pages/Map';
import Galley from './components/pages/Gallery';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Map} />
          <Route path='/bookings' component={Bookings} />
          <Route path='/gallery' component={Galley} />
        </Switch>
      </Router>
    </>
  );
}

export default App;