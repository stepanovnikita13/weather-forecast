import { Background, Inner, Item, List } from './List.styled'
export { List }

interface IListItemProps {
	children: React.ReactNode
	disabled?: boolean
}
export const ListItem: React.FC<IListItemProps> = (props) => {
	const { disabled } = props
	return (
		<Item disabled={disabled}>
			<Background />
			<Inner>{props.children}</Inner>
		</Item>
	)
}
