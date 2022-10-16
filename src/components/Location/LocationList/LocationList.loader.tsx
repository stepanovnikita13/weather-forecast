import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'

export interface ILocationListLoaderProps {}

const LocationListLoader: React.FC<ILocationListLoaderProps> = (props) => {
	const theme = useTheme()
	return (
		<ContentLoader
			speed={4}
			interval={0.5}
			backgroundColor={theme.colors.backgrounds.loader}
			foregroundOpacity={1}
			foregroundColor={theme.colors.backgrounds.loaderAnimation}
			//viewBox='0 0 320 250'
			width={320}
			height={250}
		>
			<rect x='0' y='15' rx='4' ry='4' width='290' height='20' />
			<rect x='300' y='15' rx='4' ry='4' width='20' height='20' />
			<rect x='0' y='65' rx='4' ry='4' width='290' height='20' />
			<rect x='300' y='65' rx='4' ry='4' width='20' height='20' />
			<rect x='0' y='115' rx='4' ry='4' width='290' height='20' />
			<rect x='300' y='115' rx='4' ry='4' width='20' height='20' />
			<rect x='0' y='165' rx='4' ry='4' width='290' height='20' />
			<rect x='300' y='165' rx='4' ry='4' width='20' height='20' />
			<rect x='0' y='215' rx='4' ry='4' width='290' height='20' />
			<rect x='300' y='215' rx='4' ry='4' width='20' height='20' />
		</ContentLoader>
	)
}

export default LocationListLoader
