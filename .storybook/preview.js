import { ThemeProvider } from "styled-components"
import {getTheme} from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
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
			icon: 'circlehollow',
			items: ['light', 'dark'],
			showName: true,
			dynamicTitle: true
		}
	}
}

const withTheme = (Story, context) => {
	const theme = getTheme(context.globals.theme)
	return (
		<ThemeProvider theme={theme} >
			<Story {...context} />
		</ThemeProvider>
	)
}

export const decorators = [withTheme]