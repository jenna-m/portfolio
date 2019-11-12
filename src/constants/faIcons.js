import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
    faDesktop,
    faMobileAlt, 
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';


// export FA icons
//Home
export const githubIcon = <FontAwesomeIcon icon={faGithub} />;
export const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
export const contactIcon = <FontAwesomeIcon icon={faEnvelope} />;
export const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;

// Project Page
export const desktopIcon = <FontAwesomeIcon icon={faDesktop} />;
export const mobileIcon = <FontAwesomeIcon icon={faMobileAlt} />;
export const backIcon = <FontAwesomeIcon icon={faChevronLeft} />;