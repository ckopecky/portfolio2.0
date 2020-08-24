import styled from 'styled-components';


export const HeroStyles = styled.div`
	height: 100%;
	width: 100%;
	display: flex;

	.hero-caption-box {
		max-width: 900px;
		width: 100%;
		height: 500px;
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
		@media screen and (max-width: 900px) {
			width: 90%;
			height: 500px;
			h4 {
				width: 75%;
				text-align: center;
			}
		}
		h1,
		h2,
		h3,
		h4 {
			font-variant: small-caps;
		}
		.button-container {
			display: flex;
			width: 100%;
			flex-flow: row wrap;
			justify-content: space-around;
			@media screen and (max-width: 900px) {
				margin: 20px auto;
				width: 80%;
			}
			a {	
				width: 25%;
				margin: 10px;
				min-width: 150px;
			}
			a button {
				width: 100%;
				text-align: center;
				@media screen and (max-width: 900px) {
					min-width: 150px;
				}
			}
		}

		.social-media {
			display: flex;
			width: 50%;
			justify-content: space-around;
			font-size: 2.0rem;
		}
	}
	color: ${(props) => {
		console.log(props.theme);
		return props.theme.onSurface;
	}};
	.hidden-web {
		display: none;
        @media screen and (max-width: 900px) {
			display: inline-flex;
    }	
}
`;
