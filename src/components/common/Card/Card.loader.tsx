import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'

export interface ICardLoaderProps {}

const CardLoader: React.FC<ICardLoaderProps> = (props) => {
	const theme = useTheme()
	return (
		<ContentLoader
			speed={4}
			interval={0.5}
			width={100}
			height={80}
			backgroundColor={theme.colors.backgrounds.container}
			foregroundOpacity={1}
			foregroundColor={theme.colors.backgrounds.loaderAnimation}
			style={{ width: '100%', height: '100%' }}
		>
			<rect x='0' y='0' rx='4' ry='4' width='100%' height='100%' />
		</ContentLoader>
	)
}

export default CardLoader
