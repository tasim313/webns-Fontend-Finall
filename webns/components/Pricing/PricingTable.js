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
            .get(`${API_BASE_URL}api/product/price/${slug}/`)
            .then(response => {
                const data = response.data;
                const basic_plan_name = data.findBasicPrice.basicName
                const basic_plan_price = data.findBasicPrice.basicPrice
                const basic_plan_description = data.findBasicPrice.basicProduct_provided_service_plan
                const basic_plan_description_not_provided = data.findBasicPrice.basicProduct_not_provided_service_plan
                const standard_name = data.findStandardPrice.standardName
                const standard_price = data.findStandardPrice.standardPrice
                const standard_description = data.findStandardPrice.standardProduct_provided_service_plan
                const standard_description_not_provided = data.findStandardPrice.standardProduct_not_provided_service_plan
                const premium_name = data.findPremiumPrice.premiumName
                const premium_price = data.findPremiumPrice.premiumPrice
                const premium_description = data.findPremiumPrice.premiumProduct_provided_service_plan
                const premium_description_not_provided = data.findPremiumPrice.premiumProduct_not_provided_service_plan
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
                    premium_description_not_provided
                 });  
            })
            .catch(error => {
              console.log();
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
                                    {PriceContent.basic_plan_name ? <h4>{PriceContent.basic_plan_name}</h4> : <p></p>}
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
                                    {PriceContent.standard_name ? <h4>{PriceContent.standard_name}</h4> : <p></p>}
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
                                    {PriceContent.premium_name ? <h4>{PriceContent.premium_name}</h4> :  <p></p>}
                                </div>

                                {PriceContent.premium_price ? <div className={styles.price}>
                                ৳{PriceContent.premium_price}<span>/monthly</span>
                               
                                </div> : <p></p>}

                                <ul className={styles.featuresList}>
                                    {PriceContent.premium_description &&
                                            PriceContent.premium_description.split('.').map((feature, index) => (
                                                <li  key={index}><i className="ri-check-line"></i> {feature.trim()}</li>
                                    ))}

                                    {PriceContent.premium_description_not_provided &&
                                            PriceContent.premium_description_not_provided.split('.').map((feature, index) => (
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