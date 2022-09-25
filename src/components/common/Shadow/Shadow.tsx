import { Wrapper } from './Shadow.styled'

export interface IShadowProps {
	children: React.ReactNode
	[key: string]: any
}

const Shadow: React.FC<IShadowProps> = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>
}

export default Shadow
