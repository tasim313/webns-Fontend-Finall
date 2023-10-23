import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/Services/ServiceSliderStyle2/ServiceSlider.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 500,
    margin: 25,
    autoplayHoverPause: true,
    autoplay: true,
    
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
};

const ServiceSlider = () => {

    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])


    const [ServiceCardContent, setServiceCardContent] =  React.useState([]);
    
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

    if (!ServiceCardContent || ServiceCardContent.length === 0) {
        return <p>No service available.</p>; 
      }

    return (
        <>
            <div className={styles.servicesArea}>
                <div className="container ptb-100">
                    <div className="section-title">
                        <span>WE PROVIDE SERVICES</span>
                        <h2 className={styles.colorWhite}>The kind of services that our company provides to our clients</h2>
                    </div>
 
                    {display ? <OwlCarousel 
                        className="services-slides owl-carousel owl-theme"
                        {...options}
                    >
                       {ServiceCardContent.map((result, i) =>
                         <div className={`${styles.singleServicesCard} ${styles.bgImg2}`} key={i}>
                         <div className={styles.content}>
                         
                            <div className={styles.icon}>
                                    <img 
                                            src={result.image[0].url}
                                            height={280}
                                            width={280}
                                            className={styles.image}
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
                                 <a className={styles.servicesBtn}>Learn more</a>
                             </Link>
                         </div>
                     </div>
                       )} 
                        
                    </OwlCarousel> : ''}
                </div>
            </div> 
        </>
    )
}

export default ServiceSlider;