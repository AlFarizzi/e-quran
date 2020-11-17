import React from 'react';
import Home from './Components/Home';
import Baca from './Components/Baca';
import Navbar from './Components/Navbar';
import {Switch,Route} from 'react-router-dom';

function App(props) {
  return (
    <div>
    <Navbar/>
      <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/baca/:nomor">
              <Baca/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;