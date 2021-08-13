import axios from "axios";

const KEY = "AIzaSyDUUB7AoAg7WVgq1J4HsDaQhmYTN0ZggOQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
