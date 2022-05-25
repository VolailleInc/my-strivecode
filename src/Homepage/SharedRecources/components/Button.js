import styled from "styled-components";

const ButtonStyled = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "tomato" : "white")};
  color: ${(props) => (props.primary ? "white" : "#1c1d1f")};
  display: inline-block;
  cursor: pointer;
  align-text: center;
  font-size: 1.1em;
  margin: 0rem;
  padding: 0.4em;
  height: 2rem;
  border-radius: 0px;
  border: 0.5px solid #b5b3b3;
`;

function Button({ text, primary }) {
  return <ButtonStyled primary={primary}>{text}</ButtonStyled>;
}

export default Button;
