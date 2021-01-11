import React from 'react'

import { DarkModeButton } from './styles'

import { BsMoon, BsFillBrightnessHighFill } from 'react-icons/bs'

export const Toggle = ({theme,  toggleTheme }) => {

    return ( theme ==='light' ? 
        <DarkModeButton onClick={toggleTheme} flex='flex-start'>
          <BsFillBrightnessHighFill/>
        </DarkModeButton>
        :
        <DarkModeButton onClick={toggleTheme} flex='flex-end'>
          <BsMoon/> 
        </DarkModeButton>
    )
}
