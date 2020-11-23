import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter) `
    text-decoration:none;
`

export const PictureOptionContainer = styled.div`
    //  width:100%;
    // max-width:100vw;
    display: flex;
    overflow-x:scroll;
    align-items: center;
    margin:5px;
    ::-webkit-scrollbar{
        width:8px;
        height:8px
    }
    ::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #b3b3b3;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    ::-webkit-scrollbar-thumb:active {
        background-color: #999999;
    }
    ::-webkit-scrollbar-track {
        background: #e1e1e1;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track:hover,
    ::-webkit-scrollbar-track:active {
        background: #d4d4d4;
      }

    @media all and (min-width: 768px) {
        margin: 5px 30px;
    }

    @media all and (min-width: 1024px) {
        margin: 5px 105px;
    }

` 
export const Div = styled.div`
    font-weight: 500;
    color: ${({ theme }) => theme.CategoryText};
    padding: 0 5px;
    // min-width:45px;
    display:flex;
    align-items:center;
    justify-content:center;
    height:27px;
    margin: 0 3px 5px;
    border-radius:3px;
    background-color: ${({ theme }) => theme.BackgroundCategory};
`
