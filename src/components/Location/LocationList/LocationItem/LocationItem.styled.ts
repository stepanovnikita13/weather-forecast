import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'

interface IRow {
	rtl?: boolean
}
export const Row = styled.div<IRow>(
	({ rtl }) => css`
		display: flex;
		flex-wrap: nowrap;
		flex-direction: ${rtl ? 'row-reverse' : 'row'};
		align-items: center;
	`
)
interface ITitle {
	active?: boolean
}
export const Title = styled.span<ITitle>(
	({ active = false, theme }) => css`
		overflow: hidden;
		display: block;
		margin-bottom: -2px;
		&:after {
			content: '';
			display: block;
			height: 2px;
			width: 100%;
			opacity: ${active ? 1 : 0};
			background-color: ${theme.colors.primary};
			transform: translateX(${active ? 0 : '-100%'});
			transition: transform 0.15s, opacity 0.15s;
		}
	`
)
interface ILink {
	disabled?: boolean
}
export const Link = styled(NavLink)<ILink>(
	({ disabled }) => css`
		position: absolute;
		display: block;
		top: 0;
		right: 50px;
		bottom: 0;
		left: 0;
		${disabled && 'pointer-events: none'}
	`
)
