import React from 'react'

export const Navegation = () => {
    return (
        <ul className='nav__general'>

            <li id='topografia' className='nav__li-general'>
                <a href="#Topografia">TOPOGRAFÍA</a>
                <ul className='nav__sub'>
                    <li><a href="#Georeferenciación">Georeferenciación</a> </li>
                    <li><a href="#Aclaraciones_de _areas">Aclaraciones de áreas</a></li>
                    <li><a href="#Topografía_y_fotogrametría_aerea">Topografía y fotogrametría aerea</a></li>
                    <li><a href="#Englobes_y_desenglobes">Englobes y desenglobes</a></li>
                    <li><a href="#Levantamiento_Altimetrico_y_Planimetro">Levantamiento Altimétrico y Planímetro</a></li>
                    <li><a href="#Replanteo">Replanteo</a></li>
                </ul>
            </li>


            <li className='nav__li-general'>
                <a href="#Geologia">GEOLOGÍA Y CIVIL</a>
                <ul className='nav__sub'>
                    <li><a href="#Minas">Cartografía minera</a></li>
                    <li><a href="#Minas">Asesoría en legislación minera</a></li>
                    <li><a href="#Proyectos_Viales">Proyectos Viales</a></li>
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
        </ul>
    )
}
