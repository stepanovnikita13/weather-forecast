import styled, { css } from 'styled-components'
import { device } from '../../../styles/device'

export const Container = styled.div(
	({ theme }) => css`
		display: flex;
		flex-flow: column-reverse nowrap;
		width: 100%;
		height: 100%;
		padding: 0.5em;
		border-radius: ${theme.control.borderRadius};
		background-color: ${theme.colors.backgrounds.container};
		-webkit-box-shadow: ${theme.shadows.container};
		-moz-box-shadow: ${theme.shadows.container};
		box-shadow: ${theme.shadows.container};
		@media ${device.tabletS} {
			font-size: 1.2em;
		}
	`
)

export const Value = styled.span`
	font-weight: 700;
	font-size: 1.1em;
`

export const Title = styled.h6`
	//font-size: 0.9em;
	color: ${({ theme }) => theme.colors.font.secondary};
`
