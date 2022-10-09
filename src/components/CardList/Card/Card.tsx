import { Box } from '../../common/Layout/Layout'
import { Container, Content, Title, Value } from './Card.styled'

export interface ICardProps {
	title: string
	value: string
}

const Card: React.FC<ICardProps> = (props) => {
	const { title, value } = props
	return (
		<Container>
			<Box>
				<Content>
					<Value>{value}</Value>
					<Title>{title}</Title>
				</Content>
			</Box>
		</Container>
	)
}

export default Card
