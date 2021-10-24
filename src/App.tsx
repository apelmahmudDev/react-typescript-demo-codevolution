import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";
import Button from "./components/Button";

const App = () => {
	return (
		<div>
			<Status status="loading" />
			<Oscar>
				<Heading>Lorem ipsum dolor sit amet consectetur.</Heading>
			</Oscar>
			<Greet name="Apel Mahmud" isLoggedIn={true} />
			<Button handleClick={(event, id) => console.log("clicked", event, id)} />
		</div>
	);
};

export default App;
