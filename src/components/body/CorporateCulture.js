import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';

export const CorporateCulture = () => {
    const [state, setState] = useState({
        culture: false,
        mision: false,
        vision: false,
        experience: false,
        cliente: false
    });
    const isMobile = useMediaQuery({ maxWidth: 480 })

    const handleClick = (n) => {
        switch (n) {

            case '2':
                setState({
                    culture: false,
                    mision: true,
                    vision: false,
                    experience: false,
                    cliente: false
                });
                break;
            case '3':
                setState({
                    culture: false,
                    mision: false,
                    vision: true,
                    experience: false,
                    cliente: false
                });
                break;


            default:
                break;
        }

    }

    const getInfo = () => {

        if (state.mision) {
            return <p className='culture__text'>
                TOPOGEO MV tienen como objetivo contribuir al desarrollo urbano y rural de la región, aportando trabajo conocimiento y asesoría a la comunidad en temas relacionados con los bienes inmuebles.
            </p>
        }
        if (state.vision) {
            return <p className='culture__text'>
                TOPOGEO MV será para el año 2025 una empresa de consultoría técnica y profesional líder en la región a través de la prestación de servicios profesionales como geología, topografía, e ingeniería, llevando el progreso a nuestro municipio Chitagá. empleando jóvenes profesionales e impulsando la tecnología y ciencia.
            </p>
        }

    }

    return (
        <div className='culture__div'>
            <section className='culture__container'>
                {isMobile ?
                    <div className='culture__con-btn'>

                        <button className='culture__btn' onClick={() => { handleClick('2') }}>MISIÓN</button>
                        {state.mision ? getInfo() : ''}
                        <button className='culture__btn' onClick={() => { handleClick('3') }}>VISIÓN</button>
                        {state.vision ? getInfo() : ''}

                    </div>
                    :
                    <>
                        <div className='culture__con-btn'>
                            <button className='culture__btn' onClick={() => { handleClick('2') }}>MISIÓN</button>
                            <button className='culture__btn' onClick={() => { handleClick('3') }}>VISIÓN</button>
                        </div>

                        {getInfo()}

                    </>


                }
            </section>
        </div>
    )
}
