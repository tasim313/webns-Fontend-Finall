import React, { useState } from 'react'
import styles from '@/components/Contact/ContactForm/ContactForm.module.css'
import ContactInfo from '../ContactInfo/ContactInfo';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import API_BASE_URL from "@/utils/apiBaseUrl";

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}


const alertErrorContent = () => {
    MySwal.fire({
        title: 'ooops!',
        text: 'Your message was not sent. please try again',
        icon: 'error',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${API_BASE_URL}career/message/`;
            const { name, email, phone_number, subject, message } = contact;
            const payload = { name, email, phone_number, subject, message };
            const response = await axios.post(url, payload);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            alertErrorContent();
            window.location.reload();  
        }
    };

    return (
        <div className="ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7">
                        <div className={styles.contactFormWrap}>

                            <h3>Leave your message</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className={styles.formGroup}>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Name" 
                                                className={styles.formControl} 
                                                value={contact.name}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className={styles.formGroup}>
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Email" 
                                                className={styles.formControl} 
                                                value={contact.email}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className={styles.formGroup}>
                                            <input 
                                                type="text" 
                                                name="phone_number" 
                                                placeholder="Phone number" 
                                                className={styles.formControl} 
                                                value={contact.phone_number}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className={styles.formGroup}>
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Subject" 
                                                className={styles.formControl} 
                                                value={contact.subject}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className={styles.formGroup}>
                                            <textarea 
                                                name="message" 
                                                cols="30" 
                                                rows="6" 
                                                placeholder="Write your message..." 
                                                className={styles.formControl} 
                                                value={contact.message}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <div className={styles.sendBtn}>
                                            <button type="submit" className="default-btn">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5">
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;