import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import Error from '@/components/Error/Error';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';
      
const ErrorPage = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="404 Error" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="404 Error" 
                BGImage="item-bg-3" 
            />

			<Error />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default ErrorPage;