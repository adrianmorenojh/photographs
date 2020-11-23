import React, { useEffect, useRef, useCallback } from 'react'
import { Pictures } from './styles'

import { Picture } from '../picture'
import Loading from '../LoadingSVG/Loading'

import { useImages } from '../../hooks/useImages'
import useNearScreen from '../../hooks/useNearScreen'

import debounce from 'just-debounce-it'

import { useParams } from 'react-router-dom'

export const PictureList = ({category}) =>{

    // const { category } = useParams()

    // console.log(category)

    const {loading, state, error, setPage} = useImages(category)

    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ 
        externalRef: loading? null: externalRef, 
        once:false
    })
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 100
    ),[setPage])

    useEffect(function(){
        if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])



    return(state?
        <>
            <Pictures>
                {state.map(item => <Picture item={item} key={item.id} />)}
            </Pictures>
            <div id="visor" ref={externalRef}></div>
        </> :
                <Loading />


    )
}