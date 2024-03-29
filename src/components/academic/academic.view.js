import React from 'react';
import styles from './academic.module.css'

const AcademicHistory = ({idioma}) => {

    return (
        <div className={styles.contenedor}>

            {idioma == 'EN' ?
            <>
            <h1>Academic History</h1>

            <h2>Nuclio Digital School</h2>
            <span>Full stack development master</span>

            <h2>Digital House</h2>
            <span>Java & Android mobile development master</span>

            <h2>Escuela Da Vinci</h2>
            <span>Multimedial design</span>

            <h2>Pilgrims College'</h2>
            <span>Bilingual high school</span>

            <h2>Others</h2>
            <span>ITBA: Introduction to Bitcoin, <br></br> cryptocurrencies, Blockchain & smart contracts</span>
            </>
            :
            <>
            <h1>Historia Academica</h1>

            <h2>Nuclio Digital School</h2>
            <span>Desarrollo Full Stack</span>

            <h2>Digital House</h2>
            <span>Desarrollo de aplicaciones móviles <br></br> Java & Android</span>

            <h2>Escuela Da Vinci</h2>
            <span>Diseño multimedial</span>

            <h2>Pilgrims College'</h2>
            <span>Colegio bilingüe</span>

            <h2>Otros</h2>
            <span>ITBA: Introducción a Bitcoin, <br></br> criptomonedas, Blockchain & contratos inteligentes</span>
            </>
            }
        </div>
    );
};

export default AcademicHistory;