import { configureStore } from '@reduxjs/toolkit'
import location from './locationSlice'

export const store = configureStore({
	reducer: {
		location,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
