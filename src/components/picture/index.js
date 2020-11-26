import React, { useContext } from 'react'

import { PictureContainer, Image } from './styles'

import DetailContext from '../../context/DetailContextProvider'

export const Picture = ({item}) =>{ 

    const {setId, setDisplay} = useContext(DetailContext)

    const handleClick = () =>{
        setId(item.id)
        setDisplay('flex')
    }

    return(    
        <PictureContainer onClick={handleClick}>
            <Image Loading='lazy' src={item.largeImageURL} alt=""/>
        </PictureContainer>
    )
}