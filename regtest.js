// VALID
// https://player.vimeo.com/video/98618904

// URI
// /videos/98618904

// const re = /\/\d+/;
const re = /([^/]+$)/;

const uri = '/videos/98618904';

console.log(re.exec(uri)[0]);
