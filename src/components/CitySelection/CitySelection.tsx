import Container from '../common/Container/Container'
import { useForm, Controller } from 'react-hook-form'
import Input from '../common/Input/Input'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from '../../hooks'
import { fetchLocations } from '../../redux/locationSlice'

export interface ICitySelectionProps {}
interface IFormInputs {
	location: string
}

const CitySelection: React.FC<ICitySelectionProps> = (props) => {
	const { handleSubmit, watch, control } = useForm<IFormInputs>()
	const dispatch = useDispatch()
	const targetValue = watch('location')
	const memoOnSubmit = useCallback(
		(data: IFormInputs) => dispatch(fetchLocations(data.location)),
		[dispatch]
	)

	useEffect(() => {
		const timer = setTimeout(() => {
			if (targetValue) {
				handleSubmit(memoOnSubmit)()
			}
		}, 1000)
		return () => clearTimeout(timer)
	}, [targetValue, handleSubmit, memoOnSubmit])

	return (
		<Container pb={3}>
			<h3>Type your location</h3>
			<form onSubmit={handleSubmit(memoOnSubmit)}>
				<Controller
					name='location'
					control={control}
					defaultValue=''
					render={({ field }) => (
						<Input label='location' placeholder='Moscow' hideLabel fullwidth {...field} />
					)}
				/>
			</form>
			Location list here
		</Container>
	)
}

export default CitySelection
