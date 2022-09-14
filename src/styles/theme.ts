const theme = {
   light: {
      background: '#DDE6EE',
      font: '#242424',
   },
   dark: {
      background: '#2F3542',
      font: '#ECECEC',
   },
}

export const getTheme = (themeType: TThemeType): ITheme => ({
   colors: {
      ...theme[themeType],
   },
   themeType,
})

export type IThemeColors = typeof theme.light
export type TThemeType = 'light' | 'dark'
export interface ITheme {
   colors: IThemeColors
   themeType: TThemeType
}

export default theme
