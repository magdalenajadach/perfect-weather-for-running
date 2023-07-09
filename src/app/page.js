import styles from "./page.module.css";

import { Header } from "./components/Header";
import About from "./pages/about";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <h1>Hello world</h1>
        <About />
        <h2>Just go out there and run</h2>
      </div>
    </main>
  );
}
