import React, { InputHTMLAttributes, useState, forwardRef } from 'react'
import { Box } from '../Layout/Layout'
import { Wrapper, Input as InputStyled, Label, FieldBox } from './Input.styled'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label: string
	hideLabel?: boolean
	fullwidth?: boolean
	disabled?: boolean
	error?: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export type Ref = HTMLInputElement

const Input = forwardRef<Ref, IInputProps>((props, ref) => {
	const {
		name,
		label,
		fullwidth,
		disabled,
		error,
		hideLabel,
		onChange,
		onBlur,
		...rest
	} = props
	const [focused, setFocused] = useState<boolean>(false)
	const [empty, setEmpty] = useState<boolean>(true)

	const handlerFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		setFocused(true)
	}
	const handlerBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setFocused(false)
		if (onBlur) {
			onBlur(e)
		}
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
			<Box>
				<FieldBox
					disabled={disabled}
					error={error}
					hideLabel={hideLabel}
					inFocus={focused}
				>
					<InputStyled
						ref={ref}
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
				</FieldBox>
			</Box>
		</Wrapper>
	)
})

export default Input
