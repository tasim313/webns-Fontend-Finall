import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/HomeTwo/HeroSlider/HeroSlider.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';


const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    margin: 25,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right'></i>"
    ],
};


// Social Links
const SocialLinks = [
    {
        iconName: "ri-facebook-fill",
        Url: "https://www.facebook.com/",
    },
    {
        iconName: "ri-twitter-fill",
        Url: "ri-twitter-fill",
    },
    {
        iconName: "ri-instagram-fill",
        Url: "https://www.instagram.com/",
    },
    {
        iconName: "ri-linkedin-fill",
        Url: "https://www.linkedin.com/",
    },
];

const HeroSlider = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    const [SliderContent, setSliderContent] =  React.useState([]);
    const button = [
        {
            contactBtnText: "Contact Us",
            contactBtnLink: "/contact",
            servicesBtnText: "Our Services",
            servicesBtnLink: "/services",
        }
    ]
  
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}api/slider`)
        .then(response => {
            const data = response.data;
            setSliderContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    if (!SliderContent || SliderContent.length === 0) {
        return <p>No product available.</p>; 
      }

    
    return (
        <>
           {/* <div className={styles.heroSlidesArea}> */}
                <div className={styles.containerFluid}>
                    {display ? <OwlCarousel 
                        className="hero-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {SliderContent.map((result, i) => (
                            <div 
                                className={`${styles.heroSlidesItem} ${styles.bgImg1}`} key={i} 
                                style={{ 
                                    backgroundImage: `url(${result.image[0].url})` 
                                }}
                            >
                                <div className={styles.heroSlidesContent}>
                                    <span>{result.title}</span>
                                    <h1>{result.description}</h1>
                                    <ul className={styles.slidesBtn}>
                                        <li>
                                            <Link href={button[0].contactBtnLink} legacyBehavior>
                                                <a className="default-btn">
                                                    {button[0].contactBtnText}
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={button[0].servicesBtnLink} legacyBehavior>
                                                <a className={styles.optionalBtn}>
                                                    {button[0].servicesBtnText}
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel> : ''}
                </div>
                
                {/* Social Links */}
                {/* Social Links */}
                {/* <ul className={styles.heroSlidesSocial}>
                    {SocialLinks.map((val, i) => (
                        <li key={i}>
                            <a href={val.Url} target="_blank">
                                <i className={val.iconName}></i>
                            </a>
                        </li>
                    ))}
                </ul>  */}

                {/* <div className={styles.heroSlidesEmail}>
                    <a href="info.webnstech@gmail.com">info.webnstech@gmail.com</a>
                </div> */}

                {/* <div className={styles.heroSlidesTime}>
                    <span><i className="ri-time-line"></i> Sat - Thurs 9:00am - 6:00pm</span>
                </div> */}
            {/* </div> */}
        </>
    )
}

export default HeroSlider;

