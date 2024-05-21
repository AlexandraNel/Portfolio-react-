// setting up react 
import ReactDOM from 'react-dom/client' // virtual DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './pages/error.jsx' 
import AboutPage from './pages/about.jsx'
import ResumePage from './pages/resume.jsx'
import PortfolioPage from './pages/portfolio.jsx'
import ContactPage from './pages/contact.jsx'
import './index.css'

//creating teh react router for all pages
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [{
    // index = homepage this means the landing ie. directional page
    index:true, 
    element: <AboutPage/>},
    //These are now our children with paths to them ie. this is our router
    {
      path: 'about',
      // this could be a component or a page
      element: <AboutPage />
    },
    {
      path: 'resume',
      element: <ResumePage />
    },
    {
      path: 'portfolio',
      element: <PortfolioPage />
    },
    {
      path: 'contact',
      element: <ContactPage />
    },
  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);