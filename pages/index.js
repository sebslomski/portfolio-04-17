import styled from "styled-components";
import Page from "../components/page";
import Start from "../components/Start";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default class Section extends React.Component {
  render() {
    return (
      <Page>
        <Start />
        <About />
        <Projects />
        <Contact />
      </Page>
    );
  }
}

const Base = styled.div`

`;
