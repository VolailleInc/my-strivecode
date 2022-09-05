import styled from 'styled-components';
import background from '../assets/striveBack.png';

const Image = styled.img`
	position: relative;
	width: 29rem;
	height: 20rem;
	z-index: 1;
	//box-shadow:rgb(20 20 20 /27%) 0.05rem 0.05rem 1.12rem;
	//box-shadow:rgb(20 20 20 /12%) 0.05rem 0.05rem 1rem;
`;

function BackCover() {
	return (
		<div>
			<Image src={background} alt='home page background cover picture' />
		</div>
	);
}

export default BackCover;
