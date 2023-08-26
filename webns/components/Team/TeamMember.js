import React from 'react'
import axios from 'axios';
import styles from '@/components/Team/TeamMember.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';
// Team Card Content

const TeamMember = () => {

    const [TeamCardContent, setTeamCardContent] =  React.useState([]);

    const button = [
        {
            imageAlt: "Team image",
        }
    ]
  
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}core/teams/list/`)
        .then(response => {
            const data = response.data;
            console.log("Data", data)
            setTeamCardContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
        <>
            <div className="team-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span>OUR TEAM</span>
                        <h2>We are a team of IT services and technologies specialists</h2>
                    </div>

                    <div className="row justify-content-center">
                        {TeamCardContent.map((result, i) => (
                            <div className="col-lg-4 col-sm-6" key={i}>
                                <div className={styles.singleTeamCard}>
                                    <div className={styles.teamImage}>
                                        <img 
                                            src={result.image.original} 
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

export default TeamMember;