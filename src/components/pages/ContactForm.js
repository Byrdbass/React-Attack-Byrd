import React, { useState } from 'react';
import { validateEmail } from '../../utils/validEmail'

// ADD A REFRESH PAGE FUNCTION FOR CONTACT FORM HERE 
// IN CASE THEY ENTER TWO ERRORS IN A ROW

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [formMessage, setFormMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {

        // HERE I NEED TO SET ALERT FOR REQUIRED FIELD WHEN CURSOR MOVES
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setFormMessage(inputValue);
        }
        ;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // HERE I NEED TO VALIDATE IF EMAIL IS VALID
        if (!validateEmail(email) || !name) {
            setErrorMessage('Email is invalid, or you forgot to input your Name');
            return;
        }
        alert(`Complete! Thank you ${name}!`);
        setName('');
        setEmail('');
        setFormMessage('')
    }

    return (
        <div className='container'>
            <p>
                Howdy! {name}
                Please fill out this form to contact me
            </p>
            <form className="col m5 l4 s12">
                <div className='row'>
                    <div className='input-field col s6'>
                        <input
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Name"
                        />
                        <label className='transparent'>Name</label>
                    </div>
                    <div className='input-field col s6'>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Email"
                        />
                        <label className='transparent'>Email</label>
                    </div>
                </div>
                <div className='input-field col s6'>
                    <input
                        value={formMessage}
                        name="formMessage"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                    />
                    <label className='transparent'>Message</label>

                    <button className="btn waves-effect waves-light"
                        onClick={handleFormSubmit}
                        type="submit"
                        name="action">Submit
                        <i className="material-icons right transparent">send</i>
                    </button>
                    {errorMessage && (
                        <div>
                            <p className="">{errorMessage}</p>
                        </div>
                    )}
                </div>

            </form>


        </div>
    );
}

export default ContactForm;