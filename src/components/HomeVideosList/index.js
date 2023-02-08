import HomeVideoItem from '../HomeVideoItem'

import {VideosListCon} from './styledComponent'

const HomeVideosList = props => {
  const {videos} = props
  return (
    <VideosListCon>
      {videos.map(each => (
        <HomeVideoItem key={each.id} video={{...each}} />
      ))}
    </VideosListCon>
  )
}

export default HomeVideosList
