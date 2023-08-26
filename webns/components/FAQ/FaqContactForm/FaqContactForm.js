import React, { useState } from 'react'
import styles from '@/components/FAQ/FaqContactForm/FaqContactForm.module.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import API_BASE_URL from '@/utils/apiBaseUrl';

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
            console.log(error)
        }
    };

    return (
        <div className="pb-100">
            <div className="container">
                <div className="section-title">
                    <h2>You can ask directly about the IT related services</h2>
                </div>
 
                <div className={styles.faqContactForm}>
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
        </div>
    )
}

export default ContactForm;