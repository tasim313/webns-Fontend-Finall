import React from 'react'
import axios from 'axios';
import styles from '@/components/About/WhyChooseUs/WhyChooseUs.module.css'
import dynamic from 'next/dynamic';
import API_BASE_URL from '@/utils/apiBaseUrl';


const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const WhyChooseUs = () => {
    const [ChooseUsContentData, setChooseUsContentData] =  React.useState({});
    React.useEffect(() => {
      axios.get(`${API_BASE_URL}core/content/list/`)
        .then(response => {
            
            const data = response.data
            const title = data.choose_content[0].headline
            const description = data.choose_content[0].short_description
            const image = data.choose_content[0].image
            setChooseUsContentData({ title, description, image });
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    

    const [Content, setContent] =  React.useState([]);
  
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}core/content/sub_content/list/`)
        .then(response => {
            const data = response.data;
            setContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
        <>
            <div className={styles.chooseUsArea}>
                <div className="container ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.chooseUsImage}>
                                <img 
                                    src={ChooseUsContentData.image}
                                    alt="Choose Image" 
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
        </>
    )
}

export default WhyChooseUs;