import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
// import HeroPage from './components/pages/HeroPage'
import {Outlet} from "react-router-dom"
// import AboutPage from './components/pages/AboutPage'

function App() {
  

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
