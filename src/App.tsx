import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

const App = () => {
	const personName = {
		first: "Apel",
		last: "Mahmud",
	};

	const nameList = [
		{
			first: "Apel",
			last: "Mahmud",
		},
		{
			first: "Sharmin",
			last: "Jannat",
		},
		{
			first: "Solayman",
			last: "Shukhon",
		},
	];

	return (
		<div>
			<Greet name="Apel Mahmud" messageCount={10} isLoggedIn={false} />
			<Person name={personName} />
			<PersonList names={nameList} />
		</div>
	);
};
export default App;
