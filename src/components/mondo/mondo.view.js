import React from 'react';
import styles from './mondo.module.css'
import { Instagram } from 'react-feather';

const MondoDiCromo = ({idioma}) => {

    return (
        <div className={styles.contenedor}>
            {idioma == 'EN' ?
            <>
            <h1>Mondo di Cromo</h1>
            <h2>Art project</h2>

            <p>Mondo di Cromo is my artistic name.</p>
            <p>I create digital collagaes of surreal and futuristic landscapes and sceneries using photoshop and other tools.</p>
            <p>I have curated and planned exhibitions of my work and others, as well as designing installations.</p>
            <p>My work is also avalible to buy on a worldwide online market.</p>
            </>
            :
            <>
            <h1>Mondo di Cromo</h1>
            <h2>Art project</h2>

            <p>Mondo di Cromo es mi nombre artístico.</p>
            <p>Diseño collages surrealistas y paisajes futuristas mediante photoshop y otras herramientas.</p>
            <p>Curo y planeo mis propias exhibiciones asi como también realizo pequeñas instalaciones.</p>
            <p>Vendo mis trabajos a todo el mundo a través de un market online.</p>
            </>
            }
            <a href='https://instagram.com/mondo.di.cromo' target="_blank" className={styles.social_logo}><Instagram/></a>
        </div>
    );
};

export default MondoDiCromo;