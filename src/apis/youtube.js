import axios from 'axios';

const KEY = 'AIzaSyApkvMIYO6fiSoF9wY7nbHhN6SjA1tvPRs';
const maxResults = 10;

export const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: maxResults,
    key: KEY
  }
});

const youtubePlaceholderItem = {
  etag: '"j6xRRd8dTPVVptg711_CSPADRfg/lobTZaMsntdZp4kl5yCraf-v3AM"',
  id: {
    kind: "youtube#video",
    videoId: "NrDsXqJacaxf"
  },
  kind: "youtube#searchResult",
  snippet: {
    channelTitle: "Channel Title",
    description:
      "We were unable to reach the YouTube API. Please enjoy this placeholder content in the meantime ...",
    thumbnails: {
      default: { url: "https://source.unsplash.com/random/120x90", width: 120, height: 90 },
      high: { url: "https://source.unsplash.com/random/480x360", width: 480, height: 360 },
      medium: { url: "https://source.unsplash.com/random/320x180", width: 320, height: 180 },
    },
    title: "Placeholder Video Title"
  }
}

export function generateYoutubePlaceholders() {
  let placeholders = [];
  let curItem;

  for (let i = 0; i < maxResults; i++) {
    curItem = JSON.parse(JSON.stringify(youtubePlaceholderItem));
    curItem.id.videoId += (i + 1).toString();
    curItem.snippet.title += " #" + (i + 1).toString();
    placeholders.push(curItem);
  }

  return { data: { items: placeholders } };
}


