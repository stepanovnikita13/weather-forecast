import styled from 'styled-components'
import { device } from '../../../styles/device'

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	pb?: 1 | 2 | 3 | 4 | 5
}

const Container = styled.div<IContainerProps>`
	width: 100%;
	min-width: 320px;
	padding-inline: 1rem;
	padding-block: ${({ pb, theme }) => pb && theme.indent(pb)};
	@media ${device.tabletS} {
		padding-inline: 1.5rem;
	}
	@media ${device.laptopS} {
		padding-inline: 2rem;
	}
	@media ${device.laptopM} {
		padding-inline: 0;
		margin-inline: auto;
		max-width: 1300px;
	}
`

export default Container
