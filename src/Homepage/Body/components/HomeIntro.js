import styled from "styled-components";
import { Card } from "./Card";

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: block;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 3px;
  text-decoration: none;
  margin: 0.4rem;
  padding: 0.4rem;
  height: 2.5rem;
  width: 10rem;
  cursor: pointer;
  background: transparent;
  color: tomato;
  border: 1px solid tomato;
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

const CardTitle = styled.h1`
  font-size: 1.7em;
  color: #555556;
  margin: 0;
  text-transform: initial;
  width: 25rem;
`;
const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.5rem;
  width: 25rem;
  color: #212529;
  margin: 1rem 1rem;
  //margin-bottom: 1rem;
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
  width: 26rem;
  padding: 0.4rem;
  margin: 0.4rem;
`;

export default function HomeIntro({ primary }) {
  return (
    <Intro>
      <Card>
        <CardTitle>
          <span >Code the future</span> and define <br /> destinies!
        </CardTitle>
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
          <Button href="/docs">Start coding</Button>
        </ButtonCard>
      </Card>
    </Intro>
  );
}
