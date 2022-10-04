import styled from 'styled-components/macro'
import { device } from '../../styles/device'

export const RootBox = styled.div`
	display: flex;
	flex-flow: row;
	height: 100%;
`

export const SidebarBox = styled.div`
	@media ${device.tabletL} {
		width: 30%;
	}
`

export const Main = styled.div`
	z-index: 1;
	flex: 1 0 auto;
`
