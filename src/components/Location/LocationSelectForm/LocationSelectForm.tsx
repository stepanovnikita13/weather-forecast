import { useForm, Controller } from 'react-hook-form'
import Input from '../../common/Input/Input'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from '../../../hooks'
import { fetchLocations } from '../../../redux/locationSlice'

export interface ILocationSelectFormProps {}
interface IFormInputs {
	location: string
}

const LocationSelectForm: React.FC<ILocationSelectFormProps> = (props) => {
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
		<form onSubmit={handleSubmit(memoOnSubmit)}>
			<Controller
				name='location'
				control={control}
				defaultValue=''
				render={({ field }) => (
					<Input
						label='location'
						placeholder='Search location'
						hideLabel
						fullwidth
						{...field}
					/>
				)}
			/>
		</form>
	)
}

export default LocationSelectForm
