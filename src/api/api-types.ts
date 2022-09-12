export type TLang = 'de' | 'en' | 'fr' | 'it' | 'ja' | 'ru' | 'zh_tw'
export type TMode = 'xml' | 'html'
export type TUnits = 'standart' | 'metric' | 'imperial'
export type TPartOfTheDay = 'n' | 'd'

export interface IErrorResponse {
	cod: number
	message: string
}

export interface IParams {
	lat: number
	lon: number
	appid: string
	mode?: TMode
	units?: TUnits
	lang?: TLang
}

export interface IGeocodingParams {
	q: string
	appid: string
	limit?: number
}
export interface ILocation {
	country: string
	lat: number
	lon: number
	name: string
	state: string
	local_names: Array<{ [key: string]: string }>
}
export type TGeocodingResponse = Array<ILocation>


export interface IWeather {
	id: number
	main: string
	description: string
	icon: string
}
export interface IWeatherData {
	dt: number
	main: {
		temp: number
		feels_like: number
		temp_min: number
		temp_max: number
		pressure: number
		sea_level: number
		grnd_level: number
		humidity: number
		temp_kf?: number
	}
	weather: Array<IWeather>
	clouds: {
		all: number
	}
	wind: {
		speed: number
		deg: number
		gust: number
	}
	visibility: number
	rain?: {
		[key: string]: number
	}
	snow?: {
		[key: string]: number
	}
}

export interface IForecastParams extends IParams {
	cnt?: number
}
export interface IForecastWeatherData extends IWeatherData {
	pop: number
	sys: {
		pod: TPartOfTheDay
	}
	dt_txt: string
}
export interface IForecastResponse {
	cod: string
	message: string | 0
	cnt: number
	list: Array<IForecastWeatherData>
	city: {
		id: number
		name: string
		timezone: number
		coord: {
			lat: number
			lon: number
		}
		sunrise: number
		sunset: number
		country: string
		population: number
	}
}

export interface ICurrentWeatherResponse extends IWeatherData {
	cod: string
	id: number
	name: string
	timezone: number
	coord: {
		lat: number
		lon: number
	}
	base: string
	sys: {
		type: number
		id: number
		country: string
		sunrise: number
		sunset: number
	}
}