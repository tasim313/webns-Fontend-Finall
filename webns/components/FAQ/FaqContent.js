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
    const [Content, setContent] =  React.useState([]);

    React.useEffect(() => {
      axios.get(`${API_BASE_URL}api/faq/`)
        .then(response => {
            const data = response.data
            const title = data.frequentAskedQuestion.title
            const image = data.frequentAskedQuestion.image[0].url
            setFaqContentData({ title, image });
            const subContent = data.frequentAskedQuestionSubContent
            setContent(subContent); 
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