import React from 'react';
import logo from '../../img/logo.png'
import { useMediaQuery } from 'react-responsive'


export const Body = () => {

    const isTablet = useMediaQuery({ minWidth: 769 })
    return (
        <section className='body__container'>
            <div className='body__img'>
                <img className='nav__img cn' src={logo} alt="logo" />
            </div>
            <div className='body__info'>
                {isTablet ? <h1>TOPOGEO MV</h1> : ''}
                <p>TOPOGEO MV S.A.S, es una empresa colombiana con autonomía
                    administrativa y patrimonio propio.
                    se encarga de prestar servicios geológicos de la mano de los mejores profesionales en los cuales se destacan:
                    Caracterización de Materias Primas,
                    Caracterización Mineralógica y Petrográfica,
                    Cartografía Geológica de Superficie y Subterránea,
                    Cartografía Geomorfológica,
                    Descripción de Núcleos de Perforación,
                    Geología Estructural,
                    Interpretación de Sensores Remotos,
                    Modelamiento Geológico 3D,
                    Modelamiento y Estimación de Recursos y Reservas,
                    Muestreo Geoquímico con Fines Multipropósito o Específicos,
                    Prospección de Aguas Subterráneas y
                    Prospección y Evaluación de Yacimientos.
                </p>
            </div>
        </section>
    )
}
