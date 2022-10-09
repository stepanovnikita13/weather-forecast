import axios from 'axios'
import {
	IParams,
	TLang,
	IGeocodingParams,
	TGeocodingResponse,
	IForecastParams,
	IForecastResponse,
	ICurrentWeatherResponse,
} from './api-types'

const API_KEY = '08018d1d6e27c1c72189ac0b68d9815a'
const APP_LANG: TLang = 'ru'

const instance = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/',
})

export const weatherAPI = {
	async getLocation(q: string) {
		const params: IGeocodingParams = {
			q,
			appid: API_KEY,
			limit: 5,
		}
		const res = await axios.get<TGeocodingResponse>(
			'http://api.openweathermap.org/geo/1.0/direct',
			{ params }
		)
		console.log(res)
		return res
	},
	async getCurrentWeather(lat: number, lon: number) {
		const params: IParams = {
			lat,
			lon,
			appid: API_KEY,
			lang: APP_LANG,
			units: 'metric',
		}
		const res = await instance.get<ICurrentWeatherResponse>('weather', { params })
		console.log(res)
		return res
	},
	async get5DayForecast(lat: number, lon: number, cnt?: number) {
		const params: IForecastParams = {
			lat,
			lon,
			appid: API_KEY,
			units: 'metric',
			lang: 'ru',
			cnt,
		}
		const res = await instance.get<IForecastResponse>('forecast', { params })
		console.log(res)
		return res
	},
}
