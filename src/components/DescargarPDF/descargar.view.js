import React from 'react';
import styles from './descargar.module.css';
import { Download } from 'react-feather';
import CV_EN from './assets/MarcosIraolaEN.pdf';
import CV_ES from './assets/MarcosIraolaES.pdf';

const DescargarPDF = ({idioma}) => {

    return (
        <div className={styles.contenedor}>
            {idioma == 'EN' ?
            <a href={CV_EN} download className={styles.texto}><Download size={13}/> Download as .pdf</a>
            :
            <a href={CV_ES} download className={styles.texto}><Download size={13}/> Descargar como .pdf</a>
            }
        </div>
    );
};

export default DescargarPDF;