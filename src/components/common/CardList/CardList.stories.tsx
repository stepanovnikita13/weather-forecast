import { ComponentMeta, ComponentStory } from '@storybook/react'
import CardList from './CardList'

export default {
	component: CardList,
	title: 'Card list',
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
