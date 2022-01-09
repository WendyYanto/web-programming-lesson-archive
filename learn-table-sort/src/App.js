import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/home"
import About from "./pages/about"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about-me" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;