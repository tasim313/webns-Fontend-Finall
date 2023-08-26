import React from 'react'
import axios from 'axios';
import styles from '@/components/Gallery/GalleryContent.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';


const GalleryContent = () => {
    
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);
    const [GalleryImageContent, setGalleryImageContent] =  React.useState([]);
    
  
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}core/galleries/list/`)
        .then(response => {
            const data = response.data;
            setGalleryImageContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    
    
    return (
        <>
            <div className="gallery-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                       
                        {GalleryImageContent.map((result, i) => (
                                <div className="col-lg-4 col-sm-6 col-md-6" key={i}>
                                        <div className={styles.singleGalleryItem}>
                                                    <div  
                                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                                    >
                                                        <img 
                                                            src={result.image.original} 
                                                            alt="image" 
                                                        />
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

export default GalleryContent;