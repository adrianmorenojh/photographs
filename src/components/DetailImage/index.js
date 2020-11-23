import React from 'react'

import { ImageContainer, Div, DetailContainer, Image, User, H2, UserImage,  Views, ExitIconContainer } from './styles'

import {useParams} from 'react-router-dom'
import { GET_IMAGE } from '../../gql/queries/images'

import { useQuery } from '@apollo/client';

import { AiOutlineClose, AiFillEye } from "react-icons/ai";

export const ImageDetail = () => {

    const {id} = useParams()
    
    const { loading, error, data } = useQuery(GET_IMAGE, {
        variables:  { id },
    },)
    
    console.log("router", data)
    if(loading) {
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error</p>
    }

    return( 
        <Div>
            <ImageContainer >
                <Image src={data.image.largeImageURL} />
                <DetailContainer>
                        <User>
                            <UserImage src={data.image.userImageURL} />
                            <H2>{data.image.user}</H2>
                        </User>
                        <H2>{data.image.tags}</H2>
                        <Views>
                            <AiFillEye size="15px" margin="5px" />
                            <H2>{data.image.views}</H2>
                        </Views>
                </DetailContainer>
                    <ExitIconContainer to='/' >
                        <AiOutlineClose />
                    </ExitIconContainer>
            </ImageContainer>
        </Div>
    )
}

