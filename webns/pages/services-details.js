import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import ServicesDetailsContent from '@/components/ServicesDetails/ServicesDetailsContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const ServicesDetails = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Services Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Details" 
                BGImage="item-bg-3" 
            />

            <ServicesDetailsContent />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default ServicesDetails;