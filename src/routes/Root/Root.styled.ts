import styled, { css } from 'styled-components/macro'
import { device } from '../../styles/device'

export const RootWrapper = styled.div`
	display: flex;
	flex-flow: row;
`

type TSidebar = {
	hidden?: boolean
}
export const Sidebar = styled.div<TSidebar>(
	({ theme, hidden }) => css`
		flex: 1 0 100%;
		display: flex;
		flex-flow: column;
		background-color: ${theme.colors.backgrounds.container};
		z-index: 2;

		@media ${device.tabletMax} and (orientation: portrait) {
			transform: translateX(${hidden ? '-100%' : 0});
			visibility: ${hidden ? 'hidden' : 'visible'};
			transition: transform 0.15s cubic-bezier(0, 0.65, 0.53, 0.6),
				visibility 0s ${hidden && '.15s'};
		}
		@media ${device.tabletS} {
			flex: 0 0 400px;
		}
		@media ${device.laptopS}, ${device.tabletS} and (orientation: landscape) {
			flex: 0 0 320px;
		}
	`
)

export const Main = styled.div`
	position: absolute;
	inset: 0;
	z-index: 1;

	@media ${device.laptopS}, ${device.tabletS} and (orientation: landscape) {
		position: static;
		flex: 1 0 auto;
	}
`
