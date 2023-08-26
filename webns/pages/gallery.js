import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import GalleryContent from '@/components/Gallery/GalleryContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Gallery = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Gallery" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Gallery" 
                BGImage="item-bg-5" 
            />

            <GalleryContent />
	 

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Gallery;