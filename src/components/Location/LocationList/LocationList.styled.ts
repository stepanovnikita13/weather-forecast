import styled from 'styled-components/macro'

export const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	text-align: center;
	height: 250px;
`

export const Description = styled.p`
	color: ${({ theme }) => theme.colors.font.secondary};
`
