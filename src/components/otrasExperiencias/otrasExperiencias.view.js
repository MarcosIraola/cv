import React from 'react';
import styles from './otrasExperiencias.module.css'

const OtrasExperiencias = () => {

    return (
        <div className={styles.contenedor}>
            <h1>Other experiences</h1>

            <h2>2017-2020:<br/> Freelance Designer & Event Producer</h2>
            <span>Graphic and audiovisual design.</span>
            <span>Event planner and producer.</span>

            <h2>2017-2018: Cultural Factory</h2>
            <span>Graphic and audiovisual designer.</span>

            <h2>2014-2016: MG54</h2>
            <span>Account assistant in a marketing digital agency.</span>
        </div>
    );
};

export default OtrasExperiencias;