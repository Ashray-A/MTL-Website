import { useState } from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
