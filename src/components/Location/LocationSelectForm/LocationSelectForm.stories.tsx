import { configureStore, createSlice } from '@reduxjs/toolkit'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider } from 'react-redux'
import LocationSelectForm from './LocationSelectForm'

export const MockedState = {
	locationList: [
		{
			country: 'FR',
			lat: 48.8588897,
			lon: 2.3200410217200766,
			name: 'Paris',
			local_names: { ru: 'Париж' },
			state: 'Ile-de-France',
		},
	],
	location: null as string | null,
	status: 0,
	error: null as string | null,
}

type TMockstoreProps = { state: typeof MockedState; children: React.ReactNode }
const Mockstore = ({ state, children }: TMockstoreProps) => (
	<Provider
		store={configureStore({
			reducer: {
				location: createSlice({
					name: 'location',
					initialState: state,
					reducers: {},
				}).reducer,
			},
		})}
	>
		{children}
	</Provider>
)

export default {
	component: LocationSelectForm,
	title: 'Location select',
	excludeStories: /.*MockedState$/,
} as ComponentMeta<typeof LocationSelectForm>

const Template: ComponentStory<typeof LocationSelectForm> = (args) => (
	<LocationSelectForm {...args} />
)

export const Default = Template.bind({})
Default.decorators = [
	(Story) => (
		<Mockstore state={{ ...MockedState, locationList: [] }}>
			<Story />
		</Mockstore>
	),
]
export const Pending = Template.bind({})
Pending.decorators = [
	(Story) => (
		<Mockstore state={{ ...MockedState, locationList: [], status: 1 }}>
			<Story />
		</Mockstore>
	),
]
export const Failed = Template.bind({})
Failed.decorators = [
	(Story) => (
		<Mockstore state={{ ...MockedState, locationList: [], status: 3, error: 'Error' }}>
			<Story />
		</Mockstore>
	),
]
export const Successful = Template.bind({})
Successful.decorators = [
	(Story) => (
		<Mockstore state={{ ...MockedState, status: 2 }}>
			<Story />
		</Mockstore>
	),
]
