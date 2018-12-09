import React from 'react';
import vimeo from '../apis/vimeo';
import youtube from '../apis/youtube';
import Headroom from 'react-headroom';
import SearchBar from './SearchBar';
import VimeoVideoList from './VimeoVideoList';
import VimeoVideoDetail from './VimeoVideoDetail';
import YoutubeVideoList from './YoutubeVideoList';
import YoutubeVideoDetail from './YoutubeVideoDetail';

class App extends React.Component {
  state = {
    defaultQuery: 'animation',
    youtubeVideos: [],
    vimeoVideos: [],
    selectedYoutubeVideo: null,
    selectedVimeoVideo: null
  };

  componentDidMount() {
    this.onTermSubmit(this.state.defaultQuery);
  }

  onTermSubmit = async term => {
    const vimeoResponse = await vimeo.get('/videos', {
      params: {
        query: term
      }
    });

    const youtubeResponse = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    console.log(youtubeResponse, vimeoResponse);
    this.setState({
      youtubeVideos: youtubeResponse.data.items,
      selectedYoutubeVideo: youtubeResponse.data.items[0],
      vimeoVideos: vimeoResponse.data.data,
      selectedVimeoVideo: vimeoResponse.data.data[0]
    });
  };

  onVideoSelect = video => {
    console.log(video.kind);
    if (video.kind && video.kind === 'youtube#searchResult') {
      this.setState({ selectedYoutubeVideo: video });
    } else {
      this.setState({ selectedVimeoVideo: video });
    }
  };

  render() {
    return (
      <div className="ui container">
        <Headroom>
          <div className="ui container search-bar">
            <SearchBar
              default={this.state.defaultQuery}
              onTermSubmit={this.onTermSubmit}
            />
          </div>
        </Headroom>
        <div className="ui grid">
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
