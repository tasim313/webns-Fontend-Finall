import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import styles from '@/components/Pricing/PricingTable.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';



const PricingTable = ({ slug }) => {
    
    const [PriceContent, setPriceContent] =  React.useState([]);
    
    React.useEffect(() => {
        if (slug) {
            axios
            .get(`${API_BASE_URL}core/price/list/${slug}/`)
            .then(response => {
                const data = response.data;
                const {basic, standard, premium} = data
                const basic_plan_name = basic[0].name
                const basic_plan_price = basic[0].price
                const basic_plan_description = basic[0].product_provided_service_plan
                const basic_plan_description_not_provided = basic[0].product_not_provided_service_plan
                const standard_name = standard[0].name
                const standard_price = standard[0].price
                const standard_description = standard[0].product_provided_service_plan
                const standard_description_not_provided = standard[0].product_not_provided_service_plan
                const premium_name = premium[0].name
                const premium_price = premium[0].price
                const premium_description = premium[0].product_provided_service_plan
                const premium_description_not_provided = premium[0].product_not_provided_service_plan
                setPriceContent({
                    basic_plan_name,
                    basic_plan_price,
                    basic_plan_description,
                    basic_plan_description_not_provided,
                    standard_name,
                    standard_price,
                    standard_description,
                    standard_description_not_provided,
                    premium_name,
                    premium_price,
                    premium_description,
                    premium_description_not_provided,
                 });  
            })
            .catch(error => {
              console.log("product");
            });
        }
        
    }, [slug]);


    if (PriceContent === null) {
        return (
            <div>
                
                <p></p>
            </div>
        );
    } else if (PriceContent.length === 0) {
        return (
            <div>
                
                <p></p>
            </div>
        );
    }


    return (
        <>
            <div className={styles.pricingArea}>
                <div className="container pt-100 pb-75">
                    <div className="section-title">
                        <span>PRICING PLANS</span>
                        
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className={styles.singlePricingTable}>
                                <div className={styles.pricingHeader}>
                                    {PriceContent.basic_plan_name ? <h3>{PriceContent.basic_plan_name}</h3> : <p></p>}
                                </div>
                                
                                {PriceContent.basic_plan_price ? <div className={styles.price}>
                                ৳{PriceContent.basic_plan_price}<span>/monthly</span>
                               
                                </div> : <p></p>}
                                
                                <ul className={styles.featuresList}>
                                    {PriceContent.basic_plan_description &&
                                            PriceContent.basic_plan_description.split('.').map((feature, index) => (
                                                <li  key={index}><i className="ri-check-line"></i> {feature.trim()}</li>
                                    ))}

                                    {PriceContent.basic_plan_description_not_provided &&
                                            PriceContent.basic_plan_description_not_provided.split('.').map((feature, index) => (
                                                <li  key={index}><i className="ri-close-line"></i> {feature.trim()}</li>
                                    ))}
                                   
                                </ul>

                                <div className={styles.pricingBtn}>
                                    <Link href="/contact" legacyBehavior>
                                        <a className="default-btn w-100">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className={styles.singlePricingTable}>
                                <div className={styles.pricingHeader}>
                                    <h3>{PriceContent.standard_name ? <h3>{PriceContent.standard_name}</h3> : <p></p>}</h3>
                                </div>

                                {PriceContent.standard_price ? <div className={styles.price}>
                                ৳{PriceContent.standard_price}<span>/monthly</span>
                               
                                </div> : <p></p>}

                                <ul className={styles.featuresList}>
                                    {PriceContent.standard_description &&
                                            PriceContent.standard_description.split('.').map((feature, index) => (
                                                <li  key={index}><i className="ri-check-line"></i> {feature.trim()}</li>
                                    ))}

                                    {PriceContent.standard_description_not_provided &&
                                            PriceContent.standard_description_not_provided.split('.').map((feature, index) => (
                                                <li  key={index}><i className="ri-close-line"></i> {feature.trim()}</li>
                                    ))}
                                   
                                </ul>

                                <div className={styles.pricingBtn}>
                                    <Link href="/contact" legacyBehavior>
                                        <a className="default-btn w-100">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className={styles.singlePricingTable}>
                                <div className={styles.pricingHeader}>
                                    <h3>{PriceContent.premium_name ? <h3>{PriceContent.premium_name}</h3> : <p></p>}</h3>
                                </div>

                                {PriceContent.premium_price ? <div className={styles.price}>
                                ৳ {PriceContent.premium_price} <span>/monthly</span>
                               
                                </div> : <p></p>}

                                <ul className={styles.featuresList}>
                                    <li><i className="ri-check-line"></i> 5 Project</li>
                                    <li><i className="ri-check-line"></i> Multi-language content</li>
                                    <li><i className="ri-check-line"></i> Quality & customer experience</li>
                                    <li><i className="ri-check-line"></i> 24/7 email support</li>
                                    <li><i className="ri-check-line"></i> Extra features</li>
                                    <li><i className="ri-check-line"></i> Upgrate options</li>
                                    <li><i className="ri-check-line"></i> Full access</li>
                                </ul>

                                <div className={styles.pricingBtn}>
                                    <Link href="/contact" legacyBehavior>
                                        <a className="default-btn w-100">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animation lines */}
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </>
    )
}

export default PricingTable;