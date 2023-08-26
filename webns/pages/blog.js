import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import BlogPost from '@/components/Blog/BlogPost';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Blog = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="News Events" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="News Events" 
                BGImage="item-bg-2" 
            />

            <BlogPost />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Blog;