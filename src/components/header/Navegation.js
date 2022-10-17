import React from 'react'

export const Navegation = () => {
    return (
        <ul className='nav__general'>
            <li id='topografia' className='nav__li-general'>
                <a href="#Catastro">CATASTRO Y GEODESIA</a>
                <ul className='nav__sub'>
                    <li><a href="#Topografía_y_fotogrametría_aerea">Topografía y fotogrametría aerea</a></li>
                    <li><a href="#Georeferenciación">Georeferenciación</a> </li>
                    <li><a href="#Aclaraciones_de _areas">Aclaraciones de áreas</a></li>
                    <li><a href="#Englobes_y_desenglobes">Englobes y desenglobes</a></li>
                    <li><a href="#Levantamiento_Altimetrico_y_Planimetro">Levantamiento Altimétrico y Planímetro</a></li>
                    <li><a href="#Replanteo">Replanteo</a></li>
                </ul>
            </li>
            <li id='topografia' className='nav__li-general'>
                <a href="#Mineria">MINERÍA</a>
            </li>
            <li className='nav__li-general'>
                <a href="#Infraestructura">INFRAESTRUCTURA</a>
                <ul className='nav__sub'>
                    <li><a href="#Corredores viales">Corredores viales</a></li>
                </ul>
            </li>
            <li className='nav__li-general'>
                <a href="#Estudios">ESTUDIOS</a>
                <ul className='nav__sub'>
                    <li><a href="#Analisis">Análisis físicos y químicos de suelos</a></li>
                    <li><a href="#Analisis">Asesoria en Formulación de Proyectos</a></li>
                    <li><a href="#Analisis">Proyectos en impacto ambiental</a></li>
                </ul>
            </li>
            <li className='nav__li-general'>
                <a href="#Geologia">GEOLOGÍA</a>
            </li>
        </ul>
    )
}
