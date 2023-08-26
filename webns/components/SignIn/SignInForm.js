import Link from 'next/link'
import styles from '@/components/SignIn/SignInForm.module.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import API_BASE_URL from '@/utils/apiBaseUrl';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'successfully sign in',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

const alertErrorContent = () => {
    MySwal.fire({
        title: 'Sorry!',
        text: 'you have insert wrong email or password',
        icon: 'error',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

const INITIAL_STATE = {
    username: "",
    password: "",
};



const SignInForm = () => {
    
    const [Content, setContent] = useState(INITIAL_STATE);
    const router = useRouter();

    const handleChange = e => {
        const { name, value } = e.target;
        setContent(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${API_BASE_URL}webns/auth/token/login`;
            const { username, password } = Content;
            const payload = { username, password };
            const response = await axios.post(url, payload);
            const Token = response.data.auth_token;
            localStorage.setItem('Token', Token);
            console.log("Local", localStorage.Token)
            Cookies.set('Token', Token, { expires: 7 })
            const cookie = Cookies.get()
            console.log("Cookies", cookie.Token)
            // router.push('http://localhost:3001/');
            setContent(INITIAL_STATE);
            alertContent();
        } catch (error) {
            alertErrorContent();
            console.log(error)
        }
    };
  
    // React.useEffect(() => {
    //   const jwtToken = localStorage.getItem('jwtToken');
    //   if (jwtToken) {
    //     router.push('http://localhost:3001/');
    //   }
    // }, []);
 

    return (
        <>
            <div className="ptb-100">
                <div className="container">
                    <div className={styles.signInForm}>
                        <h2>Sign In Here</h2>
                        <p>Welcome back. Sign in to your account.</p>

                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label>Email Address </label>
                                <input 
                                    type="email" 
                                    name='username'
                                    className={styles.formControl} 
                                    placeholder="email address" 
                                    value={Content.username}
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    className={styles.formControl} 
                                    placeholder="Password"
                                    name='password'
                                    value={Content.password}
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-6">
                                    <div className={styles.rememberMeWrap}>
                                        <input 
                                            type="checkbox" 
                                            id="test2" 
                                        />
                                        <label htmlFor="test2">Remember me</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.signInBtn}>
                                <button type="submit" className="default-btn">Sign In Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInForm;