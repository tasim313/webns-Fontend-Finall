import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import styles from '@/components/HomeTwo/AboutCompany/AboutCompany.module.css'
import FunFact from './FunFact'
import API_BASE_URL from '@/utils/apiBaseUrl';


const AboutCompany = () => {

    const [AboutContentData, setAboutContentData] =  React.useState({});
  
    React.useEffect(() => {
      axios.get(`${API_BASE_URL}core/about/list/`)
        .then(response => {
            
            const data = response.data
            const { title, short_description, support_description,years_of_experience,vision,mission,start_year} = data[0]
            let short_description_new_value = short_description.slice(0, 280)
            setAboutContentData({ title, short_description_new_value, support_description,years_of_experience,vision,mission });
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    const [contactData, setContactData] =  React.useState({});
  
    React.useEffect(() => {
      axios.get(`${API_BASE_URL}core/contact/list/`)
        .then(response => {
            const data = response.data;
            if (data && data.length > 0) {
            const {  Phone } = data[0] 
            setContactData({  Phone });
        } else {
            console.log("No contact data available");
            setContactData({});
          }
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    return (
        <>
            <div className={styles.aboutArea}>
                <div className="container ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.aboutContent}>
                                <span>ABOUT OUR COMPANY</span>
                                <h3>{AboutContentData.title}</h3>
                                <p>{AboutContentData.short_description_new_value}</p>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <div className={styles.icon}>
                                                <i className="flaticon-customer-service"></i>
                                            </div>
                                            <h4>24/7 User support</h4>
                                            <p>{AboutContentData.support_description}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <div className={styles.icon}>
                                                <i className="flaticon-experience"></i>
                                            </div>
                                            <h4>{AboutContentData.years_of_experience} Years of experience</h4>
                                            <p>{AboutContentData.vision}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.aboutBtn}>
                                    <Link href="/about" legacyBehavior>
                                        <a className="default-btn">Learn more</a>
                                    </Link>
                                    <a href="tel:15143125678" className={styles.phoneNumber}>
                                        <i className="ri-phone-fill"></i> {contactData.Phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <FunFact />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCompany;