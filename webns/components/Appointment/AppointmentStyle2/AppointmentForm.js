import React, { useState } from "react"
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import dynamic from 'next/dynamic';
import API_BASE_URL from "@/utils/apiBaseUrl";


const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import styles from '@/components/Appointment/AppointmentStyle2/AppointmentForm.module.css'


const alertContent = () => {
  MySwal.fire({
      title: 'Congratulations!',
      text: 'Your appointment was successfully create and will back to you soon',
      icon: 'success',
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
  })
}



const alertErrorContent = () => {
  MySwal.fire({
      title: 'ooops!',
      text: 'Your appointment was not sent. please try again',
      icon: 'error',
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
  })
}


const AppointmentForm = () => {

    const [VideoContent, setVideoContent] =  React.useState([]);

    React.useEffect(() => {
        axios
          .get(`${API_BASE_URL}api/video/`)
          .then(response => {
              const data = response.data;
              setVideoContent(data);  
          })
          .catch(error => {
            console.log(error);
          });
      }, []);


    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
  
  
    const [ServiceInfoContent, setServiceInfoContent] =  React.useState([]);

    React.useEffect(() => {
        axios
          .get(`${API_BASE_URL}api/service/`)
          .then(response => {
              const data = response.data;
              setServiceInfoContent(data);  
          })
          .catch(error => {
            console.log(error);
          });
      }, []);



    const [formData, setFormData] =  React.useState({
        name: "",
        email: '',
        phone_number: '',
        appointment_date: '',
        message: '',
      });
      

      const [errorMessages, setErrorMessages] = React.useState({
        name: "",
        email: '',
        phone_number: '',
        appointment_date: '',
        message: '',
        
      });


  const validateFormData = () => {
    const { name, email, phone_number, appointment_date, message, service} = formData;
    
    let hasError = false;
    const errorMessagesData = {};

    if (!name) {
      errorMessagesData.name = 'Please enter your Name';
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
    if (!appointment_date) {
      errorMessagesData.appointment_date= 'Please Select Date and Time.';
      hasError = true;
    }
    if (!message) {
      errorMessagesData.message = 'Please Tell us for your Appointment purpose';
      hasError = true;
    }
    if (!service) {
      errorMessagesData.service= 'Please Select a service';
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
      
      
      
      const submitAppointment = async (e) => {
        e.preventDefault();
        if (!isFormValid) {
          return;
        }
        try {
          const response = await axios.post(`${API_BASE_URL}api/appointment/`, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          setFormData({
            name: '',
            email: '',
            phone_number: '',
            appointment_date: '',
            message: '',
            service: '',
          });
          setErrorMessages({
            name: '',
            email: '',
            phone_number: '',
            appointment_date: '',
            message: '',
            service: '',
          });
          alertContent();
        } catch (error) {
          alertErrorContent();
          window.location.reload();   
        }
      };
    
      
    return (
        <>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId={VideoContent.video} 
                onClose={() => setIsOpen(!isOpen)} 
            />
           
            <div className={styles.appointmentArea}>
                <div className="container ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.appointmentVideo}>
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className={styles.videoBtn}
                                > 
                                    <i className="ri-play-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.appointmentFormWrap}>
                                <div className={styles.content}>
                                    <h3>Make an appointment</h3>
                                </div>
                                
                                <form className={styles.appointmentForm} onSubmit={submitAppointment}>
                                    <div className={styles.formGroup}>
                                        <input
                                          type="datetime-local"
                                          className={styles.formControl}
                                          name="appointment_date"
                                          value={formData.appointment_date}
                                          onChange={handleChange}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input 
                                            type="text" 
                                            className={styles.formControl}
                                            name="name"
                                            placeholder="Enter your name" 
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input 
                                            type="text" 
                                            className={styles.formControl}
                                            name="email" 
                                            placeholder="Email address" 
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input 
                                            type="text" 
                                            className={`${styles.formControl}`}
                                            placeholder="Phone Number" 
                                            name="phone_number"
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    
                                    <div className={styles.formGroup}>
                                                  <div className={styles.formSelect}>
                                                    <select
                                                      className="form-select"
                                                      aria-label="Default select example"
                                                      name="service"
                                                      value={formData.service}
                                                      onChange={handleChange}
                                                    >
                                                      <option>Select service</option>
                                                      {ServiceInfoContent.map((result, i) => (
                                                        <option value={result._id} key={i}>
                                                          {result.title}
                                                        </option>
                                                      ))}
                                                    </select>
                                                  </div>
                                     </div>

                                    <div className={styles.formGroup}>
                                        <textarea 
                                            name="message" 
                                            className={styles.formControl} 
                                            placeholder="Write message..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="default-btn border-0 w-100"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentForm;