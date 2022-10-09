import styled, { css } from 'styled-components/macro'
import CitySelection from './LocationSelectForm/LocationSelectForm'
import { Container } from '../common/Layout/Layout'

export interface ILocationProps {}

const LocationContainer = styled.div(
	({ theme }) => css`
		height: 100%;
		width: 100%;
		background-color: ${theme.colors.backgrounds.sidebar};
		overflow: hidden;
	`
)

const Location: React.FC<ILocationProps> = (props) => {
	return (
		<LocationContainer>
			<Container pb={2}>
				<CitySelection />
			</Container>
			<h1>Location list</h1>
		</LocationContainer>
	)
}

export default Location
