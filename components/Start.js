import { Link, Element } from 'react-scroll';

export default () => (
  <Element id="start">
    <h1>Michael Simmelbauer</h1>
    <p>I'm a Fullstack Developer who focuses writing clean, elegant and efficent Code. Working with HTML, CSS, JavaScript, ReactJS and Node.js</p>
    <Link to="about" spy={true} smooth={true} duration={1000} >Read more...</Link>
    <Link to="projects" spy={true} smooth={true} duration={500} delay={100}>Projects</Link>
    <Link to="contact" spy={true} smooth={true} duration={500} delay={100}>Contact</Link>
    
  </Element>
);
