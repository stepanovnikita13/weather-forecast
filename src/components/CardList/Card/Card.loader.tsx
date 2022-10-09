import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { device } from '../../../styles/device'

export interface ICardLoaderProps {}

const CardLoader: React.FC<ICardLoaderProps> = (props) => {
	const theme = useTheme()
	const matched = !useMediaQuery(device.tabletS)
	return (
		<ContentLoader
			speed={4}
			interval={0.5}
			backgroundColor={theme.colors.backgrounds.container}
			foregroundOpacity={1}
			foregroundColor={theme.colors.backgrounds.loaderAnimation}
			style={{
				width: matched ? '100px' : '200px',
				height: matched ? '80px' : '120px',
			}}
		>
			<rect x='0' y='0' rx='4' ry='4' width='100%' height='100%' />
		</ContentLoader>
	)
}

export default CardLoader
