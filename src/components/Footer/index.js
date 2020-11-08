import React from 'react';

import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';

const Footer = () => {

    const openLink = (url) => {

    }

    return (
        <footer>
            <a href="https://github.com/CFKeef">
                <img src={github} alt="Link to my github"/>
            </a>
            <a href="https://www.linkedin.com/in/patryck-golebiewski-710bab126/">
                <img src={linkedin} alt="Link to my linkedin" />
            </a>
        </footer>
    )
}

export default Footer;