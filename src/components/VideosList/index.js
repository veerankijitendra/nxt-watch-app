import VideoComponent from '../VideoComponent'

import {VideosListCon} from './styledComponent'

const VideosList = props => {
  const {videos} = props
  return (
    <VideosListCon>
      {videos.map(each => (
        <VideoComponent key={each.id} video={{...each}} />
      ))}
    </VideosListCon>
  )
}

export default VideosList
