import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import ServicesCard from '@/components/Services/ServicesCard';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Services = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services" 
                BGImage="item-bg-4" 
            />

            <ServicesCard />
		 
            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Services;