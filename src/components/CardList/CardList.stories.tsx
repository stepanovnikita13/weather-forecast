import { ComponentMeta, ComponentStory } from '@storybook/react'
import CardList from './CardList'

export default {
	component: CardList,
	title: 'Card list',
	decorators: [
		(Story) => (
			<div style={{ padding: '1rem' }}>
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof CardList>

const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />

export const Default = Template.bind({})
Default.args = {
	loading: false,
	params: [
		{ name: 'Wind', data: 'N 7 mph' },
		{ name: 'Humidity', data: '58%' },
		{ name: 'Rain', data: '10%' },
		{ name: 'Feels like', data: '5\u00B0' },
	],
}

export const Loading = Template.bind({})
Loading.args = {
	loading: true,
	params: [],
}

export const Wraped = Template.bind({})
Wraped.decorators = [
	(Story) => (
		<div style={{ width: '420px' }}>
			<Story />
		</div>
	),
]
Wraped.args = {
	...Default.args,
	wrapped: true,
}
