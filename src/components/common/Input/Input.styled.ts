import styled, { css } from 'styled-components/macro'

export type TWrapper = {
	readonly fullwidth?: boolean
}

export const Wrapper = styled.div<TWrapper>`
	position: relative;
	width: ${({ theme, ...props }) => (props.fullwidth ? '100%' : theme.control.width)};
	margin: 0.5em 0;
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
		margin-top: ${!hideLabel && theme.font.size};
		border-radius: ${theme.control.borderRadius};
		background-color: ${disabled
			? theme.colors.backgrounds.disabled
			: theme.colors.backgrounds.container};
		outline-style: solid;
		outline-color: ${error
			? theme.colors.error
			: inFocus
			? theme.colors.action.focusBorder
			: 'transparent'};
		outline-width: ${error
			? theme.control.borderWidth
			: inFocus
			? theme.control.focusBorderWidth
			: '0px'};
		color: ${disabled ? theme.colors.font.disabled : theme.colors.font.primary};
		z-index: 0;
		-webkit-box-shadow: ${theme.shadows.container};
		-moz-box-shadow: ${theme.shadows.container};
		box-shadow: ${theme.shadows.container};
		&:hover {
			outline-width: ${!error && !inFocus && !disabled && theme.control.borderWidth};
			outline-color: ${!error &&
			!inFocus &&
			!disabled &&
			theme.colors.action.hoverBorder};
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
	({ hideLabel, inFocus, theme }) => css`
		display: block;
		width: 100%;
		padding: 0.7em 10px;
		box-sizing: content-box;
		border: none;
		background-color: transparent;
		font-size: inherit;
		color: currentColor;
		-webkit-tap-highlight-color: transparent;

		&:hover,
		&:focus,
		&:active {
			outline: 0px;
		}

		&::placeholder {
			color: ${theme.colors.font.secondary};
			opacity: ${hideLabel || inFocus ? 1 : 0};
		}
	`
)

export type TLabel = {
	active: boolean
}
export const Label = styled.label<TLabel>(
	({ active, theme }) => css`
		display: block;
		position: absolute;
		transform: ${!active
			? `translate(11px, calc(100% + 1em + ${theme.control.borderWidth}))`
			: 'translate(3px, 0px)'};
		transition: transform 0.1s ease-in-out, color 0.1s ease-in-out;
		pointer-events: none;
		color: ${active ? theme.colors.font : theme.colors.font.secondary};
		z-index: 1;
	`
)
