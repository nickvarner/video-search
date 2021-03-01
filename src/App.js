import React, { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from './hooks/useVideos'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null); //selecting a video
  const [videos, search] = useVideos('all night long');
  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos]);
  return (
    <div className="App ui container">
      <SearchBar onQuerySubmit={search} />
      <div className="ui grid container">
        <div className="ui row">
          <div className="eleven wide column"><VideoDetail video={selectedVideo} /></div>
          <div className="five wide column">
            <VideoList 
            videos={videos}
            // when you see below, which takes a callback then immediately provides in a single line function you can almost always refactor it 
            // onVideoSelect={(video) => setSelectedVideo(video)} />
            // below is equivalent to above
            onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
