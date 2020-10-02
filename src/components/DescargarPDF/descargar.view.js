import React from 'react';
import styles from './descargar.module.css';
import { Download } from 'react-feather';

const DescargarPDF = () => {

    function descargarPDF() {

    };

    return (
        <div className={styles.contenedor}>
            <a href="./assets/CV.pdf" download="CV.pdf"  className={styles.texto}><Download size={13}/> Download as .pdf</a>
        </div>
    );
};

export default DescargarPDF;