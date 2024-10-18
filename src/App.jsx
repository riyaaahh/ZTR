import { useState } from 'react'
import Navbar from "../src/Components/Navbar"
import HomeSession from "../src/Components/HomeSession"
import Footer from "../src/Components/About"
import InTouch from "../src/Components/InTouch"
import News from "../src/Components/News"
import Projects from "../src/Components/Projects"
import Services from "../src/Components/Services"
import About from "../src/Components/About"

import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
 <Router>
  <Routes>
  <Route path="/Navbar" element={<Navbar/>}/>  
  <Route path="/News" element={<News/>}/>  
  <Route path="/HomeSession" element={<HomeSession/>}/>  
  <Route path="/InTouch" element={<InTouch/>}/>  
  <Route path="/Projects" element={<Projects/>}/>  
  <Route path="/Services" element={<Services/>}/>  
  <Route path="/About" element={<About/>}/>  
  <Route path="/Footer" element={<Footer/>}/>  

  

  </Routes>
 </Router>
  </div>
  )
}

export default App
