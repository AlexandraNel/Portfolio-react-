// import Navigation from './components/Navigation';
// import Footer from './components/Footer';

import './App.css';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    //fragment indicator to return multiple elements without wrapping them in a div or 
    // other container element. 
    <>
      {/* <Navigation /> */}
      <Outlet />
      {/* <Footer /> */}
      
   </>
  )
}


