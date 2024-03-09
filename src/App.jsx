import { Routes, Route } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import NavbarE from './Componants/Navbar'
import Footer from './Componants/Footer'
import Landing from './Componants/Landing'
import Gallery from './Componants/Gallery'
import ContactUs from './Componants/ContactUs'
import EnquiryDetails from './Componants/EnquiryDetails'





function App() {

  return (
    <>
      <NavbarE />
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/ContactUs' element ={<ContactUs/>}/>
        <Route path='/EnquiryDetails' element ={<EnquiryDetails/>}/>

      </Routes>
      <Footer />
    </>
  )
}

export default App
