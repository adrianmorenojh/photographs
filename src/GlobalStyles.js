import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        background:${({ theme }) => theme.body};
        // background-color: #ebecf1;
        color:  ${({ theme }) => theme.text};
        overflow-x: hidden;
    }
`
