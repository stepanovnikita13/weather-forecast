import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from './Input'

export default {
	component: Input,
	title: 'Input',
	args: {
		name: 'input',
		label: 'Search',
		hideLabel: true,
		placeholder: 'Type any text',
	},
	decorators: [
		(Story) => (
			<div style={{ padding: '1rem' }}>
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})

export const Label = Template.bind({})
Label.args = {
	hideLabel: false,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
	fullwidth: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
	disabled: true,
	value: 'Disabled',
}

export const Error = Template.bind({})
Error.args = {
	error: true,
}
