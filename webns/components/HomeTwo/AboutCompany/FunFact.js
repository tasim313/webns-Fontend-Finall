import React from 'react'
import axios from 'axios';
import styles from '@/components/HomeTwo/AboutCompany/AboutCompany.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';


const FunFact = () => {

    const [FunFactContentData, setFunFactContentData] =  React.useState({});
    
    const award_iconName = "flaticon-award";
    const complete_iconName = "flaticon-complete";
    const customer_iconName = "flaticon-customers";
    const experience_iconName = "flaticon-user-experience";
        
  
    React.useEffect(() => {
      axios.get(`${API_BASE_URL}core/fun/list/`)
        .then(response => {
            
            const data = response.data;
            const { years_of_experience, number_of_clients, delivered_products, winning_awards } = data[0]
            setFunFactContentData({ years_of_experience, number_of_clients, delivered_products, winning_awards });
        })
        .catch(error => {
          console.log(error);
        });
    }, []);



    return (
        <>
            <div className={styles.aboutFunFact}>
                <div className="about-funfact-card">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-6">
                                <div className={styles.funfactBox}>
                                    <div className={styles.funfactBorderColor}>
                                        <div className={styles.icon}>
                                            <i className={experience_iconName}></i>
                                        </div>
                                        <h3>
                                            {FunFactContentData.years_of_experience}
                                            <span className={styles.signIcon}>+</span>
                                        </h3>
                                        <p>Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-6">
                                <div className={styles.funfactBox}>
                                    <div className={styles.funfactBorderColor}>
                                        <div className={styles.icon}>
                                            <i className={complete_iconName}></i>
                                        </div>
                                        <h3>
                                            {FunFactContentData.delivered_products}
                                            <span className={styles.signIcon}>+</span>
                                        </h3>
                                        <p>Delivered Products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-6">
                                <div className={styles.funfactBox}>
                                    <div className={styles.funfactBorderColor}>
                                        <div className={styles.icon}>
                                            <i className={customer_iconName}></i>
                                        </div>
                                        <h3>
                                            {FunFactContentData.number_of_clients}
                                            <span className={styles.signIcon}>+</span>
                                        </h3>
                                        <p>Global Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-6">
                                <div className={styles.funfactBox}>
                                    <div className={styles.funfactBorderColor}>
                                        <div className={styles.icon}>
                                            <i className={award_iconName}></i>
                                        </div>
                                        <h3>
                                            {FunFactContentData.winning_awards}
                                            <span className={styles.signIcon}>+</span>
                                        </h3>
                                        <p>Winning Awards</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FunFact;