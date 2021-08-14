import React, { Suspense } from "react";

import VideoList from "./components/VideoList";

import youtube from "./components/apis/youtube";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import View from "./components/View";

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

  //follow onVideoSelect, it is defined here and passed into the render() function as a prop on VideoList, move to VideoList.js now

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

/*
        <Suspense fallback={<div>Loading</div>}>
          <div className="container">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
        </Suspense>
        */
