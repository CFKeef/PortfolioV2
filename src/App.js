import React, { useState } from "react";

// Components
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';



function App() {
  const [view, setView] = useState('');

  const determineView = () => {
    switch(view) {
      case 'Resume':
        return (
          <React.Fragment>
          
          </React.Fragment>
        )

      default:
        return (
          <React.Fragment>
            <Projects />
            <ContactForm />
          </React.Fragment>
        )
    }
  }

  return (
    <div className="App">
      {determineView()}
      <Footer />
    </div>
  );
}

export default App;
