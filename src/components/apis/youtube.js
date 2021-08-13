import axios from "axios";

const KEY = "AIzaSyCdB4HnhQHQXQiEK8L5BGM0Odd5MSRQSKA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 25,
    key: KEY,
  },
});
