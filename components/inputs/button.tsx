import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
	width: 100%;
	max-width: 370px;
	height: 70px;
	border-radius: 48px;
	font-size: 24px;
	background-color: #000000;
	color: #ffffff;
	border: none;
	cursor: pointer;
`;

export const Button: React.FC = () => {
	return <ButtonComponent>Contact Us</ButtonComponent>;
};
