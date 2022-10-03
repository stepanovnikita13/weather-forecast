import styled from 'styled-components'
import { device } from '../../../styles/device'

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	pb?: 1 | 2 | 3 | 4 | 5
	indentLess?: boolean
}

export const Container = styled.div<IContainerProps>`
	margin-inline: ${({ indentLess }) => (indentLess ? '0 !important' : '1rem')};
	padding-block: ${({ pb, theme }) => pb && theme.indent(pb)};
	@media ${device.tabletS} {
		margin-inline: 1.5rem;
	}
	@media ${device.laptopS} {
		margin-inline: 2rem;
	}
	@media ${device.laptopM} {
		margin-inline: 0;
	}
`

export const Wrapper = styled.div`
	width: 100%;
	min-width: 320px;
	height: 100vh;
	@media ${device.laptopM} {
		margin-inline: auto;
		max-width: 1300px;
	}
`
