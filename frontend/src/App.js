import Navbar from "./components/Navbar";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import SuperHome from "./sections/Home/SuperHome";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SuperHome />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
