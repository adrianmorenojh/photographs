import React from 'react'

import {Container, Image, Details, Div, User, UserImage} from './styles'

export const ImageDetail = () =>{

    return(
        <Container>
            <Div>
                <Image src="https://travelgrafia.co/wp-content/uploads/2017/07/Puerto-nari%C3%B1o-Amazonas-Colombia.jpg" />
                <User>
                    <UserImage src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"/>
                    <p>luis felipe</p>
                </User>
                <Details> fernando quisquiño    22 vistas   sol, barcos, naturaleza</Details>
            </Div>
        </Container>
    )

}