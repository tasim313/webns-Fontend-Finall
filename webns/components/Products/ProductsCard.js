import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import styles from '@/components/Products/ProductsCard.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';



const ProductsCard = () => {

    const [ProductCardContent, setProductCardContent] =  React.useState([]);
    const button = [
        {
            viewDetailsLinkText: "Learn more",
            viewDetailsLink: "/products/products-details[uid]",
        }
    ]
  
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}api/product/`)
        .then(response => {
            const data = response.data;
            setProductCardContent(data);  
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
                        <span>Our Products</span>
                        <h2>The kind of products that our company provides to our clients</h2>
                    </div>

                    <div className="row justify-content-center">
                        {ProductCardContent.map((result, i) => (
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
                                        <Link href="/products/[slug]" as={`/products/${result.slug}`} passHref legacyBehavior>
                                            <a>{result.title}</a>
                                        </Link>
                                    </h3>
                                    <p>{result.short_description}</p>
                                    <Link href="/products/[slug]" as={`/products/${result.slug}`} passHref legacyBehavior>
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

export default ProductsCard;