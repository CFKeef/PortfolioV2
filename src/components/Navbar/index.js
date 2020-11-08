import React from 'react';

import Logo from '../../assets/images/LOGO1.svg';

const Navbar = (props) => {
    return (
        <nav>
            <div className="logo">
                <button onClick={() => props.setView("Home")}>
                    <img src={Logo} alt="Logo for website" />
                </button>
            </div>
            <ul>
                <li>
                    <button onClick={() => props.setView("Resume")}>
                        <h1>Resume</h1>
                    </button>
                </li>
                <li>
                    <button className="contactbtn" onClick={() => props.setView("Contact")}>
                        <h1>Contact</h1>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;