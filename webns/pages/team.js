import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import TeamMember from '@/components/Team/TeamMember';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Team = () => {
    return (
        <>
            <NavbarStyleTwo/>

			<PageBanner 
                pageTitle="Team" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Team" 
                BGImage="item-bg-4" 
            />

            <TeamMember />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Team;