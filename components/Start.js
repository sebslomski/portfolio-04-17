import { Link, Element } from "react-scroll";
import styled from "styled-components";

export default () => (
  <Element id="start">
    <Wrapper>
      <svg
        width="180px"
        height="182px"
        viewBox="-7 -8 209 211"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc>Created with Sketch.</desc>
        <defs />
        <g
          id="Group"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <text id="MS" fontSize="64" fontWeight="400" fill="#FF5252">
            <tspan x="49.9748744" y="120.151515">MS</tspan>
          </text>
          <polygon
            id="Rectangle"
            stroke="#FF5252"
            strokeWidth="6"
            points="97.569602 0.00497410913 194.574703 97.5 97.569602 194.995026 0.564500897 97.5"
          />
        </g>
      </svg>
      <Title>Michael Simmelbauer</Title>
      <Subtitle>
        I'm a Fullstack Developer who focuses writing clean, elegant and efficient Code. Working with HTML, CSS, JavaScript, ReactJS and Node.js
      </Subtitle>
      <Further>
        <Link to="projects" spy={true} smooth={true} duration={500} delay={100}>
          <Button>
            Projects
          </Button>
        </Link>
        <Link to="about" spy={true} smooth={true} duration={1000}>
          <More>
            Read more...
          </More>
        </Link>
      </Further>
    </Wrapper>
  </Element>
);

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16vh 0 31vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3.75rem;
  font-family: Lora,Times New Roman,serif;
  margin: 1rem 0 1.5rem;
`;

const Subtitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 300;
  margin:0 0 2rem;
`;

const Further = styled.div`
  display: flex;
`;

const More = styled.span`
  font-size: 1.3rem;
  cursor: pointer;
`;

const Button = styled.span`
  color: white;
  background-color: #FF5252;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.3rem;
  margin-right: 2rem;
`;
