import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { HeroStyles } from './HeroStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { twitterUrl, githubUrl, linkedInUrl } from '../../services/resourceURLS';


export const Hero = ({stickyRef}) => {
	const { theme } = useContext(ThemeContext);
	return (
		<HeroStyles ref={stickyRef} theme={theme}>
			<div className="hero-caption-box" theme={theme}>
				<h1>
					Christina Kopecky
				</h1>
				<hr width="500" />
				<h4>Full-Stack Web Developer</h4>
				<div className="button-container">
					<button>Projects</button>
					<button>Contact Me</button>
				</div>
				<div className="social-media">
					<a href={githubUrl}><FontAwesomeIcon icon={faGithub} /></a>
					<a href={linkedInUrl}><FontAwesomeIcon icon={faLinkedin} /></a>
					<a href={twitterUrl}><FontAwesomeIcon icon={faTwitter} /></a>
				</div>
			</div>
		</HeroStyles>
	);
};

export default Hero;
