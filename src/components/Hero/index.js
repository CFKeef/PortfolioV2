import React from 'react';

import Mural from '../../assets/images/mural.svg';
import SectionHeader from '../../assets/images/Section1.svg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="bio">
                <h1>Hi, I'm <mark className="pink-highlight">Patryck Golebiewski</mark></h1>
                <h2>Computer Science and Accounting student based in <mark className="purple-highlight">NYC</mark></h2>
                <img src={SectionHeader} alt="Check out work below" />
            </div>
            <img src={Mural} alt="Circle mural Hero" />
        </section>
    )
}

export default Hero;