import  { useEffect, useState } from 'react'
import { GET_IMAGES } from '../gql/queries/images'

import { useQuery } from '@apollo/client';


const INITIAL_PAGE = 1

export const useImages = ( category ) =>{

    const [state, setState] = useState([]) 
    const [ page, setPage ] = useState(1) 

    const { loading, error, data } = useQuery(GET_IMAGES, {
        variables:  { page, category},
    },)
    console.log('useimages', data)
    
    useEffect(() => {
        if (page !== INITIAL_PAGE) return
        if (data)
        setState(data.images)
    },[data, page])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        if (data)
        setState(prevImages => prevImages.concat(data.images))
    },[data, page])

    // const HandleNextPage = e =>{
    //     e.preventDefault()
    //     setPage(prevPage => prevPage + 1)
    // }


 return  { loading, error, state, setPage }
}

