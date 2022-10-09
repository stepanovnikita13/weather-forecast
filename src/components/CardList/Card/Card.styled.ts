import styled, { css } from 'styled-components/macro'
import { device } from '../../../styles/device'

export const Container = styled.div(
	({ theme }) => css`
		width: 110px;
		height: 80px;
		//margin: 5px;
		border-radius: ${theme.control.borderRadius};
		background-color: ${theme.colors.backgrounds.container};
		@media ${device.tabletS} {
			width: 200px;
			height: 120px;
		}
	`
)

export const Content = styled.div(
	({ theme }) => css`
		display: flex;
		flex-flow: column-reverse nowrap;
		width: 100%;
		height: 100%;
		padding: 0.5em;
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
	color: ${({ theme }) => theme.colors.font.secondary};
`
