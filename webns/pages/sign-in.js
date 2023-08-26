import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import SignInForm from '@/components/SignIn/SignInForm';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const SignIn = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Sign In" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign In" 
                BGImage="item-bg-2" 
            />

            <SignInForm />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default SignIn;