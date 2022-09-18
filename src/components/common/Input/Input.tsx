import { Wrapper, Input as InputStyled, Label, Box } from './Input.styled'

export interface IInputProps {
	name: string
	label?: string
	fullwidth?: boolean
	disabled?: boolean
	error?: boolean
	[key: string]: any
}

const Input: React.FC<IInputProps> = (props) => {
	const { name, label, fullwidth, disabled, error, ...rest } = props
	return (
		<Wrapper fullwidth={fullwidth}>
			<Label htmlFor={name}>{label}</Label>
			<Box disabled={disabled} error={error} label={!!label}>
				<InputStyled id={name} disabled={disabled} {...rest} type='text' />
			</Box>
		</Wrapper>
	)
}

export default Input
