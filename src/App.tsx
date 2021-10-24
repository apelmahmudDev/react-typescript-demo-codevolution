import Greet from "./components/Greet";
import Person from "./components/Person";

const App = () => {
	const personName = {
		first: "Apel",
		last: "Mahmud",
	};

	return (
		<div>
			<Greet name="Apel Mahmud" messageCount={10} isLoggedIn={false} />
			<Person name={personName} />
		</div>
	);
};
export default App;
