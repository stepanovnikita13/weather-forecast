import IconButton from '../../../common/IconButton/IconButton'
import { Container } from '../../../common/Layout/Layout'
import { ListItem } from '../../../common/List/List'
import { TLocation } from '../LocationList'
import { Link, Row, Title } from './LocationItem.styled'

export interface ILocationItemProps {
	location: TLocation
	onSaveLocation: () => void
	onSelectLocation: () => void
	disabled?: boolean
	selected?: boolean
}

const LocationItem: React.FC<ILocationItemProps> = (props) => {
	const { disabled, selected, location, onSaveLocation, onSelectLocation } = props

	const resetFocus = (
		e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
	) => {
		if (e.currentTarget instanceof HTMLElement) {
			e.currentTarget.blur()
		}
	}
	const onKeyboardEvent = (fn: () => void) => (e: React.KeyboardEvent<HTMLElement>) => {
		if (e.key === 'Enter') {
			e.currentTarget.click()
		}
	}
	const onClick = (fn: () => void) => (e: React.MouseEvent<HTMLElement>) => {
		fn()
		resetFocus(e)
	}

	return (
		<ListItem disabled={disabled}>
			<Container>
				<Link
					to={'locations/' + location.name.toLowerCase()}
					onClick={onClick(onSelectLocation)}
					onKeyDown={onKeyboardEvent(onSelectLocation)}
					onDragEnd={resetFocus}
				>
					{({ isActive }) => (
						<Row style={{ height: '100%' }}>
							<Container style={{ width: 'auto' }}>
								<Title active={selected || isActive}>{location?.name}</Title>
							</Container>
						</Row>
					)}
				</Link>
				<Row rtl>
					<IconButton
						icon={location.favorite ? 'trash' : 'plus'}
						disabled={disabled}
						onClick={onClick(onSaveLocation)}
						onKeyDown={onKeyboardEvent(onSaveLocation)}
						onDragEnd={resetFocus}
						size='s'
						area='l'
						style={{ marginRight: '-1em' }}
					/>
				</Row>
			</Container>
		</ListItem>
	)
}

export default LocationItem
