import React from 'react';
import styles from './mondo.module.css'
import { Instagram } from 'react-feather';

const MondoDiCromo = () => {

    return (
        <div className={styles.contenedor}>
            
            <h1>Mondo di Cromo</h1>
            <h2>Art project</h2>

            <p>Mondo di Cromo is my artistic name.</p>
            <p>I like creating surreal and futuristic landscapes or scenes by making digital collages using photoshop and other tools</p>
            <p>Oftenly I plan exhibitions of my works and make small instalations.</p>
            <p>I also have an online store where I sell my works worldwide.</p>

            <a href='https://instagram.com/mondo.di.cromo' target="_blank" className={styles.social_logo}><Instagram/></a>
        </div>
    );
};

export default MondoDiCromo;