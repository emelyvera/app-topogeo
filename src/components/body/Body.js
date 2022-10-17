import React from 'react';
import logo from '../../img/logodos.png'
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
                <p>TOPOGEO MV SAS, es una empresa colombiana ubicada en el municipio de Chitagá Norte de Santander, dedicada a servicios de consultoria en topografia, geologia, e ingeniería, Formada a partir del apoyo de fondo emprender y gobierno de Colombia.
                    Contamos con profesionales en diferentes áreas capacitados para prestar servicios de alta calidad y estándares que permiten dar soluciones eficaces a nuestros clientes, cotiza con nosotros, te atenderemos prontamente.
                </p>
            </div>
        </section>
    )
}
