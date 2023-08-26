import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '@/components/ServicesDetails/ServicesDetailsContent.module.css'
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import Footer from '@/components/_App/Footer';
import Error from '@/components/Error/Error';
import API_BASE_URL from '@/utils/apiBaseUrl';

const ServicesDetailsContent = () => {
    
    const router = useRouter();
    const { uid } = router.query;
    const [ServicesDetailsCardContent, setServicesDetailsCardContent] =  React.useState([]);
    
    React.useEffect(() => {
        if (uid) {
            axios
            .get(`${API_BASE_URL}core/services/details/${uid}/list/`)
            .then(response => {
                const data = response.data;
                setServicesDetailsCardContent(data[0]);  
            })
            .catch(error => {
              console.log(error);
            });
        }
        
    }, [uid]);
    

    if (!ServicesDetailsCardContent) {
        return <div>
             <NavbarStyleTwo />
             <PageBanner 
                pageTitle="Services Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Details" 
                BGImage="item-bg-3" 
            />
            <Error />
            <Footer />
        </div>;
      }
    
    return (
        <>
             <NavbarStyleTwo />
             <PageBanner 
                pageTitle="Services Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Details" 
                BGImage="item-bg-3" 
            />

            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className={styles.servicesDetailsContent}>
                                
                                <h1>{ServicesDetailsCardContent.title}</h1>

                                {ServicesDetailsCardContent.image ? <div className={styles.img}>
                                    <img 
                                        src={ServicesDetailsCardContent.image} 
                                        alt="image" 
                                    />
                                </div> : <p></p>}

                                
                               
                                <p>{ServicesDetailsCardContent.short_description}</p>
                                {ServicesDetailsCardContent.short_description_image ? <div className={styles.img}>
                                    <img 
                                        src={ServicesDetailsCardContent.short_description_image} 
                                        alt="image" 
                                    />
                                </div> : <p></p>}

                                <p>{ServicesDetailsCardContent.long_description}</p>
 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsletterForm />
            <Footer />
        </>
    )
}

export default ServicesDetailsContent;