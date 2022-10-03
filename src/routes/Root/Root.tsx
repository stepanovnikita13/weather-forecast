import { Outlet } from 'react-router-dom'
import CitySelection from '../../components/CitySelection/CitySelection'
import { Main, RootWrapper, Sidebar } from './Root.styled'

export interface IRootProps {}

const Root: React.FC<IRootProps> = (props) => {
	return (
		<RootWrapper>
			<Sidebar id='sidebar' hidden>
				<CitySelection />
			</Sidebar>
			<Main id='main'>
				Weather data
				<Outlet />
			</Main>
		</RootWrapper>
	)
}

export default Root
