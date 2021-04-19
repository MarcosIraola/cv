import React from 'react';
import styles from './otrasExperiencias.module.css'

const OtrasExperiencias = ({idioma}) => {

    return (
        <div className={styles.contenedor}>
            {idioma == 'EN' ?
            <>
            <h1>Other experiences</h1>

            <h2>2017-2020:<br/> Freelance Designer & Event Producer</h2>
            <span>Graphic and audiovisual design.</span>
            <span>Event planner and producer.</span>

            <h2>2017-2018: Cultural Factory</h2>
            <span>Graphic and audiovisual designer.</span>

            <h2>2014-2016: MG54</h2>
            <span>Account assistant in a digital marketing agency.</span>
            </>
            :
            <>
            <h1>Otras experiencias</h1>

            <h2>2017-2020:<br/> Diseñador freelance & Productor de Eventos</h2>
            <span>Diseñador gráfico y audiovisual.</span>
            <span>Productor y planificación de eventos</span>

            <h2>2017-2018: Cultural Factory</h2>
            <span>Diseñador gráfico y audiovisual.</span>

            <h2>2014-2016: MG54</h2>
            <span>Asistente de cuentas en empresa de marketing digital.</span>
            </>
            }

        </div>
    );
};

export default OtrasExperiencias;