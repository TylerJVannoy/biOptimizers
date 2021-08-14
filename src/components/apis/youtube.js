import axios from "axios";

const KEY = "AIzaSyC_adKMvXd4lDnX-jRCxkjMXCyXzojHfdM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 4,
    key: KEY,
  },
});
