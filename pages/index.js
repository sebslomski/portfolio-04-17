import Start from "../components/Start";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


export default class Section extends React.Component {
  render() {
    return (
      <div>
        <Start />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}
