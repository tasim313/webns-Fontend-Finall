import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import GoogleMap from '@/components/Contact/Map/GoogleMap';
import ContactForm from '@/components/Contact/ContactForm/ContactForm';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';
      
const Contact = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Us" 
                BGImage="item-bg-5" 
            />

            <GoogleMap/>

            <ContactForm />
  
            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Contact;