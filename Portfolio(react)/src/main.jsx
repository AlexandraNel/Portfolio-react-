// setting up react 
import ReactDOM from 'react-dom/client' // virtual DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './pages/error.jsx' 
import HomePage from './pages/homepage.jsx'
import AboutPage from './pages/about.jsx'


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
  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);