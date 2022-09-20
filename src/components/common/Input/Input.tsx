import React, { useState } from 'react'
import { Wrapper, Input as InputStyled, Label, Box } from './Input.styled'

export interface IInputProps {
	name: string
	label: string
	hideLabel?: boolean
	fullwidth?: boolean
	disabled?: boolean
	error?: boolean
	[key: string]: any
}

const Input: React.FC<IInputProps> = (props) => {
	const { name, label, fullwidth, disabled, error, hideLabel, ...rest } = props
	const [focused, setFocused] = useState<boolean>(false)
	const [value, setValue] = useState<string>('')

	const handlerFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		setFocused(true)
	}
	const handlerBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setFocused(false)
	}
	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	return (
		<Wrapper fullwidth={fullwidth}>
			<Label
				htmlFor={name}
				active={focused || value.length > 0}
				hideLabel={Boolean(hideLabel)}
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
					{...rest}
					type='text'
					onFocus={handlerFocus}
					onBlur={handlerBlur}
					onChange={handlerChange}
				/>
			</Box>
		</Wrapper>
	)
}

export default Input
