import axios from "axios";

const KEY = "AIzaSyA4igYI36mUyxsYGw0sfw1drZvFITUVlX4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 6,
    key: KEY,
  },
});
