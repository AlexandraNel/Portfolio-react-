import { useState } from 'react';
import { } from ;

function Layout() {
const [buttons, setButtons] = useState ([]);

return (
    <nav class = "nav">
        <ul>
            <li> Home </li>
            <li> Portfolio </li>
            <li> Resume </li>
            <li> Contact </li>
        </ul>
    </nav>
)
}

export default Layout;