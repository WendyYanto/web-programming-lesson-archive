import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/home"
import About from "./pages/about"
import Contact from './pages/contact';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about-me" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:username/photo/:photoName" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;