import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from '../components/common/Input/Input'

export default {
   component: Input,
   title: 'Input',
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
   name: 'default',
}

export const Label = Template.bind({})
Label.args = {
   name: 'label',
   label: 'Label',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
   name: 'fullwidth',
   fullwidth: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
   name: 'disabled',
   disabled: true,
}
