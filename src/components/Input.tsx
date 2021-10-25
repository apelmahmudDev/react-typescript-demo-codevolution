type InputProps = {
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log("Clicked");
	};

	return <input type="text" value={props.value} onChange={handleInputChange} />;
};

export default Input;
