import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from  './components/search_bar';
import VideoList from  './components/video_list';
import VideoDetail from  './components/video_detail';

const API_KEY = 'AIzaSyCs-xGMalkiyWH86FwhaLzfaeQWBwZxrrA';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        videos: [],
        selectedVideo: null
    };
    this.videoSearch('fun')
  }

  videoSearch(searchTerms){
      //  init the plugin
      YTSearch({key: API_KEY, term: searchTerms}, (videos) => {
          this.setState({
              videos,
              selectedVideo:videos[0]
          });
          // -- > this.setState({videos: videos});
      })
  }

  render(){
    return (
        <div>
            <SearchBar onSearchInput={searchTerm => this.videoSearch({searchTerm})}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}
            />
        </div>
    )
  }
};
ReactDOM.render(<App />, document.querySelector('.container'));
