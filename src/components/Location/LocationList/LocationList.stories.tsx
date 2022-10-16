import { ComponentMeta, ComponentStory } from '@storybook/react'
import LocationList from './LocationList'
import { withRouter } from 'storybook-addon-react-router-v6'
import { useTheme } from 'styled-components'

export default {
	component: LocationList,
	title: 'Location list',
	decorators: [
		(Story) => {
			const theme = useTheme()
			return (
				<div
					style={{
						maxWidth: '600px',
						marginInline: 'auto',
						backgroundColor: theme.colors.backgrounds.sidebar,
					}}
				>
					<Story />
				</div>
			)
		},
		withRouter,
	],
	parameters: {
		reactRouter: {
			routePath: '/*',
		},
	},
} as ComponentMeta<typeof LocationList>

const locations = [
	{ id: 0, name: 'Paris', favorite: false },
	{ id: 1, name: 'Moscow', favorite: false },
	{ id: 2, name: 'Stavropol', favorite: false },
	{ id: 3, name: 'Krasnodar', favorite: false },
	{ id: 4, name: 'New-York', favorite: false },
	{ id: 5, name: 'Tokyo', favorite: false },
]
const Template: ComponentStory<typeof LocationList> = (args) => <LocationList {...args} />

export const Default = Template.bind({})
Default.args = {
	locations,
}
export const Loading = Template.bind({})
Loading.args = {
	loading: true,
}

export const Empty = Template.bind({})
Empty.args = {
	locations: [],
}
