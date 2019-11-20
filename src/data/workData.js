// import all images
import {
    // Norman Ed
    normanEdHome, normanEdGallery, normanEdItem,
    normanEdExhibitions, normanEdPress, normanEdContact,

    // Redux Co.
    reduxCoHome1, reduxCoHome2, reduxCoCategory,
    reduxCoItem, reduxCoCart1, reduxCoCart2,
    reduxCoCart3, reduxCo4041, reduxCo4042,

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
        id: 6,
        title: 'Norman Ed',
        year: '2019',
        category: 'web',
        displayCategory: 'Web Development & Design',
        tools: 'React, Formik, emailJS, react-stack-grid',
        description: 'Artist and instructor Norman Ed was in need of a website redesign. On top of the redesign, pages to showcase his past/present exhibitions and mentions in the press, a biography, contact form, and a randomized custom 404 page were added.',
        github: 'https://github.com/jenna-m/norman-ed',
        websiteURL: 'https://normaned.com',
        src: [
            normanEdHome, normanEdGallery, normanEdItem,
            normanEdExhibitions, normanEdPress, normanEdContact,
        ]
    },
    {
        id: 5,
        title: 'Redux Co.',
        year: '2019',
        category: 'web',
        displayCategory: 'Web Development & Design',
        tools: 'React, Redux, Lodash',
        description: 'A personal project, this fictitious online storefront gave me experience with Redux. Included is a randomized call to action on the home page, the ability to display items by category, a shopping cart, image magnification, and a randomized custom 404 page. Images from Madewell.',
        github: 'https://github.com/jenna-m/redux-co',
        websiteURL: 'https://redux-co.netlify.com',
        src: [
            reduxCoHome1, reduxCoHome2, reduxCoCategory,
            reduxCoItem, reduxCoCart1, reduxCoCart2,
            reduxCoCart3, reduxCo4041, reduxCo4042,
        ]
    },
    {
        id: 4,
        title: 'Adorn',
        year: '2019',
        category: 'graphic',
        displayCategory: 'Graphic Design',
        tools: 'Adobe Photoshop, Illustrator',
        description: 'Jewelry and home decor storefront Adorn needed a logo redesign and window art. For the logo redesign, I incorporated a softer blush color to contrast the modern geometric design. For the window art, I stayed true to the minimal and geometric direction.',
        src: [
            adornLogo,
            adornWindow1,
            adornWindow2,
        ]
    },
    {
        id: 3,
        title: 'Baking Demystified',
        year: '2017',
        category: 'graphic',
        displayCategory: 'Graphic Design',
        tools: 'Adobe Illustrator',
        description: 'The informational YouTube channel Baking Demystified was in need of logo creation and channel art. I aimed to keep the look playful with the font selection and bright color.',
        src: [
            bakingDemystifiedYoutube,
            bakingDemystifiedLogo1,
            bakingDemystifiedLogo2,
            bakingDemystifiedLogo3
        ]
    },
    {
        id: 2,
        title: 'Floor Overhead',
        year: '2014',
        category: 'graphic',
        displayCategory: 'Graphic Design',
        tools: 'Adobe Photoshop',
        description: 'The artist needed a demo cover design for a digital music release in 2014. The direction was black & white photography of discarded technology, with a geometric twist. I also created social media graphics for the artist, featuring photographs of the artist in nature.',
        src: [
            floorOverheadDemo1,
            floorOverheadSocial1,
            floorOverheadDemo2,
            floorOverheadSocial3,
            floorOverheadDemo3,
            floorOverheadSocial2,
            floorOverheadDemo4,
            floorOverheadDemo5,
            floorOverheadDemo6
        ]
    },
    {
        id: 1,
        title: 'Indoor Cities',
        year: '2013',
        category: 'graphic',
        displayCategory: 'Graphic Design',
        tools: 'Adobe Photoshop, Illustrator, & Muse',
        description: 'Indoor Cities needed an album cover design for a digital music release in 2013. The direction was to use natural photography and geometry. Their website was kept minimal to direct users to social media outlets and to showcase their music with select reviews and use of the Bandcamp plugin. I also created social media graphics, gig posters, and business cards for the band.',
        src: [
            indoorCitiesAlbum,
            indoorCitiesWebsite,
            indoorCitiesLogo,
            indoorCitiesPoster
        ]
    },
]