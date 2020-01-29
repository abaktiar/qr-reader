import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import QRScanner from './QRScanner';
import HomePage from './HomePage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/scan' exact component={QRScanner} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
