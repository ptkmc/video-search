// https://developer.vimeo.com/api/reference/videos
import axios from 'axios';

const KEY = 'd9b55e62af201d7458a7c446af323204';
const maxResults = 10;

export const vimeo = axios.create({
  baseURL: 'https://api.vimeo.com/',
  headers: {
    Authorization: `bearer ${KEY}`
  },
  params: {
    per_page: maxResults
  }
});

const vimeoPlaceholderItem = {
  name: "Placeholder Video Title",
  user: {
    name: "Channel Title"
  },
  description: "We were unable to reach the Vimeo API. Please enjoy this placeholder content in the meantime ...",
  pictures: {
    sizes: {
      0: { link: "https://source.unsplash.com/random/320x180" }
    }
  },
  uri: "/videos/799338z",
  resource_key: "ebab05df0f597470e4c3114cb465e1d7f27bce5f"
}

export function generateVimeoPlaceholders() {
  let placeholders = [];
  let curItem;

  for (let i = 0; i < maxResults; i++) {
    curItem = JSON.parse(JSON.stringify(vimeoPlaceholderItem));
    curItem.resource_key += (i + 1).toString();
    curItem.name += " #" + (i + 1).toString();
    placeholders.push(curItem);
  }

  return { data: { data: placeholders } };
}
