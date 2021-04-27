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

            <h2>Extra: Udemy (in progress)</h2>
            <span>Angular: from 0 to expert</span>
            </>
            :
            <>
            <h1>Historia Academica</h1>

            <h2>HarvardX: CS50W (en progreso)</h2>
            <span>CS50's Programacion web con Python</span>

            <h2>Nuclio Digital School</h2>
            <span>Desarrollo Full Stack</span>

            <h2>Digital House</h2>
            <span>Desarrollo de aplicaciones móviles <br></br> Java & Android</span>

            <h2>Escuela Da Vinci</h2>
            <span>Diseño multimedial</span>

            <h2>Pilgrims College'</h2>
            <span>Colegio bilingüe</span>

            <h2>Extra: Udemy (en progreso)</h2>
            <span>Angular: de 0 a experto</span>
            </>
            }
        </div>
    );
};

export default AcademicHistory;