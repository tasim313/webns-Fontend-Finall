import React from 'react'
import axios from 'axios';
import styles from '@/components/TermsOfService/TermsOfServiceContent.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';

const TermsOfServiceContent = () => {

    const [TermsOfServiceData, setTermsOfServiceData] =  React.useState([]);

    React.useEffect(() => {
        axios
          .get(`${API_BASE_URL}api/termsOfService`)
          .then(response => {
              const data = response.data;
              setTermsOfServiceData(data);  
          })
          .catch(error => {
            console.log(error);
          });
      }, []);


    let count = 1;



    return (
        <>
            <div className="ptb-100">
                <div className="container">
                        {TermsOfServiceData.map((result, i)=> (
                                <div className={styles.privacyPolicyContent} key={i}>
                                    <h3><span>{count++}.</span> {result.title}</h3>
                                        <blockquote className="blockquote">
                                            <p>{result.description}</p>
                                        </blockquote>
                                </div>
                                
                            ))}  
                </div>
            </div>
        </>
    )
}

export default TermsOfServiceContent;