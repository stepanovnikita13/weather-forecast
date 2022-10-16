import { useTheme } from 'styled-components'
import Icon, { TIconNames, TIconSizes } from '../Icons/Icon'
import { Button } from './IconButton.styled'

export type TButtonArea = 's' | 'm' | 'l'
export type TFloat = 'top' | 'right' | 'bottom' | 'left'
export interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: TIconNames
	disabled?: boolean
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	size?: TIconSizes
	area?: TButtonArea
	float?: TFloat | TFloat[]
}

const IconButton: React.FC<IIconButtonProps> = (props) => {
	const { icon, disabled, size, ...rest } = props
	const theme = useTheme()
	return (
		<Button disabled={disabled} {...rest}>
			<Icon
				name={icon}
				color={disabled ? theme.colors.font.disabled : theme.colors.font.primary}
				size={size}
			/>
		</Button>
	)
}

export default IconButton
