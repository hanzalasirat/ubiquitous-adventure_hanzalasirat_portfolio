import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rout from './Portfolio/Rout'
import Footer from './Portfolio/Footer'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rout/>
    <Footer/>



  </StrictMode>,
)
