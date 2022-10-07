import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ThemeProvider } from 'styled-components'
import { getTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	//<React.StrictMode>
	<Provider store={store}>
		<ThemeProvider theme={getTheme('light')}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</Provider>
	//</React.StrictMode>
)
reportWebVitals()
