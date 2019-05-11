import React from 'react';
import vimeo from '../apis/vimeo';
import youtube from '../apis/youtube';
import { animateScroll as scroll } from 'react-scroll';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    defaultQuery: 'travel',
    youtubeVideos: [],
    vimeoVideos: [],
    selectedYoutubeVideo: null,
    selectedVimeoVideo: null,
    loadingStatus: ''
  };

  componentDidMount() {
    this.onTermSubmit(this.state.defaultQuery);
  }

  onTermSubmit = async term => {
    this.setState({ loadingStatus: 'loading' });
    scroll.scrollToTop();
    const vimeoResponse = await vimeo.get('/videos', {
      params: { query: term }
    });
    const youtubeResponse = await youtube.get('/search', {
      params: { q: term }
    });
    this.setState({
      youtubeVideos: youtubeResponse.data.items,
      vimeoVideos: vimeoResponse.data.data,
      selectedYoutubeVideo: youtubeResponse.data.items[0],
      selectedVimeoVideo: vimeoResponse.data.data[0],
      loadingStatus: ''
    });
  };

  onVideoSelect = video => {
    if (video.kind && video.kind === 'youtube#searchResult') {
      this.setState({ selectedYoutubeVideo: video });
    } else {
      this.setState({ selectedVimeoVideo: video });
    }
  };

  render() {
    return (
      <div className="ui container">
        <div className="video-details-container">
          <div className="header-search">
            <div className="searchbar-container">
              <SearchBar
                default={this.state.defaultQuery}
                onTermSubmit={this.onTermSubmit}
                loadingStatus={this.state.loadingStatus}
                onLoading={this.onLoading}
              />
            </div>
          </div>
          <div className="ui grid">
            <div className="row">
              <div className="eight wide column">
                <VideoDetail video={this.state.selectedYoutubeVideo} />
              </div>
              <div className="eight wide column">
                <VideoDetail video={this.state.selectedVimeoVideo} />
              </div>
            </div>
          </div>
        </div>

        <div className="ui grid container">
          <div className="ui row">
            <div className="eight wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.youtubeVideos}
              />
            </div>
            <div className="eight wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.vimeoVideos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
