import ReactPlayer from 'react-player'

import {VideoPlayerCon} from './styledComponent'

const VideoPlayer = props => {
  const {videoUrl} = props
  return (
    <VideoPlayerCon>
      <ReactPlayer width="100%" height="100%" controls url={videoUrl} />
    </VideoPlayerCon>
  )
}
export default VideoPlayer
