import { createGlobalStyle } from 'styled-components'
import '@fontsource/hind'

export const GlobalStyle = createGlobalStyle`
		body {
	   margin: 0;
	   font-family: 'Hind',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
	      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	   -webkit-font-smoothing: antialiased;
	   -moz-osx-font-smoothing: grayscale;
		color: ${({ theme }) => theme.colors.font}
	}

	code {
   	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}
`