import styled, { css } from 'styled-components/macro'

export type TWrapper = {
	fullwidth?: boolean
}

export const Wrapper = styled.div<TWrapper>`
	position: relative;
	width: ${(props) => (props.fullwidth ? '100%' : '180px')};
`

export type TBox = {
	disabled?: boolean
	inFocus: boolean
	error?: boolean
	hideLabel?: boolean
}
export const Box = styled.div<TBox>(
	({ disabled, inFocus, error, hideLabel, theme }) => css`
		position: relative;
		display: inline-flex;
		width: 100%;
		margin-top: ${!hideLabel && '1em'};
		border-radius: 8px;
		background-color: ${disabled
			? theme.colors.backgroundDisabled
			: theme.colors.backgroundContainer};
		color: ${disabled ? theme.colors.fontDisabled : theme.colors.font};
		border: 1px solid
			${error ? theme.colors.error : inFocus ? theme.colors.elementBorder : 'transparent'};
		z-index: 0;
		-webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
			0px 1px 2px 0px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
			0px 1px 2px 0px rgba(0, 0, 0, 0.15);
		box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
		&::before {
			content: '';
			position: absolute;
			display: block;
			inset: 0;
			margin: -1px;
			z-index: -1;
			border-radius: 8px;
			opacity: ${inFocus ? 1 : 0};
			transition: opacity 0.1s ease-in-out;
			-webkit-box-shadow: 0px 0px 10px 0px ${theme.colors.shadowClick};
			-moz-box-shadow: 0px 0px 10px 0px ${theme.colors.shadowClick};
			box-shadow: 0px 0px 10px 0px ${theme.colors.shadowClick};
		}
		&:hover {
			outline: ${disabled || inFocus || error
				? '0px'
				: '1px solid ' + theme.colors.textFieldOutline};
		}
		&:disabled {
			outline: none;
		}
	`
)

export type TInput = {
	hideLabel?: boolean
	inFocus: boolean
}
export const Input = styled.input<TInput>(
	({ hideLabel, inFocus, theme }) => `
	display: block;
	width: 100%;
	padding: 0.7em 10px;
	box-sizing: content-box;
	border: none;
	background-color: transparent;
	color: currentColor;
	-webkit-tap-highlight-color: transparent;

	&:hover,
	&:focus,
	&:active {
		outline: 0px;
	}

	&::placeholder {
		color: ${theme.colors.placeholder};
		opacity: ${hideLabel || inFocus ? 1 : 0};
	}
`
)

export type TLabel = {
	active: boolean
	hideLabel: boolean
}
export const Label = styled.label<TLabel>`
	display: block;
	position: absolute;
	transform: ${({ active }) =>
		!active ? 'translate(11px, 28px)' : 'translate(11px, 0px)'};
	transition: transform 0.1s ease-in-out;
	pointer-events: none;
	visibility: ${({ hideLabel }) => hideLabel && 'hidden'};
	z-index: 1;
`
