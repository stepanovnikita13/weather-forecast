import { ComponentMeta, ComponentStory } from '@storybook/react'
import Icon, { TIconNames } from './Icon'

const iconNames = [
	'check',
	'excl',
	'info',
	'location',
	'menu',
	'plus',
	'search',
	'settings',
	'trash',
]

export default {
	component: Icon,
	title: 'Icons',
	args: {
		color: '',
		size: 'm',
	},
	argTypes: {
		size: {
			name: 'size',
			description: 'Option to select element size',
			options: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
			control: {
				type: 'select',
			},
			table: {
				defaultValue: {
					summary: 'm',
				},
			},
		},
		color: {
			name: 'color',
			description: 'Icon color',
		},
	},
	decorators: [
		(Story) => (
			<div style={{ padding: '20px' }}>
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

const TemplateLibrary: ComponentStory<typeof Icon> = (args) => (
	<div
		style={{
			display: 'flex',
			flexFlow: 'row wrap',
			gap: '10px',
			justifyContent: 'flex-start',
		}}
	>
		{iconNames.map((item) => (
			<div
				key={item}
				style={{
					position: 'relative',
					padding: '30px 30px 10px',
					backgroundColor: 'white',
					borderRadius: '3px',
				}}
			>
				<div
					style={{
						position: 'absolute',
						width: '100%',
						left: 0,
						top: 10,
						textAlign: 'center',
					}}
				>
					<h5>{item}</h5>
				</div>
				<Icon name={item as TIconNames} {...args} />
			</div>
		))}
	</div>
)

export const Default = Template.bind({})
Default.args = {
	name: 'check',
}

export const IconsLibrary = TemplateLibrary.bind({})
