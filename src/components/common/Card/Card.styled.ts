import styled, { css } from 'styled-components'
import { device } from '../../../styles/device'
import Shadow from '../Shadow/Shadow'

export const Container = styled(Shadow)(
	({ theme }) => css`
		display: flex;
		flex-flow: column-reverse nowrap;
		width: 100%;
		height: 100%;
		padding: 0.5em;
		border-radius: ${theme.sizes.control.borderRadiusS};
		background-color: ${theme.colors.backgroundContainer};
		@media ${device.tabletS} {
			font-size: 1.2em;
		}
	`
)

export const Value = styled.span`
	font-weight: 700;
	font-size: 1.1em;
`

export const Title = styled.h5`
	font-size: 0.9em;
	color: ${({ theme }) => theme.colors.fontNote};
`
