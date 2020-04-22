import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

const HeroStyle = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	
	.hero-caption-box {
		height: 300px;
		background: ${props => {
			return props.theme.surface;
		}};
		margin: auto;
		border: ${props => props.theme.oppositeTheme === "dark" ? '10px double black' : '10px double lightgrey'
		};
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h1, h4 {
			padding: 30px 100px;
		}

	}
	color: ${(props) => {
			console.log(props.theme);
			return props.theme.onSurface;
	}};
`;



export const Hero = ({stickyRef}) => {
	const { theme } = useContext(ThemeContext);
	return (
		<HeroStyle ref={stickyRef} theme={theme}>
			<div className="hero-caption-box" theme={theme}>
				<h1>
					Christina Kopecky
				</h1>
				<h4>Full-Stack Web Developer</h4>
			</div>
		</HeroStyle>
	);
};

export default Hero;
