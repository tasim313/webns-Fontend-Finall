// import React from 'react'
// import axios from 'axios';
// import dynamic from 'next/dynamic'
// const OwlCarousel = dynamic(import('react-owl-carousel3'))
// import styles from '@/components/Common/PartnersTwo/PartnerSlider.module.css'
// import styles2 from '@/components/CaseStudies/CaseStudiesStyle2/CaseStudies.module.css'
// import API_BASE_URL from '@/utils/apiBaseUrl';

// const options = {
//     loop: false,
//     nav: false,
//     dots: true,
//     margin: 30,
//     autoplayHoverPause: true,
//     autoplay: true,
    
//     responsive: {
//         0: {
//             items: 3
//         },
//         768: {
//             items: 3
//         },
//         1200: {
//             items: 5
//         }
//     }
// };




// const PartnerSlider = () => {

//     const [display, setDisplay] = React.useState(false);
//     React.useEffect(() => {
//         setDisplay(true);
//     }, [])


//     const [ClientContent, setClientContent] =  React.useState([]);
//     const button = [
//         {   
//             imageAlt: "Partner Image",
//         }
//     ]
  
//     React.useEffect(() => {
//       axios
//         .get(`${API_BASE_URL}core/client/`)
//         .then(response => {
//             const data = response.data;
//             setClientContent(data);  
           
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }, []);

//     if (!ClientContent || ClientContent.length === 0) {
//         return <p>No client available.</p>; 
//       }


//     return (
//         <>
//             {/* <div className={styles.partnerArea}>
//                 <div className="container">
//                     <div className={styles.partnerTitle}>
//                         <span>List Of Our Client</span>
//                     </div>

//                     {display ? <OwlCarousel 
//                         className="partner-slides owl-carousel owl-theme"
//                         {...options}
//                     > 
//                         {ClientContent.map((result, i) => (
//                             <div className={styles.imageBox} key={i}>
//                                 <img 
//                                     src={result.logo.at256} 
//                                     alt={button[0].imageAlt} 
//                                 />
//                             </div> 
//                         ))}
//                     </OwlCarousel> : ''}
//                 </div>
//             </div> */}

//             {/* <div className="services-area pt-100 pb-75">
//                 <div className="container">
//                     <div className="section-title">
//                         <span>Our Clients</span>
//                     </div>

//                     <div className="row justify-content-center">
//                         {ClientContent.map((result, i) => (
//                             <div className="col-lg-3 col-md-6" key={i}>
//                                 <div className={styles2.singleServicesCard}>
//                                     <div className={styles2.icon}>
//                                     <img 
//                                          class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
//                                         src={result.logo.original} 
//                                         alt="image" 
//                                     />
//                                     </div>
//                                     </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div> */}
            
//             <div className={styles.caseStudiesArea}>
//                 <div className="ptb-100">
//                     <div className={styles.containerFluid}>
//                         <div className="section-title">
//                             <span>Our Clients</span>
//                         </div>

//                         <div className="row">
//                             {ClientContent.map((result, i) => (
//                                 <div className="col-lg-3 col-sm-6" key={i}>
//                                     <div className={styles.singleCaseStudiesCard}>
//                                         <div className={styles.caseImage}>
                                            
//                                                 <a>
//                                                     <img 
//                                                         src={result.logo.original} 
//                                                         alt="image"  
//                                                     />
//                                                 </a>
                                            
//                                             <div className={styles.content}>
//                                                 <div className={styles.dTable}>
//                                                     <div className={styles.dTableCell}>
//                                                         <span>{result.name}</span>
//                                                         <h3>
                                                            
//                                                                 <a>{result.name}</a>
                                                            
//                                                         </h3>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default PartnerSlider;




import React from 'react'
import axios from 'axios';

import styles from '@/components/CaseStudies/CaseStudiesStyle2/CaseStudies.module.css'

import API_BASE_URL from '@/utils/apiBaseUrl';


const  PartnerSlider = () => {

    const [ClientContent, setClientContent] =  React.useState([]);
    const button = [
        {
            imageAlt: "Case Image",
            
        }
    ]
  
    React.useEffect(() => {
              axios
                .get(`${API_BASE_URL}api/Client/`)
                .then(response => {
                    const data = response.data;
                    setClientContent(data);  
                   
                })
                .catch(error => {
                  console.log(error);
                });
            }, []);
        
            if (!ClientContent || ClientContent.length === 0) {
                return <p>No client available.</p>; 
              }

    return (
        <>
            <div className={styles.caseStudiesArea}>
                <div className="ptb-100">
                    <div className={styles.containerFluid}>
                        <div className="section-title">
                            <span>Our Clients</span>
                        </div>

                        <div className="row">
                            {ClientContent.map((result, i) => (
                                <div className="col-lg-3 col-sm-6" key={i}>
                                    <div className={styles.singleCaseStudiesCard}>
                                        <div className={styles.caseImage}>
                                           
                                                <a>
                                                    <img 
                                                        src={result.image[0].url} 
                                                        height={180}
                                                        width={180}
                                                        alt={button[0].imageAlt} 
                                                    />
                                                </a>
                                            
                                            <div className={styles.content}>
                                                <div className={styles.dTable}>
                                                    <div className={styles.dTableCell}>
                                                       
                                                        <h3>
                                                           
                                                                <a>{result.name}</a>
                                                            
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default  PartnerSlider;