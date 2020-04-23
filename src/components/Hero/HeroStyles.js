import styled from 'styled-components';


export const HeroStyles = styled.div`
	height: 100%;
	width: 100%;
	display: flex;

	.hero-caption-box {
		width: 50%;
		height: 300px;
		background: ${(props) => {
			return props.theme.surface;
		}};
		margin: auto;
		border: ${(props) =>
			props.theme.oppositeTheme === 'dark'
				? '10px double black'
				: '10px double lightgrey'};
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h1,
		h2,
		h3,
		h4 {
			font-variant: small-caps;
		}
		.button-container {
			display: flex;
			width: 50%;
			justify-content: center;
			padding: 20px;
			button {
				margin: 0px 20px;
			}
		}

		.social-media {
			display: flex;
			width: 50%;
			justify-content: space-around;
		}
	}
	color: ${(props) => {
		console.log(props.theme);
		return props.theme.onSurface;
	}};
`;
