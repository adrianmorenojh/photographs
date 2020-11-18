import styled from 'styled-components'

export const Div = styled.div`
    background-color: rgba(0, 0, 0, .6);
    width:100vw;
    height:100vh;
    position: fixed;
    top:0; 
    // padding-top: 60px;
    left:0;
    // display:${props => props.display};
    display:flex;
    align-items:center;
    justify-content:center;
`

export const ImageContainer = styled.div`
    // margin:auto;
    max-height: 100vh;
    width:700px;
    border-radius:2px;
    background-color: ${({ theme }) => theme.BackgroundHome};

    @media(max-height: 420px ) {
        overflow-y: scroll;
      }
`

export const DetailContainer = styled.div`
    display:flex;
    padding: 5px 10px;
    box-sizing:border-box;
    justify-content: space-between;
    align-items: center;
`

export const Image = styled.img`
    width: 100%;
    border-radius: 2px 2px 0 0; 
    max-height: 100vh;
`
export const P = styled.p`
    font-size:16px;
    font-size: 12px;
    font-weight: bold;
    opacity: 0.4;
    margin: 0 5px;
`

export const User = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

export const UserImage = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    margin: 0 5px 0 0;
`

export const Details = styled.div`
    display:flex;
`
export const H2 = styled.h2`
    font-size: 14px;
    margin:0;
    font-weight: 400;

`
export const Views = styled.div`
    display:flex;   
    text-align:center;
    justify-content:center;
`