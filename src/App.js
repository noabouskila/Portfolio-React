import './App.css';
import NavBar from './Components/NavBar';
import Skills from "./Components/Skills";
import MyProjects from "./Components/MyProjects";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';
import About from './Components/About';
import Career from "./Components/Career";

function App() {
  return (
    <div className="font-sans text-lg text-white bg-slate-900 body-font bg-gradient-to-r from-violet-500 to-fuchsia-500 scroll-smooth">
      <NavBar/>
      <About />
      <Career />
      <Skills />
      <MyProjects/>
      <Contact/>
      <Footer/>
    </div>
    );
}

export default App;
