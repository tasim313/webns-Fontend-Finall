import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '@/components/BlogDetails/BlogDetailsContent.module.css'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';
import Error from '@/components/Error/Error';
import API_BASE_URL from '@/utils/apiBaseUrl';


const BlogDetailsContent = () => {
    
    const router = useRouter();
    const { uid } = router.query;
    const [BlogDetailsCardContent, setBlogDetailsCardContent] =  React.useState([]);
    
    React.useEffect(() => {
        if (uid) {
            axios
            .get(`${API_BASE_URL}career/news_events/details/${uid}/list/`)
            .then(response => {
                const data = response.data;
                setBlogDetailsCardContent(data[0]);  
            })
            .catch(error => {
              console.log(error);
            });
        }
        
    }, [uid]);
    

    if (!BlogDetailsCardContent) {
        return <div>
             <NavbarStyleTwo />
             <PageBanner 
                pageTitle="News Events Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="News Events Details" 
                BGImage="item-bg-3" 
            />
            <Error />
            <Footer />
        </div>;
      }
    
    function formattedDate(BlogDetailsCardContent) {
        const parsedDate = new Date(BlogDetailsCardContent);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return parsedDate.toLocaleDateString('en-US', options);
    }

    return (
        <>

            <NavbarStyleTwo />
            <PageBanner 
                pageTitle="News Events Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="News Events Details" 
                BGImage="item-bg-3" 
            />

            <div className="pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className={styles.blogDetailsDesc}>
                                <div className={styles.articleContent}>
                                    <div className={styles.articleImage}>
                                        <img 
                                            src={BlogDetailsCardContent.image} 
                                            alt="image" 
                                        />
                                    </div>
                                    <ul className={styles.entryMeta}>
                                        <li>{formattedDate(BlogDetailsCardContent.publish_date)}</li>
                                    </ul>

                                    <h2>{BlogDetailsCardContent.headline}</h2>
                         
                                    <p>{BlogDetailsCardContent.description}</p>
                                    <h2>{BlogDetailsCardContent.summarize_content_title}</h2>
                                    {BlogDetailsCardContent.summarize_content_image ? <div className={styles.articleImage}>
                                        <img 
                                            src={BlogDetailsCardContent.summarize_content_image} 
                                            alt="image" 
                                        />
                                    </div> : <p></p>}
                                    
                                    <p>{BlogDetailsCardContent.summarize_content_description}</p>
                                    {BlogDetailsCardContent.quotes ? <blockquote className={styles.blockquote}>
                                        <i className="flaticon-straight-quotes"></i>
                                        <p>{BlogDetailsCardContent.quotes}</p>
                                    </blockquote> : <p></p>}
                                    
                                    <p>{BlogDetailsCardContent.conclusion_content}</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsletterForm />
            <Footer />
        </>
    )
}

export default BlogDetailsContent;