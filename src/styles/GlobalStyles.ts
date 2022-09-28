import { createGlobalStyle, css } from 'styled-components'
import '@fontsource/hind'

type THeadings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
const headings: ReadonlyArray<THeadings> = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export const GlobalStyle = createGlobalStyle(
	({ theme }) => css`
		body {
			margin: 0;
			font-size: ${theme.font.basePx};
			font-family: ${theme.font.family};
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			color: ${theme.colors.font.primary};
		}

		code {
			font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
		}

		input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus,
		input:-webkit-autofill:active {
			transition: background-color 5000s ease-in-out 0s;
			-webkit-text-fill-color: ${theme.colors.font.primary} !important;
		}

		h1,
		h2,
		h3,
		h4 {
			margin-bottom: 0.7em;
		}
		${headings.map(
			(h: THeadings) => `
		${h} {
			font-size: ${theme.font[h].size};
			font-weight: ${theme.font[h].weight};
			line-height: ${theme.font[h].lineHeight};
		}
	`
		)}

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
)
