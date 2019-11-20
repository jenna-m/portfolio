// Random message placeholder for ContactForm
// 'I\'d like to talk with you about'
const messagePhrases = [
    'a job proposal...',
    'collaborating on a project...',
    'a web development project I have in mind...',
];

let randomIndex = Math.floor(Math.random() * messagePhrases.length);

export const randomMessage = messagePhrases[randomIndex];