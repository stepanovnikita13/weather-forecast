import { Outlet } from 'react-router-dom'

export interface IRootProps {}

const Root: React.FC<IRootProps> = (props) => {
	return (
		<>
			<div>Location choise</div>
			<div>
				<Outlet />
			</div>
		</>
	)
}

export default Root
