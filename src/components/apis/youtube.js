import axios from "axios";

const KEY = "AIzaSyBFA1HEGDy2wqJGGMbJx2jvuAmTWwIkx9c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 6,
    key: KEY,
  },
});
