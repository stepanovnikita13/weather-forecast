import styled, { css } from 'styled-components/macro'

interface IItem {
	disabled?: boolean
}
export const Item = styled.div<IItem>(
	({ theme, disabled }) => css`
		position: relative;
		list-style-type: none;
		display: flex;
		padding: 0;
		margin: 0;
		height: 50px;
		cursor: pointer;
		color: ${disabled ? theme.colors.font.disabled : theme.colors.font.primary};
		& ${Background} {
			background-color: ${disabled
				? theme.colors.backgrounds.disabled
				: theme.colors.backgrounds.container};
		}
		${!disabled &&
		css`
			&:hover,
			&:focus-within {
				z-index: 1;
			}
			&:hover ${Background}, &:focus-within ${Background} {
				transform: scale(1, 1.1);
				filter: brightness(${theme.themeType === 'dark' ? '110%' : '102%'});
			}
			&:hover ${Background}::after, &:focus-within ${Background}::after {
				box-shadow: ${theme.shadows.m};
			}
			&:hover ${Inner}, &:focus-within ${Inner} {
				transform: scale(1.01, 1.01);
			}
		`}
	`
)
export const Background = styled.div(
	({ theme }) => css`
		position: absolute;
		inset: 0;
		z-index: 0;
		transition: all 0.15s linear;
		&::after {
			content: '';
			position: absolute;
			inset: 0;
			box-shadow: ${theme.shadows.s};
			transition: box-shadow 0.15s linear;
		}
	`
)
export const Inner = styled.div(
	({ theme }) => css`
		display: flex;
		position: relative;
		align-items: center;
		width: 100%;
		height: 100%;
		transition: transform 0.15s linear;
		z-index: 1;
	`
)

export const List = styled.div`
	display: flex;
	flex-flow: column nowrap;
`
