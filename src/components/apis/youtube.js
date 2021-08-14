import axios from "axios";

const KEY = "AIzaSyCh5b7yAgio-RHLgnkRmc2MmDSl-pD9M1Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 12,
    key: KEY,
  },
});
