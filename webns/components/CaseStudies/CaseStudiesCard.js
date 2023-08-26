import React from 'react'
import axios from 'axios';
import Link from 'next/link'
import styles from '@/components/CaseStudies/CaseStudiesCard.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';


const CaseStudiesCard = () => {

    const [CaseStudiesContent, setCaseStudiesContent] =  React.useState([]);
    const button = [
        {
            imageAlt: "Case Image",
            learnMoreText: "Learn more",
            learnMoreLink: "/case-studies-details",
        }
    ]
  
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}core/studies/list/`)
        .then(response => {
            const data = response.data;
            setCaseStudiesContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    return (
        <>
            <div className="pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span>Blogs</span>
                    </div>

                    <div className="row">
                        {CaseStudiesContent.map((result, i) => (
                            <div className="col-lg-6" key={i}>
                                <div className={styles.singleCaseStudiesBox}>
                                    <div className="row align-items-center">
                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                            <div className={styles.caseImage}>
                                                <img 
                                                    src={result.image.original} 
                                                    alt={button[0].imageAlt} 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                            <div className={styles.caseContent}>
                                                <span>{result.subtitle}</span>
                                                <h3>
                                                    <Link href="/blogs/[uid]" as={`/blogs/${result.uid}`} passHref legacyBehavior>
                                                        <a>{result.title}</a>
                                                    </Link>
                                                </h3>
                                                <Link href="/blogs/[uid]" as={`/blogs/${result.uid}`} passHref legacyBehavior>
                                                    <a className={styles.caseBtn}>
                                                        {button[0].learnMoreText}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStudiesCard;