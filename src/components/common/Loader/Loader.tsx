import ContentLoader, { IContentLoaderProps } from 'react-content-loader'
import { useTheme } from 'styled-components'

export interface ILoaderProps extends IContentLoaderProps {
	children: React.ReactNode
}

const Loader: React.FC<ILoaderProps> = ({ children, ...props }) => {
	const theme = useTheme()
	return (
		<ContentLoader
			speed={4}
			interval={0.5}
			foregroundOpacity={1}
			backgroundColor={theme.colors.backgrounds.loader}
			foregroundColor={theme.colors.backgrounds.loaderAnimation}
			{...props}
		>
			{children}
		</ContentLoader>
	)
}

export default Loader
