import { Container, Title, Value } from './Card.styled'

export interface ICardProps {
	title: string
	value: string
}

const Card: React.FC<ICardProps> = (props) => {
	const { title, value } = props
	return (
		<Container>
			<Value>{value}</Value>
			<Title>{title}</Title>
		</Container>
	)
}

export default Card
