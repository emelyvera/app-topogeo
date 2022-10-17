import React from 'react'
import { useMediaQuery } from 'react-responsive';
import logo from '../../img/logo.png'
import { Navegation } from './Navegation';
import { Burger } from './Burger';

export const Nav = () => {
    const isMobileTablet = useMediaQuery({ maxWidth: 768 })
    const isDesktop = useMediaQuery({ minWidth: 769 });
    const getInfoForRender = () => {
        if (isDesktop) return <Navegation />
        if (isMobileTablet)  return <Burger />
    }

    return (
        <nav>
            <img className='nav__img' src={logo} alt="logo" />
            {getInfoForRender()}
        </nav>
    )
}
