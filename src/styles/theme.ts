import COLORS from './colors'
import variables, { TVariables } from './variables'

const commonColors = {
	error: COLORS.error,
	info: COLORS.info,
	primary: COLORS.primary500,
	success: COLORS.success,
	warning: COLORS.warning,
}

const theme = {
	light: {
		action: {
			focusBorder: COLORS.skyblue500_alpha75,
			hoverBorder: COLORS.black_aplha20,
		},
		backgrounds: {
			container: COLORS.skyblue100,
			default: COLORS.skyblue300,
			disabled: COLORS.greyBlue300,
			loaderAnimation: COLORS.greyBlue200,
			overlay: COLORS.black_aplha50,
			sidebar: COLORS.greyBlue400,
		},
		font: {
			disabled: COLORS.greyBlue500,
			primary: COLORS.darkblue500,
			secondary: COLORS.greyBlue500,
		},
	},
	dark: {
		action: {
			focusBorder: COLORS.skyblue500_alpha75,
			hoverBorder: COLORS.white_alpha40,
		},
		backgrounds: {
			container: COLORS.darkblue300,
			default: COLORS.darkblue500,
			disabled: COLORS.greyBlue700,
			loaderAnimation: COLORS.greyBlue600,
			overlay: COLORS.black_aplha60,
			sidebar: COLORS.darkblue600,
		},
		font: {
			disabled: COLORS.greyBlue600,
			primary: COLORS.white100,
			secondary: COLORS.greyBlue500,
		},
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
