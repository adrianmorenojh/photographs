import styled from 'styled-components'
import esqueleto from 'react-loading-skeleton'

export const Container =styled.section`
    background-color: ${({ theme }) => theme.BackgroundHome};
    box-sizing: border-box;
    padding: .3em;
    display: grid;
    grid-auto-rows: 200px;
    grid-gap: .3rem;
    grid-auto-flow: row dense;
    margin: 0px;
    border:none;

    @media all and (min-width: 280px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media all and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        margin: 0 25px;
    }

    @media all and (min-width: 1024px) {
        grid-template-columns: repeat(6, 1fr);
        margin: 0 100px;
    }
`

export const Div = styled.div`
    &:nth-child(11n+1){
        grid-column: span 1;
    }
    &:nth-child(11n+4){
        grid-column: span 2;
        grid-row:span 1;
    }
    &:nth-child(11n+6) {
        grid-column: span 3;
        grid-row: span 1;
    }
    &:nth-child(11n+7) {
        grid-column: span 1;
        grid-row: span 2;
    }
    &:nth-child(11n+8) {
        grid-column: span 2;
        grid-row: span 2;
    }
    &:nth-child(11n+9) {
        grid-row: span 3;
}
`

export const Skeleton = styled(esqueleto)`
    background-color:rgb(230,231, 236) !IMPORTANT;
    background-image: linear-gradient( 90deg,rgb(230,231, 236),rgb(220,221,226),rgb(230,231, 236) ) !IMPORTANT;
    border-radius: 1px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border:none;
`

