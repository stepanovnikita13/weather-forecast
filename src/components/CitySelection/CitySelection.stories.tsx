import { ComponentMeta, ComponentStory } from '@storybook/react'
import CitySelection from './CitySelection'

export default {
	component: CitySelection,
	title: 'City selection',
} as ComponentMeta<typeof CitySelection>

const Template: ComponentStory<typeof CitySelection> = (args) => (
	<CitySelection {...args} />
)

export const Default = Template.bind({})
