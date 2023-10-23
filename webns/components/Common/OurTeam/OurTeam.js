import React from 'react'
import axios from 'axios';
import Link from 'next/link'
import styles from '@/components/Common/OurTeam/OurTeam.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';

const OurTeam = () => {
    
    const [TeamCardContent, setTeamCardContent] =  React.useState([]);

    const button = [
        {
            imageAlt: "Team image",
        }
    ]
  
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}api/team/`)
        .then(response => {
            const data = response.data;
            setTeamCardContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    

    return (
        <>
            <div className="team-area pb-75">
                <div className="container">
                    <div className="section-title">
                        <span>OUR TEAM</span>
                        <h2>We are a team of IT services and technologies specialists</h2>

                        <div className={styles.seeMoreBtn}>
                            <Link href="/team" legacyBehavior>
                                <a>See more Team</a>
                            </Link>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {TeamCardContent.map((result, i) => (
                            <div className="col-lg-3 col-sm-6" key={i}>
                                <div className={styles.singleTeamCard}>
                                    <div className={styles.teamImage}>
                                        <img 
                                            src={result.image[0].url} 
                                            // height={280}
                                            // width={280}
                                            alt={button[0].imageAlt} 
                                        />
                                    </div>
                                    <div className={styles.teamContent}>
                                        <h3>{result.name}</h3>
                                        <span>{result.designation}</span>
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

export default OurTeam;