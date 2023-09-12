import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import Blob from "./components/Blob/Blob";
import About from "./About/About";
import { inputs } from "./config/inputs";
import { items } from "./config/items";
export default function Home() {
  return (
    <main>
      <section className="wrapper">
        <Nav />
        <Header />
        <Card inputs={inputs} />
        <Blob items={items} />
				<About />
      </section>
    </main>
  );
}
