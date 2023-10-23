import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import styles from '@/components/Career/ApplyForm/ApplyForm.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';


const alertContent = () => {
  MySwal.fire({
      title: 'Congratulations!',
      text: 'Your application was successfully send and will back to you soon',
      icon: 'success',
      timer: 6000,
      timerProgressBar: true,
      showConfirmButton: false,
  })
}


const alertErrorContent = () => {
  MySwal.fire({
      title: 'ooops!',
      text: 'Your application was not sent. please try again',
      icon: 'error',
      timer: 6000,
      timerProgressBar: true,
      showConfirmButton: false,
  })
}


const ApplyForm = () => {

    const [CareerInfoContent, setCareerInfoContent] =  React.useState([]);

    React.useEffect(() => {
        axios
          .get(`${API_BASE_URL}api/career/`)
          .then(response => {
              const data = response.data;
              setCareerInfoContent(data);  
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    const [formData, setFormData] =  React.useState({
        job_category: "",
        name: '',
        email: '',
        phone_number: '',
        portfolio_link: '',
        linkedin_link: '',
        comment: '',
        curriculum_vitae: " ",
      });

      const [errorMessages, setErrorMessages] = React.useState({
        name: '',
        email: '',
        phone_number: '',
        curriculum_vitae: '',
        portfolio_link: '',
        linkedin_link: '',
        comment: '',
        job_category: '',
      });


  const validateFormData = () => {
    const { name, email, phone_number, curriculum_vitae, portfolio_link, linkedin_link, comment, job_category} = formData;
    
    let hasError = false;
    const errorMessagesData = {};

    if (!name) {
      errorMessagesData.name = 'Please enter your full name.';
      hasError = true;
    }

    if (!email) {
      errorMessagesData.email = 'Please enter your email address.';
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorMessagesData.email = 'Please enter a valid email address.';
        hasError = true;
      }
    if(!phone_number){
      errorMessagesData.phone_number='Please enter your phone number';
      hasError = true;
    }
    if (!curriculum_vitae) {
      errorMessagesData.curriculum_vitae= 'Please upload your update cv.';
      hasError = true;
    }
    if (!portfolio_link) {
      errorMessagesData.portfolio_link= 'Please Insert Your Portfolio Link or Facebook profile Link';
      hasError = true;
    }
    if (!linkedin_link) {
      errorMessagesData.linkedin_link= 'Please Insert Your Linkedin Profile Link';
      hasError = true;
    }
    if (!comment) {
      errorMessagesData.comment= 'Please write something about yourself.';
      hasError = true;
    }
    if (!job_category) {
      errorMessagesData.job_category= 'Please Select which Position you apply' ;
      hasError = true;
    }
    }
    return !hasError;
  };
  
  const isFormValid = validateFormData();
     
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone_number') {
          if (value.startsWith('+88')) {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
            setErrorMessages((prevErrors) => ({ ...prevErrors, [name]: '' }));
          } else {
            setFormData((prevData) => ({ ...prevData, [name]: `+88${value}` }));
            setErrorMessages((prevErrors) => ({ ...prevErrors, [name]: '' }));
          }
        } else {
          setFormData((prevData) => ({ ...prevData, [name]: value }));
          setErrorMessages((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, curriculum_vitae: file }));
        setErrorMessages((prevErrors) => ({ ...prevErrors, [name]: '' }));
      };
      
      const submitApplication = async (e) => {
        e.preventDefault();
        if (!isFormValid) {
          return;
        }
        try {
          const response = await axios.post(`${API_BASE_URL}api/candidate/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          setFormData({
            job_category: '',
            name: '',
            email: '',
            phone_number: '',
            portfolio_link: '',
            linkedin_link: '',
            comment: '',
            curriculum_vitae: '',
          });
          setErrorMessages({
            name: '',
            email: '',
            phone_number: '',
            curriculum_vitae: '',
            portfolio_link: '',
            linkedin_link: '',
            comment: '',
            job_category: '',
          });
          alertContent();
          window.location.reload();
        } catch (error) {
            alertErrorContent();
            window.location.reload();    
        }
      };

    
    return (
        <>  
            <div className={styles.careerFormWrap}>
                <div className={styles.content}>
                    <h3>Apply for Job</h3>
                </div>
                
                <form className={styles.careerForm} onSubmit={submitApplication}>
                    <div className={styles.formGroup}>
                        <input 
                            type="text" 
                            className={`${styles.formControl} ${errorMessages.name ? styles.emptyField : ''}`} 
                            placeholder="Enter your full name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                       
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="email" 
                            className={`${styles.formControl} ${errorMessages.email ? styles.emptyField : ''}`}
                            placeholder="Email address" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                       
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="text" 
                            className={`${styles.formControl} ${errorMessages.phone_number ? styles.emptyField : ''}`}
                            placeholder="Enter phone Number" 
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                        />
                        
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="text" 
                            className={`${styles.formControl} ${errorMessages.portfolio_link ? styles.emptyField : ''}`} 
                            placeholder="Portfolio Link or Facebook Profile Link"
                            name="portfolio_link"
                            value={formData.portfolio_link}
                            onChange={handleChange}
                        />
                         
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="text" 
                            className={`${styles.formControl} ${errorMessages.linkedin_link ? styles.emptyField : ''}`} 
                            placeholder="Linkedin Link"
                            name="linkedin_link"
                            value={formData.linkedin_link}
                            onChange={handleChange}
                        />
                       
                    </div>
                    <div className={styles.formGroup}>
                        <select className={`${"form-select"} ${errorMessages.job_category ? styles.emptyField : ''}`}
                                 name="job_category"
                                 value={formData.job_category}
                                onChange={handleChange}>
                            <option>Job Category</option>
                            {CareerInfoContent.map((result, i) => (
                                 <option value={result._id} key={i}>{result.designation}</option>
                               ))}
                        </select>
                        
                    </div>
                    <div className={styles.formGroup}>
                        <input
                        type="file"
                        className={`${styles.formControl} ${errorMessages.curriculum_vitae ? styles.emptyField : ''}`}
                        name="curriculum_vitae"
                        placeholder="curriculum_vitae CV"
                        accept=".pdf"
                        onChange={handleFileChange}
                        />
                      
                     </div>
                    <div className={styles.formGroup}>
                        <textarea 
                            name="comment" 
                            className={`${styles.formControl} ${errorMessages.comment ? styles.emptyField : ''}`}
                            placeholder="Write message..."
                            value={formData.comment}
                            onChange={handleChange}
                        ></textarea>
                       
                    </div>

                    <div className={styles.submitBtn}>
                      <button type="submit" className="default-btn">Apply</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default ApplyForm;