import React, { useRef, useCallback, useEffect, useState } from 'react'

import { PictureList } from './styles'
import { Picture } from '../picture'
import Loading from '../LoadingSVG/Loading'
import  { useImages }  from '../../hooks/useImages'
import useNearScreen from '../../hooks/useNearScreen'

import { ImageDetail } from '../DetailImage'

import debounce from 'just-debounce-it'
import { BsFillDashCircleFill } from 'react-icons/bs'

export const Home = () => {

    const { loading, state, setPage } = useImages('places')
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


    const [modal, setModal] = useState(false)

    const [image, setImage] = useState("")

    console.log(modal)

    return( state? 
        <>
            <PictureList>
                {state.map(item => <Picture item={item} key={item.id} setModal={setModal} modal={modal} setImage={setImage}  />)}
            </PictureList>
            <ImageDetail  show={modal} image={image} />
            <div id="visor" ref={externalRef}></div>

        </>: loading?
         <Loading/>:
         <p>error</p>



    )
}