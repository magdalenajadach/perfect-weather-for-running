import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Blob from "./components/Blob/Blob";
import { inputs } from "./config/inputs";
import { items } from "./config/items";
export default function Home() {
	return (
		<main>
			<Header />
			<h2>Just go out there and run</h2>
			<Card inputs={inputs} />
			<Blob items={items} />
		</main>
	);
}

