import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import API_BASE_URL from '@/utils/apiBaseUrl';


const Footer = () => {
    const [contactData, setContactData] =  React.useState({});
  
    React.useEffect(() => {
      axios.get(`${API_BASE_URL}api/contact/`)
        .then(response => {
            const data = response.data;
            const { address, Phone, contact_email } = data
            setContactData({ address, Phone, contact_email });
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    const [LogoData, setLogoData] =  React.useState({});
  
    React.useEffect(() => {
      axios.get(`${API_BASE_URL}api/logo/`)
        .then(response => {
            const data = response.data
            const image = data.image[0].url
            setLogoData({image});
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                {/* <div className="footer-widget-logo">
                                <div className="sticky top-0 z-10 mb-6 flex items-center justify-center bg-white pb-6">
                                    <Link href="/">
                                        
                                    <img src={LogoData.image}
                                        // style={{
                                        //     maxWidth: '100%', 
                                        //     height: 'auto',   
                                        // }} 
                                        height={280}
                                        width={280}
                                        alt="image" />
                                
                                    </Link>
                                </div>
                                </div> */}
                                
                                <ul className="footer-widget-social">
                                    <li><span>Follow us:</span></li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="ri-twitter-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget ps-5">
                                <h3>Quick links</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/case-studies">
                                           Case studies
                                        </Link>
                                        
                                    </li>
                                    <li>
                                        <Link href="/services">
                                           Managed services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-of-service">
                                            Terms & conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                           Privacy policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            Help & FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>IT Services</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/services-details">
                                            IT support services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            IT consultancy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            Cyber security
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            Privacy policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            IT solutions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact info</h3>

                                <ul className="footer-information">
                                    <li className="d-flex">
                                        <span className="pe-2">Address:</span> 
                                        {contactData.address}
                                    </li>
                                    <li className="d-flex">
                                        <span className="pe-2">Phone:</span>
                                        <a href="tel:15143125678">{contactData.Phone}</a>
                                    </li>
                                    <li className="d-flex">
                                        <span className="pe-2">Email:</span>
                                        <a href="mailto:hello@biza.com">{contactData.contact_email}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="copyright-area-content">
                            <p>
                                Copyright © {currentYear} WEBNS Technology LTD All Rights 
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;