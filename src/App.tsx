import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

const App = () => {
	return (
		<div>
			<Button handleClick={(event, id) => console.log("clicked", event, id)} />
			<Input
				value="Hello bangladesh"
				handleChange={(event) => console.log("clicked")}
			/>
			<Container styles={{ margin: "10px", border: "1px solid green" }} />
		</div>
	);
};

export default App;
