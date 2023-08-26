import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import ForgotPasswordForm from '@/components/ForgotPassword/ForgotPasswordForm';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const ForgotPassword = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Forgot Password" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Forgot Password" 
                BGImage="item-bg-3" 
            />

            <ForgotPasswordForm />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default ForgotPassword;