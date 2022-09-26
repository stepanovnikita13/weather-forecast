import styled, { css } from 'styled-components'
import { device } from '../../../styles/device'

export type TList = {
	wrap?: boolean
}
export const List = styled.ul<TList>(
	({ wrap }) => css`
		display: flex;
		flex-flow: row ${wrap ? 'wrap' : 'nowrap'};
		overflow-x: auto;
		padding: 5px 0;
		scroll-snap-type: x mandatory;
		&::-webkit-scrollbar {
			width: 0;
			height: 0;
		}
	`
)

export const Item = styled.li`
	flex: 0 0 auto;
	width: 110px;
	height: 80px;
	padding: 5px;
	scroll-snap-align: start;

	@media ${device.tabletS} {
		width: 200px;
		height: 120px;
	}
`
