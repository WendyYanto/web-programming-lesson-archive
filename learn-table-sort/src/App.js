import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/home"
import About from "./pages/about"
import Contact from './pages/contact';
import Profile from './pages/profile';
import Photos from './pages/photos'
import User from './pages/user';
import SubscribedUser from './pages/subscribed-user';

import { useEffect } from 'react';
import { getUsers, getMovies, getMaleUsers, getFemaleUsers } from './firebase';

function App() {

  useEffect(() => {
    async function loadMovies() {
      const movies = await getMovies()
      console.log(movies)
    }

    loadMovies()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/about-me" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:username/photo/:photoName" element={<Profile />} />
        <Route path="/photos/:id" element={<Photos />} />
        <Route path="/user" element={<User />} />
        <Route path="/subscribed-user" element={<SubscribedUser />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;