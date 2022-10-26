import React, { useEffect, useState } from 'react'
import Btn from './elements/Btn';
import styles from '../styles/style.module.css'

const Service = ({service}) => {
    let { title, description, img, reverse } = service

    const [ imageUrl, setImageUrl ] = useState(null)

    useEffect(() => {
        import(`../img/${img}`).then(image => {
            setImageUrl(image.default);
        });
    }, [img]);

    return (
        <div className={styles.service} style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
            {imageUrl && <img src={imageUrl} alt="service" className={styles.serviceImage}  />}
            <div className={styles.serviceContent}>
                <h4 className={styles.serviceTitle}>{title}</h4>
                <p className={styles.serviceDescription}>{description}</p>
                <Btn text="LEARN MORE" />
            </div>
        </div>
    );
}

export default Service