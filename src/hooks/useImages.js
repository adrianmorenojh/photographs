import  { useEffect, useState } from 'react'
import { GET_IMAGES } from '../gql/queries/images'

import { useQuery } from '@apollo/client';


const INITIAL_PAGE = 1

export const useImages = ( category, keyword ) =>{
    const [page, setPage] = useState(1)
    const [state, setState] = useState(null)  
    const { loading, error, data } = useQuery(GET_IMAGES, {
        variables:  { page, category, keyword},
    },)

    useEffect(() => {
        setPage(1)
    },[category, keyword])
    
    useEffect(() => {
        if (page !== INITIAL_PAGE) return
        if (data)
        setState(data.images)
    },[data, page, category, keyword])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        if (data)
        setState(prevImages => prevImages.concat(data.images))
    },[data, page, category,keyword])

 return   {loading, error, state, setPage}
}

