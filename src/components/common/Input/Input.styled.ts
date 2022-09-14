import styled from 'styled-components'

export const Wrapper = styled.div``

export const Box = styled.div`
   width: 180px;
   height: 27px;
   border-radius: 8px;
   background-color: ${({ theme }) => theme.colors.background};
   border: 1px solid transparent;
   -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
      0px 1px 2px 0px rgba(0, 0, 0, 0.15);
   -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
      0px 1px 2px 0px rgba(0, 0, 0, 0.15);
   box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.15);

   &:hover {
      border: 1px solid rgba(0, 0, 0, 0.15);
   }
`

export const Input = styled.input`
   width: 100%;
   height: 100%;
   padding: 0 6px;
   border: none;
   background-color: transparent;
   &:hover,
   &:focus,
   &:active {
      outline: none;
   }
`

export const Label = styled.label`
   //position: 'absolute';
`
