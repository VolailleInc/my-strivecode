import React from 'react';
import styled from 'styled-components';
import { footerLinks } from '../footerLinks';

const FootSection = styled.section`
	//display: flex;
	width: 100vw;
	//background: #574f4a;
	background: #b5b3b3;
	height: 50rem;
	color: #000;
`;

const footerList = footerLinks.map((link) => (
	<li key={link.id}>{link.courseLink}</li>
));

const CourseList = () => {
	return (
		<div>
			<h3>Free beginner courses</h3>
			<ul>
				<a href='http://'>{footerList}</a>
			</ul>
		</div>
	);
};

export default function Footer() {
	return (
		<FootSection>
			<CourseList />
		</FootSection>
	);
}
