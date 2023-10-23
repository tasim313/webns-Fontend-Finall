import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/Common/TestimonialsTwo/TestimonialSlider.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';

const options = {
    loop: false,
    nav: false,
    dots: true,
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
            items: 2
        }
    }
};



const TestimonialSlider = () => {

    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])


    const [TestimonialContent, setTestimonialContent] =  React.useState([]);
    const button = [
        {   
            imageAlt: "Client image",
            ratingIcon: "ri-star-fill",
            ratingIcon: "ri-star-fill",
            ratingIcon: "ri-star-fill",
            ratingIcon: "ri-star-fill",
            ratingIcon: "ri-star-fill",
        }
    ]
  
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}api/testimonial`)
        .then(response => {
            const data = response.data;
            setTestimonialContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    if (!TestimonialContent || TestimonialContent.length === 0) {
        return <p>No product available.</p>; 
      }

    return (
        <>
            <div className={styles.testimonialsArea}>
                <div className="container ptb-100">
                    <div className="section-title">
                        <span>TESTIMONIALS</span>
                        <h2>All the statements that our clients have made about us seeing our work</h2>
                    </div>
                    {display ? <OwlCarousel 
                        className="testimonials-slides owl-carousel owl-theme"
                        {...options}
                    >
                        
                        {TestimonialContent.map((result, i) => (
                            <div className={styles.singleTestimonialsCard} key={i}>
                                <div className={styles.icon}>
                                    <i className="flaticon-straight-quotes"></i>
                                </div>
                                <p>{result.comment}</p>
                                <div className={styles.info}>
                                    <div className={styles.img}>
                                        <img 
                                            src={result.image[0].url} 
                                            alt={button[0].imageAlt} 
                                        />
                                    </div>
                                    <h3>{result.name}</h3>
                                    <span>{result.designation}</span>
                                </div>
                                <div className={styles.rating}>
                                    <i className={button[0].ratingIcon}></i>
                                    <i className={button[0].ratingIcon}></i>
                                    <i className={button[0].ratingIcon}></i>
                                    <i className={button[0].ratingIcon}></i>
                                    <i className={button[0].ratingIcon}></i>
                                </div>
                            </div>
                        ))}

                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default TestimonialSlider;