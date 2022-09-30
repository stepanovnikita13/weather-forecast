import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { weatherAPI } from '../api/api'
import { ILocation } from '../api/api-types'

enum Status {
	IDLE,
	LOADING,
	SUCCESSFUL,
	FAILED,
}

interface LocationState {
	locationList: ILocation[]
	location: ILocation | null
	status: Status
	error: string | null | undefined
}

const initialState: LocationState = {
	locationList: [],
	location: null,
	status: Status.IDLE,
	error: null,
}

export const locationSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchLocations.pending, (state) => {
				state.status = Status.LOADING
			})
			.addCase(fetchLocations.fulfilled, (state, action) => {
				state.status = Status.SUCCESSFUL
				state.locationList = action.payload
			})
			.addCase(fetchLocations.rejected, (state, action) => {
				state.status = Status.FAILED
				state.error = action.error.message
			})
	},
})

export const fetchLocations = createAsyncThunk(
	'citySearch/fetchLocations',
	async (locationName: string, { rejectWithValue }) => {
		if (!locationName) {
			return []
		}
		try {
			const res = await weatherAPI.getLocation(locationName)
			return res.data
		} catch (err) {
			if (axios.isAxiosError(err)) {
				return rejectWithValue(err.message)
			} else {
				console.log(err)
				return rejectWithValue('Unknown error!')
			}
		}
	}
)

export default locationSlice.reducer
