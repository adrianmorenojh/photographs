import styled from 'styled-components'


export const Pictures = styled.section`
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
