import COLORS from './colors'
import variables, { TVariables } from './variables'

const commonColors = {
	error: COLORS.error,
}

const theme = {
	light: {
		background: COLORS.skyblue300,
		backgroundContainer: COLORS.skyblue100,
		backgroundDisabled: COLORS.greyBlue300,
		font: COLORS.black900,
		fontDisabled: COLORS.greyBlue500,
	},
	dark: {
		background: COLORS.darkblue500,
		backgroundContainer: COLORS.darkblue400,
		backgroundDisabled: COLORS.greyBlue700,
		font: COLORS.white100,
		fontDisabled: COLORS.greyBlue600,
	},
}

export const getTheme = (themeType: TThemeType): ITheme => ({
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
export interface ITheme extends TVariables {
	colors: TThemeColors & TCommonColors
	themeType: TThemeType
}

export default theme
