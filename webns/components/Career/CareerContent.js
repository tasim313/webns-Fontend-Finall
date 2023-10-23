import React from 'react'
import Link from 'next/link'
import axios from 'axios';

import styles from '@/components/Career/CareerContent.module.css'
import ApplyForm from './ApplyForm/ApplyForm'
import API_BASE_URL from '@/utils/apiBaseUrl';


const CareerContent = () => {

    const [CareerInfoContent, setCareerInfoContent] =  React.useState([]);

    const button = [
        {
            education: "Education:",
            experience: "Experience:",
            deadline: "Deadline:",
            viewDetailsText: "Details",
            viewDetailsLink: "/career-details",
        }
    ]

    function formattedDate(CareerInfoContent) {
        const parsedDate = new Date(CareerInfoContent);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return parsedDate.toLocaleDateString('en-US', options);
      }
    
    
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}api/career/`)
        .then(response => {
            const data = response.data;
            setCareerInfoContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    return (
        <>
            <div className="career-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className={styles.careerItemContent}>
                                <h3>We're looking for</h3>
                                
                                {CareerInfoContent.map((result, i) => (
                                    <div className={styles.careerBox} key={i}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-sm-6">
                                                <div className={styles.careerContent}>
                                                    <h4>{result.designation}</h4>
                                                    <p><span>{button[0].education}</span> {result.education}</p>
                                                    <p><span>{button[0].experience}</span> {result.experience}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-sm-6">
                                                <div className={styles.careerBtn}>
                                                    <Link href="/career/[uid]" as={`/career/${result._id}`} passHref  legacyBehavior>
                                                        <a className="default-btn">{button[0].viewDetailsText}</a>
                                                    </Link>
                                                    <p><span>{button[0].deadline}</span> {formattedDate(result.deadline)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <ApplyForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerContent;