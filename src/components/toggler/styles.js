import styled from 'styled-components'

export const DarkModeButton = styled.div`
    display: flex;
    align-items:center;
    justify-content: ${props => props.flex};
    width: 35px;
    height: 18px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.icon};
    border-radius: 30px;
    cursor: pointer;
    font-size:0.8rem;
    padding: 2px 3px;
    box-sizing: border-box;
    position: absolute;
    top: 10px;
    right: 10px;
}
`