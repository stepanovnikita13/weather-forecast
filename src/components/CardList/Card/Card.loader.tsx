import useMediaQuery from '../../../hooks/useMediaQuery'
import { device } from '../../../styles/device'
import Loader from '../../common/Loader/Loader'

export interface ICardLoaderProps {}

const CardLoader: React.FC<ICardLoaderProps> = (props) => {
	const matched = !useMediaQuery(device.tabletS)
	return (
		<Loader
			style={{
				width: matched ? '100px' : '200px',
				height: matched ? '80px' : '120px',
			}}
		>
			<rect x='0' y='0' rx='4' ry='4' width='100%' height='100%' />
		</Loader>
	)
}

export default CardLoader
