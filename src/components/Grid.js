import 'dotenv/config';
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import {
	CineView,
	GoogleClone,
	Breakout,
	InstaClone,
	LambdaNotes,
	SortingHat,
} from '../services/projectInfo';
import { ThemeContext } from '../context/ThemeContext';

const GridStyles = styled.div`
	width: 80%;
	margin: 20px auto;
	.grid-container {
		display: grid;
		grid-gap: 20px;
		padding: 20px;
		background-color: ${(props) => props.theme.background};
		grid-template-rows: 400px;
		grid-template-columns: auto auto auto auto;
        height: 1000px;
        border-radius: 0px 0px 30px 30px;

	}

	.grid-container > div {
		background-color: rgba(255, 255, 255, 1);
		text-align: center;
        padding: 20px;
        margin: 20px;
        font-size: 30px;
        border-radius: 10px;

	}
	.item1 {
		/* this is cineview */
		grid-column-start: 1;
		grid-column-end: 5;
		grid-row-start: 1;
		grid-row-end: 2;
	}
	.item2 {
		/* googleclone */
		grid-row-start: 2;
		grid-row-end: 3;
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.item3 {
		/* breakout */
		grid-row-start: 3;
		grid-row-end: 4;
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.item4 {
		/* instaclone */
		grid-row-start: 2;
		grid-row-end: 6;
		grid-column-start: 3;
		grid-column-end: 5;
	}
	.item5 {
		/* notes */
		grid-row-start: 4;
		grid-row-end: 6;
		grid-column-start: 1;
		grid-column-end: 2;
	}
	.item6 {
        /* harry potter */
        grid-row-start: 4;
        grid-row-end: 6;
	}
`;

const StyledDiv = styled.div`
	background-image: ${(props) => {
		return `url(${props.project.images[0]})`;
	}};
	background-repeat: no-repeat;
    background-size: cover;

`;

const StyledNav = styled.nav`
    border-radius: 30px 30px 0px 0px;
	display: flex;
    cursor: pointer;
    background: ${props => props.theme.background};
    height: 50px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        margin: 20px;
        font-variant: small-caps;
    }
`;

const Grid = () => {
	const { theme } = useContext(ThemeContext);
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		const projectInfo = [
			CineView,
			GoogleClone,
			LambdaNotes,
			InstaClone,
			Breakout,
			SortingHat,
		];
		setProjects(projectInfo);
	}, []);

	const handleClick = (e) => {
		const copy = [
			CineView,
			GoogleClone,
			LambdaNotes,
			InstaClone,
			Breakout,
			SortingHat,
		];
		console.log(copy);
		const filtered = copy.filter((item) => {
			if (e.currentTarget.className === 'all') {
				return item;
			} else {
				const regex = new RegExp(`${e.currentTarget.className}`, 'gim');
				return regex.test(item.techStack);
			}
		});
		setProjects(filtered);
	};
	return (
		<React.Fragment>
		
			<GridStyles theme={theme}>
            <StyledNav theme={theme}>
                <div>Filter:</div>
				<div onClick={handleClick} className='all'>
					All
				</div>
                <span>/</span>
				<div onClick={handleClick} className='react'>
					React
				</div>
                <span>/</span>
				<div onClick={handleClick} className='mongodb'>
					MongoDB
				</div>
                <span>/</span>
				<div onClick={handleClick} className='postgres'>
					PostgreSQL
				</div>
                <span>/</span>
				<div onClick={handleClick} className='express'>
					Express
				</div>
                <span>/</span>
				<div onClick={handleClick} className='node'>
					Node
				</div>
                <span>/</span>
				<div onClick={handleClick} className='python'>
					Python
				</div>
			</StyledNav>
				<div className='grid-container'>
					{projects.map((project, index) => {
						return (
							<StyledDiv
								key={index}
								project={project}
								className={`item${index + 1}`}>
								{project.name}
							</StyledDiv>
						);
					})}
				</div>
			</GridStyles>
		</React.Fragment>
	);
};

export default Grid;
