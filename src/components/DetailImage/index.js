import React, { useContext } from 'react'

import { ImageContainer, Div, DetailContainer, Image, User, H2, UserImage,  Views, ExitIconContainer } from './styles'


import DetailContext from '../../context/DetailContextProvider'

import { GET_IMAGE } from '../../gql/queries/images'

import { useQuery } from '@apollo/client';

import { AiOutlineClose, AiFillEye } from "react-icons/ai";

export const ImageDetail = () => {

    const {id, display, setDisplay} = useContext(DetailContext)
    
    const { loading, error, data } = useQuery(GET_IMAGE, {
        variables:  { id },
    },)
    
    console.log("router", data)

    if(error){
        return <p>Error</p>
    }

    const handleClick = () =>{
        setDisplay('none')
    }

    return(loading? 
        <Div display={display}>
            <h1>LOADING......</h1>
        </Div>
        :
        <Div display={display}>
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
                    <ExitIconContainer onClick={handleClick} >
                        <AiOutlineClose />
                    </ExitIconContainer>
            </ImageContainer>
        </Div>
    )
}

