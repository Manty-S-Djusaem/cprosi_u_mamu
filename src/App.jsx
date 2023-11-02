import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import MainPage from './pages/MainPage/MainPage.jsx'
import Recipes from './pages/Recipes/Recipes.jsx'
import Header from './content/Header/Header.jsx'
import Footer from './content/Footer/Footer'
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );

}

export default App
