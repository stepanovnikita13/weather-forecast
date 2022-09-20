import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyles'
import { getTheme } from './styles/theme'

function App() {
	return (
		<ThemeProvider theme={getTheme('light')}>
			<GlobalStyle />
			<div className='App'>app</div>
		</ThemeProvider>
	)
}

export default App
