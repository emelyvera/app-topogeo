import React from 'react'
import uno from '../../img/uno.jpeg';
import dos from '../../img/dos.jpeg';
import tres from '../../img/tres.jpeg';
import cuatro from '../../img/cuatro.jpeg';
import cinco from '../../img/cinco.jpeg';
import seis from '../../img/seis.jpeg';
import siete from '../../img/siete.jpeg';
import ocho from '../../img/ocho.jpeg';
import nueve from '../../img/nueve.jpeg';
import diez from '../../img/diez.jpeg';

export const Carrousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active carrusel__container">
                    <img src={uno} className=" carrusel__img " alt="img" />
                </div>
                <div className="carousel-item carrusel__container">
                    <img src={dos} className=" carrusel__img" alt="img" />
                </div>
                <div className="carousel-item carrusel__container">
                    <img src={tres} className=" carrusel__img" alt="img" />
                </div>
                <div className="carousel-item carrusel__container">
                    <img src={cuatro} className=" carrusel__img" alt="img" />
                </div>
                <div className="carousel-item carrusel__container">
                    <img src={cinco} className=" carrusel__img" alt="img" />
                </div>
                <div className="carousel-item carrusel__container">
                    <img src={seis} className=" carrusel__img" alt="img" />
                </div>
                <div className="carousel-item carrusel__container">
                    <img src={siete} className=" carrusel__img" alt="img" />
                </div>
                <div className="carousel-item carrusel__container">
                    <img src={ocho} className=" carrusel__img" alt="img" />
                </div>
                <div className="carousel-item carrusel__container">
                    <img src={nueve} className=" carrusel__img" alt="img" />
                </div>
                <div className="carousel-item carrusel__container">
                    <img src={diez} className=" carrusel__img" alt="img" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
