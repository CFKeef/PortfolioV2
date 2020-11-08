import { useState } from "react";

// Components
import Footer from './components/Footer';


function App() {
  const [view, setView] = useState('');

  return (
    <div className="App">
      <Footer />
    </div>
  );
}

export default App;
