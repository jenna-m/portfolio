// import all images
import {
	// OpenStreetMap
	openStreetMap1,
	openStreetMap2,
	openStreetMap3,
	openStreetMap4,

	// Lemon Angel Website
	lemonAngelLanding,
	lemonAngelAbout,
	lemonAngelWork,
	lemonAngelContact,

	// Lemon Angel Logo
	lemonAngelLogo,

	// Summer Rolls
	summerRolls1,
	summerRolls2,
	summerRolls3,
	summerRolls4,
	summerRolls5,
	summerRolls6,

	// Norman Ed
	normanEdHome,
	normanEdGallery,
	normanEdItem,
	normanEdExhibitions,
	normanEdPress,
	normanEdContact,

	// Redux Co.
	reduxCoHome1,
	reduxCoHome2,
	reduxCoCategory,
	reduxCoItem,
	reduxCoCart1,
	reduxCoCart2,
	reduxCoCart3,
	reduxCo4041,
	reduxCo4042,

	// Indoor Cities
	indoorCitiesAlbum,
	indoorCitiesLogo,
	indoorCitiesPoster,
	indoorCitiesWebsite,

	// Floor Overhead
	floorOverheadDemo1,
	floorOverheadDemo2,
	floorOverheadDemo3,
	floorOverheadDemo4,
	floorOverheadDemo5,
	floorOverheadDemo6,
	floorOverheadSocial1,
	floorOverheadSocial2,
	floorOverheadSocial3,

	// Baking Demystified
	bakingDemystifiedLogo1,
	bakingDemystifiedLogo2,
	bakingDemystifiedLogo3,
	bakingDemystifiedYoutube,

	// Adorn
	adornLogo,
	adornWindow1,
	adornWindow2,
} from './imageData.js';

export const workData = [
	{
		id: 10,
		title: 'OpenStreetMap Documentation',
		year: '2020',
		category: 'web',
		displayCategory: 'Web Development & Design',
		tools: 'React, Sass, Photoshop',
		description:
			'This project was a practice in writing technical documentation. With a minimal design, I documented how to add information to OpenStreetMap and included marked-up screenshots for clarity.',
		github: 'https://github.com/jenna-m/osm-tutorial',
		websiteURL: 'https://openstreetmaptutorial.netlify.app/',
		src: [openStreetMap1, openStreetMap2, openStreetMap3, openStreetMap4],
	},
	{
		id: 9,
		title: 'Lemon Angel',
		year: '2020',
		category: 'web',
		displayCategory: 'Web Development & Design',
		tools: 'React, Sass',
		description:
			'Pastry chef Elizabeth Garcia was looking for a way to showcase her talents and provide an easy way for her customers to get in touch with her. Given a color pallete, I created a colorful, minimal, and interesting portfolio website and animated logo design.',
		github: 'https://github.com/jenna-m/lemon-angel',
		websiteURL: 'https://lemonangel.net',
		src: [
			lemonAngelLanding,
			lemonAngelAbout,
			lemonAngelWork,
			lemonAngelContact,
		],
	},
	{
		id: 8,
		title: 'Lemon Angel Logo',
		year: '2020',
		category: 'graphic',
		displayCategory: 'Graphic Design',
		tools: 'Adobe Illustrator',
		description:
			'Pastry chef Elizabeth Garcia needed a new logo for digital and print use. With the opportunity to experiment with typography and SVG animation, I produced this playful design which the client enthusiastically calls "groovy." The full animation can be viewed on the client\'s website, lemonangel.net.',
		src: [lemonAngelLogo],
	},
	{
		id: 7,
		title: 'Summer Rolls Documentation',
		year: '2020',
		category: 'web',
		displayCategory: 'Web Development & Design',
		tools: 'React',
		description:
			'This project was a practice in writing documentation of a process. Creating a website with a minimal design, I aimed to outline a brief history of summer rolls, some tips, and the steps to making the rolls. I photographed the process and added animation for clarity and interest.',
		github: 'https://github.com/jenna-m/summer-rolls',
		websiteURL: 'https://summer-rolls.netlify.com',
		src: [
			summerRolls1,
			summerRolls2,
			summerRolls3,
			summerRolls4,
			summerRolls5,
			summerRolls6,
		],
	},
	{
		id: 6,
		title: 'Norman Ed',
		year: '2019',
		category: 'web',
		displayCategory: 'Web Development & Design',
		tools: 'React, Formik, EmailJS, react-stack-grid',
		description:
			'Artist and instructor Norman Ed was in need of a website. I created a gallery to exhibit different periods of his artwork, pages to showcase his exhibitions and mentions in the press, a biography, contact form, and a randomized custom 404 page.',
		github: 'https://github.com/jenna-m/norman-ed',
		websiteURL: 'https://normaned.com',
		src: [
			normanEdHome,
			normanEdGallery,
			normanEdItem,
			normanEdExhibitions,
			normanEdPress,
			normanEdContact,
		],
	},
	{
		id: 5,
		title: 'Redux Co.',
		year: '2019',
		category: 'web',
		displayCategory: 'Web Development & Design',
		tools: 'React, Redux, Formik, EmailJS, Lodash',
		description:
			'A personal project, this fictitious online storefront gave me experience with Redux. Included is a randomized call to action on the home page, the ability to display items by category, a shopping cart, image magnification, and a randomized custom 404 page. Images from Madewell.',
		github: 'https://github.com/jenna-m/redux-co',
		websiteURL: 'https://redux-co.netlify.com',
		src: [
			reduxCoHome1,
			reduxCoHome2,
			reduxCoCategory,
			reduxCoItem,
			reduxCoCart1,
			reduxCoCart2,
			reduxCoCart3,
			reduxCo4041,
			reduxCo4042,
		],
	},
	{
		id: 4,
		title: 'Adorn',
		year: '2019',
		category: 'graphic',
		displayCategory: 'Graphic Design',
		tools: 'Adobe Photoshop, Illustrator',
		description:
			'Jewelry and home decor storefront Adorn needed a logo redesign and window art. For the logo redesign, I incorporated a softer blush color to contrast the modern geometric design. For the window art, I stayed true to the minimal and geometric direction.',
		src: [adornLogo, adornWindow1, adornWindow2],
	},
	{
		id: 3,
		title: 'Baking Demystified',
		year: '2017',
		category: 'graphic',
		displayCategory: 'Graphic Design',
		tools: 'Adobe Illustrator',
		description:
			'The YouTube channel Baking Demystified was in need of logo creation and channel art. I aimed to keep the look playful with the font selection and bright color.',
		src: [
			bakingDemystifiedYoutube,
			bakingDemystifiedLogo1,
			bakingDemystifiedLogo2,
			bakingDemystifiedLogo3,
		],
	},
	{
		id: 2,
		title: 'Floor Overhead',
		year: '2014',
		category: 'graphic',
		displayCategory: 'Graphic Design',
		tools: 'Adobe Photoshop',
		description:
			'Floor Overhead needed a demo cover design for a digital music release in 2014. I also created social media graphics, featuring photographs of the artist in nature.',
		src: [
			floorOverheadDemo1,
			floorOverheadSocial1,
			floorOverheadDemo2,
			floorOverheadSocial3,
			floorOverheadDemo3,
			floorOverheadSocial2,
			floorOverheadDemo4,
			floorOverheadDemo5,
			floorOverheadDemo6,
		],
	},
	{
		id: 1,
		title: 'Indoor Cities',
		year: '2013',
		category: 'graphic',
		displayCategory: 'Graphic Design',
		tools: 'Adobe Photoshop, Illustrator, & Muse',
		description:
			'Indoor Cities needed an album cover design for a digital music release in 2013. The website was kept minimal, directing users to social media outlets and showcasing their music with select reviews and the Bandcamp plugin. I also created social media graphics, gig posters, and business cards for the band.',
		src: [
			indoorCitiesAlbum,
			indoorCitiesWebsite,
			indoorCitiesLogo,
			indoorCitiesPoster,
		],
	},
];
