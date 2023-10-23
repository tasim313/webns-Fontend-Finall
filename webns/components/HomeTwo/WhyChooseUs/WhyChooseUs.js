import React from 'react'
import axios from 'axios';
import styles from '@/components/HomeTwo/WhyChooseUs/WhyChooseUs.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';

const WhyChooseUs = () => {
    
    const [ChooseUsContentData, setChooseUsContentData] =  React.useState({});
    const [Content, setContent] =  React.useState([]);
    React.useEffect(() => {
      axios.get(`${API_BASE_URL}api/chooseUs/`)
        .then(response => {
            const data = response.data
            const title = data.whyChooseUs[0].headline
            const description = data.whyChooseUs[0].short_description
            const image = data.whyChooseUs[0].image[0].url
            const subContent = data.whyChooseUsSubContent
            setChooseUsContentData({ title, description, image});
            setContent(subContent);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    

    return (
        <>
            <div className={styles.chooseUsArea}>
                <div className="ptb-100">
                    <div className={styles.containerFluid}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className={styles.chooseUsImage}>
                                    <img 
                                        src={ChooseUsContentData.image}
                                        alt="image" 
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className={styles.chooseUsContent}>
                                    <span>WHY CHOOSE US</span>
                                    <h3>{ChooseUsContentData.title}</h3>
                                    <p>{ChooseUsContentData.description}</p> 
                                    {Content.map((result, i)=> (
                                      <div className={styles.chooseInnerContent} key={i}>
                                        <h4>{result.headline}</h4>
                                        <p>{result.short_description}</p>
                                     </div>  
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs;