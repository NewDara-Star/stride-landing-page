import './App.css'
import { Routes, Route  } from 'react-router-dom'
import HomePage from './pages/HomePage' 
import { BrowserRouter } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'
import BlogPage from './pages/BlogPage'
import JoinWaitlistPage from './pages/JoinWaitlistPage' 


function App() {
  

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/join-waitlist" element={<JoinWaitlistPage />} />



  </Routes>
</BrowserRouter>
  )
}

export default App
