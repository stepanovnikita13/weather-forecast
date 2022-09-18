import { Wrapper, Input as InputStyled, Label, Box } from './Input.styled'

export interface IInputProps {
   name: string
   label?: string
   fullwidth?: boolean
   disabled?: boolean
   error?: boolean
}

const Input: React.FC<IInputProps> = (props) => {
   const { name, label, fullwidth, disabled, error, ...rest } = props
   return (
      <Wrapper fullwidth={fullwidth} error={error}>
         <Label htmlFor={name}>{label}</Label>
         <Box disabled={disabled}>
            <InputStyled id={name} {...rest} />
         </Box>
      </Wrapper>
   )
}

export default Input
