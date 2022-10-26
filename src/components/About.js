import React from 'react'
import ellipse from '../img/ellipse.svg'
import about from '../img/about.png'
import styles from '../styles/style.module.css'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <img src={ellipse} className={styles.aboutEllipse} alt="ellipse" />
            <div className={styles.about}>
                <img src={about} className={styles.aboutImage} alt="about us image" />
                <div className={styles.aboutContent}>
                    <h4 className={styles.aboutTitle}>ABOUT US</h4>
                    <div className={styles.aboutUnderline} ></div>
                    <p>
                        We will analyze what and how your lead generation and/or sales have been performing online 
                        to date and how do people behave on your website.
                    </p>
                    <p> 
                        We need to understand your customer’s 
                        journey starting from why they need what you offer, how do they come to your business, 
                        how long does it take, what are the barriers or blockers, & etc. This allows us to 
                        analyze behavior of users coming from different channels in order to build the right 
                        acquisition model
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About