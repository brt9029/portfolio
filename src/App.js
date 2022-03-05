import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div className="App">
      <Nav />
      <main>
        {!contactSelected ? (
          <>
            <About />
          </>
        ) : (
          <Projects />
        )}
      </main>
    </div>
  );
}

export default App;
