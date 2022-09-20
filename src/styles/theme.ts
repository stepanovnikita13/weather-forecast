import COLORS from './colors'
import variables, { TVariables } from './variables'

const commonColors = {
	elementBorder: COLORS.skyblue500,
	error: COLORS.error,
}

const theme = {
	light: {
		background: COLORS.skyblue300,
		backgroundContainer: COLORS.skyblue100,
		backgroundDisabled: COLORS.greyBlue300,
		font: COLORS.black900,
		fontDisabled: COLORS.greyBlue500,
		placeholder: COLORS.greyBlue500,
		shadowClick: COLORS.skyblue500,
		textFieldOutline: COLORS.black_aplha20,
	},
	dark: {
		background: COLORS.darkblue500,
		backgroundContainer: COLORS.darkblue300,
		backgroundDisabled: COLORS.greyBlue700,
		font: COLORS.white100,
		fontDisabled: COLORS.greyBlue600,
		placeholder: COLORS.darkblue400,
		shadowClick: COLORS.greyBlue600,
		textFieldOutline: COLORS.white_alpha40,
	},
}

export const getTheme = (themeType: TThemeType): TTheme => ({
	colors: {
		...commonColors,
		...theme[themeType],
	},
	...variables,
	themeType,
})

export type TThemeColors = typeof theme.light
export type TCommonColors = typeof commonColors
export type TThemeType = 'light' | 'dark'
export type TTheme = TVariables & {
	colors: TThemeColors & TCommonColors
	themeType: TThemeType
}

export default theme
