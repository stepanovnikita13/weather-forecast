import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Wrapper } from './components/common/Containers/Containers'
import ErrorPage from './ErrorPage'
import useMediaQuery from './hooks/useMediaQuery'
import Root from './routes/Root/Root'
import { device } from './styles/device'

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
	const isMobile = !useMediaQuery(device.tabletL)
	return (
		<Wrapper>
			<RouterProvider router={router} />
		</Wrapper>
	)
}

export default App
