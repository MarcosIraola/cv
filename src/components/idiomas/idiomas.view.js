import React from 'react';
import styles from './idiomas.module.css'

const Idiomas = () => {

    return (
        <div className={styles.contenedor}>
            <h1>Languages</h1>

            <h2>English</h2>
            <span>Advanced oral and writing</span>
            <span>Bilingüal primary and high school</span>
            <span>IGCSE exams completed</span>

            <h2>Spanish</h2>
            <span>Native</span>
            
        </div>
    );
};

export default Idiomas;