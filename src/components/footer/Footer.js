import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons';
import logo from '../../img/group.png'



export const Footer = () => {

    return (
        <footer className='fooo'>
            <div className='footer__container'>
                <img className='footer_logo' src={logo} alt="img" />
                <div>
                    <h5>Servicios</h5>
                    <dl >
                        <dt><a className="footer__color" href="#Topografia">TOPOGRAFÍA</a>
                            <dl className='footer__sub-serv' >
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Georeferenciación">Georeferenciación</a></dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Aclaraciones_de _areas">Aclaraciones de áreas</a></dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Topografía_y_fotogrametría_aerea">Topografía y fotogrametría aerea</a></dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Englobes_y_desenglobes">Englobes y desenglobes</a></dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Levantamiento_Altimetrico_y_Planimetro">Levantamiento Altimétrico y Planímetro</a></dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Replanteo">Replanteo</a></dt>
                                </div>
                            </dl>
                        </dt>
                        <dt><a className="footer__color" href="#Geologia">GEOLOGÍA Y CIVIL</a>
                            <dl>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Minas">Cartografía minera</a></dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Minas">Asesoría en legislación minera</a></dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Proyectos_Viales">Proyectos Viales</a></dt>

                                </div>
                            </dl>
                        </dt>
                        <dt><a className="footer__color" href="#Estudios">ESTUDIOS</a>
                            <dl >
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Analisis">Análisis físicos y químicos de suelos</a></dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Analisis">Asesoria en Formulación de Proyectos</a></dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt><a className="footer__color" href="#Analisis">Proyectos en impacto ambiental</a></dt>
                                </div>
                            </dl>
                        </dt>
                    </dl>
                </div>
                <div>
                    <h5>Información</h5>
                    <div className='footer__sub-service margin'>
                        <FontAwesomeIcon className='header__icon' icon={faLocationDot} />
                        <p>Chitagá, NDS, Calle 4 N 6-49</p>
                    </div>
                    <div className="footer__sub-service margin">
                        <FontAwesomeIcon className='header__icon' icon={faPhone} />
                        <p>314 4933302 / 321 3797414</p>
                    </div>
                    <div className="footer__sub-service margin">
                        <FontAwesomeIcon className='header__icon' icon={faEnvelope} />
                        <p>topogeomvsas@gmail.com</p>
                    </div>
                    <div className="footer__sub-service margin">
                        <a href="https://web.facebook.com/profile.php?id=100078414856166" target='_blank' rel='noreferrer'><FontAwesomeIcon className='header__icon' icon={faFacebook} /></a>
                        <p>Topogeo MV</p>
                    </div>
                    <div className="footer__sub-service margin">
                        <a href="https://www.instagram.com/topogeomvsas/" target='_blank' rel='noreferrer'><FontAwesomeIcon className='header__icon' icon={faInstagram} /></a>
                        <p>topogeomvsas</p>
                    </div>
                </div>
            </div>

            <span className='emely'>©2022 by Emely Daniela Vera</span>


        </footer>

    )
}
