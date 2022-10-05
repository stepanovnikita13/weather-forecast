import styled, { css } from 'styled-components/macro'
import { device } from '../../styles/device'
import { Container } from '../common/Containers/Containers'

export const SidebarContainer = styled.div`
	position: fixed;
	inset: 0;
	z-index: ${({ theme }) => theme.zIndex.sidebar};
`
type TBackground = {
	visible: boolean
	color?: string
}
export const Background = styled.div<TBackground>(
	({ theme, visible, color }) => css`
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		background-color: ${color || theme.colors.backgrounds.overlay};
		opacity: ${Number(visible)};
		transition: opacity 0.1s cubic-bezier(0, 0.65, 0.53, 0.6);
		z-index: -1;
	`
)
type TBar = {
	open: boolean
	bgColor?: string
}
export const Bar = styled.div<TBar>(
	({ theme, open, bgColor }) => css`
		height: 100%;
		width: 100%;
		z-index: ${theme.zIndex.sidebar};
		transform: translateX(${open ? '0' : '-100%'});
		transition: transform 0.15s cubic-bezier(0, 0.65, 0.53, 0.6);
		overflow: hidden;
		background-color: ${bgColor || theme.colors.backgrounds.sidebar};
		@media ${device.tabletS} {
			width: 60vw;
		}
		@media ${device.laptopS} {
			width: 350px;
		}
	`
)

export const SidebarHeader = styled(Container)(
	({ theme }) => css`
		display: flex;
		align-items: center;
		height: ${theme.control.headerHeight.mobile};
		@media ${device.tabletS} {
			height: ${theme.control.headerHeight.tablet};
		}
	`
)
