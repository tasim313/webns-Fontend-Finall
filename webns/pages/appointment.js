import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
// import HowCanWeHelp from '@/components/Common/HowCanWeHelp2/HowCanWeHelp';
import WhyChooseUs from '@/components/About/WhyChooseUs/WhyChooseUs';
import AppointmentForm from '@/components/Appointment/AppointmentStyle2/AppointmentForm';
import TestimonialSlider from '@/components/Common/TestimonialsTwo/TestimonialSlider';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Appointment = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Appointment" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Appointment" 
                BGImage="item-bg-1" 
            />

            <div className="ptb-100">
                {/* <HowCanWeHelp /> */}
                <WhyChooseUs />
            </div>
            

            <AppointmentForm />

            <TestimonialSlider />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Appointment;