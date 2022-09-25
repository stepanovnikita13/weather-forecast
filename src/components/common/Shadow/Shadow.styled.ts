import styled from 'styled-components'

export type TWrapper = {
	[key: string]: any
}
export const Wrapper = styled.div<TWrapper>`
	-webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
		0px 1px 2px 0px rgba(0, 0, 0, 0.15);
	-moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
	box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
`
