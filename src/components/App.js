import React from 'react';
import vimeo from '../apis/vimeo';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VimeoVideoList from './VimeoVideoList';
import VimeoVideoDetail from './VimeoVideoDetail';
import YoutubeVideoList from './YoutubeVideoList';
import YoutubeVideoDetail from './YoutubeVideoDetail';

class App extends React.Component {
  state = {
    youtubeVideos: [],
    vimeoVideos: [],
    selectedYoutubeVideo: null,
    selectedVimeoVideo: null
  };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async term => {
    // TODO: filter out channels from youtube results
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
    console.log(video);
    // TODO: set selected youtube and vimeo state seperately
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eight wide column">
              <YoutubeVideoDetail video={this.state.selectedYoutubeVideo} />
              <YoutubeVideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.youtubeVideos}
              />
            </div>
            <div className="eight wide column">
              <VimeoVideoDetail video={this.state.selectedVimeoVideo} />
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
