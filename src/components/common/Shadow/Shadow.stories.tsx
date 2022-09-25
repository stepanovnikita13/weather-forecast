import { ComponentMeta, ComponentStory } from '@storybook/react'
import Shadow from './Shadow'
import React from 'react'

export default {
	component: Shadow,
	title: 'Shadow',
} as ComponentMeta<typeof Shadow>

const Template: ComponentStory<typeof Shadow> = (args) => <Shadow {...args}>Test</Shadow>

export const Default = Template.bind({})
