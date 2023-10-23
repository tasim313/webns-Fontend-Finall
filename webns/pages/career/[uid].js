import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '@/components/CareerDetails/CareerDetailsContent.module.css'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';
import Error from '@/components/Error/Error';
import API_BASE_URL from '@/utils/apiBaseUrl';

const CareerDetailsContent = () => {

    const router = useRouter();
    const { uid } = router.query;
    const [CareerDetailsCardContent, setCareerDetailsCardContent] =  React.useState([]);
    
    React.useEffect(() => {
        if (uid) {
            axios
            .get(`${API_BASE_URL}api/career/${uid}/`)
            .then(response => {
                const data = response.data;
                setCareerDetailsCardContent(data);  
            })
            .catch(error => {
              console.log(error);
            });
        }
        
    }, [uid]);
    

    if (!CareerDetailsCardContent) {
        return <div>
             <NavbarStyleTwo />
             <PageBanner 
                pageTitle="Career Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Career Details" 
                BGImage="item-bg-1" 
            />
            <Error />
            <Footer />
        </div>;
      }


    return (
        <> 
            
            <NavbarStyleTwo />
            <PageBanner 
                pageTitle="Career Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Career Details" 
                BGImage="item-bg-1" 
            />

            <div className="career-details-area pt-100 pb-100">
                <div className="container">
                    <div className={styles.careerDetailsDesc}>
                        <span>WE'RE LOOKING FOR</span>
                        <h1>{CareerDetailsCardContent.title}</h1>

                        <div className="p-2 d-none d-md-block"></div>
             
                        <h4>Job Description</h4>
                        <p>{CareerDetailsCardContent.description}</p>

                        <div className="p-2 d-none d-md-block"></div>
            
                        <h4>Roles & Responsibilities:</h4>
                        <p>{CareerDetailsCardContent.responsibilities}</p>

                        <div className="p-2 d-none d-md-block"></div>
                
                        <h4>Qualifications:</h4>
                        <p>{CareerDetailsCardContent.qualifications}</p>

                        <div className="p-2 d-none d-md-block"></div>
            
                        <h4>Experience Requirements:</h4>
                        <p>{CareerDetailsCardContent.experience}</p>

                        <div className="p-2 d-none d-md-block"></div>
                
                        <h4>Benefits</h4>
                        <p>{CareerDetailsCardContent.benefits}</p>
                    </div>
                </div>
            </div>

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default CareerDetailsContent;