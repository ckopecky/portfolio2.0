//installed packages
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


//my context
import { ThemeContext } from '../../context/ThemeContext';
//my styled-components
import { HeroStyles } from './HeroStyles';
//my resources
import { twitterUrl, githubUrl, linkedInUrl } from '../../services/resourceURLS';
import PDFDownload from '../../img/WebsiteAssets/Kopecky_Christina_Resume.pdf';



export const Hero = ({stickyRef}) => {
	const { theme  } = useContext(ThemeContext);
	return (
		<HeroStyles ref={stickyRef} theme={theme}>
			
			<div className="hero-caption-box" theme={theme}>
				<h1>
					Christina Kopecky
				</h1>
				<hr width="50%" />
				<h4>Full-Stack Web Developer and Technical Writer</h4>
				<div className="button-container">
					<a href="#portfolio"><button>Portfolio</button></a>
					<a href="#contact" className="hidden-mobile"><button>Contact Me</button></a>
					<a href="#blogs"><button>Featured Blogs</button></a>

	<a href={PDFDownload} rel="noopener noreferrer" target="_blank" className="hidden-web"><button><span>{`Resume  `}   <FontAwesomeIcon icon={faExternalLinkAlt} /></span></button></a>

				</div>
				<div className="social-media">
					<a href={githubUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
					<a href={linkedInUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
					<a href={twitterUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
				</div>
			</div>
		</HeroStyles>
	);
};

export default Hero;
