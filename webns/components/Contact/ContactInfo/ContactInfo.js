import React from 'react'
import styles from '@/components/Contact/ContactInfo/ContactInfo.module.css'
import axios from 'axios';
import API_BASE_URL from '@/utils/apiBaseUrl';


const ContactInfo = () => {
    
    const [contactData, setContactData] =  React.useState({});
  
    React.useEffect(() => {
      axios.get(`${API_BASE_URL}core/contact/list/`)
        .then(response => {
            
            const data = response.data;
            const { address, Phone, contact_email } = data[0]
            setContactData({ address, Phone, contact_email });
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
        <>
            <div className={styles.contactGetInTouch}>
                <h3>Get in touch</h3>
                <div className={styles.innerBox}>
                    <div className={styles.icon}>
                        <i className="flaticon-pin"></i>
                    </div>
                    <span>Address :</span>
                    <p>{contactData.address}</p>
                </div>
                <div className={styles.innerBox}>
                    <div className={styles.icon}>
                        <i className="flaticon-call"></i>
                    </div>
                    <span>Phone :</span>
                    <p><a href="tel:01988000800">{contactData.Phone}</a></p>
                </div>
                <div className={styles.innerBox}>
                    <div className={styles.icon}>
                        <i className="flaticon-email"></i>
                    </div>
                    <span>Email :</span>
                    <p><a href="info.webnstech@gmail.com">{contactData.contact_email}</a></p>
                </div>
            </div>

        </>
    )
}

export default ContactInfo;