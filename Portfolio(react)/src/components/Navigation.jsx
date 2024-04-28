import { useState } from 'react';
import { Link } from 'react-router-dom'; //have npm install react-router-dom



export default function Navigation( { logo, items } ) {
    // not using an array here as only one button will be active at a time
const [activeButton, setActiveButton] = useState (null);

const handleClick = (name) => {
   setActiveButton(name);}

return (
    <nav className = "nav">
        <ul>
            <li className= "Home"> {logo} </li>
            <li> Portfolio </li>
            <li> Resume </li>
            <li> Contact </li>
        </ul>
    </nav>
)
}

