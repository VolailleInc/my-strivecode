import styled from 'styled-components';

const ButtonStyled = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.primary ? 'tomato' : 'white')};
	color: ${(props) => (props.primary ? 'white' : '#1c1d1f')};
	cursor: pointer;
	font-size: 1em;
	margin: 0.2em;
	padding: 0.4em;
	height: 2.25rem;
	border-radius: 3px;
	//border: 0px
`;

function Button({ text, primary }) {
	return <ButtonStyled primary>{text}</ButtonStyled>;
}

export default Button;
