import styled from 'styled-components'

export const PictureContainer = styled.div`
    border:none;
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
export const Image = styled.img`
    border-radius: 1px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border:none;
`