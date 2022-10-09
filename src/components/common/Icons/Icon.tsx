import styled, { css } from 'styled-components/macro'

const SIZES = {
	xs: '1rem',
	s: '1.2rem',
	m: '1.728rem',
	l: '2.488rem',
	xl: '3.583rem',
	xxl: '5.159rem',
}

export type TIconNames =
	| 'check'
	| 'excl'
	| 'info'
	| 'location'
	| 'menu'
	| 'plus'
	| 'search'
	| 'settings'
	| 'trash'

export type TIconSizes = keyof typeof SIZES

export interface IIconProps {
	name?: TIconNames
	color?: string
	size?: TIconSizes
}

const Icon: React.FC<IIconProps> = (props) => {
	const { name, color, size = 's' } = props

	const Svg = styled.svg(
		({ theme }) => css`
			& path {
				fill: ${color || theme.colors.font.secondary};
			}
		`
	)
	Svg.defaultProps = {
		width: SIZES[size],
		height: SIZES[size],
		viewBox: `0 0 24 24`,
	}

	switch (name) {
		case 'check':
			return (
				<Svg id='magicoon-Filled' xmlns='http://www.w3.org/2000/svg'>
					<defs></defs>
					<title>check-circle</title>
					<g id='check-circle-Filled'>
						<path
							id='check-circle-Filled-2'
							data-name='check-circle-Filled'
							d='M12,2A10,10,0,1,0,22,12,10.016,10.016,0,0,0,12,2Zm4.71,8.71-5,5a1.014,1.014,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z'
						/>
					</g>
				</Svg>
			)
		case 'excl':
			return (
				<Svg id='magicoon-Filled' xmlns='http://www.w3.org/2000/svg'>
					<defs></defs>
					<title>exclamation-circle</title>
					<g id='exclamation-circle-Filled'>
						<path
							id='exclamation-circle-Filled-2'
							data-name='exclamation-circle-Filled'
							d='M12,2A10,10,0,1,0,22,12,10.016,10.016,0,0,0,12,2Zm0,15a1,1,0,1,1,1-1A1,1,0,0,1,12,17Zm1-5a1,1,0,0,1-2,0V8a1,1,0,0,1,2,0Z'
						/>
					</g>
				</Svg>
			)
		case 'info':
			return (
				<Svg id='magicoon-Filled' xmlns='http://www.w3.org/2000/svg'>
					<defs></defs>
					<title>info-circle</title>
					<g id='info-circle-Filled'>
						<path
							id='info-circle-Filled-2'
							data-name='info-circle-Filled'
							d='M12,2A10,10,0,1,0,22,12,10.016,10.016,0,0,0,12,2Zm1,14a1,1,0,0,1-2,0V12a1,1,0,0,1,2,0ZM12,9a1,1,0,1,1,1-1A1,1,0,0,1,12,9Z'
						/>
					</g>
				</Svg>
			)
		case 'location':
			return (
				<Svg id='magicoon-Filled' xmlns='http://www.w3.org/2000/svg'>
					<defs></defs>
					<title>map-marker</title>
					<g id='map-marker-Filled'>
						<path
							id='map-marker-Filled-2'
							data-name='map-marker-Filled'
							d='M14,10a2,2,0,1,1-2-2A2.006,2.006,0,0,1,14,10Zm5.5,0c0,6.08-4.67,9.89-6.67,11.24a1.407,1.407,0,0,1-.83.26,1.459,1.459,0,0,1-.84-.26C9.16,19.89,4.5,16.09,4.5,10A7.33,7.33,0,0,1,12,2.5,7.336,7.336,0,0,1,19.5,10ZM16,10a4,4,0,1,0-4,4A4,4,0,0,0,16,10Z'
						/>
					</g>
				</Svg>
			)
		case 'menu':
			return (
				<Svg id='magicoon-Filled' xmlns='http://www.w3.org/2000/svg'>
					<defs></defs>
					<title>menu</title>
					<g id='menu-Filled'>
						<path
							id='menu-Filled-2'
							data-name='menu-Filled'
							d='M2,5A1,1,0,0,1,3,4H16a1,1,0,0,1,0,2H3A1,1,0,0,1,2,5Zm19,6H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-9,7H3a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z'
						/>
					</g>
				</Svg>
			)
		case 'plus':
			return (
				<Svg id='magicoon-Filled' xmlns='http://www.w3.org/2000/svg'>
					<defs></defs>
					<title>plus-square</title>
					<g id='plus-square-Filled'>
						<path
							id='plus-square-Filled-2'
							data-name='plus-square-Filled'
							d='M15,2.5H9A6.513,6.513,0,0,0,2.5,9v6A6.513,6.513,0,0,0,9,21.5h6A6.513,6.513,0,0,0,21.5,15V9A6.513,6.513,0,0,0,15,2.5ZM16,13H13v3a1,1,0,0,1-2,0V13H8a1,1,0,0,1,0-2h3V8a1,1,0,0,1,2,0v3h3a1,1,0,0,1,0,2Z'
						/>
					</g>
				</Svg>
			)
		case 'search':
			return (
				<Svg id='magicoon-Filled' xmlns='http://www.w3.org/2000/svg'>
					<defs></defs>
					<title>search</title>
					<g id='search-Filled'>
						<path
							id='search-Filled-2'
							data-name='search-Filled'
							d='M21.707,20.293l-4.539-4.539a8.527,8.527,0,1,0-1.414,1.414l4.539,4.539a1,1,0,0,0,1.414-1.414ZM4,10.5A6.5,6.5,0,1,1,10.5,17,6.508,6.508,0,0,1,4,10.5Z'
						/>
					</g>
				</Svg>
			)
		case 'settings':
			return (
				<Svg id='magicoon-Filled' xmlns='http://www.w3.org/2000/svg'>
					<defs></defs>
					<title>settings</title>
					<g id='settings-Filled'>
						<path
							id='settings-Filled-2'
							data-name='settings-Filled'
							d='M20.33,9.78H20.3a1.207,1.207,0,0,1-1.11-.75.01.01,0,0,0-.01-.01,1.218,1.218,0,0,1,.26-1.31l.03-.03a1.672,1.672,0,0,0,0-2.36l-.79-.78a1.672,1.672,0,0,0-2.36,0l-.01.02a1.233,1.233,0,0,1-1.33.25,1.192,1.192,0,0,1-.76-1.11V3.67A1.664,1.664,0,0,0,12.56,2H11.44A1.664,1.664,0,0,0,9.78,3.67V3.7a1.2,1.2,0,0,1-.75,1.11,1.149,1.149,0,0,1-.48.1,1.2,1.2,0,0,1-.85-.35l-.02-.02a1.672,1.672,0,0,0-2.36,0l-.79.78a1.672,1.672,0,0,0,0,2.36l.03.03A1.217,1.217,0,0,1,3.7,9.78H3.67A1.673,1.673,0,0,0,2,11.45v1.11a1.673,1.673,0,0,0,1.67,1.67H3.7a1.182,1.182,0,0,1,1.11.75,1.248,1.248,0,0,1-.25,1.33l-.02.01a1.684,1.684,0,0,0,0,2.37l.78.78a1.672,1.672,0,0,0,2.36,0l.02-.02a1.186,1.186,0,0,1,1.31-.26,1.214,1.214,0,0,1,.77,1.12v.03A1.656,1.656,0,0,0,11.44,22h1.12a1.656,1.656,0,0,0,1.66-1.66v-.03a1.214,1.214,0,0,1,.77-1.12,1.186,1.186,0,0,1,1.31.26l.02.02a1.672,1.672,0,0,0,2.36,0l.78-.78a1.684,1.684,0,0,0,0-2.37l-.02-.01a1.248,1.248,0,0,1-.25-1.33,1.182,1.182,0,0,1,1.11-.75h.03A1.673,1.673,0,0,0,22,12.56V11.45A1.673,1.673,0,0,0,20.33,9.78ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z'
						/>
					</g>
				</Svg>
			)
		case 'trash':
			return (
				<Svg id='magicoon-Filled' xmlns='http://www.w3.org/2000/svg'>
					<defs></defs>
					<title>trash</title>
					<g id='trash-Filled'>
						<path
							id='trash-Filled-2'
							data-name='trash-Filled'
							d='M22,6a1,1,0,0,1-1,1H3A1,1,0,0,1,3,5H6.559a1,1,0,0,0,.948-.684l.316-.948A2,2,0,0,1,9.721,2h4.558a2,2,0,0,1,1.9,1.367l.316.95A1,1,0,0,0,17.441,5H21A1,1,0,0,1,22,6ZM19.3,9.03l-.61,9.2a3.523,3.523,0,0,1-3.5,3.27H8.81a3.521,3.521,0,0,1-3.5-3.26L4.7,9.03a.511.511,0,0,1,.13-.37A.523.523,0,0,1,5.2,8.5H18.8a.523.523,0,0,1,.37.16A.511.511,0,0,1,19.3,9.03ZM11,12a1,1,0,0,0-2,0v5a1,1,0,0,0,2,0Zm4,0a1,1,0,0,0-2,0v5a1,1,0,0,0,2,0Z'
						/>
					</g>
				</Svg>
			)

		default:
			return null
	}
}

export default Icon
