import { useRef } from 'react'
import useEffectOnce from '../../hooks/useEffectOnce'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { Background, Bar, SidebarHeader, SidebarContainer } from './Sidebar.styled'

export interface ISidebarProps {
	children: React.ReactNode
	open: boolean
	overlay?: string // Color or 'none' for disable
	bgColor?: string
	onClose?: () => void
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
	const { children, open, onClose, overlay, bgColor } = props
	const ref = useRef<HTMLDivElement>(null)

	useOnClickOutside(ref, handleClickOutside)

	useEffectOnce(() => {
		function handleKeyPress(e: KeyboardEvent) {
			if (e.key === 'Escape' && onClose) {
				onClose()
			}
		}
		window.addEventListener('keydown', handleKeyPress)
		return () => window.removeEventListener('keydown', handleKeyPress)
	})

	function handleClickOutside() {
		if (onClose) {
			onClose()
		}
	}

	return (
		<SidebarContainer>
			{overlay !== 'none' && <Background visible={open} color={overlay} />}
			<Bar ref={ref} open={open} bgColor={bgColor}>
				<SidebarHeader>
					<button onClick={onClose}>close</button>
				</SidebarHeader>
				{children}
			</Bar>
		</SidebarContainer>
	)
}

export default Sidebar
