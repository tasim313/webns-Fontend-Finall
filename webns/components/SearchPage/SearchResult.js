import React from 'react'
import Link from 'next/link'
import styles from '@/components/SearchPage/SearchResult.module.css'
import BlogSidebar from './SearchResultSidebar/SearchResultSidebar'

// Blog Card Content
const BlogCardContent = [
    {
        image: "/images/blog/blog-1.jpg",
        imageAlt: "Blog Image",
        title: "How is technology working with new things?",
        date: "14 June, 2021",
        author: "Brandy",
        authorLink: "/author",
        viewDetailsLink: "/blog-details",
    },
    {
        image: "/images/blog/blog-2.jpg",
        imageAlt: "Blog Image",
        title: "Top 10 important tips on IT services & technology",
        date: "15 June, 2021",
        author: "Garcia",
        authorLink: "/author",
        viewDetailsLink: "/blog-details",
    },
    {
        image: "/images/blog/blog-3.jpg",
        imageAlt: "Blog Image",
        title: "What are the benefits of IT support service and technology?",
        date: "14 June, 2021",
        author: "Williams",
        authorLink: "/author",
        viewDetailsLink: "/blog-details",
    },
    {
        image: "/images/blog/blog-4.jpg",
        imageAlt: "Blog Image",
        title: "What are the top web development companies that work!",
        date: "15 June, 2021",
        author: "Jesus",
        authorLink: "/author",
        viewDetailsLink: "/blog-details",
    },
    {
        image: "/images/blog/blog-5.jpg",
        imageAlt: "Blog Image",
        title: "How our company works in different ways",
        date: "16 June, 2021",
        author: "Cortez",
        authorLink: "/author",
        viewDetailsLink: "/blog-details",
    },
    {
        image: "/images/blog/blog-6.jpg",
        imageAlt: "Blog Image",
        title: "How the technology works with innovation",
        date: "17 June, 2021",
        author: "Barton",
        authorLink: "/author",
        viewDetailsLink: "/blog-details",
    },
]

const SearchResult = () => {
    return (
        <>
            <div className={styles.blogArea}>
                <div className="container pt-100 pb-75">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row justify-content-center">
                                {BlogCardContent.map((val, i) => (
                                    <div className="col-lg-6 col-md-6" key={i}>
                                        <div className={styles.singleBlogCard}>
                                            <div className={styles.postImage}>
                                                <Link href={val.viewDetailsLink} legacyBehavior>
                                                    <a>
                                                        <img 
                                                            src={val.image} 
                                                            alt={val.imageAlt} 
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className={styles.postContent}>
                                                <ul className={styles.entryMeta}>
                                                    <li>{val.date}</li>
                                                    <li>by: <Link href={val.authorLink} legacyBehavior><a>{val.author}</a></Link></li>
                                                </ul>
                                                <h3>
                                                    <Link href={val.viewDetailsLink} legacyBehavior>
                                                        <a>{val.title}</a>
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResult;