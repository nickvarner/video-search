const VideoDetail = (props) => {
    const video = props.video;
    if (video) {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div className="VideoDetail">
                <div className="ui embed">
                    <iframe src={videoSrc} title={video.snippet.title} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p className="description">{video.snippet.description}</p>
                </div>
            </div>
        )
    } else {
        return <h1 style={{display: "none"}}>search for a video</h1>
    }
}

export default VideoDetail;