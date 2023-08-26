import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import styles from '@/components/Common/OurBlog/OurBlog.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';

const OurBlog = () => {

    const [BlogCardContent, setBlogCardContent] =  React.useState([]);
    const button = [
        {   
            imageAlt: "Blog Image",
            authorLink: "/author",
            viewDetailsLink: "/blog-details",
        }
    ]
  
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}core/news_events/list/`)
        .then(response => {
            const data = response.data.slice(0, 6);
            setBlogCardContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    
    function formattedDate(BlogCardContent) {
        const parsedDate = new Date(BlogCardContent);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return parsedDate.toLocaleDateString('en-US', options);
      }

    return (
        <>
            <div className={styles.blogArea}>
                <div className="container pt-100 pb-75">
                    <div className="section-title">
                        <span>OUR BLOG</span>
                        <h2>Read our latest news & blog which is updated regularly</h2>
                    </div>

                    <div className="row justify-content-center">
                        {BlogCardContent?.map((result, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className={styles.singleBlogCard}>
                                    <div className={styles.postImage}>
                                        <Link href="/news_events/[uid]" as={`/news_events/${result.uid}`} passHref  legacyBehavior>
                                            <a>
                                                <img 
                                                    src={result.image.original} 
                                                    alt={button[0].imageAlt} 
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className={styles.postContent}>
                                        <ul className={styles.entryMeta}>
                                            <li>{formattedDate(result.publish_date)}</li>
                                        </ul>
                                        <h3>
                                            <Link href="/news_events/[uid]" as={`/news_events/${result.uid}`} passHref  legacyBehavior>
                                                <a>{result.headline}</a>
                                            </Link>
                                        </h3>
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

export default OurBlog;