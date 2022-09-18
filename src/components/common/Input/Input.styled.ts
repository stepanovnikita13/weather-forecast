import styled, { css } from 'styled-components'

export type TWrapper = {
   fullwidth?: boolean
   error?: boolean
}

export const Wrapper = styled.div<TWrapper>`
   width: ${(props) => (props.fullwidth ? '100%' : '180px')};
`

export type TBox = {
   disabled?: boolean
}
export const Box = styled.div<TBox>(
   ({ disabled, theme }) => css`
      display: flex;
      align-items: center;
      height: 38px;
      padding: 0 10px;
      border-radius: 8px;
      background-color: ${disabled
         ? theme.colors.backgroundDisabled
         : theme.colors.backgroundContainer};
      color: ${disabled ? theme.colors.fontDisabled : theme.colors.font};
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
)

export const Input = styled.input`
   width: 100%;
   border: none;
   background-color: transparent;
   color: inherit;
   -webkit-tap-highlight-color: transparent;

   &:hover,
   &:focus,
   &:active {
      outline: 0px;
   }
`

export const Label = styled.label`
   //position: 'absolute';
`
