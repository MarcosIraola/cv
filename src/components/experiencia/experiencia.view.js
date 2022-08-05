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
import vue from '../logos/vue.png';

const ExperienciaProfesional = ({idioma}) => {

    return (
        <div className={styles.contenedor}>
            {idioma == 'EN' ?
            <>
            <h1>Professional experience</h1>

            <h2>From July 2021: BitPatagonia</h2>
            <span>Front end developer.</span>
            <div className={styles.contenedor_logos}>
                <img src={html} alt='html' className={styles.logos}/>
                <img src={css} className={styles.logos}/>
                <img src={js} className={styles.logos}/>
                <img src={vue} className={styles.logos}/>
                <img src={react} className={styles.logos}/>
            </div>

            <h2>From 2020 as a freelancer</h2>
            <span>Web design and development.</span>
            <span className={styles.proyecto}>Several projects developed.</span>
            <div className={styles.contenedor_logos}>
                <img src={html} alt='html' className={styles.logos}/>
                <img src={css} className={styles.logos}/>
                <img src={js} className={styles.logos}/>
                <img src={vue} className={styles.logos}/>
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
            </>
            :
            <>
            <h1>Experiencia Profesional</h1>

            <h2>Desde Julio 2021: BitPatagonia</h2>
            <span>Front end developer.</span>
            <div className={styles.contenedor_logos}>
                <img src={html} alt='html' className={styles.logos}/>
                <img src={css} className={styles.logos}/>
                <img src={js} className={styles.logos}/>
                <img src={vue} className={styles.logos}/>
                <img src={react} className={styles.logos}/>
            </div>

            <h2>Desde 2020: como freelancer</h2>
            <span>Diseño web e implementación.</span>
            <span className={styles.proyecto}>Varios proyectos desarrollados.</span>
            <div className={styles.contenedor_logos}>
            <img src={html} alt='html' className={styles.logos}/>
                <img src={css} className={styles.logos}/>
                <img src={js} className={styles.logos}/>
                <img src={vue} className={styles.logos}/>
                <img src={react} className={styles.logos}/>
                <img src={mysql} className={styles.logos}/>
                <img src={php} className={styles.logos}/>
                <img src={laravel} className={styles.logos}/>
            </div>

            <h2>2020: Roomi</h2>
            <span className={styles.proyecto}>Proyecto final de Nuclio Digital School.</span>
            <span>Aplicación web de alquiler de habitaciones.</span>
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
            <span className={styles.proyecto}> Proyecto final en Digital House.</span>
            <span>Aplicacion móvil de streaming de música</span>
            <div className={styles.contenedor_logos}>
                <img src={java} className={styles.logos}/>
                <img src={android} className={styles.logos}/>
                <img src={mysql} className={styles.logos}/>
                <img src={firebase} className={styles.logos}/>
            </div>
            </>
            }
            

        </div>
    );
};

export default ExperienciaProfesional;