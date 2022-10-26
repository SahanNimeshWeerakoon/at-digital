import React from 'react'
import logo from '../img/white-logo.png'
import styles from '../styles/style.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLogo}>
                    <img src={logo} alt="logo" />
                    <p style={{marginTop: '30px'}} className={styles.footerPara}>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </div>
                <div className={styles.footerTextContainer}>
                    <div className={styles.footerText}>
                        <h4 className={styles.footerTitle}>Our Technologies</h4>
                        <p className={styles.footerPara}>ReactJS</p>
                        <p className={styles.footerPara}>Gatsby</p>
                        <p className={styles.footerPara}>NextJS</p>
                        <p className={styles.footerPara}>NodeJS</p>
                        <p className={styles.footerPara}>GraphQL</p>
                        <p className={styles.footerPara}>Laravel</p>
                    </div>
                    <div className={styles.footerText}>
                        <h4 className={styles.footerTitle}>Our Services</h4>
                        <p className={styles.footerPara}>Social media Marketing</p>
                        <p className={styles.footerPara}>Web & Mobile App Development</p>
                        <p className={styles.footerPara}>Data & Analytics</p>
                        <p className={styles.footerPara}>Google Marketing solutions</p>
                        <p className={styles.footerPara}>Search Engine Optimization</p>
                    </div>
                </div>
            </div>
            <div style={{textAlign: 'center'}}>
                <hr className={styles.footerTncLine} />
                <p className={styles.footerPara}>Privacy Policy <span>|</span> Privacy Policy</p>
            </div>
        </div>
    );
}

export default Footer