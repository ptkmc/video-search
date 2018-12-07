// https://developer.vimeo.com/api/reference/videos
import axios from 'axios';

const KEY = 'd9b55e62af201d7458a7c446af323204';

export default axios.create({
  baseURL: 'https://api.vimeo.com/',
  headers: {
    Authorization: `bearer ${KEY}`
  }
});
