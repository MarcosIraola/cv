import React, {useState} from 'react';
import styles from './App.module.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import DescargarPDF from './components/DescargarPDF/descargar.view';
import Personal from './components/personal/personal.view';
import MarcosIraola from './components/personal/assets/MarcosIraola.png';
import Certificados from './pages/certificates/certificados.view';
import CvPage from './pages/cvPage/cvPage.view';


import { Switch } from 'antd';
import 'antd/dist/antd.css';


function App() {

  const [data, setData] = useState('EN');

  const handleInputChange = () => {
        if(data == 'EN'){
          setData('ES');
        } else {
          setData('EN');
        }
  }

  return (
          <div className={styles.pagina}>

            <div className={styles.contenedor}>
              <div className={styles.idioma}>
                <Switch 
                checkedChildren="EN" unCheckedChildren="ES" defaultChecked
                onChange={handleInputChange} 
                />
              </div>
              
              <img src={MarcosIraola} className={styles.imagenPerfil}/>
              <CvPage language={data} />
              {/* {data == 'EN' ?
              <span className={styles.fulltime}>AVAILABLE FULL TIME | PART TIME</span>
              :
              <span className={styles.fulltime}>DISPONIBILIDAD FULL TIME | PART TIME</span>
              } */}
            </div>

          </div>
  );
}

export default App;
