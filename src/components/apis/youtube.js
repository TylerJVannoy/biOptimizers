import axios from "axios";

const KEY = "AIzaSyCGLDQpfScIB2O4kxaMIqLjN0lFBOSpUp8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 12,
    key: KEY,
  },
});
