import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from './Input'

export default {
	component: Input,
	title: 'Input',
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />
Template.args = { name: 'input' }

export const Default = Template.bind({})

export const Label = Template.bind({})
Label.args = {
	label: 'Label',
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
