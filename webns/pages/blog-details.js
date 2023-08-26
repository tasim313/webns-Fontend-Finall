import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import BlogDetailsContent from '@/components/BlogDetails/BlogDetailsContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const BlogDetails = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="News Events Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="News Events Details" 
                BGImage="item-bg-3" 
            />

            <BlogDetailsContent />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default BlogDetails;