import { createGlobalStyle } from 'styled-components'
import '@fontsource/hind'

export const GlobalStyle = createGlobalStyle`
		body {
	   margin: 0;
		 font-size: ${({ theme }) => theme.sizes.font.size};
	   font-family: 'Hind',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
	      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	   -webkit-font-smoothing: antialiased;
	   -moz-osx-font-smoothing: grayscale;
		color: ${({ theme }) => theme.colors.font};
	}

	code {
   	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover, 
	input:-webkit-autofill:focus, 
	input:-webkit-autofill:active{
		transition: background-color 5000s ease-in-out 0s;
		-webkit-text-fill-color: ${({ theme }) => theme.colors.font} !important;
	}

	.hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
`
