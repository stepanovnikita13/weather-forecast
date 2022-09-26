import { ComponentMeta, ComponentStory } from '@storybook/react'
import Card from './Card'

export default {
	component: Card,
	title: 'Card',
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
