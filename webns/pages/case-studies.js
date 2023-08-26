import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import CaseStudiesCard from '@/components/CaseStudies/CaseStudiesCard';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const CaseStudies = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Blogs" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blogs" 
                BGImage="item-bg-2" 
            />

            <CaseStudiesCard />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default CaseStudies;