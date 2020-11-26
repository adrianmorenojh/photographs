import React from 'react'
import { PictureList } from '../components/PictureList'

import { useImages } from '../hooks/useImages'
import { useParams } from 'react-router-dom'

export const Category = () =>{

    const { category } = useParams()
    const {loading, error, state, setPage} = useImages(category, "")

    console.log(category)

    return(
    <>
        <PictureList loading={loading} state={state} setPage={setPage} error={error}/>
    </>
    )
}