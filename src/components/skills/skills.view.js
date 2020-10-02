import React from 'react';
import styles from './skills.module.css';
import html from '../logos/html.png';
import css from '../logos/css.png';
import js from '../logos/javascript.png';
import react from '../logos/react.png';
import mysql from '../logos/mysql.png';
import php from '../logos/php.png';
import github from '../logos/github.png';
import ps from '../logos/photoshop.png';
import premier from '../logos/premier.png';
import laravel from '../logos/laravel.png';

const Skills = () => {

    return (
        <div className={styles.contenedor}>
            <h1>Skills</h1>
            <div className={styles.row}>
                <img src={html} className={styles.logos}/>
                <img src={css} className={styles.logos}/>
                <img src={js} className={styles.logos}/>
            </div>
            <div className={styles.row}>
                <img src={php} className={styles.logos}/>
                <img src={mysql} className={styles.logos}/>
                <img src={react} className={styles.logos}/>
                <img src={github} className={styles.logos}/>
            </div>
            <div className={styles.row}>
                <img src={laravel} className={styles.logos}/>
                <img src={ps} className={styles.logos}/>
                <img src={premier} className={styles.logos}/>
            </div>
        </div>
    );
};

export default Skills;