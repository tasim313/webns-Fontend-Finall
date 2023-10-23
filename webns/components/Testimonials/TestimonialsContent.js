import React from 'react'
import axios from 'axios';
import styles from '@/components/Testimonials/TestimonialsContent.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';

const TestimonialsContent = () => {


    const [TestimonialContent, setTestimonialContent] =  React.useState([]);
    const button = [
        {   
            imageAlt: "Client image",
            ratingIcon1: "ri-star-fill",
            ratingIcon2: "ri-star-fill",
            ratingIcon3: "ri-star-fill",
            ratingIcon4: "ri-star-fill",
            ratingIcon5: "ri-star-fill",
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



    return (
        <>
            <div className="testimonials-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span>TESTIMONIALS</span>
                        <h2>All the statements that our clients have made about us seeing our work</h2>
                    </div>

                    <div className="row justify-content-center">
                        {TestimonialContent.map((result, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className={styles.singleTestimonialsCard}>
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
                                        <i className={button[0].ratingIcon1}></i>
                                        <i className={button[0].ratingIcon2}></i>
                                        <i className={button[0].ratingIcon3}></i>
                                        <i className={button[0].ratingIcon4}></i>
                                        <i className={button[0].ratingIcon5}></i>
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

export default TestimonialsContent;