import React, { useState } from "react";

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [view, setView] = useState('');

  const determineView = () => {
    switch(view) {
      case 'Resume':
        return (
          <React.Fragment>
            <Resume />
          </React.Fragment>
        )

      case 'Contact':
        return (
          <React.Fragment>
            <ContactForm />
          </React.Fragment>
        )
        
      default:
        return (
          <React.Fragment>
            <Hero />
            <Projects />
            <ContactForm />
          </React.Fragment>
        )
    }
  }

  return (
    <div className="App">
      <Navbar
        setView={setView}
      />
      {determineView()}
      <Footer />
    </div>
  );
}

export default App;
