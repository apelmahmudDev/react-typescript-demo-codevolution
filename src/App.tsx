import ThemeContextProvider from "./components/context/ThemeContext";
import Box from "./components//context/Box";

const App = () => {
	return (
		<ThemeContextProvider>
			<Box />
		</ThemeContextProvider>
	);
};

export default App;
