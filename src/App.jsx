import './App.css'
import { Routes, Route  } from 'react-router-dom'
import HomePage from './pages/HomePage' 
import { BrowserRouter } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'


function App() {
  

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/pricing" element={<PricingPage />} />

  </Routes>
</BrowserRouter>
  )
}

export default App
