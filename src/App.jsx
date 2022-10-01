import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
