import React from 'react';
import styles from './personal.module.css'
import MarcosIraola from './assets/MarcosIraola.png'
import { Linkedin, GitHub, Mail, Phone } from 'react-feather';

const Personal = ({idioma}) => {

    return (
        <div className={styles.contenedor}>

            <h1>Marcos Iraola</h1>
            <h2>Full Stack Developer</h2>

            {idioma == 'EN' ?
            <>
                <span className={styles.info}>Date of birth: 01/07/1993</span>
                <span className={styles.info}>Buenos Aires, Argentina.</span>
                <span className={styles.info}><Phone size={15}/> +54 9 11 3257 5447</span>
                <span className={styles.info}><Mail size={14}/> iraolamarcos@gmail.com</span>
                <br/>
                <span className={styles.info}><strong>Currently in: Buenos Aires, Argentina</strong></span>
            </>

            :
            <>
                <span className={styles.info}>Fecha de nacimiento: 01/07/1993</span>
                <span className={styles.info}>Buenos Aires, Argentina.</span>
                <span className={styles.info}><Phone size={15}/> +54 9 11 3257 5447</span>
                <span className={styles.info}><Mail size={14}/> iraolamarcos@gmail.com</span>
                <br/>
                <span className={styles.info}><strong>Actualmente en: Buenos Aires, Argentina</strong></span>
            </>
            }

            <div className={styles.contenedor_social}>
                <a href='https://www.linkedin.com/in/marcos-iraola-a26321158/' target="_blank" className={styles.social_logo}><Linkedin/></a>
                <a href='https://github.com/MarcosIraola' target="_blank" className={styles.social_logo}><GitHub/></a>
            </div>
        </div>
    );
};

export default Personal;