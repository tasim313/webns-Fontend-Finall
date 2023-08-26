import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import CareerDetailsContent from '@/components/CareerDetails/CareerDetailsContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const CareerDetails = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Career Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Career Details" 
                BGImage="item-bg-1" 
            />

            <CareerDetailsContent />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default CareerDetails;