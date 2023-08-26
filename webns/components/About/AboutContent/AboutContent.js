import React from 'react'
import axios from 'axios';
import styles from '@/components/About/AboutContent/AboutContent.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';


const AboutContent = () => {
    
    const [AboutContentData, setAboutContentData] =  React.useState({});
  
    React.useEffect(() => {
      axios.get(`${API_BASE_URL}core/about/file/list/`)
        .then(response => {
            
            const data = response.data[0]
            let { title, short_description, support_description,years_of_experience,vision,mission,start_year} = data.about
            let start_year_new_value = start_year.slice(0, 4)
            let { image } = data
            setAboutContentData({ title, short_description, support_description,years_of_experience,vision,mission,start_year_new_value,image });
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
        <>
            <div className={styles.aboutArea}>
                <div className="container ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.aboutContent}>
                                <span>ABOUT OUR COMPANY</span>
                                <h3>{AboutContentData.title}</h3>
                                <p>{AboutContentData.short_description}</p>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <div className={styles.icon}>
                                                <i className="flaticon-customer-service"></i>
                                            </div>
                                            <h4>24/7 User support</h4>
                                            <p>{AboutContentData.support_description}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <div className={styles.icon}>
                                                <i className="flaticon-experience"></i>
                                            </div>
                                            <h4>{AboutContentData.years_of_experience} Years of experience</h4>
                                            <h4>Our Vision</h4>
                                            <p>{AboutContentData.vision}</p>
                                            <br></br>
                                            <h4>Our Mission</h4>
                                            <p>{AboutContentData.mission}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className={styles.aboutImage}>
                                <img 
                                    src={AboutContentData.image} 
                                    alt="About Image" 
                                />
                                <div className={styles.sinceText}>
                                    <span>Since {AboutContentData.start_year_new_value}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent;