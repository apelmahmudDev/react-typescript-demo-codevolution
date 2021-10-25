import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import PersonList from "./components/PersonList";

const App = () => {
	const nameList = [
		{ first: "Apel", last: "Mahmud" },
		{ first: "Karim", last: "Mahmud" },
	];

	return (
		<div>
			<PersonList names={nameList} />
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
