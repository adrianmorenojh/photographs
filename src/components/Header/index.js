import React from 'react'

import { HeaderContainer, Image, P } from './styles'

import { Toggle } from '../toggler'

export const Header = ({theme, toggleTheme}) =>{
    return(
        <HeaderContainer>
            <Image src="https://img.freepik.com/foto-gratis/santa-maddalena-cordillera-dolomitastirol-sur_661209-237.jpg?size=626&ext=jpg" alt="" />
            <P>Photographs</P>
            <Toggle theme={theme} toggleTheme={toggleTheme}/>
        </HeaderContainer>
    )
}