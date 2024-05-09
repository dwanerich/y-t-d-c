import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Celebrity from './components/Celebrity';
import Management from './components/Management';
import Editorial from './components/Editorial';
import About from './components/About';
import Home from './components/Home';
import { Press } from './components/Press';
import { Contact } from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/celebrity" element={<Celebrity />} />
        <Route exact path="/advertising" element={<Management />} />
        <Route exact path="/editorial" element={<Editorial />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/press" element={<Press />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
