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
    <div className=" bg-slate-900  font-sans text-white text-lg body-font bg-gradient-to-r from-violet-500 to-fuchsia-500  scroll-smooth ">
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
