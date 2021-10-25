type InputProps = {
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log("Clicked");
	};

	return <input type="text" value={value} onChange={handleChange} />;
};

export default Input;
