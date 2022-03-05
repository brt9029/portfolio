import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import Header from './components/Header';

import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/About" component={About}/>
        <Route exact path="/Projects" component={Projects}/>
        <Route exact path="/Contact" component={Contact}/>

        <Route component={NoMatch} />
      </Switch>
    </Router>

  );
}

export default App;
