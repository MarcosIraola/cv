import React from 'react';
import styles from './cvPage.module.css';
import Personal from '../../components/personal/personal.view';
import Skills from '../../components/skills/skills.view';
import AcademicHistory from '../../components/academic/academic.view';
import ExperienciaProfesional from '../../components/experiencia/experiencia.view';
import Idiomas from '../../components/idiomas/idiomas.view';
import OtrasExperiencias from '../../components/otrasExperiencias/otrasExperiencias.view';
import MondoDiCromo from '../../components/mondo/mondo.view';
import DescargarPDF from '../../components/DescargarPDF/descargar.view';

function CvPage({language}) {

  return (
    <div className={styles.contenedor}>

      
      <div className={styles.columnaIzquierda}>
        <Personal idioma={language}/>
        <Skills idioma={language}/>
        <AcademicHistory idioma={language}/>
        <Idiomas idioma={language}/>
      </div>

      <div className={styles.columnaDerecha}>
        <ExperienciaProfesional idioma={language}/>
        <OtrasExperiencias idioma={language}/>
        <MondoDiCromo idioma={language}/>
        <DescargarPDF idioma={language}/>
      </div>

    </div>
  );
}

export default CvPage;