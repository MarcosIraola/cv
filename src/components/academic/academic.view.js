import React from 'react';
import styles from './academic.module.css'

const AcademicHistory = () => {

    return (
        <div className={styles.contenedor}>
            <h1>Academic History</h1>

            <h2>Nuclio Digital School</h2>
            <span>Full stack development master</span>

            <h2>Digital House</h2>
            <span>Java & Android mobile development master</span>

            <h2>Escuela Da Vinci</h2>
            <span>Multimedial design</span>

            <h2>Pilgrims College'</h2>
            <span>Bilingüal high school</span>
        </div>
    );
};

export default AcademicHistory;