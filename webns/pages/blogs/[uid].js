import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link'
import styles from '@/components/CaseStudiesDetails/CaseStudiesDetailsContent.module.css'
import dynamic from 'next/dynamic';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';
import Error from '@/components/Error/Error';
import API_BASE_URL from '@/utils/apiBaseUrl';


const CaseStudiesDetailsContent = () => {

    const router = useRouter();
    const { uid } = router.query;
    const [CaseStudiesDetailsCardContent, setCaseStudiesDetailsCardContent] =  React.useState([]);
    
    React.useEffect(() => {
        if (uid) {
            axios
            .get(`${API_BASE_URL}career/studies/details/${uid}/list/`)
            .then(response => {
                const data = response.data;
                setCaseStudiesDetailsCardContent(data[0]);  
            })
            .catch(error => {
              console.log(error);
            });
        }
        
    }, [uid]);
    

    if (!CaseStudiesDetailsCardContent) {
        return <div>
             <NavbarStyleTwo />
             <PageBanner 
                pageTitle="Blogs" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
                BGImage="item-bg-4" 
            />
            <Error />
            <Footer />
        </div>;
      }
    
    return (
        <>
            <NavbarStyleTwo />
            <PageBanner 
                pageTitle="Blogs" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
                BGImage="item-bg-4" 
            />
           
            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className={styles.caseStudiesDetails}>
                                <h2>{CaseStudiesDetailsCardContent.title}</h2>

                                {CaseStudiesDetailsCardContent.image ? <div className={styles.img}>
                                    <img 
                                        src={CaseStudiesDetailsCardContent.image}
                                        alt="image" 
                                    />
                                </div> : <p></p>}

                                <h2>Introduction</h2>
                                <p>{CaseStudiesDetailsCardContent.introduction}</p>

                                <div className="p-2 d-none d-md-block"></div>
                         
                                <h2>Challenges and goals</h2>
                                <p>{CaseStudiesDetailsCardContent.challenges_goals}</p>
                        
                                
                                {CaseStudiesDetailsCardContent.challenges_image ? <div className={styles.img}>
                                    <img 
                                        src={CaseStudiesDetailsCardContent.challenges_image}
                                        alt="image" 
                                    />
                                </div> : <p></p>}
 
                                <h2>Result</h2>
                                <p>{CaseStudiesDetailsCardContent.result}</p>
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

export default CaseStudiesDetailsContent;