import { useState } from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Button } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)
  const click = () => {console.log('test')}
  return (
    <>
      <Router>
        <Navbar/>
        <Button colorScheme='blue' onClick={click}>Button</Button>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
