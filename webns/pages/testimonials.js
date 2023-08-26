import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import TestimonialsContent from '@/components/Testimonials/TestimonialsContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Testimonials = () => {
    return (
        <>
            <NavbarStyleTwo/>

			<PageBanner 
                pageTitle="Testimonials" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Testimonials" 
                BGImage="item-bg-2" 
            />

            <TestimonialsContent />
	 

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Testimonials;