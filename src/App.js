import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import Header from './components/Header';

import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Credits from './pages/Credits';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="https://brt9029.github.io/fantastic-waffle/" component={About} />
        <Route exact path="https://brt9029.github.io/fantastic-waffle/About" component={About} />
        <Route exact path="https://brt9029.github.io/fantastic-waffle/Projects" component={Projects} />
        <Route exact path="https://brt9029.github.io/fantastic-waffle/Contact" component={Contact} />
        <Route exact path="https://brt9029.github.io/fantastic-waffle/Skills" component={Skills} />
        <Route exact path="https://brt9029.github.io/fantastic-waffle/Credits" component={Credits} />

        <Route component={About} />
      </Switch>
    </Router>

  );
}

export default App;
