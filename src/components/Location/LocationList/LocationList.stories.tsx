import { ComponentMeta, ComponentStory } from '@storybook/react'
import LocationList from './LocationList'
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
	component: LocationList,
	title: 'Location list',
	decorators: [withRouter],
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
