import styled, { css } from 'styled-components'

export type TList = {
	wrapped?: boolean
}
export const List = styled.ul<TList>(
	({ wrapped }) => css`
		display: flex;
		gap: 10px;
		padding: 5px;
		flex-direction: row;
		flex-wrap: ${wrapped ? 'wrap' : 'nowrap'};
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		&::-webkit-scrollbar {
			width: 0;
			height: 0;
		}
	`
)

export const Item = styled.li`
	display: flex;
	flex: 0 0 auto;
	scroll-snap-align: start;
`
