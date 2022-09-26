import COLORS from './colors'
import variables, { TVariables } from './variables'

const commonColors = {
	borderFocus: COLORS.skyblue500,
	error: COLORS.error,
	primary: COLORS.primary500,
}

const theme = {
	light: {
		background: COLORS.skyblue300,
		backgroundContainer: COLORS.skyblue100,
		backgroundDisabled: COLORS.greyBlue300,
		focusShadow: COLORS.skyblue500,
		font: COLORS.black900,
		fontNote: COLORS.greyBlue600,
		fontDisabled: COLORS.greyBlue500,
		placeholder: COLORS.greyBlue500,
		textFieldOutline: COLORS.black_aplha20,
	},
	dark: {
		background: COLORS.darkblue500,
		backgroundContainer: COLORS.darkblue300,
		backgroundDisabled: COLORS.greyBlue700,
		focusShadow: COLORS.greyBlue600,
		font: COLORS.white100,
		fontNote: COLORS.greyBlue500,
		fontDisabled: COLORS.greyBlue600,
		placeholder: COLORS.darkblue400,
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
