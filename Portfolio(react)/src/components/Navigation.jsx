import { useState } from 'react';
import { Link } from 'react-router-dom'; //have npm install react-router-dom



export default function Navigation( { logo, items } ) {
    // not using an array here as only one button will be active at a time
const [activeButton, setActiveButton] = useState ([]);

const handleClick = (name) => {
   setActiveButton(name);}

return (
    <nav className = "nav">
        <ul>
            <li className= "Home"> {logo} </li>
            <li > <Link to = {"/Portfolio"}> Portfolio </Link> </li>
            <li> <Link to = {"/Resume"}> Resume </Link> </li>
            <li>  <Link to = {"/Contact"}> Contact </Link> </li>
        </ul>
    </nav>
)
}

