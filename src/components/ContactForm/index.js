import React from 'react';

import SectionHeader from '../../assets/images/Section3.svg';

const ContactForm = () => {
    return (
        <section className="contactform">
            <img src={SectionHeader} alt="Header for contact section" />
            <form>
                <div>
                    <label htmlFor="name"></label>
                    <input id="name" name="name" type="text" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input id="email" name="email" type="email" placeholder="Email Address" />
                </div>
                <div className="textbox">
                    <label htmlFor="body"></label>
                    <textarea id="body" name="body" type="text" placeholder="Message" />
                </div>
                <div className="button-container">
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </section>
        )
}

export default ContactForm;