import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
	return (
		<div>
			<Button handleClick={(event, id) => console.log("clicked", event, id)} />
			<Input
				value="Hello bangladesh"
				handleChange={(event) => console.log("clicked")}
			/>
		</div>
	);
};

export default App;
