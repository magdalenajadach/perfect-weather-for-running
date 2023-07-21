import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import { inputs } from "./config/inputs";
export default function Home( ) {
  return (
    <main>
      <Header />
      <h2>Just go out there and run</h2>
      <Card inputs={inputs} />
    </main>
  );
}

