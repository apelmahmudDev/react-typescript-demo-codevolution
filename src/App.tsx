import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
			<Status status="loading" />
		</div>
	);
};

export default App;
