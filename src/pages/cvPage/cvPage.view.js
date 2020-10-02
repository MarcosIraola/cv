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

function CvPage() {
  return (
    <div className={styles.contenedor}>
      
      <div className={styles.columnaIzquierda}>
        <Personal/>
        <Skills/>
        <AcademicHistory/>
        <Idiomas/>
      </div>

      <div className={styles.columnaDerecha}>
        <ExperienciaProfesional/>
        <OtrasExperiencias/>
        <MondoDiCromo/>
      </div>

    </div>
  );
}

export default CvPage;