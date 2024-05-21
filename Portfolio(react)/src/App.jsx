import Navigation from './components/Navigation';
import Footer from './components/Footer';
import logo from './assets/BrandTiger.png'

import { Outlet } from 'react-router-dom';

export default function App() {

  const logoImage = <img src={logo} alt="Company Logo" style={{ width: '100px' }} />; //defining logo in app for use across children
  const contactInfo = <p><a href="mailto:info@alexandranel.com">Contact</a></p>;
  const git = <p><a href="https://github.com/AlexandraNel">GitHub</a></p>;
  const linkedIn= <a href="https://www.linkedin.com/in/alexa-nel/"><img src= '/public/In-Blue.png'></img></a>;
  const instagram= <a href="https://www.instagram.com/alexa_n_motion/"><img src= '/public/instagram.svg'></img></a>;

  
  return (
    //fragment indicator to return multiple elements without wrapping them in a div or 
    // other container element. 
    <>
      <Navigation logo= {logoImage} />
      <Outlet />
      <Footer contact= {contactInfo} logo= {logoImage} git={git} linkedIn={linkedIn} instagram={instagram} />
      
   </>
  )
}


