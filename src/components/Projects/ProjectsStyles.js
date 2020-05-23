import styled from 'styled-components';

export const ProjectsStyles = styled.div`
	width: 90%;
	margin: 20px auto;
	#portfolio {
		padding: 50px;
	}
	.flex-container {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 30px;
		background-color: ${(props) => props.theme.background};
		border-radius: 0px 0px 30px 30px;
		@media screen and (max-width: 900px){
			padding: 0;
			flex-direction: column;
		}
	}

	.flex-container > div {
		text-align: center;
		font-size: 30px;
		border-radius: 10px;
		border: ${(props) => {
			return props.theme.oppositeTheme === 'dark'
				? '2px solid black'
				: '2px solid #41ADD4';
		}};
		height: 400px;
		margin: 19px;
		display:flex;
		justify-content: space-between;
		@media screen and (max-width: 900px){
			padding: 0;
			flex-direction: column;
			width: 90%;
		}
	}

	.item1 {
		/* this is cineview */
		width: 100%;
		background-position: center top;
	}
	.item2 {
		/* googleclone */
		width: 46.9%;
		background-position: center center;
	}
	.item3 {
		/* notes */
		width: 46.9%;
		background-position: center center;
		
	}
	.item4 {
		/* instaclone */
		width: 30.25%;
		background-position: center top;
	}

	.item5 {
		/* breakout */
		width: 30.25%;
		background-position: center;
	}
	.item6 {
		/* harry potter */
		width: 30.25%;
		background-position: center top;
	}
`;
