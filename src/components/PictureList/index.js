import React, { useEffect, useRef, useCallback } from 'react'
import { Pictures } from './styles'

import { Picture } from '../picture'
import Loading from '../LoadingSVG/Loading'
import { ErrorComponent } from '../errorComponent'
 
import useNearScreen from '../../hooks/useNearScreen'

import debounce from 'just-debounce-it'

import { useHistory } from 'react-router-dom'

export const PictureList = ({loading, state, setPage, error}) =>{

    const history = useHistory()

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


    if(error) {
        history.push(`/error`)
    }


    return(state? state.length ?
        <>
            <Pictures>
                {state.map(item => <Picture item={item} key={item.id} />)}
            </Pictures>
            <div id="visor" ref={externalRef}></div>
        </>:<ErrorComponent />
        : <Loading />
 
    )


    
}