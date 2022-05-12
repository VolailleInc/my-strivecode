import styled from "styled-components";

const ButtonStyled = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "tomato" : "white")};
  color: ${(props) => (props.primary ? "white" : "#1c1d1f")};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  font-weight: 510;
  margin: 0rem;
  padding: 0 0.4em;
  height: 2.2rem;
  border-radius: 0px;
  border: 0.5px solid #b5b3b3;
`;

function Button({ text, primary }) {
  return (
    <ButtonStyled primary={primary}>
      <span>{text}</span>
    </ButtonStyled>
  );
}

export default Button;
