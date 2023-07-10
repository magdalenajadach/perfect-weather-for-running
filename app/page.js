import  Header  from './components/Header'
import About from './About/about';
export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <h1>Hello world</h1>
        <h2>Just go out there and run</h2>
        <About />
      </div>
    </main>
  );
}
