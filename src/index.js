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
    this.state = { videos: []};
    //  init the plugin
    YTSearch({key: API_KEY, term: 'trend'}, (videos) => {
      this.setState({videos});
      // -- > this.setState({videos: videos});
    })
  }
  render(){
    return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.videos[0]}/>
            <VideoList videos={this.state.videos}/>
        </div>
    )
  }
};
ReactDOM.render(<App />, document.querySelector('.container'));
