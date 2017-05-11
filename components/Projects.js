import { Element } from "react-scroll";
import styled from "styled-components";

export default () => (
  <Element id="projects" style={{ paddingBottom: "20px" }}>
    <Header>
      <Title>Projects</Title>
      <Subtitle>Thinks I've done and work in progress</Subtitle>
    </Header>

    <ProjectsWrapper>
      <ProjectWrap>

        <ProjectLeft>
          <ProjectTitle>
            <ProjectTitleLink href="http://kaulquappe.now.sh" target="_blank">
              Die Kaulquappe
            </ProjectTitleLink>
          </ProjectTitle>
          <ProjectDesc>
            Website for a swimming school. With Node.js as Backend for a booking system and an admin panel for course managment.
          </ProjectDesc>
          <ProjectStack>
            <ProjectStackName>React</ProjectStackName>
            <ProjectStackName>Node</ProjectStackName>
            <ProjectStackName>MongoDB</ProjectStackName>
            <ProjectStackName>UI</ProjectStackName>
          </ProjectStack>
        </ProjectLeft>

        <ProjectRight>
          <ProjectPicture src="/static/kaulquappe.jpg" />

        </ProjectRight>

      </ProjectWrap>

      <ProjectWrap>

        <ProjectLeft>

          <ProjectTitle>
            <ProjectTitleLink
              href="https://lit-brook-10809.herokuapp.com/"
              target="_blank"
            >
              Trading Book Store
            </ProjectTitleLink>
          </ProjectTitle>
          <ProjectDesc>
            You can Sign up as a User and trade with other people books. You can add your books with the Google Books API. You can accept and decline Requests.
          </ProjectDesc>

          <ProjectStack>
            <ProjectStackName>React</ProjectStackName>
            <ProjectStackName>Redux</ProjectStackName>
            <ProjectStackName>Node</ProjectStackName>
            <ProjectStackName>MongoDB</ProjectStackName>
          </ProjectStack>
        </ProjectLeft>

        <ProjectRight>
          <ProjectPicture src="/static/book-trading.jpg" />
          <ProjectGithub>
            <GithubImage src="static/github.svg" />
            <GithubDesc>
              <GithubLink href="https://github.com/simmco/trading-book-store/tree/master/server" target="_blank">Backend</GithubLink>
              <GithubLink href="https://github.com/simmco/trading-book-store/tree/master/react-ui" target="_blank">Frontend</GithubLink>
            </GithubDesc>
          </ProjectGithub>
        </ProjectRight>

      </ProjectWrap>

      <ProjectWrap>

        <ProjectLeft>

          <ProjectTitle>
            <ProjectTitleLink
              href="https://simmco.github.io/pinterest-clone/"
              target="_blank"
            >
              Pinterest Clone
            </ProjectTitleLink>
          </ProjectTitle>
          <ProjectDesc>
            You can Sign up as a User and share, like and delete pictures. It is possible to watch your own and others Pinterest wall.
          </ProjectDesc>

          <ProjectStack>
            <ProjectStackName>React</ProjectStackName>
            <ProjectStackName>Redux</ProjectStackName>
            <ProjectStackName>Node</ProjectStackName>
            <ProjectStackName>MongoDB</ProjectStackName>
          </ProjectStack>
        </ProjectLeft>

        <ProjectRight>
          <ProjectPicture src="/static/pinterest.jpg" />
          <ProjectGithub>
            <GithubImage src="static/github.svg" />
            <GithubDesc>
              <GithubLink href="https://github.com/simmco/api-pinterest-clone" target="_blank">Backend</GithubLink>
              <GithubLink href="https://github.com/simmco/pinterest-clone" target="_blank">Frontend</GithubLink>
            </GithubDesc>
          </ProjectGithub>
        </ProjectRight>

      </ProjectWrap>

      <ProjectWrap>

        <ProjectLeft>

          <ProjectTitle>
            <ProjectTitleLink
              href="https://simmco.github.io/nightlife/"
              target="_blank"
            >
              Nightlife Coordination
            </ProjectTitleLink>
          </ProjectTitle>
          <ProjectDesc>
            You can sign up, search Bars by city and indicate You are going there tonight.
          </ProjectDesc>

          <ProjectStack>
            <ProjectStackName>React</ProjectStackName>
            <ProjectStackName>Node</ProjectStackName>
            <ProjectStackName>UI</ProjectStackName>
          </ProjectStack>
        </ProjectLeft>

        <ProjectRight>
          <ProjectPicture src="/static/nightlife.jpg" />
          <ProjectGithub>
            <GithubImage src="static/github.svg" />
            <GithubDesc>
              <GithubLink href="https://github.com/simmco/api-nightlife" target="_blank">Backend</GithubLink>
              <GithubLink href="https://github.com/simmco/pinterest-clone" target="_blank">Frontend</GithubLink>
            </GithubDesc>
          </ProjectGithub>
        </ProjectRight>

      </ProjectWrap>

      <ProjectWrap>

        <ProjectLeft>

          <ProjectTitle>
            <ProjectTitleLink
              href="https://simmco-voting-app.herokuapp.com/"
              target="_blank"
            >
              Voting App
            </ProjectTitleLink>
          </ProjectTitle>
          <ProjectDesc>
            You can sign up, create some polls, vote for other polls. And you can see the result as a chart.
          </ProjectDesc>

          <ProjectStack>
            <ProjectStackName>HTML</ProjectStackName>
            <ProjectStackName>CSS</ProjectStackName>
            <ProjectStackName>JS</ProjectStackName>
            <ProjectStackName>Node</ProjectStackName>
            <ProjectStackName>MongoDB</ProjectStackName>
          </ProjectStack>
        </ProjectLeft>

        <ProjectRight>
          <ProjectPicture src="/static/vote.jpg" />
          <ProjectGithub>
            <GithubImage src="static/github.svg" />
            <GithubDesc>
              <GithubLink href="https://github.com/simmco/voting_app" target="_blank">Repository</GithubLink>
            </GithubDesc>
          </ProjectGithub>
        </ProjectRight>

      </ProjectWrap>

      <ProjectWrap>

        <ProjectLeft>

          <ProjectTitle>
            <ProjectTitleLink
              href="https://chat-redux.firebaseapp.com/"
              target="_blank"
            >
              Firebase Chat App
            </ProjectTitleLink>
          </ProjectTitle>
          <ProjectDesc>
            You can Sign up with a Google Account and chat with other people in realtime. The Backend is build with Firebase.
          </ProjectDesc>

          <ProjectStack>
            <ProjectStackName>React</ProjectStackName>
            <ProjectStackName>Redux</ProjectStackName>
            <ProjectStackName>Firebase</ProjectStackName>
          </ProjectStack>
        </ProjectLeft>

        <ProjectRight>
          <ProjectPicture src="/static/firebase-chat.jpg" />
          <ProjectGithub>
            <GithubImage src="static/github.svg" />
            <GithubDesc>
              <GithubLink href="https://github.com/simmco/firebase-chat" target="_blank">Repository</GithubLink>
            </GithubDesc>
          </ProjectGithub>
        </ProjectRight>

      </ProjectWrap>

      <ProjectWrap>

        <ProjectLeft>

          <ProjectTitle>
            <ProjectTitleLink
              href="https://simmco.github.io/localWeather/"
              target="_blank"
            >
              Local Weather
            </ProjectTitleLink>
          </ProjectTitle>
          <ProjectDesc>
            This Page shows the weather conditions at your current position for the next 3 days.
          </ProjectDesc>

          <ProjectStack>
            <ProjectStackName>HTML</ProjectStackName>
            <ProjectStackName>CSS</ProjectStackName>
            <ProjectStackName>JS</ProjectStackName>
            <ProjectStackName>Bootstrap</ProjectStackName>
          </ProjectStack>
        </ProjectLeft>

        <ProjectRight>
          <ProjectPicture src="/static/weather.jpg" />
          <ProjectGithub>
            <GithubImage src="static/github.svg" />
            <GithubDesc>
              <GithubLink href="https://github.com/simmco/localWeather" target="_blank">Repository</GithubLink>
            </GithubDesc>
          </ProjectGithub>
        </ProjectRight>

      </ProjectWrap>

      <ProjectWrap>

        <ProjectLeft>

          <ProjectTitle>
            <ProjectTitleLink href="https://cineflix.now.sh" target="_blank">
              Cineflix
            </ProjectTitleLink>
          </ProjectTitle>
          <ProjectDesc>
            A Netflix clone for movies. You can see movies in theatre, best last year, highest rated, most popular and most popular last year. Build with <MovieDBLink href="https://developers.themoviedb.org/3/getting-started" target="_blank">THEMOVIEDB API</MovieDBLink>.
          </ProjectDesc>

          <ProjectStack>
            <ProjectStackName>React</ProjectStackName>
            <ProjectStackName>UI</ProjectStackName>
          </ProjectStack>
        </ProjectLeft>

        <ProjectRight>
          <ProjectPicture src="/static/cineflix.jpg" />
          <ProjectGithub>
            <GithubImage src="static/github.svg" />
            <GithubDesc>
              <GithubLink href="https://github.com/simmco/cineflix" target="_blank">Repository</GithubLink>
            </GithubDesc>
          </ProjectGithub>
        </ProjectRight>

      </ProjectWrap>

      <ProjectWrap>

        <ProjectLeft>

          <ProjectTitle>
            <ProjectTitleLink href="https://simmco.github.io/recipe-book" target="_blank">
              Recipe Book
            </ProjectTitleLink>
          </ProjectTitle>
          <ProjectDesc>
            You can save your recipes, add and remove ingredients. Everthing is saved in browsers localStorage.
          </ProjectDesc>

          <ProjectStack>
            <ProjectStackName>React</ProjectStackName>
          </ProjectStack>
        </ProjectLeft>

        <ProjectRight>
          <ProjectPicture src="/static/recipe-book.jpg" />
          <ProjectGithub>
            <GithubImage src="static/github.svg" />
            <GithubDesc>
              <GithubLink href="https://github.com/simmco/recipe-book" target="_blank">Repository</GithubLink>
            </GithubDesc>
          </ProjectGithub>
        </ProjectRight>

      </ProjectWrap>

      <ProjectWrap>

        <ProjectLeft>

          <ProjectTitle>
            <ProjectTitleLink href="https://beauty-image-search.herokuapp.com/" target="_blank">
              Image Search Abstraction
            </ProjectTitleLink>
          </ProjectTitle>
          <ProjectDesc>
            A microservice who builds a API for a image search with picture, description, thumbnail and context.
          </ProjectDesc>

          <ProjectStack>
            <ProjectStackName>React</ProjectStackName>
            <ProjectStackName>Node</ProjectStackName>
            <ProjectStackName>UI</ProjectStackName>
          </ProjectStack>
        </ProjectLeft>

        <ProjectRight>
          <ProjectPicture src="/static/image-search.jpg" />
          <ProjectGithub>
            <GithubImage src="static/github.svg" />
            <GithubDesc>
              <GithubLink href="https://github.com/simmco/image-search-abstraction-layer" target="_blank">Repository</GithubLink>
            </GithubDesc>
          </ProjectGithub>
        </ProjectRight>

      </ProjectWrap>

    </ProjectsWrapper>

  </Element>
);

const Header = styled.div`

`;

const Title = styled.h2`
    font-size: 3.25rem;
    font-family: Lora,Times New Roman,serif;
    font-weight: 400;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Subtitle = styled.h3`
    font-size: 1.375rem;
    margin:1rem 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
`;

const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProjectWrap = styled.div`
    max-width: 600px;
    min-height: 250px;
    padding: 2rem 1.875rem;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
`;

const ProjectLeft = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0.3rem;

    @media(max-width: 880px) {
      min-width: 70%;
    }
`;

const ProjectRight = styled.div`
    display:flex;
    flex-direction: column;
    flex: 2;
    padding: 0 0.2rem;
`;

const ProjectPicture = styled.img`
    max-width: 100%;
    min-width: 160px;
    flex-basis: auto;
    border: 1px solid #ccc;
    transition: all .2s ease-out;
    cursor: pointer;

    &:hover {
          border: 1px solid #7f7f7f;
    }
`;

const ProjectGithub = styled.div`
    margin-top: auto;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GithubImage = styled.img`
  max-height: 35px;
  padding-right: 0.7rem;
`;

const GithubDesc = styled.div`
  display: flex;
  flex-direction: column;
`;

const GithubLink = styled.a`
  text-decoration: none;
  &:hover {
  text-decoration: underline;
  }
`

const ProjectTitle = styled.h4`
    font-size: 1.75rem;
    font-family: Lora,Times New Roman,serif;
    font-weight: 400;
    margin: 0;

    @media(max-width: 880px) {
      padding-bottom: 1rem;
      text-align: center;
    }
`;

const ProjectTitleLink = styled.a`
    border-bottom: 1px solid #ccc;
    color: currentColor;
    text-decoration: none;
    padding-bottom: 0.1rem;
    transition: all .2s ease-out;

    &:hover {
      border-color: #7f7f7f;
    }
`;

const ProjectDesc = styled.p`
    font-weight: 300;
    @media(max-width: 880px) {
      padding-bottom: 1rem;
      text-align: center;
    }
`;

const ProjectStack = styled.div`

    display: flex;
    flex-wrap: wrap;
    padding-bottom: 0.3rem;

    @media(max-width: 880px) {
      padding-bottom: 1rem;
      justify-content: center;
    }
`;

const ProjectStackName = styled.p`
    border: 1px solid #999;
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
    color: #999;
    margin: 0 0.5rem 0.5rem 0;
`;

const MovieDBLink = styled.a`
  text-decoration: none;
`