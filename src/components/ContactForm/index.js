import React, { useState } from 'react';
import Axios from 'axios';

import SectionHeader from '../../assets/images/Section3.svg';

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submitForm = (e) => {
        e.preventDefault();
        Axios.post("/contacted", {
            email: email,
            name: name,
            message: message
        }).then(res => {
            if(res.status === 200) alert("Message Sent!");
            else alert("Message Failed");
        }).catch(e => {
            alert("Error Occured :( " + e);
        })
    }

    return (
        <section className="contactform">
            <img src={SectionHeader} alt="Header for contact section" />
            <form onSubmit={submitForm} >
                <div>
                    <label htmlFor="name"></label>
                    <input required id="name" name="name" type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input required id="email" name="email" type="email" placeholder="Email Address" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className="textbox">
                    <label htmlFor="body"></label>
                    <textarea required id="body" name="body" type="text" placeholder="Message" onChange={(e) => {setMessage(e.target.value)}}/>
                </div>
                <div className="button-container">
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </section>
        )
}

export default ContactForm;