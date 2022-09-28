import React, { InputHTMLAttributes, useState } from 'react'
import { Wrapper, Input as InputStyled, Label, Box } from './Input.styled'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label: string
	hideLabel?: boolean
	fullwidth?: boolean
	disabled?: boolean
	error?: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInputProps> = (props) => {
	const { name, label, fullwidth, disabled, error, hideLabel, onChange, ...rest } = props
	const [focused, setFocused] = useState<boolean>(false)
	const [empty, setEmpty] = useState<boolean>(true)

	const handlerFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		setFocused(true)
	}
	const handlerBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setFocused(false)
	}
	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmpty(!e.target.value)
		if (onChange) {
			onChange(e)
		}
	}
	return (
		<Wrapper fullwidth={fullwidth}>
			<Label
				htmlFor={name}
				active={focused || !empty}
				className={hideLabel ? 'hidden' : ''}
			>
				{label}
			</Label>
			<Box disabled={disabled} error={error} hideLabel={hideLabel} inFocus={focused}>
				<InputStyled
					id={name}
					aria-label={label}
					disabled={disabled}
					hideLabel={hideLabel}
					inFocus={focused}
					onFocus={handlerFocus}
					onBlur={handlerBlur}
					onChange={handlerChange}
					{...rest}
				/>
			</Box>
		</Wrapper>
	)
}

export default Input
