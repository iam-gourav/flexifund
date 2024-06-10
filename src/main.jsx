import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import HeroPage from './components/pages/HeroPage.jsx'
import AboutPage from "./components/pages/AboutPage.jsx"
import HowItWorksPage from './components/pages/HowItWorksPage.jsx'
import FaqsPage from './components/pages/FaqsPage.jsx'
import ContactPage from './components/pages/ContactPage.jsx'
import NotFound from './components/pages/NotFound.jsx'
import ApplyNowPage from './components/pages/ApplyNowPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<HeroPage/>
      },
      {
        path:"about",
        element:<AboutPage/>
      },
      {
        path:"howitworks",
        element:<HowItWorksPage/>
      },
      {
        path:"faqs",
        element:<FaqsPage/>
      },
      {
        path:"contact",
        element:<ContactPage/>
      },
      {
        path:"applynow",
        element:<ApplyNowPage/>
      },
      {
        path:"*",
        element:<NotFound/>
      },
    ]

    
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
