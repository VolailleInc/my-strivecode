import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	//flex-direction: row-reverse;
	align-items: center;
	justify-content: space-around;
	height: 2.6rem;
	width: 28rem;
	border: 0.3px solid #b5b3b3;
	border-radius: 0px;
	background-color: #fff;
`;

const Input = styled.input`
	border: 0.3px solid #b5b3b3;
	//padding-left: 0.3rem;
	border-radius: 0;
	width: 28rem;
	height: 2.6rem;
	//margin-right: 0.12rem;
	font-size: 1.3rem;
	color: #858687;
`;
const Button = styled.button`
	position: relative;
	width: 4rem;
	height: 2.6rem;
	border: 1px;
	background-color: #b5b3b3;
	//border-right: 3rem;
`;
function SearchBar() {
	return (
		<Form>
			<Input type='text' name='' id='' placeholder='search for a course...' />

			<Button>
				<FaSearch
					style={{
						color: '#FFF',
						fontSize: '1.2rem',
					}}
				/>
			</Button>
		</Form>
	);
}

export default SearchBar;
