import About from "./About";
import Contact from "./Contact";
import Greeting from "./Greeting";
import Home from "./Home";

function App() {
  return (
    <>
    <h1>Hello from ReactJs</h1>
    <Greeting name = {'Akash'}/>
    <Greeting name = {'Ayush'}/>
    {/*<Home name = {'Pooja'} age = {24}/>
    <About />
    <Contact />*/}
    </>
  );
}

export default App;
