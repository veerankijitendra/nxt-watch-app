import GameVideoComponent from '../GameVideoComponent'

import {GamingVideosListCon} from './styledComponent'

const GamingVideosList = props => {
  const {videos} = props
  return (
    <GamingVideosListCon>
      {videos.map(each => (
        <GameVideoComponent key={each.id} video={{...each}} />
      ))}
    </GamingVideosListCon>
  )
}

export default GamingVideosList
