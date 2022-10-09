import Card from './Card/Card'
import CardLoader from './Card/Card.loader'
import { Item, List } from './CardList.styled'

const CardsLoader = Array(4)
	.fill(0)
	.map((item, i) => (
		<Item key={i}>
			<CardLoader />
		</Item>
	))

type TParams = { name: string; data: string }
export interface ICardListProps {
	loading: boolean
	params: TParams[]
	wrapped?: boolean
}

const CardList: React.FC<ICardListProps> = (props) => {
	const { loading, params, wrapped } = props

	return (
		<List wrapped={wrapped}>
			{!loading
				? params.map((item, index) => (
						<Item key={index}>
							<Card title={item.name} value={item.data} />
						</Item>
				  ))
				: CardsLoader}
		</List>
	)
}

export default CardList
