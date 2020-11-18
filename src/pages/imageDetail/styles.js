import styled from 'styled-components'

export const Container = styled.div`
    background: rgba(0, 0, 0, .2);
    width:85%; 
    height: 100%;
    margin: 0 auto 20px;
    display:flex; 
    align-items:center;
    justify-content:center;
    padding: 20px 10px;
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow: 0 0 3px 0px rgb(63,64,70);
`

export const Div = styled.div`
    display:flex;
`
export const Image = styled.img`
    max-width:500px;
`
export const Details = styled.p`
    font-size:16px;
`
export const User = styled.div`
    display:flex;
`
export const UserImage = styled.img`
    width: 50px; 
    height: 50px;
    border-radius: 50px;
`