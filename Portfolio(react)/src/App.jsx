import Navigation from './components/Navigation';
import Footer from './components/Footer';
import logo from './assets/BrandTiger.png'

import { Outlet } from 'react-router-dom';

export default function App() {

  const logoImage = <img src={logo} alt="Company Logo" style={{ width: '100px' }} />; //defining logo in app for use across children
  const contactInfo = <p>Contact us at <a href="mailto:info@alexandranel.com">Alexandra Nel</a></p>;

  return (
    //fragment indicator to return multiple elements without wrapping them in a div or 
    // other container element. 
    <>
      <Navigation logo= {logoImage} />
      <Outlet />
      <Footer contact= {contactInfo} logo= {logoImage} />
      
   </>
  )
}


