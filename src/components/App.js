import React from 'react';
import { vimeo, generateVimeoPlaceholders } from '../apis/vimeo';
import { youtube, generateYoutubePlaceholders } from '../apis/youtube';
import { animateScroll as scroll } from 'react-scroll';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    defaultQuery: 'animation',
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

    let vimeoResponse = null;
    let youtubeResponse = null;

    try {
      vimeoResponse = await vimeo.get('/videos', {
        params: { query: term }
      });
    } catch (err) {
      vimeoResponse = vimeoResponse !== null ? vimeoResponse : generateVimeoPlaceholders();
    }

    try {
      youtubeResponse = await youtube.get('/search', {
        params: { q: term }
      })
    } catch (err) {
      youtubeResponse = youtubeResponse !== null ? youtubeResponse : generateYoutubePlaceholders();
    }

    this.setState({
      youtubeVideos: youtubeResponse && youtubeResponse.data.items,
      selectedYoutubeVideo: youtubeResponse && youtubeResponse.data.items[0],
      vimeoVideos: vimeoResponse.data.data,
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
