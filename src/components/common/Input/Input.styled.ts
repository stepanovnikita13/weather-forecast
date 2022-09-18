import styled, { css } from 'styled-components'

export type TWrapper = {
	fullwidth?: boolean
}

export const Wrapper = styled.div<TWrapper>`
	position: relative;
	width: ${(props) => (props.fullwidth ? '100%' : '180px')};
`

export type TBox = {
	disabled?: boolean
	error?: boolean
	label?: boolean
}
export const Box = styled.div<TBox>(
	({ disabled, error, label, theme }) => css`
		display: inline-flex;
		margin-top: ${label && '1em'};
		border-radius: 8px;
		background-color: ${disabled
			? theme.colors.backgroundDisabled
			: theme.colors.backgroundContainer};
		color: ${disabled ? theme.colors.fontDisabled : theme.colors.font};
		border: 1px solid ${error ? theme.colors.error : 'transparent'};
		-webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
			0px 1px 2px 0px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
			0px 1px 2px 0px rgba(0, 0, 0, 0.15);
		box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.15);

		&:hover {
			outline: ${disabled ? '0px' : '1px solid rgba(0, 0, 0, 0.15)'};
		}
		&:disabled {
			outline: none;
		}
	`
)

export const Input = styled.input`
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
`

export const Label = styled.label`
	display: block;
	position: absolute;
	transform: translate(11px, 28px);
`
