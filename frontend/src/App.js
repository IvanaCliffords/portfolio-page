import Navbar from "./components/Navbar";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import SuperHome from "./sections/SuperHome";
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
