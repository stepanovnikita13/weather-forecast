import Input from '../common/Input/Input'

export interface ICitySelectionProps {}

const CitySelection: React.FC<ICitySelectionProps> = (props) => {
	return (
		<div>
			<h3>Type your location</h3>
			<Input label='search' name='search' placeholder='Moscow' hideLabel fullwidth />
			Location list here
		</div>
	)
}

export default CitySelection
