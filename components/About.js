import { Element } from "react-scroll";
import styled from "styled-components";

export default () => (
  <Element id="about">
    <Wrapper>
      <Text>
        I'm Michael Simmelbauer, a Fullstack Developer living in Munich, Germany. With passion for development. In 2016 I decided to learn Development, since then I have been developing Web Apps.
        <br />
        <br />
        {" "}
        I am experienced with single page apps and Content Management Systems(CMS). Currently I'm focusing on
        {" "}
        <b>User Experience, Node.js</b>
        {" "}
        and
        {" "}
        <b>React</b>
        .
      </Text>
      <div>
        <StackTitle>What I work with</StackTitle>
        <Stack>
          <Stackpic className="devicon-html5-plain-wordmark colored" />
          <Stackpic className="devicon-css3-plain-wordmark colored" />
          <Stackpic className="devicon-javascript-plain colored" />
          <Stackpic className="devicon-react-original-wordmark colored" />
          <Stackpic className="devicon-nodejs-plain-wordmark colored" />
          <Stackpic className="devicon-mongodb-plain-wordmark colored" />
          <Stackpic className="devicon-mocha-plain colored" />
          <Stackpic className="devicon-git-plain-wordmark colored" />
          <Stackpic className="devicon-github-plain-wordmark colored" />
          <Stackpic className="devicon-heroku-plain-wordmark colored" />
          <Stackpic className="devicon-jquery-plain-wordmark colored" />
          <Stackpic className="devicon-bootstrap-plain-wordmark colored" />
        </Stack>
      </div>
    </Wrapper>
  </Element>
);

const Wrapper = styled.div`
  max-width: 800px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 10rem;
`;

const Title = styled.h2`
    font-size: 3.25rem;
    font-family: Lora,Times New Roman,serif;
    font-weight: 400;
    margin: 0 0 1.5rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const StackTitle = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 2rem;
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Stackpic = styled.i`
  font-size: 6rem;
  padding: 1rem;
`;
