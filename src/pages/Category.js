import React from 'react'
import {PictureList} from '../components/PictureList'

import {useParams} from 'react-router-dom'

export const Category = () =>{

    const { category } = useParams()

    console.log(category)
    return(
    <>
        <PictureList category ={category}/>
    </>
    )
}