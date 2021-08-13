import React, { Suspense } from "react";

import VideoList from "./components/VideoList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import youtube from "./components/apis/youtube";

const VideoDetail = React.lazy(() => import("./components/VideoDetail"));

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("Workout routine");
  }

  //follow onVideoSelect, it is defined here and passed into the render() function as a prop on VideoList, move to VideoList.js now

  render() {
    return (
      <div>
        <Navbar></Navbar>

        <div className="container">
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

/*
        <Suspense fallback={<div>Loading</div>}>
          <div className="container">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
        </Suspense>
        */
