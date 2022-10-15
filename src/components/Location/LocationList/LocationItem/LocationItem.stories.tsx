import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { TLocation } from '../LocationList'
import LocationItem from './LocationItem'

export default {
	component: LocationItem,
	title: 'Location item',
	decorators: [
		withRouter,
		(Story) => (
			<div style={{ padding: '1em' }}>
				<Story />
			</div>
		),
	],
	parameters: {
		reactRouter: {
			routePath: '/*',
		},
	},
} as ComponentMeta<typeof LocationItem>

const Template: ComponentStory<typeof LocationItem> = (args) => <LocationItem {...args} />

export const Default = Template.bind({})
Default.args = {
	location: {
		id: 0,
		name: 'Paris, FR',
		favorite: false,
	},
}

export const Disabled = Template.bind({})
Disabled.args = {
	...Default.args,
	disabled: true,
}

export const Selected = Template.bind({})
Selected.args = {
	...Default.args,
	selected: true,
}
export const Favorite = Template.bind({})
Favorite.args = {
	location: {
		...(Default.args.location as TLocation),
		favorite: true,
	},
}
