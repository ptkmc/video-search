import React from 'react';
import vimeo from '../apis/vimeo';
import youtube from '../apis/youtube';
import { animateScroll as scroll } from 'react-scroll';
import Headroom from 'react-headroom';
import SearchBar from './SearchBar';
import VimeoVideoList from './VimeoVideoList';
import VimeoVideoDetail from './VimeoVideoDetail';
import YoutubeVideoList from './YoutubeVideoList';
import YoutubeVideoDetail from './YoutubeVideoDetail';

class App extends React.Component {
  state = {
    defaultQuery: 'party',
    youtubeVideos: [],
    vimeoVideos: [],
    selectedYoutubeVideo: null,
    selectedVimeoVideo: null,
    loadingStatus: 'loading'
  };

  componentDidMount() {
    this.onTermSubmit(this.state.defaultQuery);
  }

  onTermSubmit = async term => {
    scroll.scrollToTop();
    const vimeoResponse = await vimeo.get('/videos', {
      params: { query: term }
    });
    const youtubeResponse = await youtube.get('/search', {
      params: { q: term }
    });
    console.log(youtubeResponse, vimeoResponse);
    this.setState({
      youtubeVideos: youtubeResponse.data.items,
      selectedYoutubeVideo: youtubeResponse.data.items[0],
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

  onLoading = e => this.setState({ loadingStatus: 'loading' });

  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row header header-search">
            <Headroom>
              <div className="ui container" style={{ width: '50%' }}>
                <SearchBar
                  default={this.state.defaultQuery}
                  onTermSubmit={this.onTermSubmit}
                  loadingStatus={this.state.loadingStatus}
                  onLoading={this.onLoading}
                />
              </div>
            </Headroom>
          </div>
          <div className="ui row video-details-container">
            <div className="eight wide column">
              <YoutubeVideoDetail video={this.state.selectedYoutubeVideo} />
            </div>
            <div className="eight wide column">
              <VimeoVideoDetail video={this.state.selectedVimeoVideo} />
            </div>
          </div>
          <div className="ui row">
            <div className="eight wide column">
              <YoutubeVideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.youtubeVideos}
              />
            </div>
            <div className="eight wide column">
              <VimeoVideoList
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
