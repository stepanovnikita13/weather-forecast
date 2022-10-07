import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import Location from '../Location/Location'
import Sidebar from './Sidebar'

export default {
	component: Sidebar,
	title: 'Sidebar',
	decorators: [
		(Story) => {
			return (
				<Provider store={store}>
					<h1>Content</h1>
					<h2>It's heading</h2>
					<p>
						Welcome to the tutorial! We'll be building a small, but feature-rich app that
						let's you keep track of your contacts. We expect it to take between 30-60m if
						you're following along.
					</p>
					<Story />
				</Provider>
			)
		},
	],
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => (
	<Sidebar {...args}>
		<Location />
	</Sidebar>
)

export const Default = Template.bind({})
Default.args = {
	open: true,
}
