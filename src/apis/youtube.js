import axios from 'axios';

const KEY = 'AIzaSyAwShJA1Ag9c1crvJfYUpdRkvMcPxfc0XM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 25,
    key: KEY
  }
});
