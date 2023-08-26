import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import CaseStudiesDetailsContent from '@/components/CaseStudiesDetails/CaseStudiesDetailsContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const CaseStudiesDetails = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Case Studies Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Case Studies Details" 
                BGImage="item-bg-4" 
            />

            <CaseStudiesDetailsContent />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default CaseStudiesDetails;