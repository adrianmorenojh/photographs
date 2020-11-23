import React from 'react'

import { PictureContainer, Image } from './styles'

export const Picture = ({item}) =>{ 
    return(    
        <PictureContainer to={`/Detail/${item.id}`}>
            <Image Loading='lazy' src={item.largeImageURL} alt=""/>
        </PictureContainer>
    )
}