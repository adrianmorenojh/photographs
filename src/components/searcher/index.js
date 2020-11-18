import React, { useState } from 'react'
import { Search, Input, Icon } from './styles'
import {FiSearch} from 'react-icons/fi'

export const Searcher = () => {
    
    const [ state, setState ] = useState({value:''})

    const handleChange = (event) => {
        setState({value: event.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault()
        console.log('hiciste submit',  state.value)
    }
    console.log('searcher', state.value)

    return(
        <Search onSubmit={handleSubmit} >
            <Icon For="search" > 
                <FiSearch/>
            </Icon>
            <Input type="search" id="search" placeholder="Escribe una categoria.." value={state.value} onChange={handleChange}/>
        </Search>
    )
}