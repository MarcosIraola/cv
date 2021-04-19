import React from 'react';
import styles from './idiomas.module.css'

const Idiomas = ({idioma}) => {

    return (
        <div className={styles.contenedor}>
            {idioma == 'EN' ?
            <>
            <h1>Languages</h1>

            <h2>English</h2>
            <span>Advanced oral and writing</span>
            <span>Bilingüal primary and high school</span>
            <span>IGCSE exams completed</span>

            <h2>Spanish</h2>
            <span>Native</span>
            </>
            :
            <>
            <h1>Idiomas</h1>

            <h2>Ingles</h2>
            <span>Nivel oral y escrito avanzado</span>
            <span>Primario y secundario bilingüe</span>
            <span>Examenes IGCSE completados</span>

            <h2>Español</h2>
            <span>Nativo</span>
            </>
            }
            
        </div>
    );
};

export default Idiomas;