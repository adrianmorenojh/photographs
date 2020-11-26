import React from 'react'
import { PictureList } from '../../components/PictureList'

import { useImages } from '../../hooks/useImages'

export default function Home(){
    const {loading, error, state, setPage} = useImages('popular', "")
    console.log("home")

    return(
        <>  
            <PictureList loading={loading} state={state} setPage={setPage} error={error}/>
        </>

    )
}

