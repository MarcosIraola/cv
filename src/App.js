import React from 'react';
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import DescargarPDF from './components/DescargarPDF/descargar.view';
import Personal from './components/personal/personal.view';
import MarcosIraola from './components/personal/assets/MarcosIraola.png';
import Certificados from './pages/certificates/certificados.view';
import CvPage from './pages/cvPage/cvPage.view';

function App() {
  return (
          <div className={styles.contenedor}>
            <img src={MarcosIraola} className={styles.imagenPerfil}/>
            <CvPage/>
            <span className={styles.fulltime}>AVAILABLE FULL TIME | PART TIME</span>
            
          </div>
  );
}

export default App;
