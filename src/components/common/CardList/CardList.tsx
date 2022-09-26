import Card from '../Card/Card'
import { Item, List } from './CardList.styled'

type TParams = { name: string; data: string }
export interface ICardListProps {
	loading: boolean
	params: TParams[]
}

const CardList: React.FC<ICardListProps> = (props) => {
	const { loading, params } = props

	if (loading) {
		return <div>loading</div>
	}

	return (
		<List>
			{params.map((item, index) => (
				<Item key={index}>
					<Card title={item.name} value={item.data} />
				</Item>
			))}
		</List>
	)
}

export default CardList
