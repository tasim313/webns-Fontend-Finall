import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import CareerContent from '@/components/Career/CareerContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Career = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Career" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Career" 
                BGImage="item-bg-4" 
            />

            <CareerContent />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Career;