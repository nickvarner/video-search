import './VideoItem.css'

const VideoItem = (props) => {
    const video = props.video;
    return (
        <div className="VideoItem item" onClick={() => props.onVideoSelect(video)} key={video.etag} >
            <img src={video.snippet.thumbnails.high.url}  className="ui image" alt={video.snippet.title} />  
            <div className="content">
                <div className="header" >{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;