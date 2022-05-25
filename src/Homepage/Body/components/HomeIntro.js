import styled from "styled-components";
import { Card } from "./Card";

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: absolute;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  font-weight: 510;
  border-radius: 0px;
  text-decoration: none;
  margin: 0 1.6rem;
  padding: 0.3em 1em;
  height: 2rem;
  cursor: pointer;
  background: transparent;
  color: tomato;
  border: 0.5px solid tomato;
  z-index: 1010;

  /* The Register button is a primary button
    edit this to target it specifically! */
  ${(props) =>
    props.primary &&
    `
			background-color: tomato;
			color: white;
		`}
`;

const Height1 = styled.h1`
  font-size: 1.7em;
  color: #555556;
  margin: 1rem 0;
  text-transform: initial;
  width: 25rem;
`;
const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.5rem;
  width: 25rem;
  color: #6b6b6c;
  margin: 1rem 0;
  margin-bottom: 2rem;
`;
const Intro = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-items: center;
  height: fit-content;
  width: 100%;
  justify-content: space-between;
`;

const ButtonCard = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  width: 25rem;
  padding: 0;
  margin: 0;
`;

function HomeIntro({ primary }) {
  return (
    <Intro>
      <Card>
        <Height1>
          Code the future and define <br /> destinies!
        </Height1>
        <Paragraph>
          StriveCode is a Pan-African online platform to train the next
          generation of African programmers to code the future of Africa.
        </Paragraph>
        <ButtonCard>
          <Button
            href="https://github.com/styled-components/styled-components"
            target="_blank"
            rel="opener"
            primary
          >
            Register for free
          </Button>
          <Button href="/docs">Start coding...</Button>
        </ButtonCard>
      </Card>
    </Intro>
  );
}

export default HomeIntro;
