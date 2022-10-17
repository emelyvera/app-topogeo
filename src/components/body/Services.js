import React from 'react';
import { servicios } from '../../data/servicios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Services = () => {
    let topografia = servicios.topografia;
    let geologiaCivil = servicios.geologiaCivil;

    return (
        <div className='service'>
            <section className='service__section'>
                <h2 id='Catastro'>Catastro y Geodesia</h2>
                <div className='service__topography'>
                    <div className='service__topography-items'>
                        <h3 id='Topografía_y_fotogrametría_aerea'>Topografía Fotogrametría</h3>
                        <p className='topo__text'>{topografia.topografiaFotogrametria.topografia}</p>
                        <p>{topografia.topografiaFotogrametria.fotogrametria}</p>
                    </div>
                    <div className='service__topography-items' >
                        <h3 id='Georeferenciación'>Georeferenciación</h3>
                        <p>{topografia.georeferenciacion}</p>
                    </div>
                    <div className='service__topography-items'>
                        <h3 id='Aclaraciones_de _areas'>Aclaraciones de área</h3>
                        <p>{topografia.aclaracionesArea}</p>
                    </div>
                    <div className='service__topography-items'>
                        <h3 id='Englobes_y_desenglobes'>Englobes  Desenglobes</h3>
                        <p>{topografia.englobesDesenglobes}</p>
                    </div>
                    <div className='service__topography-items'>
                        <h3 id='Levantamiento_Altimetrico_y_Planimetro'>Levantamiento Altimétrico Planímetro</h3>
                        <p>{topografia.altimetricoPlanimetrico}</p>
                    </div>
                    <div className='service__topography-items'>
                        <h3 id='Replanteo'>Replanteo</h3>
                        <p>{topografia.replanteo}</p>
                    </div>
                </div>
            </section>
            <br />
            <hr />
            <section className='service__section'>
                <h2 id='Mineria'>Minería</h2>
                <div className='service__topography'>
                    <div className="gc__services">
                        <p className='gc__text'>{geologiaCivil.minera.mineria}</p>
                        <section>
                            {
                                geologiaCivil.minera.serviciosMineros.map((s, i) => {
                                    return (
                                        <dt>
                                            <dl className='footer__sub-serv' >
                                                <div className='footer__sub-service'>
                                                    <FontAwesomeIcon className='header__icon service__color' icon={faCheck} />
                                                    <dt key={i + s}>{s}</dt>
                                                </div>
                                            </dl>
                                        </dt>
                                    )
                                })
                            }
                        </section>
                    </div>
                </div>
            </section>
            <br />
            <hr />
            <section className='service__section'>
                <h2 id='Infraestructura'>Infraestructura</h2>
                <div className='service__topography'>
                    <div className="gc__services">
                        <h3 id='Corredores viales'>Corredores Viales</h3>
                        <p className='gc__text'>{geologiaCivil.infraestructura.infra}</p>
                        <section>
                            {
                                geologiaCivil.infraestructura.serviciosIngra.map((s, i) => {
                                    return (
                                        <dt>
                                            <dl className='footer__sub-serv' >
                                                <div className='footer__sub-service'>
                                                    <FontAwesomeIcon className='header__icon service__color' icon={faCheck} />
                                                    <dt key={i + s}>{s}</dt>
                                                </div>

                                            </dl>
                                        </dt>
                                    )
                                })
                            }
                        </section>
                    </div>
                </div>
            </section>
            <br />
            <hr />
            <section >
                <h2 id='Estudios'>Estudios</h2>
                <div >
                    {servicios.estudios.map((e, i) => {
                        return (
                            <dt>
                                <dl className='footer__sub-serv' >
                                    <div className='footer__sub-service'>
                                        <FontAwesomeIcon className='header__icon service__color' icon={faCheck} />
                                        <dt id='Analisis' key={i}>{e}</dt>
                                    </div>

                                </dl>
                            </dt>
                        )
                    })}
                </div>
            </section>
            <br />
            <hr />
            <section >
                <h2 id='Geologia'>Geología</h2>
                <p className='gc__text'>{servicios.geologia.geologia}</p>
                <div >
                    {servicios.geologia.serviciosGeo.map((e, i) => {
                        return (
                            <dt>
                                <dl className='footer__sub-serv' >
                                    <div className='footer__sub-service'>
                                        <FontAwesomeIcon className='header__icon service__color' icon={faCheck} />
                                        <dt id='Analisis' key={i}>{e}</dt>
                                    </div>

                                </dl>
                            </dt>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
