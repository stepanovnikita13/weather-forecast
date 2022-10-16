import styled, { css } from 'styled-components/macro'
import { device } from '../../../styles/device'

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	pb?: 1 | 2 | 3 | 4 | 5
	indentLess?: boolean
}

export const Container = styled.div<IContainerProps>`
	width: 100%;
	padding-inline: ${({ indentLess }) => (indentLess ? '0 !important' : '1rem')};
	padding-block: ${({ pb, theme }) => pb && theme.indent(pb)};
	@media ${device.tabletS} {
		padding-inline: 1.5rem;
	}
	@media ${device.laptopS} {
		padding-inline: 2rem;
	}
`

export const Wrapper = styled.div`
	width: 100%;
	min-width: 320px;
	height: 100vh;
	@media ${device.laptopL} {
		margin-inline: auto;
		max-width: 1366px;
	}
`

export interface IBox extends React.HTMLAttributes<HTMLDivElement> {
	shadow?: 's' | 'm' | 'l'
}
export const Box = styled.div<IBox>(
	({ theme, shadow = 's' }) => css`
		width: 100%;
		height: 100%;
		box-shadow: ${theme.shadows[shadow]};
		-webkit-box-shadow: ${theme.shadows[shadow]};
		-moz-box-shadow: ${theme.shadows[shadow]};
	`
)
