import Icon from '../../common/Icons/Icon'
import { Container } from '../../common/Layout/Layout'
import { List } from '../../common/List/List'
import LocationItem from './LocationItem/LocationItem'
import LocationListLoader from './LocationList.loader'
import { Description, Inner } from './LocationList.styled'

export type TLocation = {
	id: number
	name: string
	favorite: boolean
}

export interface ILocationListProps {
	locations: TLocation[]
	onSaveLocation: () => void
	onSelectLocation: () => void
	loading?: boolean
}

const LocationList: React.FC<ILocationListProps> = (props) => {
	const { locations, onSaveLocation, onSelectLocation, loading } = props
	const events = {
		onSaveLocation,
		onSelectLocation,
	}

	if (loading) {
		return (
			<Container>
				<LocationListLoader />
			</Container>
		)
	}

	if (locations.length === 0) {
		return (
			<Container>
				<Inner>
					<Icon name='location' size='xxl' />
					<h4>
						Location list
						<br />
						is empty!
					</h4>
					<Description>
						Add a location to your favorites or start typing in search
					</Description>
				</Inner>
			</Container>
		)
	}

	return (
		<nav>
			<List>
				{locations.map((location) => (
					<LocationItem key={location.id} location={location} {...events} />
				))}
			</List>
		</nav>
	)
}

export default LocationList
