import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import styles from '@/components/Services/ServicesCard.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';


const ServicesCard = () => {

    const [ServiceCardContent, setServiceCardContent] =  React.useState([]);
    
    const button = [
        {
            viewDetailsLinkText: "Learn more",
            viewDetailsLink: "/services-details",
        }
    ]
    
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}api/service/`)
        .then(response => {
            const data = response.data;
            setServiceCardContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
        <>
            <div className="services-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span>WE PROVIDE SERVICES</span>
                        <h2>The kind of services that our company provides to our clients</h2>
                    </div>

                    <div className="row justify-content-center">
                        {ServiceCardContent.map((result, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className={styles.singleServicesCard}>
                                    <div className={styles.icon}>
                                        <img 
                                                src={result.image[0].url} 
                                                height={280}
                                                width={280}
                                                alt="image" 
                                        />
                                    </div>
                                    <h3>
                                        <Link href="/service/[slug]" as={`/service/${result.slug}`} passHref legacyBehavior>
                                            <a>{result.title}</a>
                                        </Link>
                                    </h3>
                                    <p>{result.short_description}</p>
                                    <Link href="/service/[slug]" as={`/service/${result.slug}`} passHref legacyBehavior>
                                        <a className={styles.servicesBtn}>
                                            {button[0].viewDetailsLinkText}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCard;