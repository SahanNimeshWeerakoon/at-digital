import React from 'react'
import Btn from './elements/Btn';
import styles from '../styles/style.module.css'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContent}>
                <h2 className={styles.bannerContentHeading}>We crushe your competitors, goals, and sales records - without the B.S.</h2>    
                <Btn text="GET FREE CONSULTATION" />
            </div>
        </div>
    );
}

export default Banner;