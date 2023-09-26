import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import Blob from "./components/Blob/Blob";
import Weather from "./Weather/Weather";
import { inputs } from "./config/inputs";
import { items } from "./config/items";
export default function Home() {
  return (
    <main>
      <section className="wrapper">
        <Nav />
        <Header />
				<Weather />
        <Card inputs={inputs} />
        <Blob items={items} />
      </section>
    </main>
  );
}
