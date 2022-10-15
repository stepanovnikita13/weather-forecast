import { List } from '../../common/List/List'
import LocationItem from './LocationItem/LocationItem'

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
		return <div>loading...</div>
	}
	if (locations.length === 0) {
		return <div>empty</div>
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
