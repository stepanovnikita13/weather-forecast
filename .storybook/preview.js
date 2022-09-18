import styled, { css, ThemeProvider } from "styled-components"
import { GlobalStyle } from '../src/styles/GlobalStyles'
import {getTheme} from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
	default: 'light',
	values: [
		{
			name: 'light',
			value: '#DDE6EE'
		},
		{
			name: 'dark',
			value: '#2F3542'
		}
	]},
}

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for Weather Forecact UI',
		defaultValue: 'light',
		toolbar: {
			title: 'Theme',
			icon: 'circlehollow',
			items: [
				{ value: 'light', icon: 'circlehollow', title: 'light'},
				{ value: 'dark', icon: 'circle', title: 'dark'}
				],
		},
	}
}

const ThemeBlock = styled.div(({ theme }) =>
	  css`
		 position: absolute;
		 inset: 0;
		 overflow: auto;
		 padding: 1rem;
		 background: ${theme.colors.background};
	  `
 )

const withTheme = (Story, context) => {
	const theme = getTheme(context.globals.theme)
	return (
		<ThemeProvider theme={theme} >
			<GlobalStyle />
			<ThemeBlock >
				<Story {...context} />
			</ThemeBlock>
		</ThemeProvider>
	)
}

export const decorators = [withTheme]