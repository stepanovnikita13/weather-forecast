import styled, { css, ThemeProvider } from "styled-components/macro"
import { GlobalStyle } from '../src/styles/GlobalStyles'
import { getTheme } from '../src/styles/theme'

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
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
				{ value: 'light', icon: 'circlehollow', title: 'light' },
				{ value: 'dark', icon: 'circle', title: 'dark' }
			],
		},
	}
}

const ThemeBlock = styled.div(({ theme }) =>
	css`
		 position: absolute;
		 inset: 0;
		 overflow: auto;
		 background: ${theme.colors.backgrounds.default};
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