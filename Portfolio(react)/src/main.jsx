// setting up react 
import ReactDOM from 'react-dom/client' // virtual DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './pages/error.jsx' 
import HomePage from './pages/homepage.jsx'
import AboutPage from './components/about.jsx'
import ResumePage from './pages/resume.jsx'
import PortfolioPage from './pages/portfolio.jsx'
import './index.css'

//creating teh react router for all pages
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [{
    // index = homepage this means the landing ie. directional page
    index:true, 
    element: <HomePage/>},
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
  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);