import { DoubleBounce } from "better-react-spinkit";
import styled from "styled-components";
import Page from "../components/page";
import Start from "../components/Start";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default class Section extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }
  render() {
    return (
      <Page>
        {this.state.isLoading
          ? <LoadingWrap>
              <DoubleBounce size={120} />
           </LoadingWrap>
          : <div>
              <Start />
              <About />
              <Projects />
              <Contact />
            </div>}
      </Page>
    );
  }
}

const LoadingWrap = styled.div`
  position: fixed;
  top: 40%;
  left: 45%;
  height: 100%;
  width: 100%;
`
