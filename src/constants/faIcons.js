import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faAngellist,
    faLinkedin,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
    faFileAlt,
    faDesktop,
    faMobileAlt, 
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';


// export FA icons
export const githubIcon = <FontAwesomeIcon icon={faGithub} />;
export const angelListIcon = <FontAwesomeIcon icon={faAngellist} />;
export const resumeIcon = <FontAwesomeIcon icon={faFileAlt} />;
export const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
export const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
export const desktopIcon = <FontAwesomeIcon icon={faDesktop} />;
export const mobileIcon = <FontAwesomeIcon icon={faMobileAlt} />;
export const backIcon = <FontAwesomeIcon icon={faChevronLeft} />;