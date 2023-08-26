import React from 'react'
import axios from 'axios';
import Link from 'next/link'
import styles from '@/components/CaseStudies/CaseStudiesStyle2/CaseStudies.module.css'

import API_BASE_URL from '@/utils/apiBaseUrl';


const CaseStudies = () => {

    const [CaseStudiesContent, setCaseStudiesContent] =  React.useState([]);
    const button = [
        {
            imageAlt: "Case Image",
            viewDetailsLink: "/case-studies-details",
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
            <div className={styles.caseStudiesArea}>
                    <div className={styles.containerFluid}>
                        <div className="section-title">
                            <br></br>
                            <span>Our Blogs</span>
                        </div>

                        <div className="row">
                            {CaseStudiesContent.map((result, i) => (
                                <div className="col-lg-3 col-sm-6" key={i}>
                                    <div className={styles.singleCaseStudiesCard}>
                                        <div className={styles.caseImage}>
                                            <Link href="/CaseStudiesDetails/[uid]" as={`/CaseStudiesDetails/${result.uid}`} passHref legacyBehavior>
                                                <a>
                                                    <img 
                                                        src={result.image.original} 
                                                        alt={button[0].imageAlt} 
                                                    />
                                                </a>
                                            </Link>
                                            <div className={styles.content}>
                                                <div className={styles.dTable}>
                                                    <div className={styles.dTableCell}>
                                                        <span>{result.subtitle}</span>
                                                        <h3>
                                                            <Link href="/blogs/[uid]" as={`/blogs/${result.uid}`} passHref legacyBehavior>
                                                                <a>{result.title}</a>
                                                            </Link>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.seeAllCtn}>
                            <Link href="/case-studies" legacyBehavior>
                                <a>See more cases</a>
                            </Link>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default CaseStudies;