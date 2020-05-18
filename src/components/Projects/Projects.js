//installed packages
import 'dotenv/config';
import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

//my context
import { ThemeContext } from '../../context/ThemeContext';

//my styled-components
import { FilterNav } from './FilterNav';
import { ProjectsStyles } from './ProjectsStyles';
import { StyledDiv } from './StyledDiv';
import { StyledNav } from './StyledNav';

//my resources
import {
	CineView,
	GoogleClone,
	Breakout,
	InstaClone,
	LambdaNotes,
	SortingHat,
} from '../../services/projectInfo';
import Dropdown from './Dropdown';

export const Projects = () => {
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
		console.log(e, 'event');
		const copy = [
			CineView,
			GoogleClone,
			LambdaNotes,
			InstaClone,
			Breakout,
			SortingHat,
		];
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
			<ProjectsStyles theme={theme}>
				<StyledNav id='portfolio' theme={theme}>
					<span id="projects">
							Projects
					</span>
					<>
						<span>Filter:</span>
						<Dropdown handleClick={handleClick} />
					</>
				</StyledNav>
				<div className='flex-container'>
					{projects.map((project, index) => {
						if (
							project.techStack.match(
								new RegExp('python', 'i')
							) !== null
						) {
							return (
								<StyledDiv
									key={index}
									project={project}
									theme={theme}
									className={`item${index + 1}`}>
									<div className='show'>
										<div className='description'>
											Description: {project.description}
										</div>
										<div className='links'>
											<div>
												<a
													href={project.github}
													target='_blank'
													rel='noopener noreferrer'>
													<FontAwesomeIcon
														icon={faGithub}
													/>
													<span> Github Repo</span>
												</a>
											</div>
										</div>
									</div>
								</StyledDiv>
							);
						} else {
							return (
								<StyledDiv
									theme={theme}
									key={index}
									project={project}
									className={`item${index + 1}`}>
									<div className='show'>
										<div className='description'>
											Description: {project.description}
										</div>
										<div className='links'>
											<div>
												<a
													href={project.github}
													target='_blank'
													rel='noopener noreferrer'>
													<FontAwesomeIcon
														icon={faGithub}
													/>
													<span> Github Repo</span>
												</a>
											</div>
											<div>
												<a
													href={project.deploy}
													target='_blank'
													rel='noopener noreferrer'>
													<FontAwesomeIcon
														icon={
															faExternalLinkSquareAlt
														}
													/>
													<span>
														Deployed Project
													</span>
												</a>
											</div>
										</div>
									</div>
								</StyledDiv>
							);
						}
					})}
				</div>
			</ProjectsStyles>
		</React.Fragment>
	);
};
