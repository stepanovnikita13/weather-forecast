import Container from '../common/Container/Container'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Input from '../common/Input/Input'
import React, { useEffect } from 'react'

export interface ICitySelectionProps {}
interface IFormInputs {
	location: string
}

const CitySelection: React.FC<ICitySelectionProps> = (props) => {
	const { handleSubmit, watch, control } = useForm<IFormInputs>()
	const targetValue = watch('location')

	useEffect(() => {
		const timer = setTimeout(() => {
			if (targetValue) {
				handleSubmit(onSubmit)()
			}
		}, 1000)
		return () => clearTimeout(timer)
	}, [targetValue, handleSubmit])

	const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

	return (
		<Container pb={3}>
			<h3>Type your location</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
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
