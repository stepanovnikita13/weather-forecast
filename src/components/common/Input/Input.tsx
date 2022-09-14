import { Wrapper, Input as InputStyled, Label, Box } from './Input.styled'

export interface IInputProps {
   name: string
   label?: string
}

const Input: React.FC<IInputProps> = (props) => {
   const { name, label, ...rest } = props
   return (
      <Wrapper>
         <Label htmlFor={name}>{label}</Label>
         <Box>
            <InputStyled id={name} {...rest} />
         </Box>
      </Wrapper>
   )
}

export default Input
