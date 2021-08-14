import React, { Suspense } from "react";

import VideoList from "./components/VideoList";

import youtube from "./components/apis/youtube";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ReactGa from "react-ga";

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
    ReactGa.initialize("UA-204889735-1");

    ReactGa.pageview("/");
  }

  render() {
    return (
      <Suspense fallback={<div>LOADING</div>}>
        <div>
          <Navbar></Navbar>
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
        <Footer></Footer>
      </Suspense>
    );
  }
}

export default App;
