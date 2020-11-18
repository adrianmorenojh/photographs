import React from 'react'

import { PictureContainer, Image } from './styles'



export const Picture = ({item, setModal, modal, setImage}) =>{    


    const handleClick = e =>{
        e.preventDefault()
        if (modal === false) setModal(true)
        if (modal === true) setModal(false)
        setImage(item)
    }


    return(    
        <>
            <PictureContainer onClick={handleClick}>
                <Image Loading='lazy' src={item.largeImageURL} alt=""/>
            </PictureContainer>
        </>        

    )
}