import { configureStore } from '@reduxjs/toolkit'
import city from './locationSlice'

export const store = configureStore({
	reducer: {
		city,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
