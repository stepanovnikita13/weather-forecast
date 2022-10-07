import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '../../components/common/Containers/Containers'
import Location from '../../components/Location/Location'
import Sidebar from '../../components/Sidebar/Sidebar'
import useMediaQuery from '../../hooks/useMediaQuery'
import { device } from '../../styles/device'
import { Main, RootBox, SidebarBox } from './Root.styled'

export interface IRootProps {}

const Root: React.FC<IRootProps> = (props) => {
	const [sidebarOpen, setSideBarOpen] = useState(true)
	const matches = useMediaQuery(`${device.tabletL}`)

	function handleSidebarClose(): void {
		setSideBarOpen(false)
	}
	return (
		<RootBox>
			{!matches ? (
				<Sidebar open={sidebarOpen} onClose={handleSidebarClose}>
					<Location />
				</Sidebar>
			) : (
				<SidebarBox>
					<Location />
				</SidebarBox>
			)}
			<Main>
				<Container>
					<h1>Weather Data</h1>
				</Container>
				<Outlet />
			</Main>
		</RootBox>
	)
}

export default Root
