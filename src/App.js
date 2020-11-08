import React, { useState } from "react";

// Components
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


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
