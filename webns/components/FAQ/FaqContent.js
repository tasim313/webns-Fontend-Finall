import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'
import axios from 'axios';
import API_BASE_URL from '@/utils/apiBaseUrl';

const FaqContent = () => {

    const [FaqContentData, setFaqContentData] =  React.useState({});

    React.useEffect(() => {
      axios.get(`${API_BASE_URL}core/faq/list/`)
        .then(response => {
            
            const data = response.data
            const title = data[0].title
            const image = data[0].image.original
            setFaqContentData({ title, image });
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    

    const [Content, setContent] =  React.useState([]);
  
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}core/faq/sub_content/list/`)
        .then(response => {
            const data = response.data;
            setContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    
    let count = 1;

    return (
        <>
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="faq-accordion">
                                <div className="faq-content">
                                    <span>FAQs</span>
                                    <h3>{FaqContentData.title}</h3>
                                </div>
                                {Content.map((result, i)=> (
                                    <Accordion allowZeroExpanded preExpanded={['b']} key={i}>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    {count++}. {result.question} ?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>{result.answer}</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        
                                    </Accordion>
                                ))}    
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="faq-image">
                                <img 
                                    src={FaqContentData.image}
                                    alt="image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqContent;