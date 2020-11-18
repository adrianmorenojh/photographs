import React from 'react'

import { ImageContainer, Div, DetailContainer, Image, User, H2, UserImage, P, Views } from './styles'

import { GrView } from "react-icons/gr";

export const ImageDetail = ({image, show}) =>{
    console.log("modal?", show)

    return( show === true?  
        <Div>
            <ImageContainer >
                <Image src={image.largeImageURL} />
                <P>compartida por:</P>
                <DetailContainer>
                        <User>
                            <UserImage src={image.userImageURL} />
                            <H2>{image.user}</H2>
                        </User>
                        <H2>{image.tags}</H2>
                        <Views>
                            <GrView size="15px" margin="5px"/>
                            <H2>{image.views}</H2>
                        </Views>
                </DetailContainer>
            </ImageContainer>
        </Div>: null
    )
}

