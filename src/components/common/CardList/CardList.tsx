import Card from '../Card/Card'
import CardLoader from '../Card/Card.loader'
import { Item, List } from './CardList.styled'

type TParams = { name: string; data: string }
export interface ICardListProps {
	loading: boolean
	params: TParams[]
	wrap?: boolean
}

const CardList: React.FC<ICardListProps> = (props) => {
	const { loading, params, wrap } = props

	return (
		<List wrap={wrap}>
			{!loading
				? params.map((item, index) => (
						<Item key={index}>
							<Card title={item.name} value={item.data} />
						</Item>
				  ))
				: [1, 2, 3, 4].map((item) => (
						<Item key={item}>
							<CardLoader />
						</Item>
				  ))}
		</List>
	)
}

export default CardList
