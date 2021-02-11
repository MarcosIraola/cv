import React from 'react';
import styles from './experiencia.module.css';
import html from '../logos/html.png';
import css from '../logos/css.png';
import js from '../logos/javascript.png';
import react from '../logos/react.png';
import mysql from '../logos/mysql.png';
import php from '../logos/php.png';
import laravel from '../logos/laravel.png';
import java from '../logos/java.png';
import android from '../logos/android.png';
import firebase from '../logos/firebase.png';

const ExperienciaProfesional = () => {

    return (
        <div className={styles.contenedor}>
            <h1>Professional experience</h1>

            <h2>2020: Personal project</h2>
            <span className={styles.proyecto}>Developing a full project.</span>
            <div className={styles.contenedor_logos}>
                <img src={html} className={styles.logos}/>
                <img src={css} className={styles.logos}/>
                <img src={js} className={styles.logos}/>
                <img src={react} className={styles.logos}/>
                <img src={mysql} className={styles.logos}/>
                <img src={php} className={styles.logos}/>
                <img src={laravel} className={styles.logos}/>
            </div>

            <h2>2020: Balt Sessions</h2>
            <span className={styles.proyecto}>Responsive website (in progress).</span>
            <span>Web design and development.</span>
            <div className={styles.contenedor_logos}>
                <img src={html} className={styles.logos}/>
                <img src={css} className={styles.logos}/>
                <img src={js} className={styles.logos}/>
                <img src={react} className={styles.logos}/>
            </div>

            <h2>2020: Santa Pera Market</h2>
            <span className={styles.proyecto}>Responsive website (in progress).</span>
            <span>Web design and development.</span>
            <div className={styles.contenedor_logos}>
                <img src={html} className={styles.logos}/>
                <img src={css} className={styles.logos}/>
                <img src={js} className={styles.logos}/>
                <img src={react} className={styles.logos}/>
                <img src={mysql} className={styles.logos}/>
                <img src={php} className={styles.logos}/>
                <img src={laravel} className={styles.logos}/>
            </div>

            <h2>2020: Roomi</h2>
            <span className={styles.proyecto}>Final project of Nuclio Digital School.</span>
            <span>An application to rent a room.</span>
            <div className={styles.contenedor_logos}>
                <img src={html} alt='html' className={styles.logos}/>
                <img src={css} className={styles.logos}/>
                <img src={js} className={styles.logos}/>
                <img src={react} className={styles.logos}/>
                <img src={mysql} className={styles.logos}/>
                <img src={php} className={styles.logos}/>
                <img src={laravel} className={styles.logos}/>
            </div>

            <h2>2018: PurpleSound</h2>
            <span className={styles.proyecto}>Final project of Digital House.</span>
            <span>Music streaming app.</span>
            <div className={styles.contenedor_logos}>
                <img src={java} className={styles.logos}/>
                <img src={android} className={styles.logos}/>
                <img src={mysql} className={styles.logos}/>
                <img src={firebase} className={styles.logos}/>
            </div>

        </div>
    );
};

export default ExperienciaProfesional;