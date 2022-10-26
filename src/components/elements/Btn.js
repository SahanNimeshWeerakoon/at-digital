import React from 'react'
import styles from '../../styles/style.module.css'

const Btn = ({text}) => {
    return <button className={styles.btn}>{text}</button>;
}

export default Btn