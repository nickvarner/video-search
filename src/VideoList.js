import VideoItem from './VideoItem'

const VideoList = (props) => {
    const videos = props.videos;
    const renderedList = videos.map(video => {
        return <VideoItem video={video} onVideoSelect={props.onVideoSelect} key={video.etag} />
    })
    return (
        <div className="VideoList container ui">
            <div className="ui relaxed divided list">
                    {renderedList}
            </div>
        </div>
    )
}

export default VideoList;