import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import TermsOfServiceContent from '@/components/TermsOfService/TermsOfServiceContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const TermsOfService = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Terms of Service" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Terms of Service" 
                BGImage="item-bg-2" 
            />

            <TermsOfServiceContent />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default TermsOfService;