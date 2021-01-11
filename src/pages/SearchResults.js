import React from 'react'
import { PictureList } from '../components/PictureList'

import { useImages } from '../hooks/useImages'
import { useParams } from 'react-router-dom'

export const SearchResults = () =>{

    const { keyword } = useParams()

    const {loading, error, state, setPage} = useImages('', keyword)

    return(
            <>  
                <PictureList loading={loading} state={state} setPage={setPage} error={error}/>
            </>
    )
}