import React from 'react'

import { HeaderContainer, Image, P } from './styles'

import { Toggle } from '../toggler'

export const Header = ({theme, toggleTheme}) =>{
    return(
        <HeaderContainer>
            <Image src="https://www.isalud.com/blog/wp-content/uploads/2018/07/Visi%C3%B3n-borrosa-repentina-transitoria.jpg" alt="" />
            <P>Photographs</P>
            <Toggle theme={theme} toggleTheme={toggleTheme}/>
        </HeaderContainer>
    )
}