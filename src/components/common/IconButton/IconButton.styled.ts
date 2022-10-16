import styled, { css } from 'styled-components/macro'
import { TButtonArea, TFloat } from './IconButton'

const SIZES = {
	s: '.125em',
	m: '.5em',
	l: '1em',
}
interface IButton {
	area?: TButtonArea
	float?: TFloat | TFloat[]
}
export const Button = styled.button<IButton>(
	({ theme, area = 'm', float }) => css`
		line-height: 0;
		background-color: transparent;
		padding: ${SIZES[area]};
		border-radius: ${theme.control.borderRadius};
		&:focus {
			outline: ${theme.control.focusBorderWidth} solid ${theme.colors.action.focusBorder};
		}
		${getPadding(float)}
	`
)

function getPadding(float: TFloat | TFloat[] | undefined) {
	if (float) {
		let floatList: TFloat[] = []
		if (Array.isArray(float)) {
			floatList = float
		} else {
			floatList.push(float)
		}
		return floatList.map((side: TFloat) => `padding-${side}: 0;`)
	}
	return
}
