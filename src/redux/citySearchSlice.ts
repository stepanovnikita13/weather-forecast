import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { weatherAPI } from '../api/api'
import { ILocation } from '../api/api-types'

enum Status {
	IDLE,
	LOADING,
	SUCCESSFULL,
	FAILED,
}

interface CitySearchState {
	locationList: ILocation[]
	location: ILocation | null
	status: Status
	error: string | null
}

const initialState: CitySearchState = {
	locationList: [],
	location: null,
	status: Status.IDLE,
	error: null,
}

export const CitySearchSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchLocations.pending, (state) => {
			state.status = Status.LOADING
		})
	},
})

export const fetchLocations = createAsyncThunk(
	'citySearch/fetchLocations',
	async (locationName: string) => {
		try {
			const res = await weatherAPI.getLocation(locationName)
			return res.data
		} catch (err) {
			if (axios.isAxiosError(err)) {
				return err.message
			} else {
				console.log(err)
				return 'Unknown error!'
			}
		}
	}
)
