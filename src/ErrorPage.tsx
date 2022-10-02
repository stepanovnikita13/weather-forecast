import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export interface IErrorPageProps {}

const ErrorPage: React.FC<IErrorPageProps> = (props) => {
	const error = useRouteError()
	console.error(error)

	if (isRouteErrorResponse(error)) {
		return (
			<div>
				<h1>Error</h1>
				<h2>{error.status}</h2>
				<p>{error.statusText}</p>
				{error.data?.message && <p>{error.data.message}</p>}
			</div>
		)
	} else {
		return <h1>Error</h1>
	}
}

export default ErrorPage
