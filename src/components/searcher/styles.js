import styled from 'styled-components'

export const Search = styled.form`

    vertical-align: middle;
    white-space: nowrap;
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 28px 0px 18px;
`
export const Input = styled.input`
    width: 80vw;
    max-width: 500px;
    height: 35px;
    background: rgb(215, 215, 215);
    border: none;
    font-size: 10pt;
    float: left;
    color: black;
    padding-left: 20px;
    -webkit-border-radius: 0px 3px 3px 0px;
    -moz-border-radius: 0px 3px 3px 0px;
    border-radius: 0px 3px 3px 0px;
    outline: none !important;

    :hover {
      outline:none;
      background: rgb(215, 215, 215);
      }
    ::-webkit-input-placeholder {
      color: black; !important;
      font-weight:600;
    }
    :-internal-autofill-selected{
      -webkit-box-shadow: 0 0 0 30px rgb(215, 215, 215) inset !important
    }
    :-internal-autofill-previewed{
      -webkit-box-shadow: 0 0 0 30px rgb(215, 215, 215) inset !important
    }

`
export const Icon = styled.label`
    margin-right:-1px; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0 0 15px;
    // width:80%;
    height: 35px;
    border-radius: 5px;
    background: rgb(215, 215, 215);
    color:black;
`