import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import BlogPost from '@/components/Author/BlogPost/BlogPost';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Author = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Author" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Author" 
                BGImage="item-bg-3" 
            />

            <BlogPost />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Author;