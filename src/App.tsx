import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ErrorPage from './ErrorPage'
import Root from './routes/Root/Root'
import { GlobalStyle } from './styles/GlobalStyles'
import { getTheme } from './styles/theme'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'weather/:locationName',
				element: <div>Weather data</div>,
			},
		],
	},
])

function App() {
	return (
		<ThemeProvider theme={getTheme('light')}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
